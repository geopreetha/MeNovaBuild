"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, MicOff, Pause, Play, X, Volume2, VolumeX } from "lucide-react"

export function AIVoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [visualizer, setVisualizer] = useState<number[]>(Array(20).fill(5))

  // Animation for voice visualizer
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setVisualizer(
          Array(20)
            .fill(0)
            .map(() => Math.floor(Math.random() * 30) + 5),
        )
      }, 100)
      return () => clearInterval(interval)
    } else {
      setVisualizer(Array(20).fill(5))
    }
  }, [isListening])

  const handleStartListening = () => {
    setIsListening(true)
    setTranscript("")
    // In a real app, this would connect to the device's microphone

    // Simulate receiving transcript after 3 seconds
    setTimeout(() => {
      setIsListening(false)
      setTranscript("I've been having trouble sleeping due to night sweats. What can I do?")

      // Simulate AI response after 1 more second
      setTimeout(() => {
        setIsSpeaking(true)
        setResponse(
          "I understand how disruptive night sweats can be to your sleep. There are several approaches that might help. First, try keeping your bedroom cool and use breathable, moisture-wicking bedding. Wearing lightweight, loose-fitting pajamas can also help. Some women find that avoiding triggers like spicy foods, alcohol, or caffeine before bed makes a difference. Would you like me to suggest some relaxation techniques that could help as well?",
        )

        // Simulate end of speaking after 5 seconds
        setTimeout(() => {
          setIsSpeaking(false)
        }, 5000)
      }, 1000)
    }, 3000)
  }

  const handleStopListening = () => {
    setIsListening(false)
  }

  const handleToggleSpeaking = () => {
    setIsSpeaking(!isSpeaking)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsListening(false)
    setIsSpeaking(false)
    setTranscript("")
    setResponse("")
  }

  return (
    <>
      {/* Floating button to open the voice assistant */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-white text-teal-800 hover:bg-teal-50 shadow-lg"
        >
          <Mic className="h-6 w-6" />
        </Button>
      )}

      {/* Voice assistant modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 border-none text-white w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">MeNova Voice Assistant</h3>
                <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-white/10">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Voice visualizer */}
              <div className="h-20 mb-6 flex items-center justify-center">
                {isListening ? (
                  <div className="flex items-end h-full gap-1">
                    {visualizer.map((height, index) => (
                      <div
                        key={index}
                        className="w-2 bg-teal-300 rounded-full transition-all duration-100"
                        style={{ height: `${height}px` }}
                      ></div>
                    ))}
                  </div>
                ) : isSpeaking ? (
                  <div className="flex items-end h-full gap-1">
                    {visualizer.map((height, index) => (
                      <div
                        key={index}
                        className="w-2 bg-white/70 rounded-full transition-all duration-100"
                        style={{ height: `${height / 2}px` }}
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="text-white/70 text-center">
                    {transcript || response
                      ? "Tap the microphone to speak again"
                      : "Tap the microphone to start speaking"}
                  </div>
                )}
              </div>

              {/* Transcript and response */}
              <div className="space-y-4 mb-6 min-h-[100px]">
                {transcript && (
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">You said:</p>
                    <p>{transcript}</p>
                  </div>
                )}

                {response && (
                  <div className="bg-teal-800/50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">MeNova:</p>
                    <p>{response}</p>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-4">
                {isListening ? (
                  <Button onClick={handleStopListening} className="rounded-full w-12 h-12 bg-red-500 hover:bg-red-600">
                    <MicOff className="h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleStartListening}
                    className="rounded-full w-12 h-12 bg-white text-teal-800 hover:bg-teal-50"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                )}

                {response && (
                  <Button
                    onClick={handleToggleSpeaking}
                    className="rounded-full w-12 h-12 bg-white/10 hover:bg-white/20"
                  >
                    {isSpeaking ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                )}

                {response && (
                  <Button onClick={() => {}} className="rounded-full w-12 h-12 bg-white/10 hover:bg-white/20">
                    {isSpeaking ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

