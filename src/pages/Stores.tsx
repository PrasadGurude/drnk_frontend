
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Navigation, Phone, Clock, ExternalLink, Filter, ArrowLeft } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useMobile } from "@/hooks/use-mobile"
import { useNavigate } from "react-router-dom"

// Mock data for stores
const stores = [
  {
    id: 1,
    name: "Whole Foods Market",
    address: "123 MG Road, Pune 411001",
    phone: "(020) 2555-1234",
    distance: 0.8,
    hours: "8:00 AM - 10:00 PM",
    products: ["Sparkling Water", "Fruit Infusions", "Wellness Tonics"],
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    id: 2,
    name: "Urban Refreshment",
    address: "456 Bandra West, Mumbai 400050",
    phone: "(022) 2555-5678",
    distance: 1.2,
    hours: "7:00 AM - 9:00 PM",
    products: ["Sparkling Water", "Energy Drinks"],
    coordinates: { lat: 19.0760, lng: 72.8777 },
  },
  {
    id: 3,
    name: "Health Haven",
    address: "789 Connaught Place, Delhi 110001",
    phone: "(011) 2555-9012",
    distance: 1.5,
    hours: "9:00 AM - 8:00 PM",
    products: ["Wellness Tonics", "Fruit Infusions"],
    coordinates: { lat: 28.6139, lng: 77.2090 },
  },
]

export default function Store() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStore, setSelectedStore] = useState<number | null>(null)
  const [cityFilters, setCityFilters] = useState<string[]>([])
  const isMobile = useMobile()
  const navigate = useNavigate()

  const handleProductFilterChange = (product: string) => {
    setCityFilters((prev) => (prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]))
  }

  const filteredStores = stores.filter((store) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by products
    const matchesCity =
      cityFilters.length === 0 || cityFilters.some((filter) => store.address.toLowerCase().includes(filter.toLowerCase()))


    return matchesSearch && matchesCity
  })

  // Sort by distance
  const sortedStores = [...filteredStores].sort((a, b) => a.distance - b.distance)

  const FilterContent = () => (
    <div className="space-y-6 flex justify-center flex-col items-center w-60">

      <div>
        <h3 className="text-lg font-medium mb-3"> Available Cities</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Pune"
              checked={cityFilters.includes("Pune")}
              onCheckedChange={() => handleProductFilterChange("Pune")}
            />
            <Label htmlFor="Pune">Pune</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Mumbai"
              checked={cityFilters.includes("Mumbai")}
              onCheckedChange={() => handleProductFilterChange("Mumbai")}
            />
            <Label htmlFor="Mumbai">Mumbai</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="Delhi"
              checked={cityFilters.includes("Delhi")}
              onCheckedChange={() => handleProductFilterChange("Delhi")}
            />
            <Label htmlFor="Delhi">Delhi</Label>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setCityFilters([])
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  )

  return (
    <section className="py-16 md:py-24 flex flex-col justify-center items-center">
      <ArrowLeft className="ml-2 h-10 fixed top-6 left-6 " onClick={() => navigate('/home')} />
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            Find DRNK Near You
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Store Locator</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Find DRNK beverages at a store near you. Enter your location to discover where our products are available.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter zip code or address..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600">Find Stores</Button>
            {isMobile ? (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filter Stores</DrawerTitle>
                    <DrawerDescription>Narrow down stores by type and available products</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    <FilterContent />
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Apply Filters</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Stores</SheetTitle>
                    <SheetDescription>Narrow down stores by type and available products</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-[400px] mx-auto mb-8">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="mt-0">
              <div className="grid gap-4">
                {sortedStores.length > 0 ? (
                  sortedStores.map((store) => (
                    <Card
                      key={store.id}
                      className={`overflow-hidden transition-all ${selectedStore === store.id ? "ring-2 ring-cyan-500" : ""}`}
                      onClick={() => setSelectedStore(store.id)}
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[1fr_auto] gap-4">
                          <div className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                              <h3 className="font-bold text-xl">{store.name}</h3>
                            </div>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4 mr-2 shrink-0" />
                              <span>{store.address}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <Phone className="h-4 w-4 mr-2 shrink-0" />
                              <span>{store.phone}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground mb-4">
                              <Clock className="h-4 w-4 mr-2 shrink-0" />
                              <span>{store.hours}</span>
                            </div>
                            <div className="mb-4">
                              <h4 className="text-sm font-medium mb-2">Available Products:</h4>
                              <div className="flex flex-wrap gap-2">
                                {store.products.map((product, index) => (
                                  <Badge key={index} variant="secondary" className="bg-cyan-50">
                                    {product}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="bg-cyan-50 p-6 flex flex-col justify-between">
                            <div className="text-center mb-4">
                              <span className="text-3xl font-bold text-cyan-700">{store.distance}</span>
                              <span className="text-sm text-muted-foreground"> miles away</span>
                            </div>
                            <div className="space-y-3">
                              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                                <Navigation className="h-4 w-4 mr-2" />
                                Directions
                              </Button>
                              <Button variant="outline" className="w-full">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Website
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-muted/20 rounded-lg">
                    <p className="text-muted-foreground mb-4">No stores match your search criteria.</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setCityFilters([])
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="map" className="mt-0">
              <div className="bg-muted/20 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>

              {selectedStore && (
                <div className="mt-6">
                  <h3 className="font-bold text-xl mb-4">Selected Store</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-[1fr_auto] gap-4">
                        <div>
                          <h3 className="font-bold text-xl mb-2">{stores.find((s) => s.id === selectedStore)?.name}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 mr-2 shrink-0" />
                            <span>{stores.find((s) => s.id === selectedStore)?.address}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Phone className="h-4 w-4 mr-2 shrink-0" />
                            <span>{stores.find((s) => s.id === selectedStore)?.phone}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-cyan-500 hover:bg-cyan-600">
                            <Navigation className="h-4 w-4 mr-2" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
