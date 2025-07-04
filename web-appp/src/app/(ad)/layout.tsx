import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BG from "@/components/bg";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thumblust ",
  description:
    "A smarter, privacy-focused way to explore adult content. Launching soon!",
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
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="juicyads-site-verification"
          content="803170c7651a1514d43bff9e218b20c1"
        />
        <Script
          type="text/javascript"
          data-cfasync="false"
          async
          src="https://poweredby.jads.co/js/jads.js"
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BG>
          <Header />
          {children}
          <Footer />
        </BG>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YS2FW6FBTY"
        ></Script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YS2FW6FBTY');`}
        </script>
        {/* <Script type="text/javascript" src="/add.js"></Script> */}
        <Script
          type="text/javascript"
          src="//pl26702585.profitableratecpm.com/07/5c/3d/075c3ded807656e7ab17f0a998d9d131.js"
        ></Script>
        <Script
          type="text/javascript"
          src="//pl26702625.profitableratecpm.com/2c/0b/5e/2c0b5ecfaa59461fc2f882a1609444eb.js"
        ></Script>
        <Script
          async
          data-cfasync="false"
          src="//pl26732826.profitableratecpm.com/925ad1a9a8835a3ec790b1e830984d7a/invoke.js"
        ></Script>

        <Script
          type="text/javascript"
          src="//www.highperformanceformat.com/5327e26bf11ef6cb698f99643ac64606/invoke.js"
        ></Script>
        <Script
          async
          data-cfasync="false"
          src="//pl26678316.profitableratecpm.com/e475dbcc4cd3ffa8564ed226b71c8947/invoke.js"
        ></Script>

        <script
          type="text/javascript"
          data-cfasync="false"
          async
        >{`(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1093349});`}</script>
      </body>
    </html>
  );
}
