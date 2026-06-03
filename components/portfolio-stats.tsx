"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Globe, TrendingUp, Users, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatItem {
  icon: React.ReactNode
  end: number
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    end: 900,
    label: "Total Websites",
    suffix: "+",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    end: 300,
    label: "Ads & SEO Projects",
    suffix: "+",
  },
  {
    icon: <Users className="w-8 h-8" />,
    end: 100,
    label: "Social Media Managed",
    suffix: "+",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    end: 150,
    label: "Designing Projects",
    suffix: "+",
  },
]

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const increment = end / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary mb-2">
      {count}
      {suffix}
    </div>
  )
}

export function PortfolioStats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our Portfolio <span className="text-primary">By Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Delivering excellence across diverse digital projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8 text-center relative">
                {/* Icon container */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* Animated counter */}
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />

                {/* Label */}
                <div className="text-base lg:text-lg text-muted-foreground font-medium">{stat.label}</div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
