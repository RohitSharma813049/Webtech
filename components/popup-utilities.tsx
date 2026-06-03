import { memo, useCallback } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PopupCloseButtonProps {
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export const PopupCloseButton = memo(function PopupCloseButton({
  onClick,
  className = "absolute top-3 right-3 z-10",
  size = "md",
}: PopupCloseButtonProps) {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])

  const sizeClasses = {
    sm: "p-1 w-7 h-7",
    lg: "p-2 w-8 h-8",
    lg: "p-3 w-10 h-10",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    lg: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <Button
      onClick={handleClick}
      className={`${className} ${sizeClasses[size]} rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors shadow-lg`}
      aria-label="Close popup"
    >
      <X className={iconSizes[size]} />
    </Button>
  )
})

PopupCloseButton.displayName = "PopupCloseButton"

interface PopupActionButtonsProps {
  onWhatsApp: () => void
  onCall: () => void
  whatsAppText: string
  callText: string
}

export const PopupActionButtons = memo(function PopupActionButtons({
  onWhatsApp,
  onCall,
  whatsAppText = "Get Free Consultation",
  callText = "Call Now: +91 8860876087",
}: PopupActionButtonsProps) {
  const handleWhatsApp = useCallback(() => {
    onWhatsApp()
  }, [onWhatsApp])

  const handleCall = useCallback(() => {
    onCall()
  }, [onCall])

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleWhatsApp} size="sm" className="w-full text-sm">
        {whatsAppText}
      </Button>
      <Button onClick={handleCall} variant="outline" size="sm" className="w-full bg-transparent text-sm">
        {callText}
      </Button>
    </div>
  )
})

PopupActionButtons.displayName = "PopupActionButtons"
