"use client"

import { useState, useEffect } from "react"
import { CategoryBar, PriceFilter, ProductCard } from "@/components"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"

// Mock data for products
const initialProducts = Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 1000).toFixed(2)),
  type: i % 3 === 0 ? 'rent' : 'sale',
  condition: i % 2 === 0 ? 'new' : 'used',
  rating: Math.floor(Math.random() * 2) + 3,
  availability: i % 5 === 0 ? 'pre-order' : 'in-stock',
  createdAt: new Date(Date.now() - Math.random() * 10000000000),
  popularity: Math.floor(Math.random() * 100),
  vendor: {
    name: `Vendor ${i + 1}`,
    rating: 4.8,
    avatar: "https://ui-avatars.com/api/?name=V",
    location: "New York, NY"
  }
}))

export function ProductsList() {
  const [products] = useState(initialProducts)
  const [activeFilters, setActiveFilters] = useState({})
  const [sortBy, setSortBy] = useState("newest")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])

  useEffect(() => {
    let result = [...products]

    // Apply filters
    if (activeFilters.priceRange) {
      result = result.filter(
        product => 
          product.price >= activeFilters.priceRange[0] && 
          product.price <= activeFilters.priceRange[1]
      )
    }

    if (activeFilters.condition && activeFilters.condition !== "all") {
      result = result.filter(product => product.condition === activeFilters.condition)
    }

    if (activeFilters.type && activeFilters.type !== "all") {
      result = result.filter(product => product.type === activeFilters.type)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity)
        break
    }

    setFilteredProducts(result)
  }, [products, activeFilters, sortBy])

  return (
    <div className="min-h-screen">
      <CategoryBar 
        className="border-b bg-background/95 sticky top-16 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 space-y-6">
            <PriceFilter onPriceChange={setPriceRange} />
          </div>

          {/* Filters - Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden mb-4">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="space-y-6 py-6">
                <PriceFilter onPriceChange={setPriceRange} />
              </div>
            </SheetContent>
          </Sheet>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 