"use client"

import { memo, useMemo } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Smartphone } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  description: string
  category: string
  businessType: string
  desktopVideoUrl?: string
  mobileVideoUrl?: string
  url: string
}

interface PortfolioCarouselProps {
  items: PortfolioItem[]
  getYouTubeEmbedUrl: (url: string) => string
}

export const PortfolioCarousel = memo(function PortfolioCarousel({ items, getYouTubeEmbedUrl }: PortfolioCarouselProps) {
  const memoizedItems = useMemo(() => items || [], [items])

  if (!memoizedItems.length) return null

  return (
    <div className="w-full lg:hidden py-6">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2">
          {memoizedItems.slice(0, 12).map((item) => (
            <CarouselItem key={item.id} className="pl-2 basis-[85%] sm:basis-[70%]">
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white border-none rounded-xl">
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                    className="absolute inset-0 w-full h-full scale-[1.05]"
                    allow="autoplay; encrypted-media"
                    title={`${item.title} Preview`}
                  ></iframe>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <Badge className="mb-2 bg-primary text-white border-none text-xs">{item.category}</Badge>
                    <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-white/90 text-xs mb-3 line-clamp-2">{item.description}</p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm"
                        >
                          <Smartphone className="w-3 h-3" />
                          Mobile View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                        <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                            <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                            <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                          </div>
                          <div className="absolute inset-0 w-full h-full bg-black">
                            <iframe
                              src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                              allow="autoplay; encrypted-media"
                              title={`${item.title} Mobile Preview`}
                            ></iframe>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 text-xs" variant="secondary">
                    {item.category}
                  </Badge>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-1">{item.businessType}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0 w-8 h-8" />
          <CarouselNext className="static translate-y-0 w-8 h-8" />
        </div>
      </Carousel>
    </div>
  )
})

PortfolioCarousel.displayName = "PortfolioCarousel"
