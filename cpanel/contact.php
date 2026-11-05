<?php
// ESU Agency — contact form handler for cPanel / shared hosting.
// Receives JSON from the website form and emails it to the address below.
// Responds with {"ok":true} on success, or {"ok":false,"code":"..."} so the page can be honest with the visitor.

const TO_EMAIL = 'info@esuagency.ba';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function out(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    out(405, ['ok' => false, 'code' => 'bad_request']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    out(400, ['ok' => false, 'code' => 'bad_request']);
}

// Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
if (!empty($data['website'])) {
    out(200, ['ok' => true]);
}

function clean(mixed $v, int $max): string {
    $v = is_string($v) ? trim($v) : '';
    return mb_substr($v, 0, $max);
}
// Header values must never contain line breaks (prevents header injection).
function header_safe(string $v): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $v));
}

$name     = clean($data['name'] ?? '', 120);
$email    = clean($data['email'] ?? '', 200);
$phone    = clean($data['phone'] ?? '', 60);
$interest = clean($data['interest'] ?? '', 120);
$message  = clean($data['message'] ?? '', 5000);
$lang     = (($data['locale'] ?? '') === 'en') ? 'EN' : 'BS';

if ($name === '' || $email === '' || $message === '' || empty($data['consent'])) {
    out(422, ['ok' => false, 'code' => 'missing_fields']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    out(422, ['ok' => false, 'code' => 'invalid_email']);
}

$host = preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST'] ?? 'esuagency.ba');
$host = preg_replace('/[^a-z0-9.\-]/i', '', $host);
$from = 'noreply@' . $host;

$subject = 'Web upit — ' . header_safe($name) . ($interest !== '' ? ' (' . header_safe($interest) . ')' : '');
$body = "Ime / Name: $name\n"
      . "Email: $email\n"
      . "Telefon / Phone: " . ($phone !== '' ? $phone : '—') . "\n"
      . "Interes / Interest: " . ($interest !== '' ? $interest : '—') . "\n"
      . "Jezik / Language: $lang\n\n"
      . $message . "\n";

$headers = [
    'From' => 'ESU Agency Web <' . $from . '>',
    'Reply-To' => header_safe($name) . ' <' . $email . '>',
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'PHP/' . phpversion(),
];

$ok = mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);
if (!$ok) {
    error_log('ESU contact form: mail() failed');
    out(502, ['ok' => false, 'code' => 'send_failed']);
}
out(200, ['ok' => true]);
