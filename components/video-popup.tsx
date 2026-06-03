"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function VideoPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 z-[999999]">
      <div className="relative w-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600 bg-black">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 z-20 bg-red-600 text-white rounded-full p-1"
          aria-label="Close video"
        >
          <X size={18} />
        </button>

        {/* Video - local file, no iframe */}
        <div className="relative w-full pt-[177%]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/videoplayback.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
          <p className="text-white text-center text-sm font-semibold">
            Looking for Website?
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoPopup
