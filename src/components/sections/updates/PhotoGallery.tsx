"use client";

import { useState } from "react";
import { PhotoCutout, type PhotoCutoutFrame, type PhotoCutoutShape } from "@/components/design/PhotoCutout";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import type { Update } from "@/data/updates";
import { Lightbox } from "./Lightbox";

/** Cycled per tile for a mixed scrapbook look across the gallery. */
const GALLERY_STYLES: { shape: PhotoCutoutShape; frame: PhotoCutoutFrame; tilt: number }[] = [
  { shape: "blob", frame: "sticker", tilt: -3 },
  { shape: "rect", frame: "polaroid", tilt: 4 },
  { shape: "circle", frame: "taped", tilt: -2 },
  { shape: "scallop", frame: "sticker", tilt: 3 },
];

export function PhotoGallery({ updates }: { updates: Update[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const photos = updates.map((u) => ({ src: u.image, alt: u.title }));

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {updates.map((update, i) => {
          const style = GALLERY_STYLES[i % GALLERY_STYLES.length];
          return (
            <AnimatedSection key={update.title + update.date} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View photo enlarged: ${update.title}`}
                className="block w-full cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-dark"
              >
                <PhotoCutout
                  alt={update.title}
                  src={update.image}
                  shape={style.shape}
                  frame={style.frame}
                  tilt={style.tilt}
                  caption={style.frame === "polaroid" ? update.title : undefined}
                  className="w-full"
                />
              </button>
            </AnimatedSection>
          );
        })}
      </div>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
