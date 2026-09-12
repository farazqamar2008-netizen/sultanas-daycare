"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoCutout, type PhotoCutoutFrame, type PhotoCutoutShape } from "@/components/design/PhotoCutout";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import type { GalleryPhoto } from "@/data/gallery";
import { Lightbox } from "./Lightbox";

/** Mostly plain photos with the occasional playful cutout for variety. */
const STYLES: { shape: PhotoCutoutShape; frame: PhotoCutoutFrame }[] = [
  { shape: "rect", frame: "sticker" },
  { shape: "rect", frame: "sticker" },
  { shape: "circle", frame: "sticker" },
  { shape: "rect", frame: "sticker" },
  { shape: "blob", frame: "sticker" },
];

interface SlideDeckProps {
  title: string;
  photos: GalleryPhoto[];
}

export function SlideDeck({ title, photos }: SlideDeckProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function scrollByAmount(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  if (photos.length === 0) return null;

  return (
    <AnimatedSection className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-display text-xl text-ink sm:text-2xl">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label={`Scroll ${title} left`}
            className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label={`Scroll ${title} right`}
            className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => {
          const style = STYLES[i % STYLES.length];
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View photo enlarged: ${photo.alt}`}
              className="shrink-0 snap-start cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-dark"
            >
              <PhotoCutout
                src={photo.src}
                alt={photo.alt}
                shape={style.shape}
                frame={style.frame}
                className="w-48 sm:w-56"
              />
            </button>
          );
        })}
      </div>

      <Lightbox photos={photos} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </AnimatedSection>
  );
}
