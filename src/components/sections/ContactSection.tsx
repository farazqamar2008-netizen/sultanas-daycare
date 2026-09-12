import { Phone, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { BUSINESS } from "@/data/business";
import { MapEmbed } from "./contact/MapEmbed";
import { ContactForm } from "./contact/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-lavender-light px-4 py-20 sm:px-6">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-ink-soft">We&apos;d love to hear from you.</p>
      </AnimatedSection>

      <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-2">
        <AnimatedSection className="space-y-6">
          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-soft">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-ink hover:text-coral-dark">
              <Phone className="h-5 w-5 shrink-0 text-sky-dark" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-3 text-ink hover:text-coral-dark"
            >
              <Mail className="h-5 w-5 shrink-0 text-sky-dark" aria-hidden="true" />
              {BUSINESS.email}
            </a>
            <div className="flex items-center gap-3 text-ink">
              <MapPin className="h-5 w-5 shrink-0 text-sky-dark" aria-hidden="true" />
              {BUSINESS.address}
            </div>
          </div>
          <MapEmbed />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
