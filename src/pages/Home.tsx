import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Droplets, Instagram, Twitter, Facebook, ArrowRight, Play } from "lucide-react"
import { Button } from '../components/ui/button'
import ProductShowcase from "@/components/product-showcase"
import FeaturedProducts from "@/components/featured-products"
import Newsletter from "@/components/newsletter"
import MobileMenu from "@/components/mobile-menu"
import Testimonials from "@/components/testimonials"
import VideoSection from "@/components/video-section"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className=' flex min-h-screen flex-col '>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between pl-6">
          <div className="flex items-center gap-2 px-10">
            <Droplets className="h-6 w-6 text-cyan-500" />
            <span className="text-xl font-bold tracking-tight">DRNK</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#products" className="text-sm font-medium transition-colors hover:text-cyan-500"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("products");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Products
            </Link>
            <Link to="#about" className="text-sm font-medium transition-colors hover:text-cyan-500"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("about");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              About
            </Link>
            <Link to="#sustainability" className="text-sm font-medium transition-colors hover:text-cyan-500"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("sustainability");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Sustainability
            </Link>
            <Link to="#contact" className="text-sm font-medium transition-colors hover:text-cyan-500"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 ">
            <Button className="hidden md:flex bg-cyan-500 hover:bg-cyan-600">Why drnk</Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1 ">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-mint-500/20 z-10" />
          <div className="absolute inset-0">
            <img
              src="https://www.smashbrand.com/wp-content/uploads/2022/04/beverage-packaging-design.png"
              alt="Background"
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-20 py-5 md:py-5 lg:py-5 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-screen px-4 md:px-8">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 mb-2">
                  Refreshingly Different
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                  Refresh Your <span className="text-cyan-500">World</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  Crafted with natural ingredients, our beverages deliver refreshment with every sip. Discover our range
                  of hydrating drinks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                    Explore Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    Watch Video
                    <Play className="ml-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -left-20 top-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-mint-500/10 blur-3xl" />
                <div className="relative h-full flex items-center ">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D22AQHHbXwJXsq93A/feedshare-shrink_1280/feedshare-shrink_1280/0/1727850597774?e=1747267200&v=beta&t=pybU6Yn9VWhErVEuPLtuB5pOQNd1pPYUFq2Sac-42sg"
                    alt="DRNK Beverages"
                    width={400}
                    height={600}
                    className="object-contain drop-shadow-2xl transform transition-all duration-500 hover:scale-105 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-amber-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="py-16 md:py-24 relative overflow-hidden flex justify-center items-center">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 mb-4">
                Trending Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Discover Our Bestsellers</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
                Loved by customers worldwide, these refreshing favorites are flying off the shelves.
              </p>
            </div>
            <FeaturedProducts />
          </div>
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        </section>

        <VideoSection />

        <section id="products" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50 flex justify-center items-center">
          <div className="container">
            <ProductShowcase />
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden px-10">
          <div className="absolute inset-0 bg-[url('https://th.bing.com/th/id/OIP.n7LWPPySEgDNzW8_Q-Vg6wHaEh')] bg-fixed bg-cover opacity-5" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-64 h-64 rounded-full bg-teal-500/10 blur-xl" />
                <div className="absolute -right-6 -bottom-6 w-64 h-64 rounded-full bg-blue-500/10 blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D22AQFcDnL9UBjmLA/feedshare-shrink_800/B4DZUD52yeHwAg-/0/1739527254957?e=1747267200&v=beta&t=Kv6BtyCGz0lbLoRy52gX6a1n-Ub3BSTBYvAObT96VrU"
                    alt="About DRNK"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 mb-2">
                  Our Story
                </div>
                <h2 className="text-4xl font-bold tracking-tight">Refreshing the World, Naturally</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2020, DRNK was born from a simple idea: create beverages that are both delicious and good
                  for you. We started with a small team passionate about natural ingredients and sustainable practices.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to offer a range of drinks that not only taste great but also support your
                  wellbeing and our planet. Every bottle of DRNK is crafted with care, using only the finest ingredients
                  sourced responsibly.
                </p>
                <div className="pt-4">
                  <Button size="lg" variant="outline" className="group" onClick={()=>{navigate('/more-about-us')}}>
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="sustainability" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white flex items-center justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 mb-4">
                Our Promise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Better for You, Better for Earth</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
                We believe in creating products that are good for you and good for the planet. That's why sustainability
                is at the heart of everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Recycled Packaging</h3>
                <p className="text-muted-foreground">
                  Our bottles are made from 100% recycled plastic, helping to reduce waste and our carbon footprint.
                  We're committed to a circular economy where packaging never becomes waste.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Responsible Sourcing</h3>
                <p className="text-muted-foreground">
                  We work directly with farmers to ensure our ingredients are sourced ethically and sustainably. This
                  means fair wages for workers and environmentally friendly farming practices.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Carbon Neutral</h3>
                <p className="text-muted-foreground">
                  We offset our carbon emissions through investments in renewable energy and reforestation projects. Our
                  goal is to achieve net-zero emissions across our entire supply chain by 2030.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                Learn About Our Initiatives
              </Button>
            </div>
          </div>
        </section>

        {/* <InstagramFeed /> */}

        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50 flex justify-center items-center">
          <div className="container">
            <Newsletter />
          </div>
        </section>
      </main>
      <footer className="bg-cyan-900 text-white py-16 flex justify-center items-center">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Droplets className="h-6 w-6 text-cyan-300" />
                <span className="text-xl font-bold tracking-tight">DRNK</span>
              </div>
              <p className="text-cyan-200">Refreshing beverages made with natural ingredients.</p>
              <div className="flex gap-4">
                <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Sparkling Water
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Fruit Infusions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Energy Drinks
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Wellness Tonics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-cyan-200 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cyan-800 text-center text-sm text-cyan-300">
            <p>&copy; {new Date().getFullYear()} DRNK Beverages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>)
}

export default Home