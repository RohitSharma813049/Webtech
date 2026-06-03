"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Sparkles, Settings } from "lucide-react"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { SectionCarousel } from "@/components/section-carousel"
import { pricingData, PricingPlan } from "@/lib/pricing-data"

interface PricingSectionProps {
  title?: string
  description?: string
  badgeText?: React.ReactNode
  data?: Record<string, PricingPlan[]>
  defaultTab?: string
  backgroundClass?: string
}

export function PricingSection({
  title = "Category-Wise Pricing",
  description = "Choose from our comprehensive service categories",
  badgeText = "Service Categories",
  data = pricingData,
  defaultTab = "SEO Services",
  backgroundClass = "bg-background"
}: PricingSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultTab)

  return (
    <section className={`py-20 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
            {badgeText}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {description}
          </p>
        </div>
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-16">
            <TabsList className="flex overflow-x-auto whitespace-nowrap scrollbar-hide snap-x justify-start h-auto p-2 bg-muted/50 w-full sm:flex-wrap">
              {Object.keys(data).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-3 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground snap-center flex-shrink-0"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <EnquiryPopup
              trigger={
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  <Settings className="w-5 h-5 mr-2" />
                  Customise Your Plan
                </Button>
              }
            />
          </div>

          {Object.entries(data).map(([category, plans]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                      plan.popular ? "border-primary border-2 scale-105" : "border-2"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-8 pt-8">
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => {
                          const message = `Hi, I'm interested in the ${plan.name} plan for ${category}. Can you provide more details?`
                          window.open(`https://wa.me/918860876087?text=${encodeURIComponent(message)}`, "_blank")
                        }}
                      >
                        Let's Talk
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="lg:hidden">
                <SectionCarousel
                  items={plans}
                  renderItem={(plan) => (
                    <Card className={`relative hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
                      plan.popular ? "border-primary border-2" : "border-2"
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                          <Badge className="bg-primary text-primary-foreground px-4 py-1">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pb-8 pt-8">
                        <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-6 flex-1 flex flex-col">
                        <ul className="space-y-3 flex-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={() => {
                            const message = `Hi, I'm interested in the ${plan.name} plan for ${category}. Can you provide more details?`
                            window.open(`https://wa.me/918860876087?text=${encodeURIComponent(message)}`, "_blank")
                          }}
                        >
                          Let's Talk
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
