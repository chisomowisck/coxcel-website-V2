"use client";

/** Cookie consent choice, kept in localStorage and shared across components. */
export type ConsentChoice = "granted" | "denied" | null;

const KEY = "cx-consent";
const EVENT = "cx-consent-change";
const OPEN_EVENT = "cx-consent-open";

export function readConsent(): ConsentChoice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: Exclude<ConsentChoice, null>) {
  try {
    window.localStorage.setItem(KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: choice }));
}

export function subscribeConsent(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function subscribeOpenSettings(callback: () => void) {
  window.addEventListener(OPEN_EVENT, callback);
  return () => window.removeEventListener(OPEN_EVENT, callback);
}
