import { SparkleDoodle } from "@/components/design/Doodles";
import { cn } from "@/lib/utils";

/**
 * Temporary text wordmark standing in for the daycare's real logo.
 * Swap this out for an <Image> of the actual logo once it's supplied —
 * search the codebase for "Wordmark" usages to find every spot it's used.
 */
interface WordmarkProps {
  className?: string;
  /** Use "light" on dark backgrounds (e.g. the footer). */
  variant?: "default" | "light";
}

export function Wordmark({ className, variant = "default" }: WordmarkProps) {
  const isLight = variant === "light";
  return (
    <span className={cn("inline-flex items-center gap-1.5 font-display", className)}>
      <SparkleDoodle className="h-5 w-5 shrink-0" />
      <span className={isLight ? "text-cream" : "text-coral-dark"}>Sultana&apos;s</span>
      <span className={isLight ? "text-cream" : "text-sky-dark"}>Daycare</span>
    </span>
  );
}
