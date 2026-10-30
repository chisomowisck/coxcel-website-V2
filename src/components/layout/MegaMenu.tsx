"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { ServiceMenu } from "./nav-data";
import { cn } from "@/lib/utils";

/**
 * Desktop services mega-menu. Disclosure pattern: a button toggles a panel of links.
 * Escape closes and returns focus to the button; clicking outside or navigating closes it.
 */
export function MegaMenu({ menu }: { menu: ServiceMenu }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const active = pathname.startsWith("/services");

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onFocus(e: FocusEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="static">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors hover:text-brand-700",
          active || open ? "text-brand-700" : "text-ink",
        )}
      >
        Services
        <ChevronDown
          aria-hidden="true"
          className={cn("size-4 transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")}
        />
      </button>

      <div id={panelId} hidden={!open} className="absolute inset-x-0 top-full border-y border-mist-300 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-10 py-10">
          <div className="col-span-3 border-r border-mist pr-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-600 uppercase">Services</p>
            <p className="mt-4 text-2xl leading-tight font-semibold tracking-tight">
              Thirty services. One accountable partner.
            </p>
            <p className="mt-3 text-sm text-ink-600">
              From first prototype to production support, grouped into six disciplines.
            </p>
            <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              <span className="link-underline">View all services</span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-8">
            {menu.map((group) => (
              <div key={group.id}>
                <p className="border-b border-mist pb-2 text-sm font-semibold text-ink">{group.name}</p>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        aria-current={pathname === `/services/${item.slug}` ? "page" : undefined}
                        className="block text-[0.9rem] leading-snug text-ink-700 transition-colors hover:text-brand-700 aria-[current=page]:font-semibold aria-[current=page]:text-brand-700"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
