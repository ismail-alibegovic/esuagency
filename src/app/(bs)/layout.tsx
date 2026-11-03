import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootShell from "@/components/RootShell";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("bs");
export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell locale="bs">{children}</RootShell>;
}
