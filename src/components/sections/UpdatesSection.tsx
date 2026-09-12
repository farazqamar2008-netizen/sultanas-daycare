import { AnimatedSection } from "@/components/design/AnimatedSection";
import { sortedUpdates } from "@/data/updates";
import { UpdateCard } from "./updates/UpdateCard";
import { PhotoGallery } from "./updates/PhotoGallery";

export function UpdatesSection() {
  const updates = sortedUpdates();

  return (
    <section id="updates" className="scroll-mt-20 bg-sun-light px-4 py-20 sm:px-6">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Updates &amp; Photos</h2>
        <p className="mt-2 text-ink-soft">
          The latest news and fun moments from our daycare family.
        </p>
      </AnimatedSection>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {updates.map((update, i) => (
          <UpdateCard key={update.title + update.date} update={update} index={i} />
        ))}
      </div>

      <AnimatedSection className="mx-auto mt-16 max-w-5xl text-center">
        <h3 className="font-display text-2xl text-ink">Photo Gallery</h3>
        <p className="mt-1 text-sm text-ink-soft">Click any photo to see it up close.</p>
        <div className="mt-8">
          <PhotoGallery updates={updates} />
        </div>
      </AnimatedSection>
    </section>
  );
}
