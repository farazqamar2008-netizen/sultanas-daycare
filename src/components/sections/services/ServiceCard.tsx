import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { cn } from "@/lib/utils";

const BADGE_BG: Record<string, string> = {
  sky: "bg-sky text-white",
  grass: "bg-grass text-white",
  sun: "bg-sun text-ink",
  coral: "bg-coral text-white",
  lavender: "bg-lavender text-white",
};

export type ServiceAccent = keyof typeof BADGE_BG;

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: ServiceAccent;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, accent, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection delay={delay} className="rounded-3xl bg-white p-6 shadow-soft">
      <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-full", BADGE_BG[accent])}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{description}</p>
    </AnimatedSection>
  );
}
