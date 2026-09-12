import type { Metadata } from "next";
import Script from "next/script";
import { Fredoka, Nunito } from "next/font/google";
import { ShapeDefs } from "@/components/design/ShapeDefs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SHAPO_BADGE_DATA_SETTINGS, REVIEW_SUMMARY } from "@/data/reviews";
import { BUSINESS } from "@/data/business";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE = "Sultana's Daycare & Babysitting | Home Daycare in Bradford West Gwillimbury";
const DESCRIPTION =
  "Sultana's Daycare & Babysitting is a warm, home-based daycare in Bradford West Gwillimbury, Ontario, rated 4.7 stars. Now enrolling — apply online today.";
const REPRESENTATIVE_IMAGE = "/gallery/group/group-pictures-from-sultanas-daycare-1.jpg";

// TODO: once a production domain is live, set `metadataBase: new URL("https://...")`
// here so Open Graph image/URLs resolve to absolute addresses for social scrapers.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: BUSINESS.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: REPRESENTATIVE_IMAGE }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: BUSINESS.name,
  image: REPRESENTATIVE_IMAGE,
  telephone: "+1-416-500-8494",
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "135 Sutherland Ave",
    addressLocality: "Bradford West Gwillimbury",
    addressRegion: "ON",
    postalCode: "L3Z 4H6",
    addressCountry: "CA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: REVIEW_SUMMARY.rating,
    reviewCount: REVIEW_SUMMARY.count,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "17:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ShapeDefs />
        <Header />
        {children}
        <Footer />
        <Script
          src="https://cdn.shapo.io/js/google-badge-loader.js"
          data-settings={SHAPO_BADGE_DATA_SETTINGS}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
