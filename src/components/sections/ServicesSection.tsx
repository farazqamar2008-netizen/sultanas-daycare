import { Clock, UtensilsCrossed, Moon, TreePine, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { ServiceCard, type ServiceAccent } from "./services/ServiceCard";

interface Service {
  icon: typeof Clock;
  title: string;
  description: string;
  accent: ServiceAccent;
}

const SERVICES: Service[] = [
  {
    icon: Clock,
    title: "Hours",
    description: "Monday – Friday, 7:30 AM – 5:00 PM.",
    accent: "sky",
  },
  {
    icon: UtensilsCrossed,
    title: "Meals & Snacks",
    description: "One morning snack, one lunch, and one afternoon snack every day.",
    accent: "sun",
  },
  {
    icon: Moon,
    title: "Sleep",
    description: "2 hours of nap time in a dedicated sleeping room.",
    accent: "lavender",
  },
  {
    icon: TreePine,
    title: "Outdoor Play",
    description: "2 hours of outdoor play daily, rain or shine.",
    accent: "grass",
  },
  {
    icon: BookOpen,
    title: "Learning Play",
    description: "Circle time, story time, dance time, drama play, art & colouring, and alphabets & counting.",
    accent: "coral",
  },
  {
    icon: HeartHandshake,
    title: "Care Basics",
    description: "Washroom time and diaper changes as needed — always supervised.",
    accent: "sky",
  },
  {
    icon: Sparkles,
    title: "Extra",
    description: "Weekend care and emergency care available for current and previous families.",
    accent: "sun",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-sky-light px-4 py-20 sm:px-6">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Services</h2>
        <p className="mt-2 text-ink-soft">Everything your little one&apos;s day includes, all under one roof.</p>
      </AnimatedSection>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} {...service} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </section>
  );
}
