"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/918860876087?text=${encodedMessage}`, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  const quickMessages = [
    "I want to discuss a project",
    "Need a quote for my website",
    "Want to know about services",
    "Have a question",
  ]

  return (
    <>
      {/* WhatsApp Widget */}
      <div
        className={`fixed right-2 bottom-[72px] lg:right-6 lg:bottom-6 z-[9998] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Chat Window */}
        {isOpen && (
          <Card className="absolute bottom-20 right-0 w-72 sm:w-80 lg:w-96 shadow-2xl border-2 overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-h-[600px] lg:max-h-[500px]">
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div className="text-white">
                  <h3 className="font-semibold">WB Tech Agency</h3>
                  <p className="text-xs opacity-90">Online - Reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] p-3 lg:p-4 h-48 lg:h-64 overflow-y-auto">
              {/* Bot Message */}
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-4 max-w-[85%]">
                <p className="text-sm text-foreground mb-1">
                  Hi there! 👋
                  <br />
                  How can we help you today?
                </p>
                <span className="text-[10px] text-muted-foreground">Just now</span>
              </div>

              {/* Quick Reply Buttons */}
              <div className="space-y-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg)}
                    className="w-full bg-white hover:bg-gray-50 rounded-lg p-2 text-xs text-left shadow-sm transition-colors border border-border"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer */}
            <div className="bg-white p-3 border-t flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="rounded-full bg-[#25D366] hover:bg-[#20BD5A] w-10 h-10 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 group relative"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}

          {!isOpen && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>}
        </button>
      </div>
    </>
  )
}
