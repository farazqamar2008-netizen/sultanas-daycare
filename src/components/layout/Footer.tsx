import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { BUSINESS } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-cream/80 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Wordmark variant="light" className="text-lg" />

        <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
          <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" /> {BUSINESS.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {BUSINESS.address}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
          <Link href="/policies/website-policy" className="underline hover:text-white">
            Website Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/policies/application-policy" className="underline hover:text-white">
            Application Policy
          </Link>
          <span className="text-xs text-cream/60">(drafts, pending review)</span>
        </div>

        <p className="text-sm text-cream/60">
          Thank you for considering Sultana&apos;s Daycare &amp; Babysitting — we can&apos;t wait to meet your family. 💛
        </p>
        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
