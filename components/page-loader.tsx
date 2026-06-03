"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const HERO_IMAGES = [
  "/hero-home-page/Website Development.webp",
  "/hero-home-page/Social Media Marketing.webp",
  "/hero-home-page/Manual and AI SEO.webp",
  "/hero-home-page/Content Writing.webp",
  "/hero-home-page/Whats app.webp",
]

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("loaderShown")) return

    setVisible(true)

    let progressValue = 0

    // Progress Animation
    const progressTimer = setInterval(() => {
      progressValue += 4

      if (progressValue >= 100) {
        progressValue = 100

        clearInterval(progressTimer)

        setTimeout(() => {
          setFadeOut(true)

          sessionStorage.setItem("loaderShown", "true")

          setTimeout(() => {
            setVisible(false)
          }, 400)
        }, 150)
      }

      setProgress(progressValue)
    }, 60)

    // Image Rotation
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 400)

    return () => {
      clearInterval(progressTimer)
      clearInterval(imageTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black transition-opacity duration-500 ${
        fadeOut
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "0.5s",
          }}
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3 opacity-10">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg ${
              currentImage === i
                ? "ring-2 ring-primary/50"
                : ""
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              priority
              sizes="(max-width:768px) 33vw, 20vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <Image
          src="/website-logo/Goldden-white-WB-Tech-Logo.webp"
          alt="WB Tech Agency"
          width={190}
          height={70}
          priority
          className="mb-6 h-auto w-auto"
        />

        {/* Preview Card */}
        <div className="relative w-36 h-44 lg:w-44 lg:h-56 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
          <Image
            src={HERO_IMAGES[currentImage]}
            alt="Preview"
            fill
            priority
            className="object-contain transition-all duration-300"
          />
        </div>

        {/* Progress */}
        <div className="mt-6 w-72 lg:w-96">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              Loading
            </span>

            <span className="text-xl font-bold text-white tabular-nums">
              {progress}%
            </span>
          </div>

          {/* Bar */}
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-3 text-center text-xs text-white/40">
            Preparing your experience...
          </p>
        </div>
      </div>
    </div>
  )
}