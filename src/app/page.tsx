import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/design/SectionDivider";
import { UpdatesSection } from "@/components/sections/UpdatesSection";
import { ApplySection } from "@/components/sections/ApplySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider variant="wave" color="fill-sun-light" />
        <UpdatesSection />
        <SectionDivider variant="cloud" color="fill-grass-light" />
        <ApplySection />
        <SectionDivider variant="wave" color="fill-sky-light" />
        <ServicesSection />
        <SectionDivider variant="torn" color="fill-coral-light" />
        <ReviewsSection />
        <SectionDivider variant="cloud" color="fill-lavender-light" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
