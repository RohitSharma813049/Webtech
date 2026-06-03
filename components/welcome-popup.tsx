"use client"

import type React from "react"
import { memo, useCallback, useEffect, useState } from "react"
import {
  X,
  CheckCircle2,
  MessageCircle,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export const WelcomePopup = memo(function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // REMOVE THIS IN DEVELOPMENT
    sessionStorage.removeItem("hasSeenWelcomePopup")

    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup")

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenWelcomePopup", "true")
      }, 900)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleWhatsApp = useCallback(() => {
    window.open(
      "https://wa.me/918860876087?text=Hi! I would like to enquire about your services",
      "_blank"
    )
  }, [])

  const handleEstimate = useCallback(() => {
    window.location.href = "/contact"
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      {/* POPUP BOX */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-background shadow-2xl border border-border animate-in fade-in zoom-in duration-300">

        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col lg:flex-row">

          {/* LEFT VIDEO */}
          <div className="hidden lg:block lg:w-[40%] relative bg-black">

            <video
              className="w-full h-full min-h-[430px] object-cover"
              src="/videos/videoplayback.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-5 right-5 z-10">
              <h3 className="text-white text-2xl font-bold mb-2">
                Grow Your Business 🚀
              </h3>

              <p className="text-white/80 text-xs">
                Websites, SEO, marketing & complete digital solutions.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[60%] p-5 lg:p-7">

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold">
                Trusted Digital Agency
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-3">
              Transform Your Business Today!
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Ready to take your business to the next level? We create stunning
              websites, powerful applications, and complete digital marketing
              solutions that generate real results.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-7">

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-sm">
                    900+ Successful Projects
                  </h4>

                  <p className="text-xs text-muted-foreground">
                    Delivered high-performing websites & solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-sm">
                    10+ Years Experience
                  </h4>

                  <p className="text-xs text-muted-foreground">
                    Trusted by growing businesses across India.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-sm">
                    24/7 Support
                  </h4>

                  <p className="text-xs text-muted-foreground">
                    Continuous maintenance and business support.
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">

              <Button
                 onClick={handleEstimate}
                className="flex-1 h-11 rounded-xl text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="flex-1 h-11 rounded-xl text-sm font-semibold bg-transparent"
              >
                <FileText className="w-4 h-4 mr-2" />
                Request Quote
              </Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
})

WelcomePopup.displayName = "WelcomePopup"