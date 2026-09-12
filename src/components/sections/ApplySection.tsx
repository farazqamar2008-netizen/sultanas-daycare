import { AnimatedSection } from "@/components/design/AnimatedSection";
import { ApplicationForm } from "./apply/ApplicationForm";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-20 bg-grass-light px-4 py-20 sm:px-6">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Apply Now</h2>
        <p className="mt-2 text-ink-soft">
          Tell us about your family and we&apos;ll be in touch about availability and next steps.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <ApplicationForm />
      </AnimatedSection>
    </section>
  );
}
