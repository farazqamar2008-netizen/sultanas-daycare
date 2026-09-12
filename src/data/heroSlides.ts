export interface HeroSlide {
  src: string;
  alt: string;
  /** Optional call-to-action badge overlaid on this slide. */
  cta?: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    src: "/gallery/group/group-pictures-from-sultanas-daycare-1.jpg",
    alt: "Children at Sultana's Daycare",
  },
  {
    src: "/gallery/graduation/graduation-sultanas-daycare-1.jpg",
    alt: "Graduation day at Sultana's Daycare",
    cta: { label: "Spots open for Fall. Apply now! 🎓", href: "/#apply" },
  },
  {
    src: "/gallery/outdoor/outdoor-sultana-daycare-3.jpg",
    alt: "Outdoor play at Sultana's Daycare",
  },
  {
    src: "/gallery/tower-building/magnetic-tower-game-sultanas-daycare-1.jpg",
    alt: "Learning play with the magnetic tower game",
  },
  {
    src: "/gallery/everyday/3-girls-hugging-and-smiling-for-the-camera.jpg",
    alt: "Friends at Sultana's Daycare",
  },
  {
    src: "/gallery/everyday/chuchu-train-with-chairs-and-kids.jpg",
    alt: "Playtime at Sultana's Daycare",
  },
];
