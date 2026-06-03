"use client"

import { useState } from "react"
import { Phone, MessageCircle, Bot, Plus, X } from "lucide-react"
import { CallWidget } from "./call-widget"
import { WhatsAppWidget } from "./whatsapp-widget"
import { Chatbot } from "./chatbot"

export default function FloatingWidgets() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 hidden md:block">
      {/* Opened Buttons */}
      <div
        className={`flex flex-col items-end gap-20 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {/* Call */}
        <div className="scale-90">
          <CallWidget phoneNumber="+918860876087" />
        </div>

        {/* WhatsApp */}
        <div className="scale-90">
          <WhatsAppWidget />
        </div>

        {/* Chatbot */}
        <div className="scale-90">
          <Chatbot />
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {open ? (
          <X className="w-7 h-7" />
        ) : (
          <Plus className="w-7 h-7" />
        )}
      </button>
    </div>
  )
}