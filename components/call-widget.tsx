"use client"

import { Phone } from "lucide-react"
import { useState } from "react"

interface CallWidgetProps {
  phoneNumber: string
}

export function CallWidget({ phoneNumber }: CallWidgetProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="
        fixed
        bottom-5
        right-5
        z-[9999]
        bg-green-600
        hover:bg-green-700
        text-white
        rounded-full
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        flex
        items-center
        justify-center
        w-12
        h-12
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Call us"
    >
      <Phone className="w-5 h-5 animate-pulse" />

      {isHovered && (
        <span className="absolute right-16  bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg hidden lg:block">
          Call: {phoneNumber}
        </span>
      )}
    </a>
  )
}