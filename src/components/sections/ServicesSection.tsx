import { Clock, UtensilsCrossed, Moon, TreePine, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { ServicesSlideDeck, type Service } from "./services/ServicesSlideDeck";

const ICON_CLASS = "h-5 w-5";

const SERVICES: Service[] = [
  {
    icon: <Clock className={ICON_CLASS} aria-hidden="true" />,
    title: "Hours",
    description: "Monday – Friday, 7:30 AM – 5:00 PM.",
    accent: "sky",
    image: "/gallery/everyday/2-kids-waiting-to-go-home-in-jackets.jpg",
  },
  {
    icon: <UtensilsCrossed className={ICON_CLASS} aria-hidden="true" />,
    title: "Meals & Snacks",
    description: "One morning snack, one lunch, and one afternoon snack every day.",
    accent: "sun",
    image: "/gallery/everyday/funny-eating-photo-single-kid.jpg",
  },
  {
    icon: <Moon className={ICON_CLASS} aria-hidden="true" />,
    title: "Sleep",
    description: "2 hours of nap time in a dedicated sleeping room.",
    accent: "lavender",
    image: "/gallery/everyday/1-infant-sleeping-in-cradle.jpg",
  },
  {
    icon: <TreePine className={ICON_CLASS} aria-hidden="true" />,
    title: "Outdoor Play",
    description: "2 hours of outdoor play daily, rain or shine.",
    accent: "grass",
    image: "/gallery/outdoor/outdoor-sultana-daycare-1.jpg",
  },
  {
    icon: <BookOpen className={ICON_CLASS} aria-hidden="true" />,
    title: "Learning Play",
    description: "Circle time, story time, dance time, drama play, art & colouring, and alphabets & counting.",
    accent: "coral",
    image: "/gallery/everyday/kids-making-alphabet-train.jpg",
  },
  {
    icon: <HeartHandshake className={ICON_CLASS} aria-hidden="true" />,
    title: "Care Basics",
    description: "Washroom time and diaper changes as needed, always supervised.",
    accent: "sky",
    image: "/gallery/group/group-pictures-from-sultanas-daycare-2.jpg",
  },
  {
    icon: <Sparkles className={ICON_CLASS} aria-hidden="true" />,
    title: "Extra",
    description: "Weekend care and emergency care available for current and previous families.",
    accent: "sun",
    image: "/gallery/everyday/birthday-girl-cutting-cake.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-sky-light py-20">
      <AnimatedSection className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Services</h2>
        <p className="mt-2 text-ink-soft">Everything your little one&apos;s day includes, all under one roof.</p>
      </AnimatedSection>

      <div className="mt-10">
        <ServicesSlideDeck services={SERVICES} />
      </div>
    </section>
  );
}
