#!/usr/bin/env bash
# Builds a static version of the site for cPanel and zips it to dist/esuagency-cpanel.zip
# Usage: SITE_URL=https://esuagency.ba scripts/build-cpanel.sh
set -euo pipefail
cd "$(dirname "$0")/.."
SITE_URL="${SITE_URL:-https://esuagency.ba}"

# The Node API route cannot be part of a static export; the PHP handler replaces it.
mv src/app/api /tmp/esu-api-backup
restore() { [ -d /tmp/esu-api-backup ] && mv /tmp/esu-api-backup src/app/api; }
trap restore EXIT

rm -rf out .next
STATIC_EXPORT=1 NEXT_PUBLIC_SITE_URL="$SITE_URL" NEXT_PUBLIC_TRAILING_SLASH=1 \
NEXT_PUBLIC_CONTACT_ENDPOINT=/contact.php npx next build

cp cpanel/contact.php out/contact.php
cp cpanel/htaccess out/.htaccess

# Web server must be able to read everything: files 644, folders 755 (some source files were 600)
find out -type d -exec chmod 755 {} +
find out -type f -exec chmod 644 {} +

mkdir -p dist && rm -f dist/esuagency-cpanel.zip
(cd out && zip -qr ../dist/esuagency-cpanel.zip . -x ".DS_Store")
echo "Created dist/esuagency-cpanel.zip"
