import { AnimatedSection } from "@/components/design/AnimatedSection";
import { CloudDoodle } from "@/components/design/Doodles";
import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  id: string;
  title: string;
  blurb: string;
  phaseNote: string;
  className?: string;
}

/**
 * Stand-in for a section that hasn't been built yet in the phase-by-phase
 * plan. Keeps the nav anchors and page rhythm (dividers, spacing) correct
 * while later phases fill in real content — replace the call site in
 * page.tsx with the real section component when that phase lands.
 */
export function SectionPlaceholder({
  id,
  title,
  blurb,
  phaseNote,
  className,
}: SectionPlaceholderProps) {
  return (
    <AnimatedSection
      as="section"
      id={id}
      className={cn(
        "scroll-mt-20 px-4 py-20 text-center sm:px-6",
        className
      )}
    >
      <CloudDoodle className="mx-auto mb-4 w-14 opacity-70" />
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">{blurb}</p>
      <p className="mx-auto mt-6 inline-block rounded-full bg-white/60 px-4 py-1.5 text-xs font-semibold text-ink-soft">
        ✨ {phaseNote}
      </p>
    </AnimatedSection>
  );
}
