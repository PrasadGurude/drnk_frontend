import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function MoreAboutDrnk() {
    const navigate = useNavigate()
  return (
    <section className="py-12 bg-gray-50">
      <ArrowLeft className="ml-2 h-10 relative bottom-6 left-6 " onClick={()=>navigate('/home')} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">About Drnk</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A fresh take on beverages, blending innovation and vibe to shake up India’s QSR scene.
          </p>
        </div>

        <Tabs defaultValue="story" className="max-w-3xl mx-auto flex justify-center items-center">
          <TabsList className="grid grid-cols-4 gap-3 mb-8 bg-white p-2 rounded-lg shadow-sm h-12">
            <TabsTrigger value="story" className="py-2 px-3 rounded-md text-gray-700 hover:bg-cyan-100 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
              Story
            </TabsTrigger>
            <TabsTrigger value="mission" className="py-2 px-3 rounded-md text-gray-700 hover:bg-cyan-100 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
              Mission
            </TabsTrigger>
            <TabsTrigger value="team" className="py-2 px-3 rounded-md text-gray-700 hover:bg-cyan-100 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
              Team
            </TabsTrigger>
            <TabsTrigger value="timeline" className="py-2 px-3 rounded-md text-gray-700 hover:bg-cyan-100 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Drnk was born from Aryan Gandhi’s vision at just 20 years old—to craft bold, innovative beverages that stand out. Inspired by India’s evolving taste buds and global QSR trends, Aryan started Drnk to bring a fresh, vibrant identity to the market.
            </p>
            <p className="text-gray-600 mb-6">
              The name "Drnk" is a playful, edgy nod to modern refreshment—short, punchy, and unforgettable. From event stalls to a growing presence, we’re here to redefine how India drinks.
            </p>
            {/* <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Dive In <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </TabsContent>

          <TabsContent value="mission" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 italic mb-4">
              "To create India’s biggest QSR chain with flavors that pop and a vibe that sticks."
            </p>
            <p className="text-gray-600">
              We’re all about bold branding and smart marketing—Aryan’s passion fuels our drive to make Drnk a go-to name in every city, balancing online buzz with offline hustle.
            </p>
          </TabsContent>

          <TabsContent value="team" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Crew</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">Aryan Gandhi</h3>
                  <p className="text-cyan-600 text-sm">Founder & Dreamer</p>
                  <p className="text-gray-600 text-sm mt-2">
                    A 20-year-old entrepreneur with a knack for innovation, Aryan’s leading Drnk to QSR greatness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">Aman Gupta</h3>
                  <p className="text-cyan-600 text-sm">Advisor (boAt Founder)</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Aman’s insights on branding and scaling keep Drnk on the right track.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Path</h2>
            <div className="space-y-6 relative">
              <div className="relative pl-8">
                <Calendar className="absolute left-0 top-1 h-5 w-5 text-cyan-500" />
                <h3 className="font-bold text-gray-800">2023 - Kickoff</h3>
                <p className="text-gray-600">Aryan launches Drnk with a focus on unique flavors.</p>
              </div>
              <div className="relative pl-8">
                <Calendar className="absolute left-0 top-1 h-5 w-5 text-cyan-500" />
                <h3 className="font-bold text-gray-800">2024 - First Steps</h3>
                <p className="text-gray-600">Drnk hits events with stalls, sparking interest.</p>
              </div>
              <div className="relative pl-8">
                <Calendar className="absolute left-0 top-1 h-5 w-5 text-cyan-500" />
                <h3 className="font-bold text-gray-800">2025 - Scaling Up</h3>
                <p className="text-gray-600">Expanding across India, blending online and offline growth.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}