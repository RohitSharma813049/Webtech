"use client"

import type React from "react"
import { useState, useEffect, useRef, memo, useCallback } from "react"
import { X, Send, MessageCircle, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { findBestMatch, defaultResponses, type ChatMessage } from "@/lib/chatbot-data"

export const Chatbot = memo(function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hi! I'm Ami, your virtual assistant from Webeside Technology. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  // Listen for bottom nav chat button
  useEffect(() => {
    const handler = () => {
      setIsOpen((prev) => !prev)
      setIsMinimized(false)
    }
    window.addEventListener("toggleChatbot", handler)
    return () => window.removeEventListener("toggleChatbot", handler)
  }, [])

  const handleSendMessage = useCallback(() => {
    if (!inputMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    setTimeout(() => {
      let botResponse: string
      const lowerMessage = inputMessage.toLowerCase()

      if (
        lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)$/i) ||
        lowerMessage.includes("hi there") ||
        lowerMessage.includes("hello there")
      ) {
        botResponse = defaultResponses.greeting
      } else if (
        lowerMessage.match(/^(bye|goodbye|see you|thanks|thank you|ok thanks)$/i) ||
        lowerMessage.includes("talk later")
      ) {
        botResponse = defaultResponses.farewell
      } else {
        const matchedFAQ = findBestMatch(inputMessage)
        botResponse = matchedFAQ ? matchedFAQ.answer : defaultResponses.noMatch
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }, [inputMessage])

  const handleOpenChat = useCallback(() => {
    setIsOpen(true)
    setIsMinimized(false)
  }, [])

  const handleCloseChat = useCallback(() => {
    setIsOpen(false)
    setIsMinimized(false)
  }, [])

  const handleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev)
  }, [])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="fixed bottom-[72px] right-2 lg:right-6 lg:bottom-6 z-[100] w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card
          className={`fixed right-2 lg:right-6 z-[100] w-[calc(100vw-1rem)] max-w-sm shadow-2xl border-2 transition-all duration-300 ${
            isMinimized ? "bottom-[72px] lg:bottom-6 h-auto" : "bottom-[72px] lg:bottom-6 h-[480px]"
          }`}
        >
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">Ami - Webeside Tech</CardTitle>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMinimize}
                  className="hover:bg-white/20 text-white h-8 w-8"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseChat}
                  className="hover:bg-white/20 text-white h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="p-0 flex flex-col" style={{ height: "calc(100% - 68px)" }}>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">24/7 Support: +91 8860876087</p>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  )
})

Chatbot.displayName = "Chatbot"
