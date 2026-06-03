import type React from "react"
import { memo, useCallback, useEffect, useState } from "react"

interface LazyPopupProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  overlayClassName?: string
  contentClassName?: string
  onOverlayClick?: (e: React.MouseEvent) => void
}

export const LazyPopup = memo(function LazyPopup({
  children,
  isOpen,
  onClose,
  overlayClassName = "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
  contentClassName = "bg-card rounded-2xl max-w-lg w-full max-h-[70vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 relative",
  onOverlayClick,
}: LazyPopupProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (onOverlayClick) {
        onOverlayClick(e)
      } else if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose, onOverlayClick],
  )

  if (!isMounted || !isOpen) return null

  return (
    <div className={overlayClassName} onClick={handleOverlayClick}>
      <div className={contentClassName}>{children}</div>
    </div>
  )
})

LazyPopup.displayName = "LazyPopup"
