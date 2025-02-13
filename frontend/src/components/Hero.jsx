"use client"

import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components"
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Rent, Buy & Sell Items <br />
                <span className="text-primary">In Your Community</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of people saving money and reducing waste through local rentals and sales.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md space-y-4">
              <SearchBar />
              <p className="text-sm text-muted-foreground">
                Popular: Camera Equipment, Tools, Party Supplies, Sports Gear
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm">50K+ Items</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58"
              alt="Hero Image"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 