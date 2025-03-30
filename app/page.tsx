"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, MessageCircle, BookOpen, LineChart, Heart, Users, BarChart3 } from "lucide-react"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/ui/navbar"

export default function Home() {
  const [showDemo, setShowDemo] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400">
      <Navbar transparent={!scrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block mb-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Me<span className="text-teal-300">Nova</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Break the silent struggle</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              An AI companion who understands, supports, and guides you through every step of your menopause journey
              with empathy and personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-teal-800 hover:bg-teal-50" onClick={() => setShowDemo(true)}>
                Start Conversation <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            {/* Soft glow effect behind the image */}
            <div className="absolute inset-0 bg-teal-300/30 blur-2xl transform scale-90"></div>

            {/* Main image */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/menova-hero.png"
                alt="Women using the MeNova app with birds flying around them"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-10 w-10 text-teal-600" />}
            title="Resource Access"
            description="Reliable information about menopause, from educational material to personal development tools."
          />
          <FeatureCard
            icon={<LineChart className="h-10 w-10 text-teal-600" />}
            title="Symptom Tracking"
            description="Monitor symptoms, identify patterns, and maintain detailed health records to understand your body better."
          />
          <FeatureCard
            icon={<MessageCircle className="h-10 w-10 text-teal-600" />}
            title="Empathetic Conversations"
            description="A voice that listens like your soul sister - emotionally intelligent support, always present."
          />
        </div>
        <div className="text-center mt-12 text-white">
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering women with knowledge, tracking capabilities, and a supportive presence.
          </p>
        </div>
      </section>

      {/* Modern Feature: Daily Check-In Demo */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Features</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Experience our innovative tools designed to support your menopause journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
            <CardHeader>
              <CardTitle className="text-xl">Daily Check-In</CardTitle>
              <CardDescription className="text-white/70">How are you feeling today?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-3">
                <EmotionButton emotion="😊" label="Great" />
                <EmotionButton emotion="🙂" label="Good" />
                <EmotionButton emotion="😐" label="Okay" />
                <EmotionButton emotion="😕" label="Not Great" />
                <EmotionButton emotion="😞" label="Struggling" />
              </div>
              <Button className="w-full mt-4 bg-white text-teal-800 hover:bg-teal-50">Log Today's Symptoms</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
            <CardHeader>
              <CardTitle className="text-xl">Community Support</CardTitle>
              <CardDescription className="text-white/70">Connect with others on similar journeys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommunityEvent
                title="Virtual Yoga for Menopause"
                date="April 5, 2025 • 10:00 AM"
                attendees={18}
                description="A gentle yoga session designed specifically for menopause symptoms, led by certified instructor Jane Miller."
              />

              <CommunityEvent
                title="Ask Me Anything: Hormone Therapy"
                date="April 10, 2025 • 7:00 PM"
                attendees={32}
                description="Dr. Rebecca Chen answers your questions about hormone replacement therapy options and alternatives."
              />

              <Button variant="ghost" className="w-full text-teal-200 hover:text-white hover:bg-white/10 mt-2">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Complete Menopause Companion</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            MeNova provides comprehensive support through every phase of your menopause journey with these powerful
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DetailedFeatureCard
            icon={<MessageCircle className="h-8 w-8 text-teal-200" />}
            title="Empathetic Conversations"
            description="Talk with an AI that understands the emotional and physical aspects of menopause without judgment."
          />
          <DetailedFeatureCard
            icon={<LineChart className="h-8 w-8 text-teal-200" />}
            title="Detailed Symptom Tracking"
            description="Log and monitor your symptoms over time to identify patterns and share with healthcare providers."
          />
          <DetailedFeatureCard
            icon={<BookOpen className="h-8 w-8 text-teal-200" />}
            title="Curated Resources"
            description="Access reliable, up-to-date information on menopause, treatments, and lifestyle recommendations."
          />
          <DetailedFeatureCard
            icon={<Heart className="h-8 w-8 text-teal-200" />}
            title="Personalized Support"
            description="Receive tailored advice based on your specific symptoms, preferences, and health history."
          />
          <DetailedFeatureCard
            icon={<Users className="h-8 w-8 text-teal-200" />}
            title="Safe Community"
            description="Connect with a supportive community of women sharing similar experiences and insights."
          />
          <DetailedFeatureCard
            icon={<BarChart3 className="h-8 w-8 text-teal-200" />}
            title="Progress Insights"
            description="Visualize changes over time and celebrate progress through your menopause journey."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of women who have found support, understanding, and empowerment through MeNova.
          </p>
          <Button size="lg" className="bg-white text-teal-800 hover:bg-teal-50">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-white/80">
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">
              Me<span className="text-teal-300">Nova</span>
            </h2>
          </div>
          <p className="mb-2">© 2025 MeNova. All rights reserved.</p>
          <p>Empowering women through their menopause journey.</p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      {/* AI Voice Assistant */}
      {showDemo && <AIVoiceAssistant />}
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/80 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function DetailedFeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-teal-900/50 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  )
}

function EmotionButton({ emotion, label }) {
  return (
    <Button variant="ghost" className="flex flex-col items-center p-3 h-auto text-white hover:bg-white/10 rounded-lg">
      <span className="text-2xl mb-1">{emotion}</span>
      <span className="text-xs">{label}</span>
    </Button>
  )
}

function CommunityEvent({ title, date, attendees, description }) {
  return (
    <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-white/70">{date}</p>
        <div className="flex items-center text-sm text-white/70">
          <Users className="h-4 w-4 mr-1" />
          {attendees} attending
        </div>
      </div>
      <p className="text-sm">{description}</p>
      <div className="mt-3 flex justify-end">
        <Button size="sm" className="bg-teal-700 hover:bg-teal-600 text-white">
          Join Event
        </Button>
      </div>
    </div>
  )
}

