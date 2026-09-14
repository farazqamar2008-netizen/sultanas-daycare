"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";

export interface LightboxPhoto {
  src?: string;
  alt: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Full-screen photo viewer. Shows only the enlarged image (plus close/
 * prev/next controls) — no caption or label, since alt text here is for
 * accessibility only, not something visitors should read on screen. */
export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(((index as number) - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onNavigate(((index as number) + 1) % photos.length);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, index, photos.length, onClose, onNavigate]);

  const photo = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-ink hover:bg-white"
          >
            <X className="h-6 w-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(((index as number) - 1 + photos.length) % photos.length);
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink hover:bg-white sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(((index as number) + 1) % photos.length);
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink hover:bg-white sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative flex max-h-[85vh] max-w-3xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {photo.src ? (
              // Real width/height (not fill+object-cover) so the full photo
              // always shows uncropped, whatever its aspect ratio — "auto"
              // sizing lets the browser use the image's real proportions.
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={1600}
                sizes="(min-width: 768px) 768px, 90vw"
                className="h-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-playful"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full max-w-2xl items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-sky-light via-cream-soft to-sun-light text-ink-soft">
                <ImageIcon className="h-10 w-10 opacity-60" aria-hidden="true" />
                <span className="text-sm font-medium opacity-70">Photo coming soon</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
