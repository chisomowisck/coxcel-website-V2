"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu, Plus, X } from "@/components/ui/icons";
import type { ServiceMenu } from "./nav-data";
import { Logo } from "@/components/brand/Logo";
import { mainNav, site } from "@/config/site";

/**
 * Mobile navigation in a native modal dialog: focus is trapped, the page behind is inert,
 * and Escape closes it. Closes automatically on navigation.
 */
export function MobileNav({ menu }: { menu: ServiceMenu }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-white p-0 text-ink backdrop:bg-ink/60"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-18 items-center justify-between border-b border-mist px-4 sm:px-6">
            <Logo />
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center"
              autoFocus
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6">
            <details className="group border-b border-mist">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-2xl font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                Services
                <Plus
                  aria-hidden="true"
                  className="size-5 transition-transform group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <div className="space-y-6 pb-6">
                <Link href="/services" className="block text-base font-semibold text-brand-700">
                  All services
                </Link>
                {menu.map((group) => (
                  <div key={group.id}>
                    <p className="text-xs font-semibold tracking-[0.18em] text-ink-600 uppercase">
                      {group.name}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="block py-1.5 text-[0.95rem] text-ink-700"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
            <ul>
              {mainNav
                .filter((item) => item.href !== "/services")
                .map((item) => (
                  <li key={item.href} className="border-b border-mist">
                    <Link
                      href={item.href}
                      aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                      className="block py-5 text-2xl font-semibold tracking-tight aria-[current=page]:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li className="border-b border-mist">
                <Link href="/careers" className="block py-5 text-2xl font-semibold tracking-tight">
                  Careers
                </Link>
              </li>
            </ul>
            <div className="mt-8 space-y-4">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center bg-brand-600 px-6 py-4 font-medium text-white clip-corner"
              >
                Start a project
              </Link>
              <a href={`mailto:${site.email}`} className="block text-center text-sm text-ink-600">
                {site.email}
              </a>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
