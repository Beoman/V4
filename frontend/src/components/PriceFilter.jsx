"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function PriceFilter({ onPriceChange }) {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minPrice, setMinPrice] = useState(priceRange[0])
  const [maxPrice, setMaxPrice] = useState(priceRange[1])

  const handlePriceChange = (value) => {
    setPriceRange(value)
    setMinPrice(value[0])
    setMaxPrice(value[1])
    onPriceChange?.(value)
  }

  const handleInputChange = (type, value) => {
    const numValue = parseInt(value) || 0
    if (type === 'min') {
      setMinPrice(numValue)
      setPriceRange([numValue, priceRange[1]])
      onPriceChange?.([numValue, priceRange[1]])
    } else {
      setMaxPrice(numValue)
      setPriceRange([priceRange[0], numValue])
      onPriceChange?.([priceRange[0], numValue])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Range</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="my-6"
        />
        
        <div className="flex items-center gap-4">
          <div className="grid gap-2 flex-1">
            <Label htmlFor="minPrice">Min Price</Label>
            <Input
              id="minPrice"
              type="number"
              value={minPrice}
              onChange={(e) => handleInputChange('min', e.target.value)}
              min={0}
              max={maxPrice}
            />
          </div>
          <div className="grid gap-2 flex-1">
            <Label htmlFor="maxPrice">Max Price</Label>
            <Input
              id="maxPrice"
              type="number"
              value={maxPrice}
              onChange={(e) => handleInputChange('max', e.target.value)}
              min={minPrice}
              max={1000}
            />
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setPriceRange([0, 1000])
            setMinPrice(0)
            setMaxPrice(1000)
            onPriceChange?.([0, 1000])
          }}
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  )
} 