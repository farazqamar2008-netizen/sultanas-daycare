"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { Lightbox } from "@/components/design/Lightbox";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || paused || lightboxIndex !== null) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, paused, lightboxIndex]);

  function go(delta: number) {
    setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length);
  }

  const slide = heroSlides[index];

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-sky-light to-sun-light shadow-playful"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.button
          key={index}
          type="button"
          onClick={() => setLightboxIndex(index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full cursor-zoom-in"
          aria-label={`View photo enlarged: ${slide.alt}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 640px) 384px, 90vw"
            className="object-contain"
          />
        </motion.button>
      </AnimatePresence>

      {slide.cta && (
        <Link
          href={slide.cta.href}
          className="absolute left-3 right-3 top-3 rounded-2xl bg-coral px-4 py-2.5 text-center text-sm font-bold text-white shadow-soft transition-transform hover:scale-105"
        >
          {slide.cta.label}
        </Link>
      )}

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-ink hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-ink hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={cn("h-2 w-2 rounded-full transition-colors", i === index ? "bg-white" : "bg-white/50")}
          />
        ))}
      </div>

      <Lightbox
        photos={heroSlides}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
