import { PhotoCutout } from "@/components/design/PhotoCutout";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { formatDate } from "@/lib/utils";
import type { Update } from "@/data/updates";

const SHAPES = ["blob", "circle"] as const;

export function UpdateCard({ update, index }: { update: Update; index: number }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <article className="flex flex-col gap-4 rounded-2xl bg-white/70 p-5 shadow-soft sm:flex-row sm:items-center">
        <PhotoCutout
          alt={update.title}
          src={update.image}
          shape={SHAPES[index % SHAPES.length]}
          frame="sticker"
          tilt={index % 2 === 0 ? -3 : 3}
          className="w-28 shrink-0 sm:w-32"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
            {formatDate(update.date)}
          </p>
          <h3 className="mt-1 font-display text-xl text-ink">{update.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{update.blurb}</p>
        </div>
      </article>
    </AnimatedSection>
  );
}
