"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Gift,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Handshake,
  Award,
  Target,
  Percent,
  ArrowRight,
  HelpCircle,
} from "lucide-react"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { CTASection } from "@/components/cta-section"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    referralName: "",
    referralEmail: "",
    referralPhone: "",
    projectDetails: "",
  })

  const [partnerFormData, setPartnerFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  })

  const [earnFormData, setEarnFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    referralName: "",
    referralEmail: "",
    referralPhone: "",
    projectDetails: "",
  })

  const [openPartner, setOpenPartner] = useState(false)
  const [openEarn, setOpenEarn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*New Referral Submission*%0A%0A*Your Information:*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0A%0A*Referral Information:*%0AName: ${formData.referralName}%0AEmail: ${formData.referralEmail}%0APhone: ${formData.referralPhone}%0AProject Details: ${formData.projectDetails}`
    window.open(`https://wa.me/918860876087?text=${message}`, "_blank")
  }

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Become a Partner Request*%0A%0A*Name:* ${partnerFormData.name}%0A*Email:* ${partnerFormData.email}%0A*Phone:* ${partnerFormData.phone}%0A*Company:* ${partnerFormData.company}%0A*Industry:* ${partnerFormData.industry}%0A*Message:* ${partnerFormData.message}`
    window.open(`https://wa.me/918860876087?text=${message}`, "_blank")
    setOpenPartner(false)
    setPartnerFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" })
  }

  const handleEarnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Refer & Earn Submission*%0A%0A*Your Information:*%0AName: ${earnFormData.yourName}%0AEmail: ${earnFormData.yourEmail}%0APhone: ${earnFormData.yourPhone}%0A%0A*Referral Information:*%0AName: ${earnFormData.referralName}%0AEmail: ${earnFormData.referralEmail}%0APhone: ${earnFormData.referralPhone}%0AProject Details: ${earnFormData.projectDetails}`
    window.open(`https://wa.me/918860876087?text=${message}`, "_blank")
    setOpenEarn(false)
    setEarnFormData({
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      referralName: "",
      referralEmail: "",
      referralPhone: "",
      projectDetails: "",
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
     

      {/* Hero Section */}

                  <HeroSection
                    title="Referral Program"
                    titleHighlight="Earn Rewards by Referring Clients"
                    description="  Join our referral partner program and get exclusive discounts on your projects while helping others
                discover our exceptional services."
                    primaryCTA={{ label: "Start Your Project", href: "/contact" }}
                    secondaryCTA={{ label: "Our Services", href: "/services" }}
                    showImages={true}
                  />
                  
{/* Benefits Section */}
<section className="py-20 bg-background overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <Award className="w-4 h-4 mr-2" />
        Program Benefits
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
        Why Join Our Referral Program?
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Unlock exclusive benefits and rewards while helping businesses transform digitally
      </p>
    </div>

    {/* Carousel */}
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-4 cursor-grab active:cursor-grabbing">
        {/* Card 1 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Percent className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Generous Discounts
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Get 10-20% discount on your own projects for every successful referral.
                More referrals, more savings!
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Card 2 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Cash Rewards
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Prefer cash? Receive monetary rewards based on the project value
                of your successful referrals.
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Card 3 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Growing Benefits
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Your rewards increase with more referrals. Become a VIP partner
                with exclusive perks and priority service.
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Card 4 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Easy Process
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Simple referral process with no complicated terms.
                Just refer, and we handle the rest professionally.
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Card 5 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                No Limits
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Refer as many clients as you want. There's no cap on the rewards
                you can earn through referrals.
              </p>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Card 6 */}
        <CarouselItem className="pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Dedicated Support
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Get dedicated account management and priority support for all
                your referral program queries.
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious className="hidden lg:flex -left-5" />

      <CarouselNext className="hidden lg:flex -right-5" />
    </Carousel>
  </div>
</section>
      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Get started in 3 easy steps and start earning rewards
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Refer a Client",
                description:
                  "Submit the referral form with your details and the potential client's information. We'll reach out to them promptly.",
                image: "/image/new-images/Refer-a-client.webp",
              },
              {
                step: "02",
                title: "We Convert",
                description:
                  "Our team connects with your referral, understands their needs, and provides a tailored solution that wins them over.",
                image: "/image/new-images/we-convert.webp",
              },
            {
  step: "03",
  title: "Earn 10% Commission",
  description:
    "Once the project is confirmed, you receive your commission either as discounts on your projects or cash payments.",
  image: "/image/new-images/Earn10commission.webp",
}
            ].map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                  {step.step}
                </div>
                <div className="relative h-48 overflow-hidden rounded-t-lg mt-10">
                  <Image
                    src={step.image || "/seo-analytics-dashboard.webp"}
                    alt={step.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HeroSection
        title="Partner with"
        titleHighlight="Us Today"
        description="Join our growing network of partners and affiliates. Together we're helping businesses transform and grow in the digital world."
        primaryCTA={{ label: "Apply as Partner", href: "#partner" }}
        secondaryCTA={{ label: "Contact Support", href: "/contact" }}
        showImages={true}
      />

      {/* Referral Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
                <Handshake className="w-4 h-4 mr-2" />
                Get Started
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Submit a Referral</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Fill out the form below to refer a client and start earning rewards
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Your Information</h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Your Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Your Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold mb-6">Referral Information</h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="referralName">Referral Name *</Label>
                        <Input
                          id="referralName"
                          name="referralName"
                          placeholder="Jane Smith"
                          required
                          value={formData.referralName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referralEmail">Referral Email *</Label>
                        <Input
                          id="referralEmail"
                          name="referralEmail"
                          type="email"
                          placeholder="referral@example.com"
                          required
                          value={formData.referralEmail}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2 lg:col-span-2">
                        <Label htmlFor="referralPhone">Referral Phone *</Label>
                        <Input
                          id="referralPhone"
                          name="referralPhone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.referralPhone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2 lg:col-span-2">
                        <Label htmlFor="projectDetails">Project Details</Label>
                        <Textarea
                          id="projectDetails"
                          name="projectDetails"
                          placeholder="Tell us about the potential client's project requirements..."
                          rows={4}
                          value={formData.projectDetails}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full rounded-full text-lg py-6">
                      Submit Referral <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
              <Users className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">What Our Partners Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Hear from partners who have benefited from our referral program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Suresh Malhotra",
                role: "Business Consultant",
                content:
                  "I've referred 5 clients so far and earned significant discounts on my own website redesign. The process is transparent and rewards are prompt!",
                image: "/professional-indian-businessman.webp",
                earned: "₹50,000 in Discounts",
              },
              {
                name: "Kavita Reddy",
                role: "Marketing Professional",
                content:
                  "The referral program is fantastic! I earned cash rewards that helped me invest in additional marketing services. Win-win for everyone!",
                image: "/indian-woman-entrepreneur.webp",
                earned: "₹35,000 Cash Rewards",
              },
              {
                name: "Arjun Kapoor",
                role: "Entrepreneur",
                content:
                  "Best referral program I've been part of. Simple process, great rewards, and the team treats referred clients with utmost professionalism.",
                image: "/professional-indian-male-executive.webp",
                earned: "₹75,000 in Benefits",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-green-600">{testimonial.earned}</Badge>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.content}</p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/seo-analytics-dashboard.webp"}
                        alt={testimonial.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Everything you need to know about our referral program
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How does the referral program work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Simply refer a client using our referral form. Our team will contact them and work on converting them.
                  Once they sign up for our services, you'll receive your reward either as a discount on your next
                  project or as cash.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What rewards can I earn from referrals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You can earn 10-20% discount on your own projects or receive cash rewards based on the project value.
                  The more referrals you make, the higher your rewards!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Is there a limit to how many clients I can refer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No! There's no limit. You can refer as many clients as you'd like, and you'll earn rewards for each
                  successful conversion. The more you refer, the more you earn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  When will I receive my rewards?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Rewards are processed once the referred client signs a contract and makes their first payment. You'll
                  be notified about your reward eligibility, and you can choose how you'd like to redeem it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Can I refer clients from any industry?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! We work with businesses across all industries - from e-commerce and healthcare to education and
                  real estate. Any business looking for digital services can be referred.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How do I track my referrals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Once you submit a referral, our team will keep you updated on the status. You can also contact our
                  dedicated support team anytime to check on your referral status and pending rewards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What makes your referral program different?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our program offers flexibility - choose between project discounts or cash rewards. Plus, we have no
                  caps on referrals, offer growing benefits with more referrals, and provide dedicated support
                  throughout the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-background rounded-lg border-2 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do I need to be an existing client to participate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No! Anyone can join our referral program - existing clients, business associates, friends, or anyone
                  who knows businesses that could benefit from our services. Everyone is welcome!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
