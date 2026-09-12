import { cn } from "@/lib/utils";

interface DoodleProps {
  className?: string;
}

/** Hand-drawn-style decorative accents. Color via `className` (text-*),
 * they use `currentColor` / `stroke="currentColor"`. Purely decorative. */

export function CloudDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      aria-hidden="true"
      className={cn("text-sky", className)}
    >
      <path
        d="M20 45c-9 0-16-7-16-15 0-7 5-13 12-15 2-8 9-13 17-13 8 0 15 5 17 12 1 0 2 0 3 0 9 0 16 7 16 15s-7 16-16 16H20z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("text-sun", className)}
    >
      <path
        d="M20 2c1.5 6 3 10.5 6 13.5S35 19 38 20c-3 1-9.5 2.5-12 5.5S22.5 34 20 38c-1.5-6-3-10.5-6-13.5S5 21 2 20c3-1 9.5-2.5 12-5.5S18.5 6 20 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SparkleDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("text-coral", className)}
    >
      <path
        d="M12 1l1.8 6.3L20 9l-6.2 1.7L12 17l-1.8-6.3L4 9l6.2-1.7L12 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RainbowDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      className={cn(className)}
    >
      <path d="M4 60a56 56 0 0 1 112 0" stroke="var(--color-coral)" strokeWidth="8" strokeLinecap="round" />
      <path d="M16 60a44 44 0 0 1 88 0" stroke="var(--color-sun)" strokeWidth="8" strokeLinecap="round" />
      <path d="M28 60a32 32 0 0 1 64 0" stroke="var(--color-grass)" strokeWidth="8" strokeLinecap="round" />
      <path d="M40 60a20 20 0 0 1 40 0" stroke="var(--color-sky)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

/** A single squiggly, crayon-style underline/accent stroke. */
export function CrayonSquiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 20"
      fill="none"
      aria-hidden="true"
      className={cn("text-coral", className)}
    >
      <path
        d="M2 14c10-12 20-12 30 0s20 12 30 0 20-12 30 0 20 12 30 0 20-12 30 0"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
