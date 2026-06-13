import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: false, // secondary font — no need to block
});

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thethreetier.com"),
  title: {
    default: "The Three Tier — AI Infrastructure Platform",
    template: "%s — The Three Tier",
  },
  description:
    "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
  keywords: [
    "AI infrastructure",
    "automation",
    "enterprise AI",
    "machine learning",
    "operational cycles",
    "autonomous agents",
    "CI/CD AI",
  ],
  authors: [{ name: "The Three Tier" }],
  creator: "The Three Tier",
  openGraph: {
    title: "The Three Tier — AI Infrastructure Platform",
    description:
      "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
    url: "https://www.thethreetier.com",
    siteName: "The Three Tier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Three Tier — AI Infrastructure Platform",
    description:
      "Enterprise-scale AI infrastructure for high-stakes decisions. 99% automation accuracy, 60% faster operational cycles.",
    creator: "@thethreetier",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        {/* Preconnect to Google Fonts for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for any CDN assets */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className="min-h-full flex flex-col bg-ink text-paper selection:bg-signal/30 selection:text-paper"
        suppressHydrationWarning
      >
        {/* Skip navigation — first focusable element, critical for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-signal focus:text-ink focus:font-mono focus:text-[11px] focus:tracking-widest focus:uppercase focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
