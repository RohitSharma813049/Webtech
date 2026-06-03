"use client"

import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import HeroVideoSection from "@/components/hero-video-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Briefcase,
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Phone,
  Users,
  FileText,
  DollarSign,
  GitBranch,
  ArrowRight,
} from "lucide-react"

const sitemapData = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", href: "/", description: "Welcome page with overview of services" },
      { name: "About Us", href: "/about", description: "Learn about our company and team" },
      { name: "Contact", href: "/contact", description: "Get in touch with us" },
      { name: "Portfolio", href: "/portfolio", description: "View our completed projects" },
      { name: "Blog", href: "/blog", description: "Read our latest articles and insights" },
      { name: "Pricing", href: "/pricing", description: "View pricing plans for all services" },
      { name: "Referral Program", href: "/referral", description: "Join our referral program and earn" },
    ],
  },
  {
    title: "Service Categories",
    icon: Briefcase,
    links: [
      { name: "All Services", href: "/services", description: "Browse all our services" },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "SEO, PPC, Social Media Marketing",
      },
      {
        name: "Website & App Development",
        href: "/services/website-app-development",
        description: "Web & mobile app development",
      },
      { name: "SaaS Services", href: "/services/saas-services", description: "Software as a Service solutions" },
      { name: "Designing Services", href: "/services/designing-services", description: "Logo, UI/UX, Branding" },
    ],
  },
  {
    title: "Digital Marketing Services",
    icon: TrendingUp,
    links: [
      { name: "SEO", href: "/services/digital-marketing#seo", description: "Search Engine Optimization" },
      { name: "Google Ads", href: "/services/digital-marketing#ppc", description: "Pay-Per-Click Advertising" },
      {
        name: "Social Media Marketing",
        href: "/services/digital-marketing#smm",
        description: "Social media management",
      },
      {
        name: "WhatsApp Marketing",
        href: "/services/digital-marketing#whatsapp",
        description: "Bulk WhatsApp campaigns",
      },
      {
        name: "Content Writing",
        href: "/services/digital-marketing#content",
        description: "Professional content creation",
      },
    ],
  },
  {
    title: "Development Services",
    icon: Code2,
    links: [
      {
        name: "Website Development",
        href: "/services/website-app-development#website",
        description: "Custom websites",
      },
      { name: "E-commerce", href: "/services/website-app-development#ecommerce", description: "Online stores" },
      { name: "Mobile Apps", href: "/services/website-app-development#mobile", description: "iOS & Android apps" },
      {
        name: "API Integration",
        href: "/services/website-app-development#api",
        description: "Third-party integrations",
      },
      {
        name: "Maintenance",
        href: "/services/website-app-development#maintenance",
        description: "Website maintenance",
      },
    ],
  },
  {
    title: "SaaS Solutions",
    icon: Cloud,
    links: [
      { name: "Gym Management", href: "/services/saas-services#gym", description: "GMS software" },
      { name: "HR Management", href: "/services/saas-services#hrms", description: "HRMS platform" },
      { name: "E-commerce SaaS", href: "/services/saas-services#ecommerce", description: "Ready-to-use store" },
      { name: "Learning Management", href: "/services/saas-services#lms", description: "LMS platform" },
      { name: "CRM System", href: "/services/saas-services#crm", description: "Customer management" },
    ],
  },
  {
    title: "Design Services",
    icon: Palette,
    links: [
      { name: "Logo Design", href: "/services/designing-services#logo", description: "Brand identity design" },
      { name: "UI/UX Design", href: "/services/designing-services#uiux", description: "User interface design" },
      {
        name: "Brochure Design",
        href: "/services/designing-services#brochure",
        description: "Print & digital brochures",
      },
      { name: "Banner Design", href: "/services/designing-services#banner", description: "Marketing banners" },
      { name: "Social Graphics", href: "/services/designing-services#social", description: "Social media graphics" },
    ],
  },
]

const howToUse = [
  {
    step: 1,
    title: "Browse Services",
    description: "Explore our service categories to find what you need",
    icon: Briefcase,
  },
  {
    step: 2,
    title: "View Portfolio",
    description: "Check out our completed projects for inspiration",
    icon: FileText,
  },
  {
    step: 3,
    title: "Check Pricing",
    description: "Review our transparent pricing plans",
    icon: DollarSign,
  },
  {
    step: 4,
    title: "Contact Us",
    description: "Get in touch to discuss your project",
    icon: Phone,
  },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
     

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.webp')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-2" variant="secondary">
              <GitBranch className="w-4 h-4 mr-2" />
              Website Sitemap
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Navigate Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Website</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Complete guide to all pages and services available on our website. Find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Use This Website</h2>
          <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howToUse.map((item) => (
              <Card key={item.step} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Links */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Site Structure</h2>
          <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sitemapData.map((section, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="group flex items-start gap-2 hover:text-primary transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                          <div>
                            <div className="font-semibold text-sm">{link.name}</div>
                            <div className="text-xs text-muted-foreground">{link.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Can't Find What You Need?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our team is here to help you navigate and find the perfect solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                </Link>
                <a href="tel:+918860876087">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Call Now
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
