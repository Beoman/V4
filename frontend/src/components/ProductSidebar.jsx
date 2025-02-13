"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const categories = [
  "Electronics", "Fashion", "Home & Garden", "Sports", 
  "Books", "Toys", "Automotive", "Health"
]

export default function ProductSidebar({ className }) {
  return (
    <>
      {/* Mobile Trigger */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block w-80 ${className}`}>
        <SidebarContent />
      </div>
    </>
  )
}

function SidebarContent() {
  return (
    <ScrollArea className="h-full py-4">
      <div className="space-y-6 px-1">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Price Range</h3>
          <Slider 
            values={[0, 1000]} 
            min={0} 
            max={1000} 
            step={1} 
          />
          <div className="flex justify-between">
            <span className="text-sm">$0</span>
            <span className="text-sm">$1000</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Listing Type</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="for-sale" />
              <label htmlFor="for-sale" className="text-sm font-medium leading-none">
                For Sale
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="for-rent" />
              <label htmlFor="for-rent" className="text-sm font-medium leading-none">
                For Rent
              </label>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}