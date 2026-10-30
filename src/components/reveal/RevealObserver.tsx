"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Restrained scroll reveal. Server-rendered content stays visible by default; this observer
 * only hides elements that start below the fold, then reveals each once as it enters view.
 * Does nothing when the visitor prefers reduced motion.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"));
    const viewport = window.innerHeight;
    for (const el of elements) {
      if (el.getBoundingClientRect().top < viewport * 0.95) el.dataset.revealed = "";
    }
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    elements.filter((el) => !("revealed" in el.dataset)).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
