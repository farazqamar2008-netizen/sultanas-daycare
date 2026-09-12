import { PhotoCutout } from "@/components/design/PhotoCutout";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { SectionDivider } from "@/components/design/SectionDivider";
import { CloudDoodle, StarDoodle, SparkleDoodle, RainbowDoodle, CrayonSquiggle } from "@/components/design/Doodles";

/**
 * Phase 0 placeholder — a design-system showcase so tokens, PhotoCutout
 * variants, doodles, and dividers can be reviewed before Phase 1 replaces
 * this with the real page (nav, hero, sections).
 */
export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-sky-light px-6 py-16 text-center">
        <CloudDoodle className="absolute left-6 top-8 w-20 opacity-80" />
        <CloudDoodle className="absolute right-10 top-20 w-14 opacity-60" />
        <StarDoodle className="absolute right-16 top-8 w-8" />
        <AnimatedSection>
          <h1 className="font-display text-4xl text-ink sm:text-6xl">
            Sultana&apos;s Daycare
          </h1>
          <p className="mt-3 font-display text-lg text-ink-soft">
            Best Home Daycare in Bradford West Gwillimbury
          </p>
          <div className="mx-auto mt-4 w-40">
            <CrayonSquiggle />
          </div>
          <p className="mx-auto mt-6 max-w-md text-sm text-ink-soft">
            Design-system preview — Phase 0 scaffold. Real layout arrives in Phase 1.
          </p>
        </AnimatedSection>
      </section>

      <SectionDivider variant="wave" color="fill-cream" />

      <AnimatedSection as="section" className="px-6 py-16">
        <h2 className="text-center font-display text-2xl text-ink">Color palette</h2>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-4 sm:grid-cols-6">
          {[
            ["Sky", "bg-sky"],
            ["Grass", "bg-grass"],
            ["Sun", "bg-sun"],
            ["Coral", "bg-coral"],
            ["Lavender", "bg-lavender"],
            ["Cream", "bg-cream-soft"],
          ].map(([name, cls]) => (
            <div key={name} className="text-center">
              <div className={`h-16 w-full rounded-blob shadow-soft ${cls}`} />
              <p className="mt-2 text-xs text-ink-soft">{name}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider variant="cloud" color="fill-sun-light" />

      <AnimatedSection as="section" className="bg-sun-light px-6 py-16">
        <h2 className="text-center font-display text-2xl text-ink">PhotoCutout variants</h2>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-end justify-center gap-8">
          <PhotoCutout alt="Placeholder — circle, sticker frame" shape="circle" frame="sticker" tilt={-3} className="w-36" />
          <PhotoCutout alt="Placeholder — blob shape" shape="blob" tilt={2} className="w-40" />
          <PhotoCutout alt="Placeholder — star, taped frame" shape="star" frame="taped" tapeColor="coral" tilt={-4} className="w-32" />
          <PhotoCutout
            alt="Placeholder — polaroid frame"
            shape="rect"
            frame="polaroid"
            caption="Snack time!"
            tilt={3}
            className="w-40"
          />
          <PhotoCutout alt="Placeholder — heart shape" shape="heart" tilt={-2} className="w-32" />
          <PhotoCutout alt="Placeholder — arch shape" shape="arch" tilt={1} className="w-32" />
          <PhotoCutout alt="Placeholder — scalloped edge" shape="scallop" frame="sticker" tilt={-1} className="w-36" />
        </div>
      </AnimatedSection>

      <SectionDivider variant="torn" color="fill-coral-light" />

      <AnimatedSection as="section" className="flex flex-col items-center gap-4 bg-coral-light px-6 py-16 text-center">
        <SparkleDoodle className="w-6" />
        <h2 className="font-display text-2xl text-ink">Doodles &amp; dividers</h2>
        <RainbowDoodle className="w-32" />
        <p className="max-w-md text-sm text-ink-soft">
          Clouds, stars, sparkles, rainbows, and crayon squiggles are ready to scatter
          throughout the real page in later phases.
        </p>
      </AnimatedSection>
    </main>
  );
}
