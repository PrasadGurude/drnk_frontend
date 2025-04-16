
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "DRNK's Cucumber Mint water is my go-to after workouts. It's refreshing without any artificial ingredients, and I love that the company is committed to sustainability.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Office Manager",
    content:
      "We switched our office beverage supply to DRNK and our team couldn't be happier. The variety of flavors keeps everyone satisfied, and we feel good about supporting an eco-conscious brand.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    content:
      "The Wellness Tonics have become part of my daily routine. They provide just the right boost without the crash I used to get from other drinks. Plus, they taste amazing!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Restaurant Owner",
    content:
      "Our customers love having DRNK options on our menu. The natural ingredients and great taste profile pair perfectly with our food, and the bottles look great on the table.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3)

  const handlePrev = () => {
    setActiveIndex(Math.max(0, activeIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex(Math.min(testimonials.length - 3, activeIndex + 1))
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cyan-50 flex justify-center items-center ">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Don't just take our word for it - hear from some of our satisfied customers about their DRNK experience.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-8">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex >= testimonials.length - 3}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
