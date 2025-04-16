import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Newsletter() {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-2">
          Stay Connected
        </div>
        <h2 className="text-4xl font-bold tracking-tight">Join the DRNK Community</h2>
        <p className="text-muted-foreground max-w-[500px] text-lg">
          Subscribe to our newsletter to receive updates on new products, special offers, and wellness tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input type="email" placeholder="Enter your email" className="w-full h-12 text-base" />
          </div>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 group">
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input type="number" placeholder="Enter your mobile number" minLength={10} maxLength={10} className="w-full h-12 text-base" />
          </div>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 group">
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from DRNK.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-xl mb-3">Customer Service</h3>
          <p className="text-muted-foreground mb-6">Have questions or need assistance? Our team is here to help.</p>
          <Button onClick={()=> navigate('/customer-service')} variant="outline" size="lg" className="w-full">
            Contact Us
          </Button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-xl mb-3">Find a Store</h3>
          <p className="text-muted-foreground mb-6">
            Locate DRNK products at a store near you using our store locator.
          </p>
          <Button variant="outline" size="lg" className="w-full " onClick={() => navigate("/stores")}>
            Find Stores
          </Button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-xl mb-3">Wholesale Inquiries</h3>
          <p className="text-muted-foreground mb-6">
            Interested in stocking DRNK products? Get in touch with our sales team.
          </p>
          <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/wholesale")}>
            Learn More
          </Button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-xl mb-3">Partnerships</h3>
          <p className="text-muted-foreground mb-6">Explore collaboration opportunities with our brand.</p>
          <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/partnership")}>
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  )
}
