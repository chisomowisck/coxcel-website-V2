"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

/** Plain top-level links with active state. Services is handled by the mega-menu. */
export function DesktopNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {mainNav
        .filter((item) => item.href !== "/services")
        .map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-underline py-2 text-[0.95rem] font-medium transition-colors hover:text-brand-700",
                  active ? "text-brand-700" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
    </>
  );
}
