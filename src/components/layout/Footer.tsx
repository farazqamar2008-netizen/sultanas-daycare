import { Wordmark } from "./Wordmark";

/** Minimal stub — expanded with policy links, contact details, and SEO
 * touches in Phase 7. */
export function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-center text-cream/80 sm:px-6">
      <Wordmark variant="light" className="justify-center text-lg" />
      <p className="mt-3 text-sm">
        &copy; {new Date().getFullYear()} Sultana&apos;s Daycare &amp; Babysitting. All rights reserved.
      </p>
    </footer>
  );
}
