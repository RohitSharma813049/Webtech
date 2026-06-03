"use client"

import { useState } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/lib/faq-data"
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("General")

  return (
    <div className="min-h-screen">
     
      <HeroSection
        title="Frequently Asked "
        titleHighlight="Questions?"
        description="Have more questions? Our expert team is ready to help you find the perfect solution for your business needs and challenges."
        primaryCTA={{ label: "Schedule Demo", href: "/contact" }}
        secondaryCTA={{ label: "Chat with Us", href: "https://wa.me/918860876087" }}
        showImages={true}
      />


      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 lg:grid-cols-6 mb-12 h-auto p-2 gap-2">
              {faqData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className="text-sm lg:text-base py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Side - Category Image */}
                  <div className="lg:col-span-1">
                    <Card className="sticky top-24 overflow-hidden">
                      <div className="relative h-64 lg:h-80">
                        <Image
                          src={`/image/new-images/${category.category.toLowerCase().replace(/ /g, "-")}-faq.webp`}
                          alt={category.category}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                            <p className="text-white/90 text-sm">{category.faqs.length} Questions</p>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-4">Still have questions?</h4>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                            <a href="tel:+918860876087">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Us
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                            <a href="https://wa.me/918860876087" target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                            <a href="mailto:info@webeside.in">
                              <Mail className="w-4 h-4 mr-2" />
                              Email Us
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Side - FAQ Accordion */}
                  <div className="lg:col-span-2">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors bg-card"
                        >
                          <AccordionTrigger className="text-left py-6 hover:no-underline">
                            <span className="font-semibold text-lg pr-4">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
