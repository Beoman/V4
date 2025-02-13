"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function AdvancedFilters({ onFilterChange, onClearFilters }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    condition: "all",
    type: "all",
    rating: "all",
    categories: [],
    availability: [],
  })

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: [0, 1000],
      condition: "all",
      type: "all",
      rating: "all",
      categories: [],
      availability: [],
    }
    setFilters(defaultFilters)
    onClearFilters?.()
  }

  return (
    <Card className="p-6 space-y-6">
      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return value.map((v) => (
              <Badge key={`${key}-${v}`} variant="secondary">
                {v}
                <X className="ml-1 h-3 w-3 cursor-pointer" 
                   onClick={() => handleFilterChange(key, value.filter(item => item !== v))} />
              </Badge>
            ))
          }
          return null
        })}
        <Button variant="outline" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <Label>Price Range (${filters.priceRange[0]} - ${filters.priceRange[1]})</Label>
        <Slider
          min={0}
          max={1000}
          step={10}
          values={filters.priceRange}
          onValueChange={(value) => handleFilterChange("priceRange", value)}
          className="w-full"
        />
      </div>

      {/* Condition */}
      <div className="space-y-4">
        <Label>Condition</Label>
        <RadioGroup
          value={filters.condition}
          onValueChange={(value) => handleFilterChange("condition", value)}
        >
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="new" />
              <Label htmlFor="new">New</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="used" id="used" />
              <Label htmlFor="used">Used</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Type */}
      <div className="space-y-4">
        <Label>Type</Label>
        <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="sale">For Sale</SelectItem>
            <SelectItem value="rent">For Rent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <Label>Rating</Label>
        <RadioGroup
          value={filters.rating}
          onValueChange={(value) => handleFilterChange("rating", value)}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="rating-all" />
              <Label htmlFor="rating-all">All Ratings</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4+" id="rating-4" />
              <Label htmlFor="rating-4">4+ Stars</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3+" id="rating-3" />
              <Label htmlFor="rating-3">3+ Stars</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Availability */}
      <div className="space-y-4">
        <Label>Availability</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.availability.includes("in-stock")}
              onCheckedChange={(checked) => {
                const newAvailability = checked
                  ? [...filters.availability, "in-stock"]
                  : filters.availability.filter((a) => a !== "in-stock")
                handleFilterChange("availability", newAvailability)
              }}
            />
            <Label htmlFor="in-stock">In Stock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pre-order"
              checked={filters.availability.includes("pre-order")}
              onCheckedChange={(checked) => {
                const newAvailability = checked
                  ? [...filters.availability, "pre-order"]
                  : filters.availability.filter((a) => a !== "pre-order")
                handleFilterChange("availability", newAvailability)
              }}
            />
            <Label htmlFor="pre-order">Pre-order</Label>
          </div>
        </div>
      </div>
    </Card>
  )
}