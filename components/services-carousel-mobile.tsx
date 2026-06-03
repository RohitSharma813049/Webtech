"use client"

import { memo, useMemo, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { CheckCircle2, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceIcon } from "@/components/service-icon"
import { EnquiryPopup } from "@/components/enquiry-popup"

interface Service {
  id: number | string
  title: string
  description: string
  image: string
  features: string[]
  reactIcon?: string
}

interface ServiceCarouselProps {
  services: Service[]
  title?: string
  categoryName?: string
}

// Same stack geometry as HeroImageCarousel
const STACK = [
  { rotate:  1,  x:   0, y:   0, scale: 1.00 },
  { rotate: -11, x: -70, y: -35, scale: 0.88 },
  { rotate:   9, x:  65, y: -28, scale: 0.88 },
  { rotate:   6, x: -55, y:  45, scale: 0.82 },
  { rotate:  -8, x:  60, y:  42, scale: 0.82 },
  { rotate:   3, x:   8, y:  18, scale: 0.76 },
]

export const ServiceCarouselMobile = memo(function ServiceCarouselMobile({
  services,
  title,
  categoryName,
}: ServiceCarouselProps) {
  const memoizedServices = useMemo(() => services || [], [services])
  const total = memoizedServices.length

  const [topIndex, setTopIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const startY = useRef(0)
  const lockedAxis = useRef<"h" | "v" | null>(null)

  const advance = useCallback(
    (dir: 1 | -1) => setTopIndex((prev) => (prev + dir + total) % total),
    [total]
  )

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    startY.current = e.touches[0].clientY
    lockedAxis.current = null
    setDragging(true)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return
    const dx = e.touches[0].clientX - startX.current
    const dy = e.touches[0].clientY - startY.current
    if (!lockedAxis.current && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      lockedAxis.current = Math.abs(dx) >= Math.abs(dy) ? "h" : "v"
    }
    if (lockedAxis.current === "h") {
      e.preventDefault()
      setDragX(dx)
    }
  }
  const onTouchEnd = () => {
    if (lockedAxis.current === "h" && Math.abs(dragX) > 35) advance(dragX < 0 ? 1 : -1)
    setDragX(0)
    setDragging(false)
    lockedAxis.current = null
  }
  const onMouseDown = (e: React.MouseEvent) => { startX.current = e.clientX; setDragging(true) }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) setDragX(e.clientX - startX.current) }
  const onMouseUp = () => {
    if (dragging && Math.abs(dragX) > 35) advance(dragX < 0 ? 1 : -1)
    setDragX(0)
    setDragging(false)
  }

  if (!total) return null

  const current = memoizedServices[topIndex]

  return (
    <div className="w-full lg:hidden py-4 select-none">
      {title && (
        <h3 className="text-lg font-bold text-center mb-2 text-foreground">{title}</h3>
      )}

      {/* Stacked card swipe area */}
      <div
        className="relative mx-auto"
        style={{ height: 320, width: "100%", maxWidth: 340, touchAction: "pan-y" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {memoizedServices.map((service, i) => {
          const stackPos = (i - topIndex + total) % total
          const isTop = stackPos === 0
          const cfg = STACK[Math.min(stackPos, STACK.length - 1)]
          const tx = isTop ? cfg.x + (dragging ? dragX * 0.55 : 0) : cfg.x
          const rot = isTop ? cfg.rotate + (dragging ? dragX * 0.04 : 0) : cfg.rotate

          return (
            <div
              key={service.id}
              className="absolute rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 bg-card"
              style={{
                width: 220,
                height: 280,
                top: "50%",
                left: "50%",
                marginTop: -140,
                marginLeft: -110,
                zIndex: total - stackPos,
                opacity: stackPos > 4 ? 0 : 1,
                filter: `brightness(${isTop ? 1 : Math.max(0.55, 1 - stackPos * 0.14)})`,
                transform: `translate(${tx}px, ${cfg.y}px) rotate(${rot}deg) scale(${cfg.scale})`,
                transition:
                  isTop && dragging
                    ? "none"
                    : "transform 0.42s cubic-bezier(0.34,1.4,0.64,1), opacity 0.3s, filter 0.3s",
                cursor: isTop ? (dragging ? "grabbing" : "grab") : "default",
                willChange: "transform",
              }}
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.jpg"}
                  alt={service.title}
                  fill
                  className="object-contain bg-muted/20 pointer-events-none"
                  priority={isTop}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {service.reactIcon && (
                  <div className="absolute bottom-2 left-2 bg-primary/90 p-2 rounded-lg">
                    <ServiceIcon iconName={service.reactIcon} size="md" className="text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="text-sm font-bold leading-tight line-clamp-2 mb-1">{service.title}</p>
                <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                {isTop && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {service.features?.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* Swipe hint */}
        <div className="absolute top-2 right-4 z-50 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full pointer-events-none">
          Swipe
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3 mb-4">
        {memoizedServices.map((_, i) => (
          <button
            key={i}
            onClick={() => setTopIndex(i)}
            aria-label={`Go to service ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === topIndex ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Action buttons for top card */}
      <div className="flex gap-2 px-4 mt-1">
        <EnquiryPopup
          preselectedService={current.title}
          preselectedCategory={categoryName}
          trigger={
            <Button size="sm" className="flex-1 rounded-full text-xs">
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              Enquiry
            </Button>
          }
        />
        <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs bg-transparent" asChild>
          <a href="tel:+918860876087">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Call
          </a>
        </Button>
      </div>
    </div>
  )
})

ServiceCarouselMobile.displayName = "ServiceCarouselMobile"
