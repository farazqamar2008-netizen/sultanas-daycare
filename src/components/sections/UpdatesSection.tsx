import { AnimatedSection } from "@/components/design/AnimatedSection";
import { sortedUpdates } from "@/data/updates";
import { galleryCategories } from "@/data/gallery";
import { UpdateCard } from "./updates/UpdateCard";
import { SlideDeck } from "./updates/SlideDeck";

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

      <div className="mx-auto mt-16 max-w-5xl space-y-14">
        {galleryCategories.map((category) => (
          <SlideDeck key={category.slug} title={category.title} photos={category.photos} />
        ))}
      </div>
    </section>
  );
}
