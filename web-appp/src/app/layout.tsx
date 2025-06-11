import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BG from "@/components/bg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porn Search Engine | Coming Soon",
  description:
    "Discover the ultimate adult content search tool. Launching soon with advanced filters, personalized recommendations, and a privacy-first experience.",
  keywords: [
    "porn search engine",
    "adult content search",
    "NSFW search",
    "adult videos",
    "porn finder",
    "private adult browsing",
    "coming soon adult site",
  ],
  robots: "index, follow",
  authors: [{ name: "Porn Search Engine Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Porn Search Engine | Coming Soon",
    description:
      "A smarter, privacy-focused way to explore adult content. Launching soon!",
    url: "/",
    siteName: "Porn Search Engine",
    type: "website",
    images: [
      {
        url: "/icon.png", // Replace with your preview image
        width: 1200,
        height: 630,
        alt: "Porn Search Engine - Coming Soon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="juicyads-site-verification"
          content="803170c7651a1514d43bff9e218b20c1"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <BG>{children}</BG>
      </body>
    </html>
  );
}
