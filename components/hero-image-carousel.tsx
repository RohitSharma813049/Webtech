"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"

interface HeroImage {
  src: string
  alt: string
  label: string
  sub?: string
}

interface HeroImageCarouselProps {
  images: HeroImage[]
}

const STACK = [
  { rotate: 0,   x: 0,   y: 0,   scale: 1.0,  shadow: "0 20px 60px rgba(0,0,0,0.38), 0 8px 24px rgba(0,0,0,0.22)" },
  { rotate: -13, x: -48, y: -10, scale: 0.88, shadow: "0 10px 30px rgba(0,0,0,0.22)" },
  { rotate: 11,  x: 48,  y: -10, scale: 0.88, shadow: "0 10px 30px rgba(0,0,0,0.22)" },
  { rotate: 7,   x: -28, y: 24,  scale: 0.82, shadow: "0 6px 18px rgba(0,0,0,0.16)" },
  { rotate: -9,  x: 28,  y: 24,  scale: 0.82, shadow: "0 6px 18px rgba(0,0,0,0.16)" },
]

export function HeroImageCarousel({ images }: HeroImageCarouselProps) {
  const [topIndex, setTopIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)

  const startX = useRef(0)
  const total = images.length

  const advance = useCallback(
    (dir: 1 | -1) => {
      setTopIndex((prev) => (prev + dir + total) % total)
    },
    [total]
  )

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX
    setDragging(true)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return
      setDragX(e.clientX - startX.current)
    }
    const onMouseUp = () => {
      if (!dragging) return
      setDragX((dx) => {
        if (Math.abs(dx) > 38) advance(dx < 0 ? 1 : -1)
        return 0
      })
      setDragging(false)
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [dragging, advance])

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    setDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return
    setDragX(e.touches[0].clientX - startX.current)
  }

  const onTouchEnd = () => {
    if (Math.abs(dragX) > 38) advance(dragX < 0 ? 1 : -1)
    setDragX(0)
    setDragging(false)
  }

  return (
    <div
      className="flex flex-col items-center gap-6 py-8 select-none"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Stage */}
      <div
        className="relative"
        style={{ width: 200, height: 360, cursor: dragging ? "grabbing" : "grab", touchAction: "pan-y" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((image, i) => {
          const stackPos = (i - topIndex + total) % total
          const isTop = stackPos === 0
          const cfg = STACK[Math.min(stackPos, STACK.length - 1)]
          const tx = isTop ? cfg.x + (dragging ? dragX * 0.45 : 0) : cfg.x

          return (
            <div
              key={image.src}
              className="absolute overflow-hidden"
              style={{
                width: 200,
                height: 320,
                top: "50%",
                left: "50%",
                marginTop: -160,
                marginLeft: -100,
                borderRadius: 20,
                border: "1.5px solid rgba(255,255,255,0.22)",
                zIndex: total - stackPos,
                opacity: stackPos > 4 ? 0 : 1,
                boxShadow: cfg.shadow,
                transform: `translate(${tx}px, ${cfg.y}px) rotate(${cfg.rotate}deg) scale(${cfg.scale})`,
                transition: dragging && isTop ? "none" : "all 0.42s cubic-bezier(0.34,1.1,0.64,1)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="200px"
                className="object-contain"
                priority={isTop}
                draggable={false}
              />

              {isTop && (
                <div
                  className="absolute inset-x-0 bottom-0 p-3.5"
                  style={{
                    paddingTop: 36,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                >
                  <span
                    className="block text-white text-[15px] font-semibold tracking-[0.01em]"
                    style={{
                      textShadow:
                        "0 1px 3px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    {image.label}
                  </span>
                  {image.sub && (
                    <span
                      className="block text-white/80 text-[11px] font-normal mt-0.5 uppercase tracking-[0.04em]"
                      style={{
                        textShadow:
                          "0 1px 4px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.7)",
                      }}
                    >
                      {image.sub}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-[7px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setTopIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === topIndex ? 22 : 6,
              background: i === topIndex ? "var(--color-text-primary, #000)" : "rgba(128,128,128,0.4)",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <div className="flex gap-2.5">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            onClick={() => advance(dir)}
            aria-label={dir === -1 ? "Previous" : "Next"}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-900 hover:bg-black/5 active:scale-95"
            style={{
              border: "0.5px solid rgba(128,128,128,0.3)",
              background: "transparent",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            {dir === -1 ? "‹" : "›"}
          </button>
        ))}
      </div>
    </div>
  )
}