"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox, type LightboxPhoto } from "./Lightbox";

interface PhotoStripProps {
  photos: LightboxPhoto[];
}

/**
 * A photo strip that scrolls left to right through the full list (not
 * just a short peek) — use for a section meant to keep growing over
 * time. Click any photo to enlarge; no caption is shown underneath.
 */
export function PhotoStrip({ photos }: PhotoStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function scrollByAmount(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  if (photos.length === 0) return null;

  return (
    <div>
      <div className="mx-auto flex max-w-5xl justify-end gap-2 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll photos left"
          className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll photos right"
          className="rounded-full bg-white p-2 text-ink-soft shadow-soft hover:text-coral-dark"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <button
            key={photo.src ?? i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View photo enlarged: ${photo.alt}`}
            className="relative aspect-[4/3] w-64 shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-3xl shadow-soft sm:w-72"
          >
            {photo.src && (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 288px, 256px"
                className="object-cover"
              />
            )}
          </button>
        ))}
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
