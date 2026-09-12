import { cn } from "@/lib/utils";

export type DividerVariant = "wave" | "torn" | "cloud";

interface SectionDividerProps {
  variant?: DividerVariant;
  /** A Tailwind fill class matching the section this divider caps, e.g. "fill-cream" or "fill-sky-light". */
  color?: string;
  /** Mirrors the divider vertically — use when placing at the bottom vs. top of a section. */
  flip?: boolean;
  className?: string;
}

const PATHS: Record<DividerVariant, string> = {
  wave: "M0,40 C240,90 480,-10 720,40 C960,90 1200,-10 1440,40 L1440,100 L0,100 Z",
  cloud:
    "M0,60 Q60,10 120,60 Q180,10 240,60 Q300,10 360,60 Q420,10 480,60 Q540,10 600,60 Q660,10 720,60 Q780,10 840,60 Q900,10 960,60 Q1020,10 1080,60 Q1140,10 1200,60 Q1260,10 1320,60 Q1380,10 1440,60 L1440,100 L0,100 Z",
  torn:
    "M0,30 L60,45 L120,20 L180,50 L240,15 L300,40 L360,25 L420,55 L480,10 L540,35 L600,20 L660,48 L720,28 L780,42 L840,15 L900,38 L960,22 L1020,50 L1080,18 L1140,36 L1200,24 L1260,44 L1320,20 L1380,40 L1440,28 L1440,100 L0,100 Z",
};

/**
 * A decorative full-width divider between two sections — a wavy, cloudy,
 * or torn-paper edge in place of a hard horizontal line.
 */
export function SectionDivider({
  variant = "wave",
  color = "fill-cream",
  flip = false,
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="h-12 w-full sm:h-20"
      >
        <path d={PATHS[variant]} className={color} />
      </svg>
    </div>
  );
}
