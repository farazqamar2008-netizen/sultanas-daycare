import type { Metadata } from "next";
import Script from "next/script";
import { Fredoka, Nunito } from "next/font/google";
import { ShapeDefs } from "@/components/design/ShapeDefs";
import { SHAPO_BADGE_DATA_SETTINGS } from "@/data/reviews";
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

export const metadata: Metadata = {
  title: "Sultana's Daycare & Babysitting",
  description:
    "Sultana's Daycare & Babysitting — a warm home daycare in Bradford West Gwillimbury, Ontario.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ShapeDefs />
        {children}
        <Script
          src="https://cdn.shapo.io/js/google-badge-loader.js"
          data-settings={SHAPO_BADGE_DATA_SETTINGS}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
