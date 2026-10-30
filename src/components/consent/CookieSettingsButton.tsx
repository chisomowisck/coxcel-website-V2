"use client";

import { openConsentSettings } from "./consent-store";

/** Reopens the cookie banner so visitors can change their choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie settings
    </button>
  );
}
