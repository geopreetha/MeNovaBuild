"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mic } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export default function ConversationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16 p-4 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6 mt-4">
          {/* Welcome message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white max-w-[80%]">
            <p className="font-semibold mb-1">MeNova</p>
            <p>
              Hello! I'm your MeNova companion. I'm here to listen, support, and guide you through your menopause
              journey. How are you feeling today, and how can I help you?
            </p>
          </div>

          {/* Sample user message */}
          <div className="bg-teal-800/50 backdrop-blur-sm rounded-lg p-4 text-white max-w-[80%] ml-auto">
            <p className="font-semibold mb-1">You</p>
            <p>I've been experiencing hot flashes more frequently this week. Is this normal?</p>
          </div>

          {/* Sample response */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white max-w-[80%]">
            <p className="font-semibold mb-1">MeNova</p>
            <p>
              Yes, fluctuations in hot flash frequency are completely normal during menopause. Many women notice
              patterns related to stress, diet, or sleep quality. Would you like to track these episodes in your symptom
              journal? This could help us identify potential triggers.
            </p>
          </div>
        </div>
      </main>

      <footer className="p-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full p-3 h-auto text-white border-white/20 hover:bg-white/10">
              <Mic className="h-5 w-5" />
              <span className="sr-only">Voice input</span>
            </Button>
            <Input
              placeholder="Type your message..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-teal-300"
            />
            <Button className="rounded-full p-3 h-auto bg-white text-teal-800 hover:bg-teal-50">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

