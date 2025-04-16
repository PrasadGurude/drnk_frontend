
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "layered matcha strawberry latte",
    description: "Sparkling water with a refreshing citrus twist",
    price: "₹200",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEvhIoKrwR_bQ/feedshare-shrink_1280/B4DZX52TtOHIAk-/0/1743653537655?e=1747267200&v=beta&t=gI0TMhHCbq8jxapDzQI8SKmw6hBmrNRAOIMRnsVEt3E",
    badge: "Bestseller",
    color: "bg-citrus-50",
  },
  {
    id: 2,
    name: "Tiramisu Latte",
    description: "Mixed berry infusion with antioxidants",
    price: "₹250",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEjbqFRh2QXLQ/feedshare-shrink_1280/B4DZX52Tt5GwAk-/0/1743653538710?e=1747267200&v=beta&t=gBlWhDyPUuTa6cjHVWw87PbParIG_CmbdesiQxeCIl8",
    badge: "New",
    color: "bg-berry-50",
  },
  {
    id: 3,
    name: "Matcha Cream Latte",
    description: "Cool and refreshing cucumber mint water",
    price: "₹150",
    badge: "Popular",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHK1H_WZ_aitA/feedshare-shrink_1280/B4DZX52TsPH4Ao-/0/1743653537716?e=1747267200&v=beta&t=cuaZoqvyymDQGB8r22kk2xkAIz21w8lCr5qtH_NCyuk",
    color: "bg-mint-50",
  },
  {
    id: 4,
    name: "Oreo Chocolate Milkshake",
    description: "Natural energy boost with tropical flavors",
    price: "₹349",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG9g9sOV-b7IQ/feedshare-shrink_1280/B4DZX52TtNG8Ak-/0/1743653537692?e=1747267200&v=beta&t=hVqSxplCMWhxKCz8NYQ8ti3xOVz1pio2h26cVOlprrg",
    badge: "Limited",
    color: "bg-cyan-50",
  },
]

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-xl border-0 group"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className={`relative aspect-square ${product.color} overflow-hidden`}>
            <div
              className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/5 z-10 transition-opacity duration-300 ${
                hoveredProduct === product.id ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                hoveredProduct === product.id ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain transition-transform duration-500 drop-shadow-xl"
              />
            </div>
            {product.badge && (
              <Badge className="absolute top-3 right-3 z-20 bg-cyan-500 hover:bg-cyan-600">{product.badge}</Badge>
            )}
          </div>
          <CardContent className="px-6 py-2 h-40">
            <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-500 transition-colors">{product.name}</h3>
            <p className="text-muted-foreground mb-3">{product.description}</p>
            <p className="font-medium text-lg">{product.price}</p>
          </CardContent>
          {/* <CardFooter className="p-6 pt-0">
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 group">
              <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Add to Cart
            </Button>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  )
}
