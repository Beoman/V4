"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input 
            type="text"
            placeholder="Search products..."
            className="pl-4 pr-10"
          />
        </div>
        <Button size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}