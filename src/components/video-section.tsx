
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-mint-500/5" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">See How We Make DRNK</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Take a behind-the-scenes look at our commitment to quality and sustainability.
          </p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer group w-80">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 p-0 bg-white/90 hover:bg-white text-cyan-500 hover:text-cyan-600 hover:scale-110 transition-transform"
                >
                  <Play className="h-6 w-6 ml-1" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
              <div className="aspect-video relative ">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D22AQG9g9sOV-b7IQ/feedshare-shrink_1280/B4DZX52TtNG8Ak-/0/1743653537692?e=1747267200&v=beta&t=hVqSxplCMWhxKCz8NYQ8ti3xOVz1pio2h26cVOlprrg"
                  alt="DRNK production process"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <div className="aspect-video w-full">
              <div className="w-full h-full flex items-center justify-center bg-black/90 text-white">
                <p className="text-lg">Video player would appear here</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-cyan-500">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Sourcing</h3>
            <p className="text-muted-foreground">
              We carefully select the finest natural ingredients from sustainable sources around the world.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-teal-500">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Crafting</h3>
            <p className="text-muted-foreground">
              Our master blenders create perfect flavor combinations using traditional and innovative techniques.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-teal-500">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Packaging</h3>
            <p className="text-muted-foreground">
              We bottle our beverages in eco-friendly packaging, minimizing our environmental footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
