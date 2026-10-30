"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/config/site";

const subscribe = () => () => {};

/**
 * Copyright year. The static shell renders the founding year; the browser swaps in the
 * current year, so the prerendered page never bakes in a stale value.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => site.foundedYear,
  );
  return <>{year}</>;
}
