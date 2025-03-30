"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        transparent ? "bg-transparent" : "bg-teal-900/95 backdrop-blur-sm border-b border-white/10",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-2xl">
                Me<span className="text-teal-300">Nova</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Dashboard
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Resources
              </Button>
            </Link>
            <Link href="/tracking">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Symptom Tracking
              </Button>
            </Link>
            <Link href="/conversation">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Conversation
              </Button>
            </Link>
            <Button className="bg-white text-teal-800 hover:bg-teal-50 ml-2">Sign In</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-800 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Dashboard
              </Button>
            </Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Resources
              </Button>
            </Link>
            <Link href="/tracking" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Symptom Tracking
              </Button>
            </Link>
            <Link href="/conversation" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Conversation
              </Button>
            </Link>
            <Button className="w-full bg-white text-teal-800 hover:bg-teal-50 mt-2">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  )
}

