import type { Metadata } from "next";
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thethreetier.com"),
  title: "THE THREE TIER — AI Infrastructure Platform",
  description:
    "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
  keywords: ["AI infrastructure", "automation", "enterprise AI", "machine learning", "operational cycles"],
  openGraph: {
    title: "THE THREE TIER — AI Infrastructure Platform",
    description: "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
    url: "https://www.thethreetier.com",
    siteName: "The Three Tier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE THREE TIER — AI Infrastructure Platform",
    description: "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.thethreetier.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-ink text-paper selection:bg-signal/30 selection:text-paper"
        suppressHydrationWarning
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
