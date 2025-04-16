import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Handshake, Globe, Megaphone, Leaf, Award, Users, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Partnership() {
  const navigate = useNavigate()
  return (
    <section className="py-16 md:py-24">
            <ArrowLeft className="ml-2 h-10 relative bottom-6 left-6 " onClick={()=>navigate('/home')} />
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            Collaborate With Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Partnership Opportunities</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Join forces with DRNK to create meaningful collaborations that benefit both our brands and customers.
          </p>
        </div>

        <Tabs defaultValue="brand" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-12 bg-transparent h-auto p-0 gap-4">
            <TabsTrigger
              value="brand"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              Brand Partnerships
            </TabsTrigger>
            <TabsTrigger
              value="sustainability"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              Sustainability Initiatives
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              Events & Sponsorships
            </TabsTrigger>
          </TabsList>

          <TabsContent value="brand" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Co-Branding Opportunities</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Partner with DRNK to create unique co-branded products, experiences, or marketing campaigns that
                  leverage the strengths of both our brands.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-1">
                      <Handshake className="h-3 w-3 text-cyan-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Limited Edition Flavors:</span> Collaborate on
                      exclusive beverage flavors that combine our expertise with your brand identity.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-1">
                      <Handshake className="h-3 w-3 text-cyan-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Cross-Promotional Campaigns:</span> Create joint
                      marketing initiatives that reach both our audiences and drive mutual growth.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-1">
                      <Handshake className="h-3 w-3 text-cyan-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Bundled Offerings:</span> Package DRNK beverages
                      with complementary products from your brand for special promotions.
                    </p>
                  </div>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600">
                  Explore Co-Branding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Co-branding partnership"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Retail Partnerships</h3>
                  <p className="text-muted-foreground mb-6">
                    Create exclusive in-store experiences, custom displays, or special promotions that drive traffic and
                    sales for both our brands.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                    <Megaphone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Influencer Collaborations</h3>
                  <p className="text-muted-foreground mb-6">
                    Partner with us on influencer campaigns that authentically showcase both our brands to engaged
                    audiences.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Product Innovation</h3>
                  <p className="text-muted-foreground mb-6">
                    Collaborate on developing innovative beverage concepts that combine our expertise with your unique
                    perspective.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-cyan-50 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                  <p className="text-muted-foreground mb-6">
                    See how other brands have successfully partnered with DRNK to create memorable collaborations and
                    achieve mutual business goals.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=100&width=100"
                            alt="Partner logo"
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">FitLife Apparel</h4>
                          <p className="text-sm text-muted-foreground">Fitness Clothing Brand</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "Our limited edition DRNK x FitLife hydration kit was a huge success, driving a 40% increase in
                        social engagement and selling out within two weeks."
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=100&width=100"
                            alt="Partner logo"
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Green Harvest</h4>
                          <p className="text-sm text-muted-foreground">Organic Food Company</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "Partnering with DRNK on our farm-to-table event series created an authentic experience that
                        resonated with our shared audience of health-conscious consumers."
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
                  <p className="text-muted-foreground mb-6">
                    We're always looking for innovative brands that share our values of quality, sustainability, and
                    wellness. Let's create something amazing together.
                  </p>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Submit Partnership Proposal</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sustainability" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Environmental Initiatives</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join forces with DRNK on sustainability projects that make a real difference for our planet. We're
                  committed to reducing our environmental footprint and supporting conservation efforts.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <Leaf className="h-3 w-3 text-mint-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Ocean Cleanup:</span> Partner on initiatives to
                      remove plastic waste from oceans and waterways.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <Leaf className="h-3 w-3 text-mint-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Reforestation Projects:</span> Support tree planting
                      efforts to offset carbon emissions and restore natural habitats.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <Leaf className="h-3 w-3 text-mint-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Recycling Programs:</span> Develop innovative
                      recycling initiatives that reduce waste and promote circular economy.
                    </p>
                  </div>
                </div>
                <Button className="bg-mint-500 hover:bg-mint-600">
                  Join Our Green Initiatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Environmental sustainability"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-mint-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Water Conservation</h3>
                <p className="text-muted-foreground mb-6">
                  As a beverage company, water is our most precious resource. Partner with us on initiatives to protect
                  watersheds, improve water access, and promote responsible water usage.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Watershed protection and restoration projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Clean water access initiatives in underserved communities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Water conservation education and awareness campaigns</p>
                  </div>
                </div>
                <Button variant="outline">Learn More</Button>
              </div>

              <div className="bg-mint-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Sustainable Packaging Innovation</h3>
                <p className="text-muted-foreground mb-6">
                  Collaborate with us to develop and implement innovative, eco-friendly packaging solutions that reduce
                  environmental impact while maintaining product quality.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Biodegradable and compostable packaging research</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Plastic-free alternatives for beverage containers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-mint-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-mint-500" />
                    </div>
                    <p className="text-muted-foreground">Closed-loop recycling systems for packaging materials</p>
                  </div>
                </div>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-8 md:p-12 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Sustainability Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-mint-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-mint-600">100%</span>
                  </div>
                  <h4 className="font-bold mb-2">Recycled Packaging</h4>
                  <p className="text-sm text-muted-foreground">
                    By 2025, all DRNK packaging will be made from 100% recycled or renewable materials.
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-mint-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-mint-600">0</span>
                  </div>
                  <h4 className="font-bold mb-2">Carbon Neutral</h4>
                  <p className="text-sm text-muted-foreground">
                    Achieve carbon neutrality across our entire supply chain by 2030.
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-mint-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-mint-600">-50%</span>
                  </div>
                  <h4 className="font-bold mb-2">Water Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduce water usage in our production processes by 50% by 2027.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference Together?</h3>
              <p className="text-muted-foreground max-w-[800px] mx-auto mb-8">
                Whether you're a non-profit organization, environmental initiative, or a business with sustainability
                goals, we'd love to explore how we can collaborate to create positive environmental impact.
              </p>
              <Button className="bg-mint-500 hover:bg-mint-600" size="lg">
                Propose a Sustainability Partnership
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Event sponsorship"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Event Sponsorships</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  DRNK is proud to sponsor events that align with our brand values of wellness, sustainability, and
                  community. We offer various levels of sponsorship to fit different event types and sizes.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <Users className="h-3 w-3 text-citrus-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Product Sampling:</span> Provide DRNK beverages for
                      attendees to enjoy during your event.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <Users className="h-3 w-3 text-citrus-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Branded Experiences:</span> Create custom hydration
                      stations or interactive brand activations.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <Users className="h-3 w-3 text-citrus-600" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Financial Support:</span> Sponsorship packages that
                      include financial contributions to help make your event a success.
                    </p>
                  </div>
                </div>
                <Button className="bg-citrus-500 hover:bg-citrus-600">
                  Request Event Sponsorship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fitness events"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fitness & Wellness Events</h3>
                  <p className="text-muted-foreground mb-6">
                    From yoga festivals to marathons, we support events that promote physical activity and holistic
                    wellness.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Music festivals"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Music & Cultural Festivals</h3>
                  <p className="text-muted-foreground mb-6">
                    Keep festival-goers refreshed and hydrated with DRNK beverages while they enjoy music and culture.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Community events"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Community & Charity Events</h3>
                  <p className="text-muted-foreground mb-6">
                    Support events that give back to communities and advance important social causes.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-citrus-50 rounded-xl p-8 md:p-12 mb-16">
              <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">DRNK Event Calendar</h3>
                  <p className="text-muted-foreground mb-6">
                    Check out the upcoming events where you can find DRNK. From pop-up shops to sponsored festivals,
                    we're always on the move!
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                      <div className="bg-citrus-100 text-citrus-700 rounded-lg p-2 text-center min-w-[60px]">
                        <div className="text-sm font-medium">MAY</div>
                        <div className="text-xl font-bold">15</div>
                      </div>
                      <div>
                        <h4 className="font-bold">Beach Cleanup & Yoga</h4>
                        <p className="text-sm text-muted-foreground mb-1">Santa Monica Beach, CA</p>
                        <p className="text-sm">
                          Join us for a morning of beach cleanup followed by a refreshing yoga session.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                      <div className="bg-citrus-100 text-citrus-700 rounded-lg p-2 text-center min-w-[60px]">
                        <div className="text-sm font-medium">JUN</div>
                        <div className="text-xl font-bold">22</div>
                      </div>
                      <div>
                        <h4 className="font-bold">Summer Music Festival</h4>
                        <p className="text-sm text-muted-foreground mb-1">Central Park, NY</p>
                        <p className="text-sm">
                          Visit our hydration station for free samples and exclusive merchandise.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                      <div className="bg-citrus-100 text-citrus-700 rounded-lg p-2 text-center min-w-[60px]">
                        <div className="text-sm font-medium">JUL</div>
                        <div className="text-xl font-bold">10</div>
                      </div>
                      <div>
                        <h4 className="font-bold">Wellness Conference</h4>
                        <p className="text-sm text-muted-foreground mb-1">Convention Center, Chicago, IL</p>
                        <p className="text-sm">Stop by our booth for product tastings and wellness conversations.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-4">Host Your Own DRNK Event</h4>
                  <p className="text-muted-foreground mb-6">
                    Have an idea for a DRNK-sponsored event in your community? We're always looking for creative event
                    partnerships.
                  </p>
                  <Button className="w-full bg-citrus-500 hover:bg-citrus-600">Propose an Event</Button>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Sponsorship Criteria</h3>
              <p className="text-muted-foreground text-center max-w-[800px] mx-auto mb-8">
                We carefully select events that align with our brand values and reach our target audience. Here's what
                we look for in potential sponsorships:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Alignment with DRNK values</span> of wellness,
                      sustainability, and community
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Audience demographics</span> that match our target
                      consumer profile
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Opportunity for meaningful engagement</span> with
                      attendees, not just logo placement
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Sustainable event practices</span> that minimize
                      environmental impact
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Geographic relevance</span> to our distribution
                      markets and growth strategy
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-citrus-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-citrus-500" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Potential for long-term partnership</span> rather
                      than one-off sponsorships
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-citrus-500 hover:bg-citrus-600">Submit Sponsorship Request</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}