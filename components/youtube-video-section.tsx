"use client"

import { memo, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const youtubeVideos = [
  {
    id: "OxQSXzwZybs",
    title: "Website Development Services",
    category: "Development",
  },
  {
    id: "TsN_msMVuPI",
    title: "Digital Marketing Solutions",
    category: "Marketing",
  },
  {
    id: "tdVjr83PwBQ",
    title: "Mobile App Development",
    category: "Development",
  },
  {
    id: "QYg_QJQWf0M",
    title: "SEO & Growth Strategies",
    category: "Marketing",
  },
  {
    id: "dnonhuYr6n8",
    title: "E-commerce Solutions",
    category: "Development",
  },
]

export const YouTubeVideoSection = memo(function YouTubeVideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % youtubeVideos.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length)
  }, [])

  const handlePlayVideo = useCallback((videoId: string) => {
    setPlayingVideo(videoId)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            Our Work
          </Badge>
          <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            See Our Projects in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Watch how we transform businesses with our digital solutions
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[9/16] bg-black">
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16"
                        onClick={() => handlePlayVideo(video.id)}
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <Badge variant="secondary" className="mb-2">
                        {video.category}
                      </Badge>
                      <h3 className="text-white font-semibold text-sm">
                        {video.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {youtubeVideos.map((video) => (
                  <div key={video.id} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden">
                      <div className="relative aspect-[9/16] bg-black">
                        {playingVideo === video.id ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0`}
                            title={video.title}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <Image
                              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                              alt={video.title}
                              fill
                              className="object-contain"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <Button
                                size="lg"
                                className="rounded-full w-14 h-14"
                                onClick={() => handlePlayVideo(video.id)}
                              >
                                <Play className="w-6 h-6" />
                              </Button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                              <Badge variant="secondary" className="mb-1 text-xs">
                                {video.category}
                              </Badge>
                              <h3 className="text-white font-semibold text-sm">
                                {video.title}
                              </h3>
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {youtubeVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

YouTubeVideoSection.displayName = "YouTubeVideoSection"
