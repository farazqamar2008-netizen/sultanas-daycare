import { Hero } from "@/components/layout/Hero";
import { SectionDivider } from "@/components/design/SectionDivider";
import { ApplySection } from "@/components/sections/ApplySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PhotosSection } from "@/components/sections/PhotosSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SectionDivider variant="cloud" color="fill-grass-light" />
      <ApplySection />
      <SectionDivider variant="wave" color="fill-sky-light" />
      <ServicesSection />
      <SectionDivider variant="wave" color="fill-sun-light" />
      <PhotosSection />
      <SectionDivider variant="torn" color="fill-coral-light" />
      <ReviewsSection />
      <SectionDivider variant="cloud" color="fill-lavender-light" />
      <ContactSection />
    </main>
  );
}
