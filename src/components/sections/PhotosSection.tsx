import { AnimatedSection } from "@/components/design/AnimatedSection";
import { PhotoStrip } from "@/components/design/PhotoStrip";
import { photos } from "@/data/photos";

export function PhotosSection() {
  return (
    <section id="photos" className="scroll-mt-20 bg-sun-light py-20">
      <AnimatedSection className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Photos</h2>
        <p className="mt-2 text-ink-soft">
          Everyday moments, updates, and news from our daycare family.
        </p>
      </AnimatedSection>

      <div className="mt-10">
        <PhotoStrip photos={photos} />
      </div>
    </section>
  );
}
