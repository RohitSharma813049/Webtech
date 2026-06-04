"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { EnquiryPopup } from "./enquiry-popup"

export function CTASection() {
  return (
    <section className="py-6 lg:py-20">
      <div className="container mx-auto px-0">

        {/*
          Height ladder:
          mobile  (<640px)  : h-[280px]  — icon-only buttons, compact
          sm–md  (640–767px): h-[320px]  — tablet layout fits cleanly
          md     (768–1023px): h-[360px] — tablet layout with more breathing room
          lg+    (1024px+)  : h-[320px]  — desktop layout
        */}
        <Card className="border-0 overflow-hidden relative rounded-xl lg:rounded-3xl shadow-2xl
                          h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px]">

          {/* BACKGROUND (DESKTOP) */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/image/cta-banner/webeside-technology-banner-business-growth.webp"
              alt="Business Growth"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* BACKGROUND (MOBILE + TABLET)
              object-cover + object-[70%_center] keeps the focal point
              of the banner image visible at narrow widths */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/image/cta-banner/cta-mobile-banner.webp"
              alt="Business Growth"
              fill
              className="object-cover object-[70%_center] sm:object-center"
              priority
            />
          </div>

          {/* OVERLAY (DESKTOP) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-primary/95 hidden lg:block" />

          {/* OVERLAY (MOBILE) — stronger bottom-up gradient so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/98 via-primary/85 to-primary/40 sm:hidden" />

          {/* OVERLAY (TABLET) — right-biased so image shows on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-primary/95 hidden sm:block lg:hidden" />

          {/* DECORATIVE BLUR */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <CardContent className="relative z-10 h-full p-5 sm:p-6 lg:p-14">

            {/* ================= DESKTOP (lg+) ================= */}
            <div className="hidden lg:flex flex-col text-right items-end justify-center h-full max-w-xl ml-auto">

              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Digital Presence?
              </h2>

              <p className="text-white/90 text-lg mb-8">
                Let's transform your vision into reality. Get a free consultation.
              </p>

              <div className="flex justify-end gap-4 mb-8">
                <EnquiryPopup
                  trigger={
                    <Button className="rounded-full bg-white text-primary font-bold px-6 active:scale-95 transition">
                      <Mail className="mr-2 w-4 h-4" />
                      Free Consultation
                    </Button>
                  }
                />
                <Button
                  className="rounded-full bg-green-500 hover:bg-green-600 font-bold px-6 active:scale-95 transition"
                  asChild
                >
                  <a href="https://wa.me/918860876087">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  className="rounded-full bg-primary hover:bg-accent/90 font-bold px-6 active:scale-95 transition"
                  asChild
                >
                  <a href="tel:+918860876087">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="flex justify-end gap-4 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91-8860876087
                </span>
                <span>|</span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@webeside.in
                </span>
              </div>

            </div>

            {/* ================= TABLET (sm–md: 640px–1023px) ================= */}
            <div className="hidden sm:flex lg:hidden flex-col justify-center items-end text-right h-full max-w-xs md:max-w-sm ml-auto">

              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight">
                Ready to Elevate Your Digital Presence?
              </h2>

              <p className="text-white/90 text-xs md:text-sm mb-4 md:mb-5">
                Let's transform your vision into reality. Get a free consultation.
              </p>

              <div className="flex gap-2 md:gap-3 mb-4 md:mb-5 flex-wrap justify-end">
                <EnquiryPopup
                  trigger={
                    <Button className="rounded-full bg-white text-primary font-bold px-3 md:px-4 text-xs md:text-sm h-9 active:scale-95 transition">
                      <Mail className="mr-1.5 w-3.5 h-3.5" />
                      Consult Free
                    </Button>
                  }
                />
                <Button
                  className="rounded-full bg-green-500 hover:bg-green-600 font-bold px-3 md:px-4 text-xs md:text-sm h-9 active:scale-95 transition"
                  asChild
                >
                  <a href="https://wa.me/918860876087">
                    <MessageCircle className="mr-1.5 w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  className="rounded-full bg-primary hover:bg-accent/90 font-bold px-3 md:px-4 text-xs md:text-sm h-9 active:scale-95 transition"
                  asChild
                >
                  <a href="tel:+918860876087">
                    <Phone className="mr-1.5 w-3.5 h-3.5" />
                    Call
                  </a>
                </Button>
              </div>

              <div className="flex gap-2 text-xs text-white/80 flex-wrap justify-end">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  +91-8860876087
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  info@webeside.in
                </span>
              </div>

            </div>

            {/* ================= MOBILE (< 640px) ================= */}
            <div className="sm:hidden flex flex-col justify-center items-start h-full max-w-[200px]">

              <div className="[text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">

                <h2 className="text-base font-bold text-white mb-1 leading-tight">
                  Ready to Grow?
                </h2>

                <p className="text-xs text-white/90 mb-3">
                  Get a free consultation today.
                </p>

                <div className="flex flex-row gap-2 mb-3">
                  <EnquiryPopup
                    trigger={
                      <Button className="w-9 h-9 rounded-full bg-white text-primary p-0 shadow-lg hover:scale-105 transition">
                        <Mail className="w-3.5 h-3.5" />
                      </Button>
                    }
                  />
                  <Button
                    className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 p-0 shadow-lg hover:scale-105 transition"
                    asChild
                  >
                    <a href="https://wa.me/918860876087" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                    </a>
                  </Button>
                  <Button
                    className="w-9 h-9 rounded-full bg-primary hover:bg-accent/90 p-0 shadow-lg hover:scale-105 transition"
                    asChild
                  >
                    <a href="tel:+918860876087">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col gap-1.5 border-t border-white/20 pt-2.5">
                  <span className="text-xs text-white/90 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 shrink-0" />
                    8860876087
                  </span>
                  <span className="text-xs text-white/90 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 shrink-0" />
                    info@webeside.in
                  </span>
                </div>

              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  )
}