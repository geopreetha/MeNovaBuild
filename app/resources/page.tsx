import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, Download } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400">
      <Navbar />

      <main className="pt-20 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Curated Resources</h2>
            <p className="text-lg opacity-90 max-w-3xl">
              Access reliable, up-to-date information on menopause, treatments, and lifestyle recommendations.
            </p>
          </div>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="bg-white/10 text-white mb-6">
              <TabsTrigger value="articles" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Videos
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Guides
              </TabsTrigger>
              <TabsTrigger value="research" className="data-[state=active]:bg-white data-[state=active]:text-teal-800">
                Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  icon={<FileText />}
                  title="Understanding Hormone Changes"
                  description="Learn about the hormonal shifts during menopause and how they affect your body and mind."
                  type="Article"
                  time="10 min read"
                />
                <ResourceCard
                  icon={<FileText />}
                  title="Managing Hot Flashes Naturally"
                  description="Discover evidence-based natural remedies and lifestyle changes to reduce hot flash frequency and intensity."
                  type="Article"
                  time="8 min read"
                />
                <ResourceCard
                  icon={<FileText />}
                  title="Sleep Strategies During Menopause"
                  description="Practical tips for improving sleep quality when dealing with night sweats and insomnia."
                  type="Article"
                  time="12 min read"
                />
                <ResourceCard
                  icon={<FileText />}
                  title="Nutrition for Menopause"
                  description="Foods that can help manage symptoms and support overall health during this transition."
                  type="Article"
                  time="15 min read"
                />
                <ResourceCard
                  icon={<FileText />}
                  title="Emotional Wellbeing"
                  description="Understanding and managing mood changes, anxiety, and depression during menopause."
                  type="Article"
                  time="11 min read"
                />
                <ResourceCard
                  icon={<FileText />}
                  title="Talking to Your Doctor"
                  description="How to effectively communicate with healthcare providers about your menopause symptoms."
                  type="Article"
                  time="9 min read"
                />
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  icon={<Video />}
                  title="Menopause Explained"
                  description="A comprehensive overview of what happens during menopause and what to expect."
                  type="Video"
                  time="18 min"
                />
                <ResourceCard
                  icon={<Video />}
                  title="Exercise for Menopause"
                  description="The best types of exercise to maintain bone density, manage weight, and improve mood."
                  type="Video"
                  time="22 min"
                />
                <ResourceCard
                  icon={<Video />}
                  title="Expert Q&A Session"
                  description="Top gynecologists answer common questions about menopause treatments and management."
                  type="Video"
                  time="45 min"
                />
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  icon={<BookOpen />}
                  title="Complete Menopause Guide"
                  description="A comprehensive resource covering all aspects of menopause from perimenopause to postmenopause."
                  type="Guide"
                  time="PDF, 42 pages"
                />
                <ResourceCard
                  icon={<BookOpen />}
                  title="Symptom Tracking Workbook"
                  description="Printable worksheets to help you track and analyze your menopause symptoms over time."
                  type="Guide"
                  time="PDF, 18 pages"
                />
                <ResourceCard
                  icon={<BookOpen />}
                  title="Menopause Nutrition Plan"
                  description="A 4-week meal plan designed to support hormonal balance and overall wellbeing."
                  type="Guide"
                  time="PDF, 24 pages"
                />
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  icon={<Download />}
                  title="Latest HRT Research"
                  description="A summary of recent studies on hormone replacement therapy benefits and risks."
                  type="Research"
                  time="Updated March 2025"
                />
                <ResourceCard
                  icon={<Download />}
                  title="Cognitive Changes During Menopause"
                  description="Research findings on brain fog, memory, and cognitive function during menopause."
                  type="Research"
                  time="Updated January 2025"
                />
                <ResourceCard
                  icon={<Download />}
                  title="Alternative Therapies: Evidence Review"
                  description="An analysis of scientific evidence for complementary and alternative menopause treatments."
                  type="Research"
                  time="Updated February 2025"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function ResourceCard({ icon, title, description, type, time }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/15 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-2 text-teal-200 mb-2">
          {icon}
          <span className="text-sm font-medium">{type}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-white/80">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between border-t border-white/10 pt-4">
        <span className="text-sm text-white/60">{time}</span>
        <Button variant="ghost" className="text-teal-200 hover:text-white hover:bg-white/10">
          View Resource
        </Button>
      </CardFooter>
    </Card>
  )
}

