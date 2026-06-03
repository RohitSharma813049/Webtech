import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";

import {
  Inter,
  Poppins,
} from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import "@/styles/globals.css";

import { DecorativeElements } from "@/components/decorative-elements";
import { PageLoader } from "@/components/page-loader";
import { VideoPopup } from "@/components/video-popup";
import { CallWidget } from "@/components/call-widget";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { Chatbot } from "@/components/chatbot";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DiscountPopup } from "@/components/discount-popup";
import { WelcomePopup } from "@/components/welcome-popup";
import FloatingWidgets from "@/components/FloatingWights";
import { ScrollAnimation } from "@/components/scroll-animation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WB Tech Agency - Premier Web Development & Digital Solutions",
  description:
    "Professional web development, digital marketing, and software solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="font-sans antialiased pb-14 lg:pb-0  bg-background text-foreground max-w-screen overflow-x-hidden">

        {/* Global UI */}
        <PageLoader />
        <DecorativeElements />

        {/* Navigation */}
        <Header />

        {/* Welcome popup */}
        <WelcomePopup />

<main className="flex-1 overflow-x-hidden">
  <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
    {children}
  </div>
</main>
        {/* Floating Widgets */}
        <VideoPopup />

           <FloatingWidgets/>
        {/* Popup */}
        <DiscountPopup serviceType="saas" />

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation */}
        <MobileBottomNav />

        {/* Analytics */}
        <Analytics />

      </body>
    </html>
  );
}