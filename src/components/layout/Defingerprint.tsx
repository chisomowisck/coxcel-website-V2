"use client";

import { useEffect } from "react";

/**
 * Removes the informational fields Next.js publishes on window.next (framework version and
 * bundler flag). The object itself is used by the router, so only these fields are cleared.
 */
export function Defingerprint() {
  useEffect(() => {
    try {
      const w = window as unknown as { next?: Record<string, unknown> };
      if (w.next) {
        delete w.next.version;
        delete w.next.turbopack;
      }
    } catch {
      // Ignore: purely cosmetic.
    }
  }, []);
  return null;
}
