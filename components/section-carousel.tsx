"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionCarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  itemClassName?: string
}

export function SectionCarousel<T>({ items, renderItem, itemClassName }: SectionCarouselProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [items])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative group/carousel">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={itemClassName || "flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {canScrollLeft && (
        <Button
          size="icon"
          variant="outline"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <Button
          size="icon"
          variant="outline"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      )}

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
