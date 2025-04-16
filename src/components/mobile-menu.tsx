
import { useState } from "react"
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Droplets, Menu } from "lucide-react"


export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
   <div className="">
     <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5 " />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l-teal-200 bg-white px-4 w-72 md:hidden">
        <SheetHeader className="mb-8">
          <SheetTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-cyan-500" />
            <span>DRNK</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6">
          <Link
            to= '#products'
            className="px-2 py-1 text-lg hover:text-cyan-500 transition-colors"
            onClick={(e) => {
              setOpen(false)
                e.preventDefault();
                const contactSection = document.getElementById("products");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }}>
            Products
          </Link>
          <Link
            to="#about"
            className="px-2 py-1 text-lg hover:text-teal-500 transition-colors"
            onClick={(e) => {
              setOpen(false)
                e.preventDefault();
                const contactSection = document.getElementById("about");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }}>
            About
          </Link>
          <Link
            to="#sustainability"
            className="px-2 py-1 text-lg hover:text-teal-500 transition-colors"
            onClick={(e) => {
              setOpen(false)
                e.preventDefault();
                const contactSection = document.getElementById("sustainability");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }}>
            Sustainability
          </Link>
          <Link
            to="#contact"
            className="px-2 py-1 text-lg hover:text-teal-500 transition-colors"
            onClick={(e) => {
              setOpen(false)
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }}>
            Contact
          </Link>
          <div className="h-px bg-border my-6" />
          <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Why drnk</Button>
        </nav>
      </SheetContent>
    </Sheet>
   </div>
  )
}
