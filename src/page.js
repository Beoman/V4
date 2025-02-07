"use client"

import ProductCard from "@/components/ProductCard"
import ParticlesBackground from "@/components/ParticlesBackground"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Mock data for products with vendor information
const products = Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Premium Product ${i + 1}`,
  price: parseFloat((Math.random() * 1000).toFixed(2)),
  type: i % 3 === 0 ? 'rent' : 'sale',
  vendor: {
    id: Math.floor(Math.random() * 5) + 1,
    name: `Vendor ${Math.floor(Math.random() * 5) + 1}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    avatar: `https://sparkstack.app/api/mocks/images?query=avatar`,
    location: ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX"][Math.floor(Math.random() * 4)]
  },
  availability: ["available", "rented", "available", "sold"][Math.floor(Math.random() * 4)],
  rentalPeriod: ["daily", "weekly", "monthly"][Math.floor(Math.random() * 3)]
}))

const popularProducts = products.slice(0, 6)

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="min-h-screen p-4 md:p-8">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg mb-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Item</h1>
            <p className="text-lg text-muted-foreground mb-8">Buy, Sell, or Rent - All in One Place</p>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Popular Items Carousel */}
        <section className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Right Now</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {popularProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  )
}