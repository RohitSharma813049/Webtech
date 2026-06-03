"use client"

import type React from "react"
import { Sparkles } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { DiscountPopup } from "@/components/discount-popup"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `*New Enquiry from Website*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/918860876087?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to send your message.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
     
      <DiscountPopup serviceType="general" />

      <HeroSection
        title="Ready to Get"
        titleHighlight="Started?"
        description="Let's discuss your project, goals, and how we can help you succeed. Our team is ready to help you transform your ideas into reality."
        primaryCTA={{ label: "Schedule a Call", href: "tel:+918860876087" }}
        secondaryCTA={{ label: "Send Message", href: "#contact-form" }}
        showImages={true}
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                   <div className="space-y-4 flex-1">
                       <div>
                      <h3 className="font-semibold mb-2">Office Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Building 3H-47, NIT-3 Main Road, Above We Beside Library Faridabad 121001.
                      </p>
                    </div>
                     <div>
                      <h3 className="font-semibold mb-2">Office Address 2 </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gaur City Centre, 4 Murti Chowk, Gaur City 1, Ghaziabad, Uttar Pradesh 201318
                      </p>
                    </div>
                   </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone Numbers</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>+91-8860876087</p>
                        <p>+91-9220405922</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>info@webeside.in</p>
                        <p>hr@webeside.in</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <div className="mb-6">
                    <EnquiryPopup
                      trigger={
                        <Button size="lg" className="w-full lg:w-auto">
                          <MessageCircle className="mr-2 w-5 h-5" />
                          Quick Enquiry Form
                        </Button>
                      }
                    />
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9999999999"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Website Development Inquiry"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full lg:w-auto">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Find Us Here</h2>
              <p className="text-xl text-muted-foreground">Visit our office in Faridabad, Haryana</p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7402817294557!2d77.31232997506677!3d28.46211447577239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7e54cb73989%3A0xfc0f2da0c8c0af82!2sWEBESIDE%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1710340000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WB Tech Office Location"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
