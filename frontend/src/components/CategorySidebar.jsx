"use client"

import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { ChevronRight, ShoppingBag, Laptop, Shirt, Home, Book, 
         Car, Dumbbell, Gamepad, Camera } from "lucide-react"

const categories = [
  { name: "Electronics", icon: Laptop, subcategories: ["Phones", "Laptops", "Tablets", "Accessories"] },
  { name: "Fashion", icon: Shirt, subcategories: ["Men", "Women", "Kids", "Accessories"] },
  { name: "Home & Living", icon: Home, subcategories: ["Furniture", "Decor", "Kitchen", "Garden"] },
  { name: "Books & Media", icon: Book, subcategories: ["Books", "Movies", "Music", "Games"] },
  { name: "Automotive", icon: Car, subcategories: ["Cars", "Parts", "Tools", "Accessories"] },
  { name: "Sports", icon: Dumbbell, subcategories: ["Equipment", "Clothing", "Accessories", "Outdoor"] },
  { name: "Gaming", icon: Gamepad, subcategories: ["Consoles", "Games", "Accessories", "Collectibles"] },
  { name: "Photography", icon: Camera, subcategories: ["Cameras", "Lenses", "Lighting", "Accessories"] },
]

export default function CategorySidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 300)
    setHoverTimeout(timeout)
  }

  return (
    <div className="fixed left-0 top-1/4 z-50 h-screen pointer-events-none">
      {/* Trigger Bar */}
      <div 
        className="w-12 bg-primary/10 hover:bg-primary/20 rounded-r-lg pointer-events-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-48 flex flex-col items-center justify-center gap-4 text-primary">
          <ShoppingBag className="w-6 h-6" />
          <span className="vertical-text text-sm font-medium">Categories</span>
        </div>
      </div>

      {/* Sidebar Content */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="left" 
          className="w-80 pointer-events-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ScrollArea className="h-full py-8">
            <div className="space-y-1">
              {categories.map((category) => (
                <div key={category.name} className="group">
                  <Link 
                    href={`/products?category=${category.name.toLowerCase()}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-lg"
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="flex-1">{category.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="ml-9 mt-1 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/products?category=${category.name.toLowerCase()}&subcategory=${sub.toLowerCase()}`}
                        className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
} 