/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Two-digit section number, for example 1 -> "01". */
export function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function absoluteUrl(path: string, base: string): string {
  return new URL(path, base).toString();
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
