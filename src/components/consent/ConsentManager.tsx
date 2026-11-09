"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { AnalyticsConfig } from "@/config/analytics";
import {
  readConsent,
  subscribeConsent,
  subscribeOpenSettings,
  writeConsent,
} from "./consent-store";
import { updateGoogleConsent } from "./GoogleTagManager";
import { Trackers } from "./Trackers";

/**
 * Cookie consent banner. Analytics and marketing tags load only after "Accept".
 * The banner is fixed to the bottom of the screen, so it causes no layout shift.
 */
export function ConsentManager({ config }: { config: AnalyticsConfig }) {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [reopened, setReopened] = useState(false);

  useEffect(() => subscribeOpenSettings(() => setReopened(true)), []);

  const showBanner = hydrated && (consent === null || reopened);

  const choose = (choice: "granted" | "denied") => {
    const wasGranted = consent === "granted";
    writeConsent(choice);
    updateGoogleConsent(choice);
    setReopened(false);
    // Tags that already ran cannot be unloaded; a reload clears them.
    if (wasGranted && choice === "denied") window.location.reload();
  };

  return (
    <>
      {consent === "granted" ? <Trackers config={config} /> : null}
      {showBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-brand bg-ink text-white sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:border-t-0 sm:border-l-4 sm:clip-corner"
        >
          <div className="p-5 sm:p-6">
            <h2 className="text-base font-semibold">Cookies on this site</h2>
            <p className="mt-2 text-sm text-ink-200">
              We would like to use analytics and marketing cookies to understand how the site is
              used and to measure our campaigns. Nothing is set unless you accept. Read our{" "}
              <Link
                href="/legal/cookies"
                className="font-medium text-brand-300 underline underline-offset-4"
              >
                cookie notice
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => choose("granted")}
                className="bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
              >
                Accept cookies
              </button>
              <button
                type="button"
                onClick={() => choose("denied")}
                className="px-4 py-2.5 text-sm font-medium text-white ring-1 ring-ink-500 transition-colors ring-inset hover:bg-white hover:text-ink"
              >
                Reject
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
