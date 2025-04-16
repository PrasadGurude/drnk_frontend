import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building2, TrendingUp, Truck, ShieldCheck, Users, Phone, Mail, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

export default function Wholesale() {
  const navigate = useNavigate()
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cyan-50">
      <ArrowLeft className="ml-2 h-12 relative bottom-14 left-6 " onClick={() => navigate('/home')} />
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            Business Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Wholesale Inquiries</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Bring the refreshing taste of DRNK to your customers. We offer competitive wholesale pricing and support for
            businesses of all sizes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-12 bg-transparent h-auto p-0 gap-4">
              <TabsTrigger
                value="benefits"
                className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
              >
                Benefits
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="apply"
                className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
              >
                Apply Now
              </TabsTrigger>
            </TabsList>

            <TabsContent value="benefits" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <TrendingUp className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Competitive Margins</h3>
                    <p className="text-muted-foreground">
                      Enjoy healthy profit margins with our competitive wholesale pricing structure. Our pricing is
                      designed to help your business thrive while offering premium beverages to your customers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <Truck className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Reliable Delivery</h3>
                    <p className="text-muted-foreground">
                      Count on our efficient distribution network for timely deliveries. We work with trusted logistics
                      partners to ensure your stock arrives fresh and on schedule, every time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <ShieldCheck className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
                    <p className="text-muted-foreground">
                      We stand behind the quality of our products. Our beverages are crafted with premium ingredients
                      and undergo rigorous quality control to ensure consistency and excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <Users className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Receive personalized attention from our wholesale team. Your dedicated account manager will help
                      optimize your product selection, resolve issues promptly, and ensure your success.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <Building2 className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Marketing Support</h3>
                    <p className="text-muted-foreground">
                      Access promotional materials, digital assets, and merchandising solutions to help showcase DRNK
                      products effectively. We provide the tools you need to drive sales and customer engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                      <CheckCircle className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Flexible Terms</h3>
                    <p className="text-muted-foreground">
                      Benefit from flexible ordering minimums and payment terms tailored to your business size and
                      needs. We work with you to create a partnership that supports your growth.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-cyan-500 hover:bg-cyan-600" size="lg">
                  Apply for Wholesale
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="programs" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="overflow-hidden">
                  <div className="h-2 bg-cyan-500" />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">Retailer Program</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      For grocery stores, markets, and specialty retailers
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Minimum order: 10 cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Volume discounts available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Point-of-sale materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Shelf management support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Net 30 payment terms</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Apply as Retailer</Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-2 bg-mint-500" />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">Food Service Program</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      For restaurants, cafes, and hospitality businesses
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-mint-500 shrink-0 mt-0.5" />
                        <span>Minimum order: 5 cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-mint-500 shrink-0 mt-0.5" />
                        <span>Custom menu integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-mint-500 shrink-0 mt-0.5" />
                        <span>Staff training materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-mint-500 shrink-0 mt-0.5" />
                        <span>Branded glassware available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-mint-500 shrink-0 mt-0.5" />
                        <span>Flexible delivery schedule</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-mint-500 hover:bg-mint-600">Apply as Food Service</Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-2 bg-citrus-500" />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">Distributor Program</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      For regional and national distribution partners
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-citrus-500 shrink-0 mt-0.5" />
                        <span>Exclusive territory options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-citrus-500 shrink-0 mt-0.5" />
                        <span>Higher volume discounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-citrus-500 shrink-0 mt-0.5" />
                        <span>Marketing development funds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-citrus-500 shrink-0 mt-0.5" />
                        <span>Co-branded opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-citrus-500 shrink-0 mt-0.5" />
                        <span>Dedicated account team</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-citrus-500 hover:bg-citrus-600">Apply as Distributor</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-8 bg-cyan-50 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Custom Programs Available</h3>
                <p className="text-muted-foreground mb-6">
                  Don't see a program that fits your business model? We offer custom wholesale solutions tailored to
                  unique business needs. Contact our wholesale team to discuss a personalized partnership.
                </p>
                <Button variant="outline">Request Custom Program</Button>
              </div>
            </TabsContent>

            <TabsContent value="apply" className="mt-0">
              <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Wholesale Application</h2>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Business Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="business-name" className="text-sm font-medium">
                            Business Name
                          </label>
                          <Input id="business-name" placeholder="Your business name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="business-type" className="text-sm font-medium">
                            Business Type
                          </label>
                          <Select>
                            <SelectTrigger id="business-type">
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="retailer">Retailer</SelectItem>
                              <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                              <SelectItem value="distributor">Distributor</SelectItem>
                              <SelectItem value="hotel">Hotel/Hospitality</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="business-address" className="text-sm font-medium">
                          Business Address
                        </label>
                        <Input id="business-address" placeholder="Street address" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="city" className="text-sm font-medium">
                            City
                          </label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="state" className="text-sm font-medium">
                            State/Province
                          </label>
                          <Input id="state" placeholder="State/Province" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="zip" className="text-sm font-medium">
                            ZIP/Postal Code
                          </label>
                          <Input id="zip" placeholder="ZIP/Postal Code" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="website" className="text-sm font-medium">
                            Website
                          </label>
                          <Input id="website" placeholder="https://" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="tax-id" className="text-sm font-medium">
                            Tax ID/Business License
                          </label>
                          <Input id="tax-id" placeholder="Tax ID or business license number" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="contact-name" className="text-sm font-medium">
                            Contact Name
                          </label>
                          <Input id="contact-name" placeholder="Full name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="position" className="text-sm font-medium">
                            Position/Title
                          </label>
                          <Input id="position" placeholder="Your role" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="Your email" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" placeholder="Your phone number" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Order Information</h3>
                      <div className="space-y-2">
                        <label htmlFor="program" className="text-sm font-medium">
                          Wholesale Program
                        </label>
                        <Select>
                          <SelectTrigger id="program">
                            <SelectValue placeholder="Select program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retailer">Retailer Program</SelectItem>
                            <SelectItem value="food-service">Food Service Program</SelectItem>
                            <SelectItem value="distributor">Distributor Program</SelectItem>
                            <SelectItem value="custom">Custom Program</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="estimated-volume" className="text-sm font-medium">
                          Estimated Monthly Volume
                        </label>
                        <Select>
                          <SelectTrigger id="estimated-volume">
                            <SelectValue placeholder="Select estimated volume" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">5-10 cases</SelectItem>
                            <SelectItem value="medium">11-25 cases</SelectItem>
                            <SelectItem value="large">26-50 cases</SelectItem>
                            <SelectItem value="xlarge">50+ cases</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="products" className="text-sm font-medium">
                          Products of Interest
                        </label>
                        <Select>
                          <SelectTrigger id="products">
                            <SelectValue placeholder="Select products" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Product Lines</SelectItem>
                            <SelectItem value="sparkling">Sparkling Water</SelectItem>
                            <SelectItem value="infusions">Fruit Infusions</SelectItem>
                            <SelectItem value="energy">Energy Drinks</SelectItem>
                            <SelectItem value="wellness">Wellness Tonics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="additional-info" className="text-sm font-medium">
                          Additional Information
                        </label>
                        <Textarea
                          id="additional-info"
                          placeholder="Tell us more about your business and how you plan to sell DRNK products"
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Submit Application</Button>
                  </form>
                </div>

                <div className="space-y-8">
                  <Card className="bg-cyan-50 border-0">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">What Happens Next?</h3>
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-cyan-700">1</span>
                          </div>
                          <p className="text-muted-foreground">
                            Our wholesale team reviews your application (typically within 2 business days)
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-cyan-700">2</span>
                          </div>
                          <p className="text-muted-foreground">
                            A dedicated account manager contacts you to discuss your specific needs
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-cyan-700">3</span>
                          </div>
                          <p className="text-muted-foreground">
                            We provide a customized wholesale agreement based on your business requirements
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-cyan-700">4</span>
                          </div>
                          <p className="text-muted-foreground">
                            Once approved, you'll receive access to our wholesale portal to place your first order
                          </p>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Have Questions?</h3>
                      <p className="text-muted-foreground mb-6">
                        Our wholesale team is ready to assist you with any questions about our programs, products, or
                        application process.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-cyan-500" />
                          <span>1-800-DRNK-BIZ</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-cyan-500" />
                          <span>wholesale@drnkbeverages.com</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
