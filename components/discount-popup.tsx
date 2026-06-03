"use client"

import { memo, useCallback, useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const DiscountPopup = memo(function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupIndex, setPopupIndex] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPopupIndex(0)
      setIsOpen(true)
    }, 20000)

    return () => clearTimeout(t1)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/918860876087", "_blank")
    setIsOpen(false)
  }

  const popups = [
    {
      desc: "Get 20% off on all services today.",
      img: "/image/popup/popupbanner.PNG",
    },
  ]

  const current = popups[popupIndex]

  if (!isOpen) return null

  return (
    <div
      className="
        fixed left-4 bottom-10
        w-[240px]
        bg-white
        rounded-xl
        shadow-2xl
        border border-gray-200
        z-[9999]
        overflow-hidden
        animate-in slide-in-from-left
      "
    >
      {/* IMAGE HEADER */}
      <div className="relative h-24">
        <Image
          src={current.img}
          alt="offer"
          fill
          className="object-contain"
        />

        {/* ONLY CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="
            absolute top-2 right-2
            bg-black/60
            text-white
            p-1
            rounded-full
            hover:bg-black
          "
        >
          <X className="w-4 h-4" />
        </button>

        <div className="absolute bottom-1 left-2 text-white text-xs font-bold flex items-center gap-1 text-center justify-center align-middle">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <p className="text-xs text-gray-600 mb-2">
          {current.desc}
        </p>

        <Button
          onClick={handleWhatsApp}
          size="sm"
          className="w-full text-xs"
        >
          Claim Now
        </Button>
      </div>
    </div>
  )
})