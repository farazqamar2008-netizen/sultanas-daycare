import Script from "next/script";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { REVIEW_SUMMARY } from "@/data/reviews";
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

      <AnimatedSection delay={0.1} className="mx-auto mt-10 max-w-4xl">
        <div id="shapo-widget-d0a689568538c832a527" />
        <Script id="shapo-embed-js" src="https://cdn.shapo.io/js/embed.js" strategy="afterInteractive" />
      </AnimatedSection>
    </section>
  );
}
