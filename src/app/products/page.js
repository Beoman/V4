"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard"
import AdvancedFilters from "@/components/AdvancedFilters"
import ProductSort from "@/components/ProductSort"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
  popularity: Math.floor(Math.random() * 100)
}))

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [activeFilters, setActiveFilters] = useState({})
  const [sortBy, setSortBy] = useState("newest")
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Apply filters and sorting
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

    if (activeFilters.rating && activeFilters.rating !== "all") {
      const minRating = parseInt(activeFilters.rating)
      result = result.filter(product => product.rating >= minRating)
    }

    if (activeFilters.availability?.length > 0) {
      result = result.filter(product => 
        activeFilters.availability.includes(product.availability)
      )
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
        result.sort((a, b) => b.createdAt - a.createdAt)
        break
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    setFilteredProducts(result)
  }, [products, activeFilters, sortBy])

  const handleFilterChange = (filters) => {
    setActiveFilters(filters)
  }

  const handleSortChange = (value) => {
    setSortBy(value)
  }

  const clearFilters = () => {
    setActiveFilters({})
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-80 shrink-0">
            <AdvancedFilters 
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          <div className="flex-1">
            {/* Mobile Filters & Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <AdvancedFilters 
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                  />
                </SheetContent>
              </Sheet>

              <ProductSort onSortChange={handleSortChange} />
            </div>

            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to find what you're looking for
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={clearFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}