"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { SectionCarousel } from "@/components/section-carousel"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, DollarSign, Sparkles, AlertCircle, Settings } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { PricingSection } from "@/components/pricing-section"
import { individualPricingData } from "@/lib/pricing-data"

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
}

// Pricing data moved to lib/pricing-data.ts

const pricingFaqs = [
  {
    question: "Are these prices fixed or can they change?",
    answer:
      "These prices are estimative and tentative. The final cost may vary based on your specific requirements, feature complexity, project scope, and timeline. We recommend scheduling a consultation to get an accurate quote tailored to your needs.",
  },
  {
    question: "What factors affect the final pricing?",
    answer:
      "Several factors influence the final cost including: complexity of features, integration requirements, design customization level, number of pages/screens, third-party service integrations, ongoing maintenance needs, and project timeline. We provide detailed quotes after understanding your complete requirements.",
  },
  {
    question: "Do you offer custom pricing plans?",
    answer:
      "Yes! We understand that every business has unique needs. Contact us to discuss your specific requirements, and we'll create a custom plan that perfectly fits your budget and objectives. Our team will work with you to find the best solution.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We typically work with a milestone-based payment structure: 30% advance payment, 40% on project midpoint/demo, and 30% on final delivery. For monthly retainer services, we offer flexible payment options. Payment terms can be discussed and customized based on project scope.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No hidden costs! We believe in transparent pricing. However, costs for third-party services (hosting, domain, premium plugins, API subscriptions) are typically separate and will be clearly communicated upfront. We provide detailed breakdowns of all costs involved.",
  },
  {
    question: "What's included in the maintenance plans?",
    answer:
      "Our maintenance plans include: regular backups, security updates, bug fixes, minor content updates, performance optimization, uptime monitoring, and technical support. The scope varies by plan tier. We can customize maintenance packages based on your specific needs.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "For ongoing services like digital marketing and SaaS, you can upgrade or downgrade your plan at any time. For development projects, we can add new features or scale the solution as your business grows. Our flexible approach ensures we grow with you.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "For development projects, refunds are evaluated on a case-by-case basis depending on the project stage. For monthly services, you can cancel with 30 days notice. We're committed to client satisfaction and will work with you to resolve any concerns. Our terms and conditions have complete details.",
  },
]

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState("Digital Marketing")

  return (
    <div className="min-h-screen">
     

      <HeroSection
        title="Price"
        titleHighlight="Plans"
        description="Explore how we've helped businesses across various industries achieve their digital transformation goals with our proven strategies and expert execution."
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
        showImages={true}
      />

 

      {/* Service Category Pricing Section */}
      <PricingSection />

      {/* Individual Services Pricing Section */}
      <PricingSection
        title="Pricing by Individual Services"
        description="Explore pricing for specific services to build your custom solution"
        badgeText={
          <span className="flex items-center">
            <DollarSign className="w-4 h-4 mr-2" />
            Individual Services
          </span>
        }
        data={individualPricingData}
        defaultTab="SEO"
      />
     <HeroSection
        title="Ready to Invest"
        titleHighlight="in Your Growth?"
        description="Our flexible pricing plans are designed to fit businesses of all sizes. Get started today and scale as you grow with our transparent, no-hassle pricing."
        primaryCTA={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCTA={{ label: "Customize Plan", href: "#customize" }}
        showImages={true}
      />

      {/* Important Notes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-500/20 bg-amber-50/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Important Pricing Information</h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        <strong className="text-foreground">Estimative & Tentative Pricing:</strong> All prices listed
                        above are indicative and subject to change based on your specific project requirements, feature
                        complexity, and scope of work.
                      </p>
                      <p>
                        <strong className="text-foreground">Project Customization:</strong> The final cost will be
                        determined after a thorough analysis of your requirements including design complexity, number of
                        features, integrations needed, and timeline expectations.
                      </p>
                      <p>
                        <strong className="text-foreground">Feature Intensity:</strong> Projects requiring advanced
                        features, complex integrations, custom development, or extensive customization may have
                        different pricing structures.
                      </p>
                      <p>
                        <strong className="text-foreground">Accurate Quote:</strong> We recommend scheduling a free
                        consultation to discuss your specific needs and receive a detailed, accurate quote tailored to
                        your project.
                      </p>
                    </div>
                  </div>
                </div>
         <div className="mt-6 pt-6 border-t border-border">
  <EnquiryPopup
    trigger={
      <Button
        size="lg"
        className="w-full lg:w-auto bg-[#1f0159] hover:bg-[#2d0a7a] text-white"
      >
        Get Accurate Quote
      </Button>
    }
  />
</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
   
      {/* FAQs Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                FAQs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Pricing & Plans Questions</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Common questions about our pricing, plans, and project requirements
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-base pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Still have questions about pricing?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href="https://wa.me/918860876087?text=Hi! I have questions about pricing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

    </div>
  )
}
