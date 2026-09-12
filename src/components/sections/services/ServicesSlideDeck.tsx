"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/design/Lightbox";
import { cn } from "@/lib/utils";

const BADGE_BG: Record<string, string> = {
  sky: "bg-sky text-white",
  grass: "bg-grass text-white",
  sun: "bg-sun text-ink",
  coral: "bg-coral text-white",
  lavender: "bg-lavender text-white",
};

export type ServiceAccent = keyof typeof BADGE_BG;

export interface Service {
  /** Pre-rendered icon element (not a component reference — this crosses
   * the server/client boundary, and function props can't be serialized). */
  icon: ReactNode;
  title: string;
  description: string;
  accent: ServiceAccent;
  image: string;
}

export function ServicesSlideDeck({ services }: { services: Service[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = services.map((s) => ({ src: s.image, alt: s.title }));

  function scrollByAmount(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div>
      <div className="mx-auto flex max-w-5xl justify-end gap-2 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll services left"
          className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll services right"
          className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, i) => {
          return (
            <div
              key={service.title}
              className="w-64 shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-soft sm:w-72"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View photo enlarged: ${service.title}`}
                className="relative block aspect-[4/3] w-full cursor-zoom-in"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 640px) 288px, 256px"
                  className="object-cover"
                />
              </button>
              <div className="p-5">
                <div className={cn("inline-flex h-10 w-10 items-center justify-center rounded-full", BADGE_BG[service.accent])}>
                  {service.icon}
                </div>
                <h3 className="mt-3 font-display text-lg text-ink">{service.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
