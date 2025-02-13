"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowRight } from "lucide-react"

// Mock featured items
const featuredItems = Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Featured Item ${i + 1}`,
  price: parseFloat((Math.random() * 1000).toFixed(2)),
  type: i % 2 === 0 ? 'rent' : 'sale',
  condition: i % 2 === 0 ? 'new' : 'used',
  rating: 4.5,
  vendor: {
    name: `Vendor ${i + 1}`,
    rating: 4.8,
    avatar: "https://ui-avatars.com/api/?name=V",
    location: "New York, NY"
  }
}))

export default function FeaturedItems() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Featured Items</h2>
            <p className="text-muted-foreground">
              Discover our most popular and trending items
            </p>
          </div>
          <Button variant="ghost" className="gap-2">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea>
          <div className="flex space-x-6 pb-4">
            {featuredItems.map((item) => (
              <div key={item.id} className="w-[300px] flex-none">
                <ProductCard {...item} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
} 