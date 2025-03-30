"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, Users } from "lucide-react"

export function CommunitySection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Community Discussions</h2>
        <Button className="bg-white text-teal-800 hover:bg-teal-50">Join Community</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CommunityPost
          author={{
            name: "Sarah J.",
            avatar: "/placeholder.svg?height=100&width=100",
            badge: "Wellness Coach",
          }}
          timeAgo="2 hours ago"
          content="I've been practicing mindfulness meditation for managing hot flashes, and it's been a game-changer! Anyone else tried this approach?"
          tags={["Mindfulness", "Hot Flashes", "Self-Care"]}
          likes={24}
          comments={8}
        />

        <CommunityPost
          author={{
            name: "Michelle T.",
            avatar: "/placeholder.svg?height=100&width=100",
            badge: "Community Leader",
          }}
          timeAgo="Yesterday"
          content="Just discovered a cooling pillow that's helping me sleep through the night without waking up from night sweats. Happy to share the brand if anyone's interested!"
          tags={["Sleep Solutions", "Night Sweats", "Product Recommendation"]}
          likes={42}
          comments={15}
        />
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl">Upcoming Community Events</CardTitle>
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

          <CommunityEvent
            title="Nutrition Workshop: Foods that Help"
            date="April 15, 2025 • 6:30 PM"
            attendees={24}
            description="Learn about foods that can help manage menopause symptoms with nutritionist Dr. Mark Williams."
          />
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-teal-200 hover:text-white hover:bg-white/10">
            View All Events
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function CommunityPost({ author, timeAgo, content, tags, likes, comments }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/15 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{author.name}</span>
              {author.badge && (
                <Badge variant="outline" className="text-xs bg-teal-800/50 text-teal-200 border-teal-700">
                  {author.badge}
                </Badge>
              )}
            </div>
            <p className="text-xs text-white/60">{timeAgo}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="mb-3">{content}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t border-white/10 flex justify-between">
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
          <Heart className="h-4 w-4 mr-1" />
          {likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
          <MessageSquare className="h-4 w-4 mr-1" />
          {comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
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

