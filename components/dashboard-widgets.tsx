"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, Calendar, Bell, Award, ArrowRight } from "lucide-react"

export function SymptomChart() {
  // This would be connected to real data in a production app
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        name: "Hot Flashes",
        data: [3, 5, 4, 3, 2, 1, 2],
      },
      {
        name: "Mood Fluctuations",
        data: [2, 3, 4, 5, 3, 2, 1],
      },
    ],
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Weekly Symptom Trends</CardTitle>
          <CardDescription className="text-white/70">Last 7 days</CardDescription>
        </div>
        <Tabs defaultValue="line" className="w-[120px]">
          <TabsList className="grid grid-cols-2 bg-white/5">
            <TabsTrigger value="line" className="data-[state=active]:bg-white/20">
              <LineChart className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="bar" className="data-[state=active]:bg-white/20">
              <BarChart className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] mt-4 relative">
          {/* This is a placeholder for the actual chart component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-6 w-full">
              {chartData.datasets.map((dataset, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{dataset.name}</span>
                    <span>Avg: {dataset.data.reduce((a, b) => a + b, 0) / dataset.data.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {dataset.data.map((value, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-sm overflow-hidden">
                        <div
                          className={`h-16 ${index === 0 ? "bg-red-400/70" : "bg-blue-400/70"}`}
                          style={{ height: `${(value / 5) * 100}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-white/60">
                    {chartData.labels.map((label, i) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function JourneyProgress() {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
      <CardHeader>
        <CardTitle className="text-xl">Your Journey Progress</CardTitle>
        <CardDescription className="text-white/70">Track your menopause journey milestones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Symptom Tracking</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="h-2 bg-white/10" indicatorClassName="bg-teal-300" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Resource Exploration</span>
            <span>40%</span>
          </div>
          <Progress value={40} className="h-2 bg-white/10" indicatorClassName="bg-teal-300" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Community Engagement</span>
            <span>25%</span>
          </div>
          <Progress value={25} className="h-2 bg-white/10" indicatorClassName="bg-teal-300" />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <Award className="h-5 w-5 text-yellow-300" />
          <span className="text-sm">Next milestone: Complete 30 days of tracking</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function UpcomingReminders() {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Upcoming Reminders</CardTitle>
          <CardDescription className="text-white/70">Stay on track with your health</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Calendar className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-2">
          <ReminderItem
            title="Doctor Appointment"
            date="Tomorrow, 10:00 AM"
            description="Annual checkup with Dr. Johnson"
            priority="high"
          />
          <ReminderItem
            title="Take Supplements"
            date="Daily, 8:00 AM"
            description="Calcium and Vitamin D"
            priority="medium"
          />
          <ReminderItem
            title="Meditation Session"
            date="Today, 7:00 PM"
            description="15-minute guided relaxation"
            priority="low"
          />
          <Button
            variant="ghost"
            className="w-full justify-start text-teal-200 hover:text-white hover:bg-white/10 mt-2"
          >
            View all reminders
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ReminderItem({ title, date, description, priority }) {
  const priorityColors = {
    high: "bg-red-400/20 border-red-400/40",
    medium: "bg-yellow-400/20 border-yellow-400/40",
    low: "bg-green-400/20 border-green-400/40",
  }

  return (
    <div className={`p-3 rounded-lg border ${priorityColors[priority]} flex items-start gap-3`}>
      <Bell className="h-5 w-5 text-white/70 mt-0.5" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-white/70">{date}</p>
        <p className="text-sm text-white/90 mt-1">{description}</p>
      </div>
    </div>
  )
}

