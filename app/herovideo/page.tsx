"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { 
  Play, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Video, 
  Filter,
  Monitor,
  Calendar,
  Layers
} from "lucide-react"

// Video catalog representing the mp4 files in public/videos
const videoCatalog = [
  {
    id: "marketing-expert",
    videoSrc: "/videos/Launch Your Online Business with Expert Web Design, SEO, & Ads! _ Website Design _ Webeside Agency.mp4",
    title: "Expert Web Design, SEO & Ads Launch",
    category: "Digital Marketing",
    description: "Launch your business online with our end-to-end digital marketing solutions, including optimized web designs, search engine optimization (SEO), and high-ROI ad setups.",
    tags: ["SEO", "Google Ads", "Web Design", "Marketing"],
    features: ["Conversion-Optimized Landing Page", "Targeted Ad Campaigns", "Keyword SEO Optimization"],
    businessType: "Any Growth-focused Business"
  },
  {
    id: "food-stunning",
    videoSrc: "/videos/Boost Your Food Business with a Stunning Website by Webeside _ Website Development _ Faridabad.mp4",
    title: "Stunning Food Business Website",
    category: "Food Business",
    description: "Boost your restaurant or food outlet sales with a highly interactive, fast, and gorgeous website complete with online ordering, menus, and booking integrations.",
    tags: ["E-commerce", "Restaurant Page", "Faridabad", "Ordering System"],
    features: ["Digital Menu Card", "Online Direct Checkout", "Local Delivery Radius Integration"],
    businessType: "Restaurants, Cafes & Bakeries"
  },
  {
    id: "lms-learners",
    videoSrc: "/videos/Struggling to Manage Your Learners_ Discover the Power of Our LMS Today!.mp4",
    title: "Powerful Learning Management System (LMS)",
    category: "LMS Solutions",
    description: "Discover a seamless way to manage your learners, courses, assessments, and certifications. Built with modular courses, video lectures, and live class triggers.",
    tags: ["EdTech", "LMS", "Course Portal", "Student Tracker"],
    features: ["Modular Video Lectures", "Student Progress Dashboard", "Automatic Certification"],
    businessType: "Institutes, Educators & Coaches"
  },
  {
    id: "travel-perfect",
    videoSrc: "/videos/Create Your Perfect Tour & Travel Packages Website with Webeside _ Website Development _ Faridabad.mp4",
    title: "Perfect Tour & Travel Packages Site",
    category: "Tour & Travel",
    description: "Build custom tours, package builders, booking forms, and visual itineraries that will turn site visitors into travelers. Sleek filterable search included.",
    tags: ["Tour packages", "Booking Engine", "Itinerary Builder"],
    features: ["Custom Package Customizer", "Integrated Payment Gateway", "Dynamic Itinerary Slider"],
    businessType: "Travel Agents & Tour Operators"
  },
  {
    id: "food-online",
    videoSrc: "/videos/Take Your Food Business Online Today _ Website Development _ Webeside Agency _ Faridabad.mp4",
    title: "Online Food Delivery & Ordering Portal",
    category: "Food Business",
    description: "Take absolute control of your delivery business by eliminating middle-man fees. Get your direct food delivery app and web portal designed by experts.",
    tags: ["Food App", "No-commission Delivery", "Order Dashboard"],
    features: ["Kitchen Order Dashboard", "Realtime WhatsApp Order Alerts", "Coupon & Promo Codes Engine"],
    businessType: "Cloud Kitchens & Food Chains"
  },
  {
    id: "travel-start",
    videoSrc: "/videos/Start Your Tour & Travel Website with Webeside! _ Website Design _ Travel Website _ Webeside Agency.mp4",
    title: "Tour & Travel Startup Website",
    category: "Tour & Travel",
    description: "A lightweight, beautiful, and conversion-friendly layout designed specifically to launch travel agencies and holiday organizers in minutes.",
    tags: ["Startup", "Agency Web", "Travel Leads"],
    features: ["Quick Quote Form", "Social Reviews Integration", "Interactive Destination Grid"],
    businessType: "Travel Startups & Guides"
  },
  {
    id: "home-video-main",
    videoSrc: "/videos/homevideo.mp4",
    title: "Webeside Tech Primary Agency Showreel",
    category: "Our Story",
    description: "Explore who we are, our core competencies, and how we empower global brands by building futuristic web applications and bespoke marketing funnels.",
    tags: ["Agency Showreel", "Full Stack", "Brand Strategy"],
    features: ["360 Degree Digital Partner", "10+ Years of Combined Excellence", "Highly Scalable Architecture"],
    businessType: "All Portfolios"
  },
  {
    id: "videoplayback-show",
    videoSrc: "/videos/videoplayback.mp4",
    title: "Webeside Technology Agency Overview",
    category: "Our Story",
    description: "A comprehensive look at our design process, development sprints, and quality assurance workflows that make us the leading agency in Faridabad.",
    tags: ["Overview", "Workflow", "Faridabad Development"],
    features: ["Agile Development Sprints", "State of the Art Tech Stack", "Dedicated Support Desk"],
    businessType: "General Corporate Overview"
  }
]

