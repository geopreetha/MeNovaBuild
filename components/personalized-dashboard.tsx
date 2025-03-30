"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SymptomChart, JourneyProgress, UpcomingReminders } from "@/components/dashboard-widgets"
import { CommunitySection } from "@/components/community-section"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"
import { LayoutGrid, Maximize2, Minimize2 } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export function PersonalizedDashboard() {
  const [isFullWidth, setIsFullWidth] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400">
      <Navbar />

      <main className="pt-20 p-4 md:p-8">
        <div className={`mx-auto ${isFullWidth ? "w-full" : "max-w-7xl"}`}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Welcome back, Emily</h2>
              <p className="text-white/70">Here's your personalized menopause journey dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => setIsFullWidth(!isFullWidth)}
              >
                {isFullWidth ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-white/10 text-white mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                <LayoutGrid className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="symptoms" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Symptoms
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Resources
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Community
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-none text-white col-span-full lg:col-span-2">
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
                    <Button className="w-full mt-4 bg-white text-teal-800 hover:bg-teal-50">
                      Log Today's Symptoms
                    </Button>
                  </CardContent>
                </Card>

                <SymptomChart />
                <JourneyProgress />
                <UpcomingReminders />
              </div>

              <div className="mt-8">
                <CommunitySection />
              </div>
            </TabsContent>

            <TabsContent value="symptoms" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Detailed symptom tracking would appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Resources would appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Community features would appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <AIVoiceAssistant />
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

