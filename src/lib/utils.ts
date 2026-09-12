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

export interface Age {
  years: number;
  months: number;
  label: string;
}

/** Computes age from an ISO date of birth as of `referenceDate` (defaults
 * to now). Returns null for an empty, invalid, or future date. */
export function calculateAge(dobIso: string, referenceDate: Date = new Date()): Age | null {
  if (!dobIso) return null;
  const dob = new Date(`${dobIso}T00:00:00`);
  if (Number.isNaN(dob.getTime()) || dob > referenceDate) return null;

  let years = referenceDate.getFullYear() - dob.getFullYear();
  let months = referenceDate.getMonth() - dob.getMonth();
  if (referenceDate.getDate() < dob.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years === 1 ? "" : "s"}`);
  if (months > 0 || years === 0) parts.push(`${months} month${months === 1 ? "" : "s"}`);

  return { years, months, label: parts.join(" ") };
}
