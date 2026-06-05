"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Youtube,
  Instagram,
  Plus,
  Minus,
  Gift,
  Home as HomeIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"
import { categories } from "@/lib/portfolio-data"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { link } from "fs/promises"
import { is } from "date-fns/locale"
import HeroVideoSection from "./hero-video-section"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio", hasMega: true },
  { name: "Services", href: "/services", hasMega: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blog" },
]

const wbTechInfoLinks = [
  // { name: "Articles", href: "/news-articals" },
  { name: "FAQs", href: "/faq" },
  { name: "Video Hub", href: "/herovideo" },
  { name: "Contact", href: "/contact" },
]

const ourBrands = [
  { name: "Skill For Career", href: "https://www.skillforcareer.com" },
  { name: "Skill For Career India", href: "https://www.skillforcareer.in" },
  { name: "Webeside Technology India", href: "https://www.webesidetechnology.in" },
  { name: "Library - Skill For Career", href: "https://library.skillforcareer.com" },
  { name: "Webeside", href: "https://www.webeside.in" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/webesidetechnology/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCDrMqp0WLjbdQWulhE9CHBQ",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/webesidetechnology/",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918860876087",
    icon: MessageCircle,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)
  const [mobileWBTechInfoOpen, setMobileWBTechInfoOpen] = useState(false)

  const [logoIndex, setLogoIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const logos = ["/image/website-logo/Goldden-white-WB-Tech-Logo.webp"]

  const handleLogoClick = () => {
    if (isFlipping) return

    setIsFlipping(true)

    setLogoIndex((prev) => (prev + 1) % logos.length)
  }

  useEffect(() => {
    if (isFlipping) {
      const timer = setTimeout(() => {
        setIsFlipping(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [isFlipping])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground py-2.5 relative z-100">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between text-sm flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <a
                href="tel:+918860876087"
                className="flex items-center gap-1 hover:opacity-80"
              >
                <Phone className="w-3 h-3" />

                <span className="hidden sm:inline">
                  +91 8860876087
                </span>
              </a>

              <a
                href="mailto:info@webeside.in"
                className="flex items-center gap-1 hover:opacity-80"
              >
                <Mail className="w-3 h-3" />

                <span className="hidden lg:inline">
                  info@webeside.in
                </span>
              </a>
            </div>

            <div className="hidden lg:block">
              <span className="text-xs font-semibold animate-pulse flex items-center gap-1">
                <Gift className="w-3 h-3 inline-block" />
                Refer and Earn 10% commission
              </span>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-100 w-full transition-all duration-300 ">
        <div
          className={` mx-auto border border-border mt-5  shadow-lg transition-all duration-300 ${isScrolled
            ? "backdrop-blur-sm bg-background/80 w-screen"
            : "bg-transparent w-[85%] rounded-xl"
            }`}
        >

          {/* HEADER CONTAINER */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20 justify-around">

            {/* LEFT SIDE */}
            <div className="flex items-center justify-around">

              {/* DESKTOP NAV */}
              <div className="hidden xl:flex items-center gap-5 2xl:gap-7 animate-in slide-in-from-left duration-500">
                <div className="relative group/leftlogo">
                  <Link href="/" className="flex items-center gap-1 font-extrabold text-yellow-600 text-xl tracking-wide drop-shadow-[0_0_8px_rgba(234,179,8,0.7)] transition-all duration-300 hover:scale-105 hover:text-amber-400">
                    <span className="inline-block transition-transform duration-500">
                      <i>WB</i>
                    </span>
                    <span>TECH</span>
                    {/* Small sliding home icon */}
                    <span className="w-0 overflow-hidden group-hover/leftlogo:w-5 transition-all duration-300 flex items-center justify-center">
                      <HomeIcon className="w-4 h-4 text-amber-400 ml-1 opacity-0 group-hover/leftlogo:opacity-100 transition-opacity duration-300" />
                    </span>
                  </Link>
                </div>
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() =>
                      link.hasMega && setActiveMenu(link.name)
                    }
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 py-6 whitespace-nowrap transition-colors duration-300 
      lg:text-foreground hover:text-primary`}
                    >
                      {link.name}

                      {link.hasMega && (
                        <ChevronDown className="w-4 h-4" />
                      )}

                    </Link>

                    {/* SERVICES MEGA MENU */}
                    {link.name === "Services" &&
                      activeMenu === "Services" && (
                        <div className="fixed  w-[95vw] left-0 max-w-6xl bg-card border border-border rounded-xl shadow-2xl p-8 z-[999] animate-in fade-in zoom-in-95 duration-200  {isScrolled? 'top-5' : 'top-[110px]' }">

                          <div className="grid grid-cols-4 gap-8 mb-6 text-left">
                            {servicesData.map((category) => (
                              <div key={category.name}>

                                <Link
                                  href={`/services/${category.name
                                    .toLowerCase()
                                    .replace(/ & /g, "-")
                                    .replace(/ /g, "-")}`}
                                  className="font-bold mb-4 text-primary text-base hover:underline block transition-all hover:translate-x-1 text-amber-50"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {category.name} →
                                </Link>

                                <ul className="space-y-2.5">
                                  {category.services
                                    .slice(0, 5)
                                    .map((service) => (
                                      <li key={service.id}>
                                        <Link
                                          href={`/services/${category.name
                                            .toLowerCase()
                                            .replace(/ & /g, "-")
                                            .replace(/ /g, "-")}`}
                                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1.5 hover:translate-x-1 transition-transform"
                                          onClick={() => setActiveMenu(null)}
                                        >
                                          • {service.title}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="pt-6 border-t border-border">
                            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-6">

                              <div className="flex items-center justify-between gap-6">
                                <div>
                                  <h4 className="font-bold text-lg mb-2">
                                    Special Offer: 20% Off All Services
                                  </h4>

                                  <p className="text-sm text-muted-foreground">
                                    Contact us now and transform your business today!
                                  </p>
                                </div>

                                <div className="flex gap-3 flex-shrink-0">

                                  <Button size="sm" asChild className="gap-2">
                                    <a href="tel:+918860876087">
                                      <Phone className="w-4 h-4" />
                                      Call Now
                                    </a>
                                  </Button>

                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="gap-2 bg-card hover:bg-secondary"
                                  >
                                    <a
                                      href="https://wa.me/918860876087"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <MessageCircle className="w-4 h-4" />
                                      WhatsApp
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 text-center">
                            <Button
                              asChild
                              size="sm"
                              variant="default"
                              className="bg-primary hover:bg-primary/90 px-6"
                            >
                              <Link href="/services" onClick={() => setActiveMenu(null)}>
                                View All Services →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      )}

                    {/* PORTFOLIO MEGA MENU */}
                    {link.name === "Portfolio" &&
                      activeMenu === "Portfolio" && (
                        <div className="fixed center-translate-x-1/2 w-[95vw] max-w-5xl bg-card border border-border rounded-xl shadow-2xl p-6 z-[999] animate-in fade-in zoom-in-95 duration-200  {isScrolled? 'top-5' : 'top-[110px]' }">

                          <h4 className="font-bold mb-4 text-primary text-lg text-left">
                            Browse by Category
                          </h4>

                          <div className="grid grid-cols-5 gap-3 mb-6 text-left">
                            {categories.slice(1, 21).map((category) => (
                              <Link
                                key={category}
                                href={`/portfolio?category=${category}`}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-secondary border border-transparent hover:border-primary/20"
                                onClick={() => setActiveMenu(null)}
                              >
                                {category}
                              </Link>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="pt-4 border-t border-border">

                            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-6">

                              <div className="flex items-center justify-between gap-6">

                                <div>
                                  <h4 className="font-bold text-lg mb-2">
                                    Ready to Start Your Project?
                                  </h4>

                                  <p className="text-sm text-muted-foreground">
                                    Get a free consultation and quote for your next project
                                  </p>
                                </div>

                                <div className="flex gap-3 flex-shrink-0">

                                  <Button size="sm" asChild className="gap-2">
                                    <a href="tel:+918860876087">
                                      <Phone className="w-4 h-4" />
                                      Call Now
                                    </a>
                                  </Button>

                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="gap-2 bg-card hover:bg-secondary"
                                  >
                                    <a
                                      href="https://wa.me/918860876087"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <MessageCircle className="w-4 h-4" />
                                      WhatsApp
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 text-center">
                            <Button
                              asChild
                              size="sm"
                              variant="default"
                              className="bg-primary hover:bg-primary/90 px-6"
                            >
                              <Link href="/portfolio" onClick={() => setActiveMenu(null)}>
                                View All Projects →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>

              {/* MOBILE SPACE */}
              <div className="lg:hidden relative group/leftlogo">
                <Link href="/" className="flex items-center gap-1 font-extrabold text-yellow-500 text-xs tracking-wide drop-shadow-[0_0_8px_rgba(234,179,8,0.7)] transition-all duration-300 hover:scale-105 hover:text-amber-400">
                  <span className="inline-block transition-transform duration-500">
                    <i>WB</i>
                  </span>
                  <span>TECH</span>
                  {/* Small sliding home icon */}
                  <span className="w-0 overflow-hidden group-hover/leftlogo:w-5 transition-all duration-300 flex items-center justify-center">
                    <HomeIcon className="w-4 h-4 text-amber-400 ml-1 opacity-0 group-hover/leftlogo:opacity-100 transition-opacity duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            {/* CENTER LOGO */}
            <div className="flex justify-center relative">
              <Link href="/">
                <div
                  onClick={handleLogoClick}
                  onMouseEnter={() => setIsLogoHovered(true)}
                  onMouseLeave={() => setIsLogoHovered(false)}
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                  style={{ perspective: "800px" }}
                >
                  <div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full transition-all duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      transition: isFlipping
                        ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
                        : "all 0.3s ease",
                      transform: isFlipping
                        ? "rotateY(180deg)"
                        : isLogoHovered
                          ? "rotateY(15deg) scale(1.08)"
                          : "rotateY(0deg)",
                      boxShadow: isLogoHovered
                        ? "0 0 25px rgba(156, 108, 31, 0.6), 0 8px 16px rgba(0,0,0,0.2)"
                        : "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Pulsing glow outline */}
                    <div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300 -z-10 ${isLogoHovered ? "animate-pulse" : ""
                        }`}
                    />
                    <Image
                      src={logos[logoIndex]}
                      alt="Webeside Technology Logo"
                      fill
                      className="object-contain rounded-full border border-amber-500/20"
                      priority
                    />
                  </div>

                  {/* Tooltip built with Framer Motion */}
                  <AnimatePresence>
                    {isLogoHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 xl:top-24 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-[10px] text-amber-300 font-bold whitespace-nowrap shadow-2xl flex items-center gap-1.5 z-50"
                      >
                        <HomeIcon className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                        Go to Home
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center lg:justify-around justify-around">

              {/* DESKTOP RIGHT NAV */}
              <div className="hidden xl:flex items-center gap-5 2xl:gap-7">

                {/* ABOUT */}
                <Link
                  href={"/about"}
                  className={`relative flex items-center gap-1 py-6 whitespace-nowrap transition-colors duration-300 lg:text-foreground hover:text-primary
                 `}
                >
                  About Us

                </Link>

                {/* REFERRAL */}
                <Link
                  href={"/referral"}
                  className={`relative flex items-center gap-1 py-6 whitespace-nowrap transition-colors duration-300 lg:text-foreground hover:text-primary
                 `}
                >
                  Refer us

                  <span
                    className={`absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-primary"
                      }`}
                  ></span>
                </Link>

                {/* WB TECH INFO */}
                <div
                  className="relative group"
                  onMouseEnter={() => setActiveMenu("WB Tech Info")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`text-sm 2xl:text-base transition-colors duration-300 flex items-center gap-1 py-6 whitespace-nowrap lg:text-foreground hover:text-primary
                   `}
                  >
                    WB Tech Insights

                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeMenu === "WB Tech Info" && (
                    <div
                      className={`fixed center w-52 bg-card border border-border rounded-xl shadow-2xl p-4 z-[999] animate-in fade-in zoom-in-95 duration-200 ${isScrolled ? "top-20" : "top-[110px]"
                        }`}
                    >
                      <h4 className="font-bold mb-3 text-primary text-base">
                        Company Info
                      </h4>

                      <ul className="space-y-2">
                        {wbTechInfoLinks.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-secondary"
                              onClick={() => setActiveMenu(null)}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* OUR BRANDS */}
                <div
                  className="relative group"
                  onMouseEnter={() => setActiveMenu("Our Brands")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`text-sm 2xl:text-base transition-colors duration-300 flex items-center gap-1 py-6 whitespace-nowrap lg:text-foreground hover:text-primary`}
                  >
                    Our Brands

                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeMenu === "Our Brands" && (
                    <div
                      className={`fixed center w-64 bg-card border border-border rounded-xl p-4 shadow-2xl z-[999] animate-in fade-in zoom-in-95 duration-200 ${isScrolled ? "top-20" : "top-[110px]"
                        }`}
                    >
                      <h4 className="font-bold mb-3 text-primary text-base">
                        Our Brands
                      </h4>

                      <ul className="space-y-2">
                        {ourBrands.map((brand) => (
                          <li key={brand.name}>
                            <a
                              href={brand.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-secondary "
                            >
                              {brand.name} →
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <EnquiryPopup
                  trigger={
                    <Button size="sm">
                      Lets talk
                    </Button>
                  }
                />
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="xl:hidden flex items-center ml-10">

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DROPDOWN */}
        {isOpen && (
          <div className="xl:hidden bg-background border-t border-border mt-2 mx-2 sm:mx-4 rounded-xl shadow-lg">
            <div className="mx-auto px-4 py-6 space-y-4 overflow-y-auto max-h-[80vh]">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === "Services" ? (
                    <div>
                      <button
                        onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span>Services</span>
                        {mobileServiceOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>

                      {mobileServiceOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                          {servicesData.map((category) => (
                            <Link
                              key={category.name}
                              href={`/services/${category.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                              className="block py-2 px-3 text-sm rounded-lg hover:bg-secondary transition-colors "
                              onClick={() => setIsOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block py-2 px-3 text-sm text-primary font-medium rounded-lg hover:bg-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : link.name === "Portfolio" ? (
                    <div>
                      <button
                        onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span>Portfolio</span>
                        {mobileServiceOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                      {mobileServiceOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                          {categories.slice(1, 13).map((category) => (
                            <Link
                              key={category}
                              href={`/portfolio?category=${category}`}
                              className="block py-2 px-3 text-sm rounded-lg hover:bg-secondary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {category}
                            </Link>
                          ))}
                          <Link
                            href="/portfolio"
                            className="block py-2 px-3 text-sm text-primary font-medium rounded-lg hover:bg-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Projects →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div>
                <button
                  onClick={() => setMobileWBTechInfoOpen(!mobileWBTechInfoOpen)}
                  className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span>WB Tech Info</span>
                  {mobileWBTechInfoOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
                {mobileWBTechInfoOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                    {wbTechInfoLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block py-2 px-3 text-sm rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                  className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span>Our Brands</span>
                </button>
              </div>
              <Link
                onClick={() => setIsOpen(false)}
                href="/referral"
                className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                <span>Refer us</span>
              </Link>

              <Link
                onClick={() => setIsOpen(false)}
                href="/about"
                className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                <span>About us</span>
              </Link>

              <EnquiryPopup
                trigger={
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </header>
    </>
  )
}