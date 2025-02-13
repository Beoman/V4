"use client"

import { Card } from "@/components/ui/card"
import { 
  Laptop, 
  Camera, 
  Car, 
  Home, 
  Dumbbell, 
  Music, 
  PartyPopper, 
  Wrench as Tools 
} from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Electronics", icon: Laptop, color: "bg-blue-500", count: "2.5k+" },
  { name: "Cameras", icon: Camera, color: "bg-purple-500", count: "1.2k+" },
  { name: "Vehicles", icon: Car, color: "bg-green-500", count: "850+" },
  { name: "Home & Garden", icon: Home, color: "bg-yellow-500", count: "3.1k+" },
  { name: "Sports", icon: Dumbbell, color: "bg-red-500", count: "1.8k+" },
  { name: "Music", icon: Music, color: "bg-pink-500", count: "950+" },
  { name: "Tools", icon: Tools, color: "bg-orange-500", count: "1.5k+" },
  { name: "Party", icon: PartyPopper, color: "bg-indigo-500", count: "750+" }
]

export default function PopularCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Popular Categories</h2>
          <p className="text-muted-foreground">
            Browse through our most popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link 
                key={category.name} 
                href={`/products?category=${category.name.toLowerCase()}`}
              >
                <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} items</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
} 