"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageCircle, Phone, Briefcase, Info } from "lucide-react"

const navItems = [
  { href: "/",         label: "Home",     icon: Home,      exact: true  },
  { href: "/services", label: "Services", icon: Briefcase, exact: false },
  { href: "/about",    label: "About",    icon: Info,      exact: false },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  const handleChat = () => {
    window.dispatchEvent(new CustomEvent("toggleChatbot"))
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch justify-around h-14">

        {/* Nav links */}
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
              )}
              <Icon className={`w-[18px] h-[18px] transition-transform ${isActive ? "scale-110" : ""}`} />
              <span className={`text-[10px] leading-none ${isActive ? "font-semibold" : "font-medium"}`}>
                {label}
              </span>
            </Link>
          )
        })}

        {/* Call button */}
        <a
          href="tel:+918860876087"
          className="relative flex flex-col items-center justify-center gap-0.5 flex-1 text-muted-foreground hover:text-green-600 transition-colors"
          aria-label="Call us"
        >
          <div className="p-1.5 rounded-full bg-green-500/10">
            <Phone className="w-[18px] h-[18px] text-green-600" />
          </div>
          <span className="text-[10px] font-medium leading-none">Call</span>
        </a>

        {/* Chat button */}
        <button
          onClick={handleChat}
          className="relative flex flex-col items-center justify-center gap-0.5 flex-1 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Open Chat"
        >
          <span className="absolute top-1.5 right-[calc(50%-16px)] w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <div className="p-1.5 rounded-full bg-primary/10">
            <MessageCircle className="w-[18px] h-[18px] text-primary" />
          </div>
          <span className="text-[10px] font-medium leading-none text-primary">Chat</span>
        </button>

      </div>
    </nav>
  )
}
