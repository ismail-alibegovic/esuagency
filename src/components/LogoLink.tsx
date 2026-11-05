"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/** Logo link: on the page it points to, it scrolls smoothly to the top instead of reloading. */
export default function LogoLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      aria-label="ESU Agency"
      className={className}
      onClick={(e) => {
        const here = window.location.pathname.replace(/\/$/, "");
        if (here === href.replace(/\/$/, "")) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          (document.activeElement as HTMLElement | null)?.blur();
          if (window.location.hash) history.replaceState(null, "", window.location.pathname);
        }
      }}
    >
      {children}
    </Link>
  );
}
