
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useMobile } from "../hooks/use-mobile"

const products = [
  {
    id: "sparkling",
    name: "Sparkling Water",
    description:
      "Our sparkling water range combines crisp bubbles with natural flavors for a refreshing experience without any added sugar or calories.",
    features: ["Zero calories", "No artificial sweeteners", "Natural flavors", "Recyclable packaging"],
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2018/10/club-soda-sparkling-water.jpg?quality=82&strip=1",
    color: "bg-cyan-50",
    gradient: "from-cyan-500/10 to-mint-500/5",
  },
  {
    id: "infusions",
    name: "Fruit Infusions",
    description:
      "Delicately infused with real fruit extracts, our fruit infusions deliver a burst of flavor while keeping sugar content low.",
    features: ["Real fruit extracts", "Low sugar", "No artificial colors", "Rich in antioxidants"],
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/03/shutterstock_305343494.jpg",
    color: "bg-berry-50",
    gradient: "from-berry-500/10 to-cyan-500/5",
  },
  {
    id: "energy",
    name: "Natural Energy",
    description:
      "Our energy drinks harness the power of natural caffeine sources and adaptogens for a clean, sustained energy boost without the crash.",
    features: ["Plant-based caffeine", "B vitamins", "No artificial stimulants", "Sustained energy release"],
    image: "https://th.bing.com/th/id/OIP.HOaxcK-yXu9nBycvvXEIxwHaE8?rs=1&pid=ImgDetMain",
    color: "bg-citrus-50",
    gradient: "from-citrus-500/10 to-mint-500/5",
  },
  {
    id: "wellness",
    name: "Wellness Tonics",
    description:
      "Formulated with functional ingredients like herbs, vitamins, and minerals, our wellness tonics support your daily health goals.",
    features: ["Functional ingredients", "Immune support", "Digestive health", "Mental clarity"],
    image: "https://www.belmarrahealth.com/wp-content/uploads/2021/09/You-Are-What-You-Absorb-Sep-11-AM.jpg",
    color: "bg-mint-50",
    gradient: "from-mint-500/10 to-cyan-500/5",
  },
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("sparkling")
  // const isMobile = useMobile()

  // const activeProduct = products.find((p) => p.id === activeTab) || products[0]

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 mb-4">
          Our Range
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Find Your Perfect Refreshment</h2>
        <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
          From sparkling waters to wellness tonics, we have a drink for every moment and mood.
        </p>
      </div>

      <Tabs defaultValue="sparkling" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-12 bg-transparent h-auto p-0 gap-4">
          {products.map((product) => (
            <TabsTrigger
              key={product.id}
              value={product.id}
              className={`text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300`}
            >
              {product.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {products.map((product) => (
          <TabsContent key={product.id} value={product.id} className="mt-0">
            <div
              className={`rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient} transition-all duration-500`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">{product.name}</h3>
                  <p className="text-muted-foreground text-lg mb-8">{product.description}</p>
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-cyan-500" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button size="lg" className="w-fit bg-cyan-500 hover:bg-cyan-600 group">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button> */}
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-white/50 blur-xl" />
                  </div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl z-10 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
