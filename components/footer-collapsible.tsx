"use client"

import { memo, useState, useCallback, useMemo } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

interface FooterCollapsibleProps {
  sections: FooterSection[]
  className?: string
}

export const FooterCollapsible = memo(function FooterCollapsible({ sections, className }: FooterCollapsibleProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = useCallback((title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }, [])

  const memoizedSections = useMemo(() => sections || [], [sections])

  return (
    <div className={cn("w-full space-y-2 lg:hidden", className)}>
      {memoizedSections.map((section) => {
        const isExpanded = expandedSections.has(section.title)

        return (
          <div key={section.title} className="border border-white/10 rounded-lg overflow-hidden">
            <Button
              onClick={() => toggleSection(section.title)}
              variant="ghost"
              className="w-full justify-between items-center px-4 py-3 h-auto hover:bg-white/10 text-white"
            >
              <span className="font-semibold text-sm text-white">{section.title}</span>
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200 text-blue-400", isExpanded && "rotate-180")}
              />
            </Button>

            {isExpanded && (
              <div className="px-4 py-3 bg-white/5 space-y-2 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-blue-400 transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
})

FooterCollapsible.displayName = "FooterCollapsible"
