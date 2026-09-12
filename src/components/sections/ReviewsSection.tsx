import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { seedReviews, REVIEW_SUMMARY } from "@/data/reviews";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i < rating ? "fill-sun text-sun-dark" : "text-ink-soft/30")}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-coral-light px-4 py-20 sm:px-6">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Reviews</h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Stars rating={5} />
          <span className="font-display text-lg text-ink">{REVIEW_SUMMARY.rating}</span>
          <span className="text-sm text-ink-soft">({REVIEW_SUMMARY.count} Google reviews)</span>
        </div>
      </AnimatedSection>

      {/*
        Owner: paste Shapo's inline "Reviews Wall/Carousel" embed code
        inside this container (replacing the seeded cards below) once
        you have it — id kept stable so it's easy to find.
      */}
      <div id="shapo-reviews-embed" className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {seedReviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.06} className="rounded-2xl bg-white p-5 shadow-soft">
            <Stars rating={review.rating} />
            <p className="mt-3 font-display text-ink">{review.name}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
