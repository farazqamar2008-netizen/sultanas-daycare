import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection } from "@/components/design/AnimatedSection";
import { DraftBanner } from "./DraftBanner";

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="flex-1 bg-cream-soft px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-dark hover:text-coral-dark"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
        </Link>

        <AnimatedSection>
          <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">{title}</h1>
          <DraftBanner />
          <div className="space-y-5 text-ink-soft [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-lg [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
