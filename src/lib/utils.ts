import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DATE_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** Formats an ISO date ("2026-09-05") with a fixed locale so server and
 * client render the same string regardless of system locale. */
export function formatDate(iso: string): string {
  return DATE_FORMATTER.format(new Date(`${iso}T00:00:00`));
}
