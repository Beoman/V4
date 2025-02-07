"use client"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Clock, MapPin, Star, ShoppingCart, Package, Shield } from "lucide-react"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

export default function ProductCard({ 
  id,
  title, 
  price, 
  type = "sale",
  vendor = {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    avatar: "https://sparkstack.app/api/mocks/images?query=avatar",
    location: "New York, NY"
  },
  availability = "available",
  rentalPeriod = "daily",
  currency = "USD",
  condition = "new",
  category = "Electronics",
  description = "",
  shippingInfo = {
    free: true,
    express: true,
  },
  warranty = true,
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      <Card className="relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
        <Link href={`/products/${id}`} className="absolute inset-0 z-10"></Link>
        
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative overflow-hidden">
            <img 
              src={`https://sparkstack.app/api/mocks/images?orientation=landscape&query=product`}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <Badge variant={availability === 'available' ? 'default' : 'secondary'}>
                {availability === 'available' ? 'Available' : 'Not Available'}
              </Badge>
              <Badge variant={type === 'rent' ? 'secondary' : 'outline'}>
                {type === 'rent' ? 'For Rent' : 'For Sale'}
              </Badge>
              <Badge variant="outline">{condition}</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="mb-2">{category}</Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:text-primary">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
          
          <div className="flex items-center gap-2 mb-4">
            <p className="text-2xl font-bold text-primary">
              {formatCurrency(price, currency)}
            </p>
            {type === 'rent' && (
              <span className="text-sm text-muted-foreground">
                /{rentalPeriod}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    href={`/vendor/${vendor.id}`}
                    className="z-20 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={vendor.avatar} alt={vendor.name} />
                      <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View {vendor.name}'s profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <div className="flex-1">
              <Link 
                href={`/vendor/${vendor.id}`}
                className="text-sm font-medium hover:text-primary z-20 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {vendor.name}
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  {vendor.rating}
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {vendor.location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {shippingInfo.free && (
              <div className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                Free Shipping
              </div>
            )}
            {warranty && (
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                Warranty
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button 
            className="w-full relative z-20"
            disabled={availability !== "available"}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Add to cart logic here
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {type === 'rent' ? 'Rent Now' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}