const categories = ["All", "Digital Marketing", "Food Business", "LMS Solutions", "Tour & Travel", "Our Story"]

export default function HeroVideoHub() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeDialogVideo, setActiveDialogVideo] = useState<string | null>(null)

  const filteredVideos = videoCatalog.filter(
    (video) => selectedCategory === "All" || video.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-background">
     
      {/* Reusable Hero Section configured with videoBgSrc */}
      <HeroSection
        title="Our Services in Action."
        titleHighlight="Video Hub"
        description="Watch quick video walk-throughs of the platforms, food portals, travel booking sites, and LMS systems we build. Tap any card to watch and explore details."
        primaryCTA={{ label: "Contact Us Now", href: "/contact" }}
        secondaryCTA={{ label: "Get Quote", type: "enquiry" }}
        videoBgSrc="/videos/homevideo.mp4"
      />

      {/* Main Filter and Catalog Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/15 relative">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-border pb-6">
            <div>
              <Badge className="mb-2 px-3 py-1" variant="secondary">
                <Video className="w-3.5 h-3.5 mr-1 text-primary" />
                Videography
              </Badge>
              <h2 className="text-3xl font-bold text-brand">Browse Our Video Showcase</h2>
              <p className="text-sm text-muted-foreground mt-1">Select a category to view custom demonstrations</p>
            </div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-5 py-1 text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Video Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id} 
                className="group relative overflow-hidden flex flex-col h-full bg-white border-2 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 rounded-2xl golden-hover cursor-golden"
              >
                {/* Video Preview Container */}
                <div className="relative aspect-[9/16] bg-black overflow-hidden">
                  <video 
                    src={video.videoSrc} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="metadata" 
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

                  {/* Play Button Overlay triggers Dialogue Modal */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button 
                        onClick={() => setActiveDialogVideo(video.videoSrc)}
                        className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl p-0 overflow-hidden bg-black border border-amber-500/20 rounded-3xl aspect-[9/16] max-h-[85vh]">
                      {activeDialogVideo && (
                        <video 
                          src={activeDialogVideo} 
                          controls 
                          autoPlay 
                          className="w-full h-full object-contain"
                        />
                      )}
                    </DialogContent>
                  </Dialog>

                  {/* Top Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none z-10 text-[10px]">
                    {video.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      <span>{video.businessType}</span>
                    </div>

                    <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>

                    {/* Features checklist */}
                    {/* <div className="space-y-1.5 pt-2">
                      {video.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div> */}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {video.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[9px] bg-secondary/50 font-normal">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-6">
                    <EnquiryPopup
                      preselectedCategory={video.category}
                      preselectedService={video.title}
                      trigger={
                        <Button size="sm" className="flex-1 text-xs">
                          <MessageCircle className="w-3.5 h-3.5 mr-1" />
                          Enquiry
                        </Button>
                      }
                    />

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent text-xs"
                      asChild
                    >
                      <a href="tel:+918860876087">
                        <Phone className="w-3.5 h-3.5 mr-1" />
                        Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
