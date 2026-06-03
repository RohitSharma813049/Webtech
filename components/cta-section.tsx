"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { EnquiryPopup } from "./enquiry-popup"

export function CTASection() {
  return (
    <section className="py-6 lg:py-20">
      <div className="container mx-auto px-0 ">

        <Card className="border-0 overflow-hidden h-[320px] relative rounded-xl lg:rounded-3xl shadow-2xl">

          {/* BACKGROUND (DESKTOP) */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/image/cta-banner/webeside-technology-banner-business-growth.webp"
              alt="Business Growth"
              fill
              className="object-contain object-left h-full w-[100px]"
              priority
            />
          </div>

          {/* BACKGROUND (MOBILE) */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/image/cta-banner/cta-mobile-banner.webp"
              alt="Business Growth"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 md:bg-gradient-to-r from-transparent via-primary/30 to-primary/95 hidden lg:block" />
          <div className="absolute inset-0 md:bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60 lg:hidden" />

          {/* DECORATIVE BLUR */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <CardContent className="relative z-10 p-5 sm:p-6 lg:p-14">

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:block text-right max-w-xl ml-auto h-[250px] py-14 mt-[-105px]">

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

{/* ================= MOBILE ================= */}
<div className="lg:hidden absolute right-4 top-20 rounded-2xl shadow-2xl p-4 max-w-[240px]">

  {/* CONTENT */}
  <div className="text-left [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">

    <h2 className="text-lg font-bold text-white mb-1">
      Ready to Grow?
    </h2>

    <p className="text-xs text-white/90 mb-4">
      Get a free consultation today.
    </p>

    {/* ACTION BUTTONS */}
    <div className="flex flex-row gap-2 mb-4">

      <EnquiryPopup
        trigger={
          <Button className="w-10 h-10 rounded-full bg-white text-primary p-0 shadow-lg hover:scale-105 transition">
            <Mail className="w-4 h-4" />
          </Button>
        }
      />

      <Button
        className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 p-0 shadow-lg hover:scale-105 transition"
        asChild
      >
        <a
          href="https://wa.me/918860876087"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-4 h-4 text-white" />
        </a>
      </Button>

      <Button
        className="w-10 h-10 rounded-full bg-primary hover:bg-accent/90 p-0 shadow-lg hover:scale-105 transition"
        asChild
      >
        <a href="tel:+918860876087">
          <Phone className="w-4 h-4 text-white" />
        </a>
      </Button>

    </div>

    {/* CONTACT INFO */}
    <div className="flex flex-col gap-2 border-t border-white/20 pt-3">

      <span className="text-xs text-white/90 flex items-center gap-2">
        <Phone className="w-3 h-3" />
        8860876087
      </span>

      <span className="text-xs text-white/90 flex items-center gap-2 break-all">
        <Mail className="w-3 h-3" />
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