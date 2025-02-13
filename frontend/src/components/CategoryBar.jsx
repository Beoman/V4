"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Camera,
  Car,
  Dumbbell,
  Gamepad,
  Home,
  Laptop,
  Music,
  PartyPopper,
  Tent,
  Tools,
} from "lucide-react"

const categories = [
  { name: "All", icon: Home },
  { name: "Electronics", icon: Laptop },
  { name: "Automotive", icon: Car },
  { name: "Sports", icon: Dumbbell },
  { name: "Gaming", icon: Gamepad },
  { name: "Photography", icon: Camera },
  { name: "Music", icon: Music },
  { name: "Camping", icon: Tent },
  { name: "Tools", icon: Tools },
  { name: "Party", icon: PartyPopper },
]

export default function CategoryBar({ className, activeCategory = "All", onCategoryChange }) {
  return (
    <div className={cn("py-4", className)}>
      <div className="container flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              className="flex-shrink-0"
              onClick={() => onCategoryChange?.(category.name)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
} 