"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingBag, CreditCard, ThumbsUp } from "lucide-react"

const steps = [
  {
    title: "Browse Items",
    description: "Search through thousands of items available for rent or purchase",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    title: "Choose & Book",
    description: "Select your items and book them for your desired duration",
    icon: ShoppingBag,
    color: "bg-green-500"
  },
  {
    title: "Secure Payment",
    description: "Pay securely through our protected payment system",
    icon: CreditCard,
    color: "bg-purple-500"
  },
  {
    title: "Enjoy & Review",
    description: "Receive your items and share your experience",
    icon: ThumbsUp,
    color: "bg-orange-500"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground">
            Simple steps to start renting or buying items
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border" />
                )}
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4 text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 