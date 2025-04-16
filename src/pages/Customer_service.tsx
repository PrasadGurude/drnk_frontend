import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Phone, Mail, Clock, ArrowRight, Search, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const faqs = [
  {
    question: "How long do DRNK beverages stay fresh after opening?",
    answer:
      "Once opened, DRNK beverages are best consumed within 24-48 hours when refrigerated. Our products do not contain artificial preservatives, so we recommend enjoying them promptly for the best taste experience.",
  },
  {
    question: "Are DRNK products suitable for people with dietary restrictions?",
    answer:
      "Most DRNK products are gluten-free, vegan, and contain no artificial sweeteners. However, specific dietary information is listed on each product label. If you have severe allergies or specific dietary concerns, please contact our customer service team for detailed information.",
  },
  {
    question: "How can I recycle DRNK packaging?",
    answer:
      "All DRNK bottles are made from 100% recycled plastic and are fully recyclable. Simply rinse the bottle and place it in your regular recycling bin. Our cardboard packaging is also recyclable and made from sustainable sources.",
  },
  {
    question: "Do you ship DRNK products internationally?",
    answer:
      "Currently, we ship to select countries in North America and Europe. International shipping options are expanding, so please check our online store for the most up-to-date shipping information for your location.",
  },
  {
    question: "What is the shelf life of unopened DRNK beverages?",
    answer:
      "Unopened DRNK beverages typically have a shelf life of 12 months from the production date. The best-by date is clearly printed on each bottle or package. For optimal taste, we recommend consuming our products before this date.",
  },
  {
    question: "How do I become a DRNK distributor?",
    answer:
      "If you're interested in becoming a distributor, please visit our Wholesale Inquiries page and fill out the application form. Our team will review your information and contact you to discuss partnership opportunities.",
  },
]
const Customer_service = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const navigate = useNavigate()


  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cyan-50">
      <ArrowLeft className="ml-2 h-10 relative bottom-6 left-6 " onClick={() => navigate('/home')} />
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-4">
            We're Here To Help
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Customer Service</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Have questions or need assistance? Our team is ready to help you with any inquiries about our products or
            services.
          </p>
        </div>

        <Tabs defaultValue="contact" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-12 bg-transparent h-auto p-0 gap-4">
            <TabsTrigger
              value="contact"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              Contact Us
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              FAQs
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="text-base md:text-lg py-3 px-6 rounded-full border data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 transition-all duration-300"
            >
              Support Options
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="How can we help you?" rows={5} />
                    </div>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Send Message</Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Phone Support</h3>
                        <p className="text-muted-foreground mb-2">Monday to Friday, 9am - 5pm EST</p>
                        <p className="font-medium text-lg">1-800-DRNK-NOW</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Email Support</h3>
                        <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                        <p className="font-medium text-lg">support@drnkbeverages.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                        <MessageSquare className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Live Chat</h3>
                        <p className="text-muted-foreground mb-2">Available 24/7 for urgent inquiries</p>
                        <Button variant="outline" className="mt-2">
                          Start Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Response Time</h3>
                        <p className="text-muted-foreground">
                          We strive to respond to all inquiries within 24 hours during business days. For urgent
                          matters, please use our phone or live chat support.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <div className="space-y-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No FAQs match your search. Try different keywords or browse all FAQs by clearing the search.
                    </p>
                    <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
              </Accordion>

              <div className="bg-cyan-50 rounded-xl p-8 mt-8">
                <h3 className="text-xl font-bold mb-4">Can't find what you're looking for?</h3>
                <p className="text-muted-foreground mb-6">
                  If you couldn't find the answer to your question, our customer service team is ready to help.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="support" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-mint-500 h-2" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Product Returns & Refunds</h3>
                  <p className="text-muted-foreground mb-6">
                    If you're not completely satisfied with your purchase, we offer a 30-day return policy for products
                    purchased directly from our website or official stores.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Products must be unopened and in original packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">
                        Return shipping costs are the responsibility of the customer
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Refunds are processed within 5-7 business days</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    View Return Policy
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-mint-500 to-cyan-500 h-2" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                  <p className="text-muted-foreground mb-6">
                    We offer various shipping options to ensure your DRNK beverages arrive fresh and ready to enjoy.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Standard shipping (3-5 business days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Express shipping (1-2 business days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Free shipping on orders over $50</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    View Shipping Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-l from-mint-500 to-cyan-500 h-2" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Subscription Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Manage your DRNK subscription with ease. Our subscription service ensures you never run out of your
                    favorite beverages.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Modify, pause, or cancel anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Save 10% on all subscription orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Flexible delivery schedules</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-berry-500 to-cyan-500 h-2" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Product Quality Concerns</h3>
                  <p className="text-muted-foreground mb-6">
                    We take pride in the quality of our beverages. If you have any concerns about a product you've
                    purchased, please let us know immediately.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Report quality issues within 14 days of purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Provide lot number from the bottle/packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                      <span className="text-muted-foreground">Photos of the product may be requested</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Report Quality Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Customer_service