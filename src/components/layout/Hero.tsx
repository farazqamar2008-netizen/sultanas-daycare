import { AnimatedSection } from "@/components/design/AnimatedSection";
import { PhotoCutout } from "@/components/design/PhotoCutout";
import { CloudDoodle, StarDoodle, CrayonSquiggle } from "@/components/design/Doodles";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-light px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <CloudDoodle className="absolute left-4 top-10 w-16 opacity-80 sm:left-10 sm:w-24" />
      <CloudDoodle className="absolute right-6 top-28 w-12 opacity-60 sm:right-16 sm:w-20" />
      <StarDoodle className="absolute right-10 top-8 w-7 sm:right-24 sm:w-9" />
      <StarDoodle className="absolute left-1/3 top-4 w-5 opacity-70" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <AnimatedSection className="text-center md:text-left">
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Sultana&apos;s Daycare
            <br />& Babysitting
          </h1>
          <p className="mt-4 font-display text-xl text-sky-dark sm:text-2xl">
            Best Home Daycare in Bradford West Gwillimbury
          </p>
          <div className="mx-auto mt-4 w-40 md:mx-0">
            <CrayonSquiggle />
          </div>
          <p className="mx-auto mt-5 max-w-md text-ink-soft md:mx-0">
            A warm, home-based daycare where little ones learn, play, and make
            friends every single day.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-display text-lg text-white shadow-playful transition-transform hover:scale-105"
          >
            Apply Now
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
          <PhotoCutout
            src="/gallery/group/group-pictures-from-sultanas-daycare-1.jpg"
            alt="Group photo of children at Sultana's Daycare"
            shape="blob"
            tilt={-2}
            className="absolute left-0 top-0 w-52 sm:w-64"
            priority
          />
          <PhotoCutout
            src="/gallery/graduation/graduation-sultanas-daycare-1.jpg"
            alt="Graduation day at Sultana's Daycare"
            shape="rect"
            frame="polaroid"
            caption="Spots open — Apply now! 🎓"
            tilt={6}
            className="absolute bottom-0 right-0 w-36 sm:w-44"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
