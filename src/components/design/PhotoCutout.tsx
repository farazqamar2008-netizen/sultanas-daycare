"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type PhotoCutoutShape =
  | "rect"
  | "circle"
  | "blob"
  | "star"
  | "heart"
  | "arch"
  | "scallop";

export type PhotoCutoutFrame = "none" | "polaroid" | "sticker" | "taped";

export type TapeColor = "sun" | "sky" | "coral" | "grass" | "lavender";

const SHAPE_CLIP: Record<PhotoCutoutShape, string | undefined> = {
  rect: undefined,
  circle: "url(#cutout-circle)",
  blob: "url(#cutout-blob)",
  star: "url(#cutout-star)",
  heart: "url(#cutout-heart)",
  arch: "url(#cutout-arch)",
  scallop: "url(#cutout-scallop)",
};

/** Recommended aspect ratio per shape so clip paths don't distort. */
const SHAPE_ASPECT: Record<PhotoCutoutShape, string> = {
  rect: "aspect-[4/3]",
  circle: "aspect-square",
  blob: "aspect-square",
  star: "aspect-square",
  heart: "aspect-square",
  arch: "aspect-[4/5]",
  scallop: "aspect-[4/3]",
};

const TAPE_BG: Record<TapeColor, string> = {
  sun: "bg-sun/70",
  sky: "bg-sky/70",
  coral: "bg-coral/70",
  grass: "bg-grass/70",
  lavender: "bg-lavender/70",
};

interface PhotoCutoutProps {
  /** Photo source. Omit to render a clearly-labeled placeholder. */
  src?: string;
  alt: string;
  shape?: PhotoCutoutShape;
  frame?: PhotoCutoutFrame;
  /** Shown under the photo when frame="polaroid". */
  caption?: string;
  /** Rotation in degrees. Pass a fixed value per instance (e.g. derived
   * from an index) rather than Math.random() to avoid hydration mismatches. */
  tilt?: number;
  tapeColor?: TapeColor;
  priority?: boolean;
  sizes?: string;
  /** Must include a width (e.g. "w-48" or "w-full max-w-xs") — the
   * container is sized by className, not by the image's intrinsic size. */
  className?: string;
}

function Placeholder({ shape }: { shape: PhotoCutoutShape }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2",
        "bg-gradient-to-br from-sky-light via-cream-soft to-sun-light text-ink-soft"
      )}
      style={{ clipPath: SHAPE_CLIP[shape] }}
    >
      <ImageIcon className="h-8 w-8 opacity-60" aria-hidden="true" />
      <span className="px-3 text-center text-xs font-medium opacity-70">
        Photo coming soon
      </span>
    </div>
  );
}

function Photo({
  src,
  alt,
  shape,
  priority,
  sizes,
}: {
  src?: string;
  alt: string;
  shape: PhotoCutoutShape;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="relative h-full w-full" style={{ clipPath: SHAPE_CLIP[shape] }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 768px) 33vw, 80vw"}
          className="object-cover"
        />
      ) : (
        <Placeholder shape={shape} />
      )}
    </div>
  );
}

/**
 * A reusable scrapbook-style photo container: masked into a playful shape
 * (circle, blob, star, heart, arch, scalloped edge) and optionally framed
 * like a polaroid, die-cut sticker, or taped-up snapshot. Renders a
 * clearly-labeled placeholder until real photos are supplied — swap by
 * passing `src`.
 */
export function PhotoCutout({
  src,
  alt,
  shape = "blob",
  frame = "none",
  caption,
  tilt = 0,
  tapeColor = "sun",
  priority,
  sizes,
  className,
}: PhotoCutoutProps) {
  const prefersReducedMotion = useReducedMotion();

  const hoverAnimation = prefersReducedMotion
    ? undefined
    : { y: -6, rotate: tilt + (tilt >= 0 ? 1.5 : -1.5), scale: 1.02 };

  if (frame === "polaroid") {
    return (
      <motion.div
        initial={{ rotate: tilt }}
        whileHover={hoverAnimation}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={cn(
          "inline-block bg-white p-3 pb-8 shadow-playful rounded-sm",
          className
        )}
      >
        <div className={cn("relative overflow-hidden", SHAPE_ASPECT[shape])}>
          <Photo src={src} alt={alt} shape={shape} priority={priority} sizes={sizes} />
        </div>
        {caption ? (
          <p className="mt-3 text-center font-display text-sm text-ink-soft">
            {caption}
          </p>
        ) : null}
      </motion.div>
    );
  }

  if (frame === "sticker") {
    return (
      <motion.div
        initial={{ rotate: tilt }}
        whileHover={hoverAnimation}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={cn("inline-block bg-white p-2 shadow-sticker", SHAPE_ASPECT[shape], className)}
        style={{ clipPath: SHAPE_CLIP[shape] }}
      >
        <Photo src={src} alt={alt} shape={shape} priority={priority} sizes={sizes} />
      </motion.div>
    );
  }

  if (frame === "taped") {
    return (
      <motion.div
        initial={{ rotate: tilt }}
        whileHover={hoverAnimation}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={cn("relative inline-block shadow-playful", SHAPE_ASPECT[shape], className)}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-3 rounded-sm opacity-90 shadow-soft",
            TAPE_BG[tapeColor]
          )}
        />
        <Photo src={src} alt={alt} shape={shape} priority={priority} sizes={sizes} />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ rotate: tilt }}
      whileHover={hoverAnimation}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn("inline-block shadow-soft", SHAPE_ASPECT[shape], className)}
    >
      <Photo src={src} alt={alt} shape={shape} priority={priority} sizes={sizes} />
    </motion.div>
  );
}
