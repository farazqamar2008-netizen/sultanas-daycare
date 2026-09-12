"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** HTML element to render as. */
  as?: "div" | "section";
  id?: string;
}

/**
 * Fades + gently slides content up as it scrolls into view. Plays once.
 * Falls back to a plain fade (no motion) when the user prefers reduced
 * motion.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 90, damping: 16, delay },
        },
      };

  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
