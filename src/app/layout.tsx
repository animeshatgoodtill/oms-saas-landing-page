import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import { generateOrganizationSchema } from '@/lib/schema';

import "./globals.css";

// next/font serves each face under a generated family name, so CSS must reach it
// through these variables — a literal "Manrope" matches nothing and silently
// falls back to the system font (which is what shipped until 2026-09-23).
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/opscel-favicon.webp',
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceSans.variable} ${sourceSans.className} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
