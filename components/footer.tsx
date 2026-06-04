"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Linkedin,
  Youtube,
  Instagram,
  Phone,
  MapPin,
  Mail,
  ArrowUp,
  Home,
  Zap,
  Globe,
  Smartphone,
  ShoppingCart,
  BarChart2,
  Search,
  Palette,
  Tag,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FooterCollapsible } from "@/components/footer-collapsible"
import { useState, memo } from "react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
}

export const Footer = memo(function Footer() {
  const [activeTab, setActiveTab] = useState("home")

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const companyInfo = {
    name: "Webeside Technology",

    shortName: "WB TECH",

    description:
      "Your Digital Tech Partner specializes in Development, Designing, Marketing & Digital Management services. We provide Websites, Apps, Ecommerce, LMS, CRM, HRMS, SEO, Ads, Social Media, Branding & complete digital solutions.",

    gst: "GST: 06CEWPB0138N1Z8",

    address:
      "Building 3H-47, NIT-3 Main Road, Above We Beside Library Faridabad 121001.",

    address2:
      "Gaur City Centre, 4 Murti Chowk, Gaur City 1, Ghaziabad, Uttar Pradesh 201318",

    phone: "+91 8860876087",

    phone2: "+91 9220405922",

    email: "info@webeside.in",

    social: {
      linkedin: "https://www.linkedin.com/company/webesidetechnology/",

      youtube: "https://www.youtube.com/@WebesideTechnology",

      instagram: "https://www.instagram.com/webesidetechnology/",
    },
  }

  const brands = [
    {
      name: "Website Development",
      Icon: Globe,
    },

    {
      name: "App Development",
      Icon: Smartphone,
    },

    {
      name: "E-commerce Solutions",
      Icon: ShoppingCart,
    },

    {
      name: "Digital Marketing",
      Icon: BarChart2,
    },

    {
      name: "SEO Services",
      Icon: Search,
    },

    {
      name: "UI/UX Design",
      Icon: Palette,
    },
  ]

  const tags = [
    "Web Development Faridabad",
    "Digital Marketing Agency",
    "SEO Services India",
    "E-commerce Development",
    "Mobile App Development",
    "UI/UX Design",
    "Logo Design",
    "Social Media Marketing",
    "Google Ads Management",
    "WordPress Development",
    "React Development",
    "Next.js Website",
    "CRM Software",
    "HRMS Solutions",
    "LMS Platform",
    "Graphic Designing",
    "Google My Business",
    "Website Maintenance",
    "API Integration",
    "AI Chatbot Development",
  ]

  return (
    <footer className="bg-[rgb(31,1,89)] text-white mt-20 relative overflow-hidden">
      {/* Scroll To Top */}
      <div className="absolute -top-0 right-4 lg:right-8 z-20">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="
      w-10 h-10
      lg:w-12 lg:h-12
      rounded-full
      bg-blue-600
      hover:bg-blue-700
      shadow-2xl
      border
      border-white/10
    "
        >
          <ArrowUp className="w-4 h-4 lg:w-5 lg:h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* DESKTOP TABS */}
        <div className="hidden lg:flex gap-0 mb-12 border-b border-white/20">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${activeTab === "home"
              ? "border-yellow-500 text-yellow-400"
              : "border-transparent text-gray-300 hover:text-white"
              }`}
          >
            <Home className="w-5 h-5" />
            Home
          </button>

          <button
            onClick={() => setActiveTab("brands")}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${activeTab === "brands"
              ? "border-yellow-500 text-yellow-400"
              : "border-transparent text-gray-300 hover:text-white"
              }`}
          >
            <Zap className="w-5 h-5" />
            Our Services
          </button>

          <button
            onClick={() => setActiveTab("tags")}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${activeTab === "tags"
              ? "border-yellow-500 text-yellow-400"
              : "border-transparent text-gray-300 hover:text-white"
              }`}
          >
            <Tag className="w-5 h-5" />
            Tags
          </button>

          <button
            onClick={() => setActiveTab("location")}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${activeTab === "location"
              ? "border-yellow-500 text-yellow-400"
              : "border-transparent text-gray-300 hover:text-white"
              }`}
          >
            <Tag className="w-5 h-5" />
            Location
          </button>
        </div>

        {/* HOME TAB */}
        {activeTab === "home" && (
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/image/website-logo/Goldden-white-WB-Tech-Logo.webp"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {companyInfo.name}
                  </h3>

                  <p className="text-xs text-yellow-400">
                    {companyInfo.shortName}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {companyInfo.description}
              </p>

              <p className="text-xs text-gray-400 mb-4">
                {companyInfo.gst}
              </p>

              <div className="flex gap-4">
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={companyInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Services", href: "/services" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                Services
              </h4>

              <ul className="space-y-2">
                {[
                  "Website Development",
                  "Digital Marketing",
                  "SaaS Services",
                  "UI/UX Design",
                  "SEO Services",
                  "App Development",
                ].map((service) => (
                  <li
                    key={service}
                    className="text-sm text-gray-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                Contact Us
              </h4>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://maps.google.com/?q=Building+3H-47+NIT-3+Main+Road+Faridabad+121001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors leading-relaxed"
                    >
                      {companyInfo.address}
                    </a>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://maps.google.com/?q=Gaur+City+Centre+4+Murti+Chowk+Gaur+City+1+Ghaziabad+201318"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors leading-relaxed"
                    >
                      {companyInfo.address2}
                    </a>
                  </div>
                </div>



                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-sm text-gray-300 hover:text-blue-400"
                  >
                    {companyInfo.phone}
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />

                  <a
                    href={`tel:${companyInfo.phone2}`}
                    className="text-sm text-gray-300 hover:text-blue-400"
                  >
                    {companyInfo.phone2}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-gray-300 hover:text-blue-400"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES TAB */}
        {activeTab === "brands" && (
          <div className="hidden lg:block mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Our Core Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4 hover:border-blue-400 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <brand.Icon className="w-5 h-5 text-blue-400" />

                    <h5 className="font-semibold text-sm">
                      {brand.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAGS TAB */}
        {activeTab === "tags" && (
          <div className="hidden lg:block mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Popular Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* LOCATION TAB */}
        {activeTab === "location" && (
          <div className="hidden lg:block mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Our Locations
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Delhi NCR",
                "Gurgaon",
                "Noida",
                "Faridabad",
                "Ghaziabad",
                "Jaipur",
                "Mumbai",
                "Bangalore",
                "Hyderabad",
                "Pune",
                "Chandigarh",
                "Pan India",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        )}


        {/* MOBILE COMPANY INFO */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/image/webeside-tech-logo-new.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-base font-bold">
                {companyInfo.name}
              </h3>

              <p className="text-xs text-blue-400">
                {companyInfo.shortName}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {companyInfo.description}
          </p>

          <div className="flex gap-4 mb-3">
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-400" />
            </a>

            <a
              href={companyInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 hover:text-red-400" />
            </a>

            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-pink-400" />
            </a>
          </div>

          <p className="text-xs text-gray-400">
            {companyInfo.gst}
          </p>
        </div>

        {/* MOBILE COLLAPSIBLE */}
        <FooterCollapsible
          sections={[
            {
              title: "Quick Links",

              links: [
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ],
            },

            {
              title: "Services",

              links: [
                {
                  label: "Website Development",
                  href: "/services/website-development",
                },

                {
                  label: "Digital Marketing",
                  href: "/services/digital-marketing",
                },

                {
                  label: "SEO Services",
                  href: "/services/seo-services",
                },

                {
                  label: "App Development",
                  href: "/services/app-development",
                },
              ],
            },

            {
              title: "Contact Us",

              links: [
                {
                  label: companyInfo.address,

                  href:
                    "https://maps.google.com/?q=Building+3H-47+NIT-3+Main+Road+Faridabad+121001",
                },

                {
                  label: companyInfo.address2,

                  href:
                    "https://maps.google.com/?q=Gaur+City+Centre+4+Murti+Chowk+Gaur+City+1+Ghaziabad+201318",
                },

                {
                  label: companyInfo.phone,
                  href: `tel:${companyInfo.phone}`,
                },

                {
                  label: companyInfo.phone2,
                  href: `tel:${companyInfo.phone2}`,
                },

                {
                  label: companyInfo.email,
                  href: `mailto:${companyInfo.email}`,
                },
              ],
            },
          ]}
          className="mb-8 lg:hidden"
        />

        {/* MOBILE TAGS */}
        <div className="lg:hidden mb-8">
          <details className="group border-b border-white/10">
            <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
              <span className="font-semibold text-sm flex items-center gap-2">
                <Tag className="w-4 h-4 text-blue-400" />
                Tags
              </span>

              <span className="group-open:rotate-180 transition-transform">
                ▾
              </span>
            </summary>

            <div className="pb-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[10px] rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </details>
        </div>

        {/* MOBILE TAGS */}
        <div className="lg:hidden mb-8">
          <details className="group border-b border-white/10">
            <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
              <span className="font-semibold text-sm flex items-center gap-2">
                <Tag className="w-4 h-4 text-blue-400" />
                Location
              </span>

              <span className="group-open:rotate-180 transition-transform">
                ▾
              </span>
            </summary>

            <div className="pb-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[10px] rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </details>
        </div>


        {/* ANIMATED TITLE */}
        <div className="border-t border-white/10 pt-8">

          {/* Team Members */}
          <div className="flex lg:justify-between lg:mx-70  mb-3 justify-around gap-4  ">

            {[
              "SAHIL BHATIA",
              "AMI CHAUHAN",
              "ANU CHAUHAN",
              "GAURAV BHATIA",
            ].map((member, index) => (
              <div
                key={index}
                className="
         text-xs
          md:text-sm
          font-medium
          tracking-wide
          text-gray-200
          backdrop-blur-sm
          transition-all
          align-center
        "
              >
                {member}
              </div>
            ))}
          </div>

          {/* Animated Website Name */}
          <motion.h1
            className="md:text-3xl lg:text-7xl font-bold text-[#c1a758] text-center flex justify-center align-center text-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            {"WEBESIDE TECHNOLOGY".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center">
              © 2026 Webeside Technology. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-yellow-600 transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-yellow-600 transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookie-policy"
                className="text-sm text-gray-400 hover:text-yellow-600 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"