import {Link} from "react-router-dom"
import {Instagram}  from "lucide-react"
import { Button } from "@/components/ui/button"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=400",
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=400",
    likes: 189,
    comments: 24,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=400",
    likes: 321,
    comments: 32,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=400",
    likes: 178,
    comments: 14,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=400",
    likes: 267,
    comments: 29,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=400",
    likes: 198,
    comments: 21,
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 flex justify-center items-center bg-cyan-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            @drnkbeverages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Follow Us on Instagram</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Join our community and share your DRNK moments with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link to="#" key={post.id} className="relative aspect-square overflow-hidden group rounded-lg">
              <img
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-medium">{post.likes} likes</p>
                  <p className="text-sm">{post.comments} comments</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2">
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
