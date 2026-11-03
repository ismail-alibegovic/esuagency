import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);
export const Play = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
  </svg>
);
export const ChevronLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const Quote = (p: P) => (
  <svg width="34" height="26" viewBox="0 0 34 26" fill="currentColor" aria-hidden {...p}>
    <path d="M0 26V15.6C0 6.9 4.3 1.7 12.9 0l1.6 3.4C9.9 4.8 7.6 7.7 7.4 12H14v14H0Zm19.5 0V15.6C19.5 6.9 23.8 1.7 32.4 0L34 3.4c-4.6 1.4-6.9 4.3-7.1 8.6h6.6v14h-14Z" />
  </svg>
);
export const Globe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);

/* Wordmark-style icons for the "trust" strip */
export const IconInvest = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M3 20h18M5 20V10l4-3v13M13 20V5l6 4v11" />
  </svg>
);
export const IconSales = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M3 11 12 4l9 7M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </svg>
);
export const IconPartner = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <circle cx="8.5" cy="12" r="5" />
    <circle cx="15.5" cy="12" r="5" />
  </svg>
);
export const IconPin = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <path d="M12 6v6M9 9h6" />
  </svg>
);
