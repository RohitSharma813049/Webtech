"use client"

import type React from "react"
import { memo, useCallback, useMemo, useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { servicesData } from "@/lib/services-data"

interface EnquiryFormData {
  name: string
  number: string
  email: string
  businessType: string
  serviceCategory: string
  service: string
  budget: string
  timeline: string
}

interface EnquiryPopupProps {
  trigger?: React.ReactNode
  preselectedService?: string
  preselectedCategory?: string
}

/* ------------------------------- CONSTANTS ------------------------------ */

const BUSINESS_TYPES = [
  "E-commerce",
  "Service Provider",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education",
  "Real Estate",
  "Technology",
  "Hospitality",
  "Others",
]

const BUDGET_RANGES = [
  "10k-20k",
  "20k-30k",
  "30k-40k",
  "40k-50k",
  "50k-70k",
  "70k-100k",
  "100k-150k",
  "150k-200k",
  "Above 200k",
]

const TIMELINES = [
  "Immediate",
  "Within a week",
  "Within a month",
  "Just exploring",
]

const initialFormData: EnquiryFormData = {
  name: "",
  number: "",
  email: "",
  businessType: "",
  serviceCategory: "",
  service: "",
  budget: "",
  timeline: "",
}

/* ---------------------------- MAIN COMPONENT ---------------------------- */

export const EnquiryPopup = memo(function EnquiryPopup({
  trigger,
  preselectedService,
  preselectedCategory,
}: EnquiryPopupProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    ...initialFormData,
    serviceCategory: preselectedCategory || "",
    service: preselectedService || "",
  })

  const [selectedCategory, setSelectedCategory] = useState<string>(
    preselectedCategory || "",
  )

  const [open, setOpen] = useState(false)

  /* ------------------------------- EFFECTS ------------------------------ */

  useEffect(() => {
    if (preselectedCategory && preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: preselectedCategory,
        service: preselectedService,
      }))

      setSelectedCategory(preselectedCategory)
    }
  }, [preselectedCategory, preselectedService])

  /* --------------------------- MEMOIZED DATA --------------------------- */

  const availableServices = useMemo(
    () =>
      servicesData.find((cat) => cat.name === selectedCategory)?.services || [],
    [selectedCategory],
  )

  /* ---------------------------- FORM HANDLERS --------------------------- */

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        name: e.target.value,
      }))
    },
    [],
  )

  const handleNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        number: e.target.value,
      }))
    },
    [],
  )

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        email: e.target.value,
      }))
    },
    [],
  )

  const handleBusinessTypeChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      businessType: value,
    }))
  }, [])

  const handleServiceCategoryChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceCategory: value,
      service: "",
    }))

    setSelectedCategory(value)
  }, [])

  const handleServiceChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }, [])

  const handleBudgetChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: value,
    }))
  }, [])

  const handleTimelineChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      timeline: value,
    }))
  }, [])

  /* ----------------------------- SUBMIT FORM ---------------------------- */

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      const message = `*New Service Enquiry*%0A%0A*Name:* ${formData.name}%0A*Number:* ${formData.number}%0A*Email:* ${formData.email}%0A*Business Type:* ${formData.businessType}%0A*Service Category:* ${formData.serviceCategory}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Looking to Close:* ${formData.timeline}`

      window.open(
        `https://wa.me/918860876087?text=${message}`,
        "_blank",
      )

      setOpen(false)

      setFormData(initialFormData)

      setSelectedCategory("")
    },
    [formData],
  )

  /* -------------------------------- RETURN ------------------------------ */

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Get Started</Button>}
      </DialogTrigger>

      <DialogContent
        className="
          z-[99999]
          max-w-sm
          max-h-[85vh]
          overflow-y-auto
          border
          bg-background
          fixed
          top-[50%]
          left-[50%]
          translate-x-[-50%]
          translate-y-[-50%]
          rounded-2xl
          shadow-2xl
          p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Service Enquiry
          </DialogTitle>

          <DialogDescription>
            Fill in the details and we&apos;ll contact you on WhatsApp
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          {/* NAME */}
          <Input
            placeholder="Name *"
            value={formData.name}
            onChange={handleNameChange}
            required
          />

          {/* PHONE */}
          <Input
            placeholder="Phone Number *"
            type="tel"
            value={formData.number}
            onChange={handleNumberChange}
            required
          />

          {/* EMAIL */}
          <Input
            placeholder="Email *"
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            required
          />

          {/* BUSINESS TYPE */}
          <Select
            value={formData.businessType}
            onValueChange={handleBusinessTypeChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Business Type *" />
            </SelectTrigger>

            <SelectContent className="z-[99999]">
              {BUSINESS_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* CATEGORY */}
          <Select
            value={formData.serviceCategory}
            onValueChange={handleServiceCategoryChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Service Category *" />
            </SelectTrigger>

            <SelectContent className="z-[99999]">
              {servicesData.map((category) => (
                <SelectItem
                  key={category.name}
                  value={category.name}
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* SERVICES */}
          <Select
            value={formData.service}
            onValueChange={handleServiceChange}
            disabled={!selectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Service *" />
            </SelectTrigger>

            <SelectContent className="z-[99999]">
              {availableServices.map((service) => (
                <SelectItem
                  key={service.id}
                  value={service.title}
                >
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* BUDGET */}
          <Select
            value={formData.budget}
            onValueChange={handleBudgetChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Budget *" />
            </SelectTrigger>

            <SelectContent className="z-[99999]">
              {BUDGET_RANGES.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* TIMELINE */}
          <Select
            value={formData.timeline}
            onValueChange={handleTimelineChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Looking to Close *" />
            </SelectTrigger>

            <SelectContent className="z-[99999]">
              {TIMELINES.map((timeline) => (
                <SelectItem
                  key={timeline}
                  value={timeline}
                >
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full bg-[#1f0159] hover:bg-[#2e0b80]"
          >
            Submit Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
})

EnquiryPopup.displayName = "EnquiryPopup"