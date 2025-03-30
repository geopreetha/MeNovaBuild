import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Thermometer, Droplets, Brain, Heart, Moon, Activity } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400">
      <Navbar />

      <main className="pt-20 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Symptom Tracking</h2>
            <p className="text-lg opacity-90 max-w-3xl">
              Monitor symptoms, identify patterns, and maintain detailed health records to understand your body better.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <Button className="bg-white text-teal-800 hover:bg-teal-50">
              <Plus className="h-4 w-4 mr-2" />
              Log New Entry
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-white/10 text-white mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="hotFlashes"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-800"
              >
                Hot Flashes
              </TabsTrigger>
              <TabsTrigger value="mood" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Mood
              </TabsTrigger>
              <TabsTrigger value="sleep" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Sleep
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Other
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SymptomCard
                  icon={<Thermometer className="h-6 w-6 text-red-300" />}
                  title="Hot Flashes"
                  value="3"
                  trend="down"
                  description="Decreased by 40% from last week"
                />
                <SymptomCard
                  icon={<Droplets className="h-6 w-6 text-blue-300" />}
                  title="Night Sweats"
                  value="2"
                  trend="down"
                  description="Decreased by 25% from last week"
                />
                <SymptomCard
                  icon={<Brain className="h-6 w-6 text-purple-300" />}
                  title="Brain Fog"
                  value="Mild"
                  trend="same"
                  description="No change from last week"
                />
                <SymptomCard
                  icon={<Heart className="h-6 w-6 text-pink-300" />}
                  title="Mood Swings"
                  value="Moderate"
                  trend="up"
                  description="Increased from last week"
                />
                <SymptomCard
                  icon={<Moon className="h-6 w-6 text-indigo-300" />}
                  title="Sleep Quality"
                  value="Fair"
                  trend="up"
                  description="Improved from last week"
                />
                <SymptomCard
                  icon={<Activity className="h-6 w-6 text-green-300" />}
                  title="Energy Level"
                  value="Moderate"
                  trend="up"
                  description="Improved from last week"
                />
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Weekly Insights</h3>
                <p className="mb-4">
                  Your hot flashes and night sweats have decreased this week, possibly related to the new cooling
                  techniques you've been trying. Your mood has been more variable, which you noted coincided with work
                  stress. Sleep quality has improved slightly.
                </p>
                <h4 className="font-semibold mt-4 mb-2">Recommendations:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Continue with the cooling techniques that seem to be helping with hot flashes</li>
                  <li>Consider adding the stress management exercises we discussed to help with mood fluctuations</li>
                  <li>Maintain your current sleep routine as it's showing positive results</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="hotFlashes" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Hot Flash Tracking</h3>
                <p className="mb-6">Detailed view of your hot flash patterns over time.</p>

                <div className="h-64 bg-white/5 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-white/60">Hot flash frequency chart would appear here</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Potential Triggers</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Caffeine consumption</li>
                      <li>Stress at work</li>
                      <li>Spicy foods</li>
                      <li>Warm environments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Effective Relief Methods</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cooling neck wrap</li>
                      <li>Deep breathing exercises</li>
                      <li>Layered clothing</li>
                      <li>Staying hydrated</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content structures */}
            <TabsContent value="mood" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Mood tracking details would appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="sleep" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Sleep tracking details would appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <p>Other symptoms tracking details would appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function SymptomCard({ icon, title, value, trend, description }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
          <TrendIndicator trend={trend} />
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  )
}

function TrendIndicator({ trend }) {
  if (trend === "up") {
    return (
      <div className="flex items-center text-green-300 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span>Improving</span>
      </div>
    )
  } else if (trend === "down") {
    return (
      <div className="flex items-center text-red-300 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <span>Decreasing</span>
      </div>
    )
  } else {
    return (
      <div className="flex items-center text-yellow-300 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
        </svg>
        <span>Stable</span>
      </div>
    )
  }
}

