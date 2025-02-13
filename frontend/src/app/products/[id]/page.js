"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"
import { 
  Star, ShoppingCart, Heart, Share2, Package, 
  Shield, MapPin, Clock, ArrowLeft 
} from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"

// Mock product data (replace with API call)
const product = {
  id: 1,
  title: "Premium Product",
  price: 299.99,
  currency: "USD",
  description: "High-quality product with premium features and exceptional build quality. Perfect for both professional and personal use.",
  images: Array(4).fill("https://sparkstack.app/api/mocks/images?orientation=square&query=product"),
  rating: 4.5,
  reviews: 128,
  category: "Electronics",
  condition: "New",
  type: "sale",
  availability: "available",
  warranty: true,
  shippingInfo: {
    free: true,
    express: true,
    estimatedDays: "3-5",
  },
  specs: {
    "Brand": "Premium Brand",
    "Model": "2024 Edition",
    "Warranty": "2 Years",
    "Condition": "New",
    "Color": "Space Gray",
    "Dimensions": "10 x 5 x 2 inches",
    "Weight": "1.5 lbs"
  },
  vendor: {
    id: 1,
    name: "Tech Solutions Inc",
    rating: 4.8,
    totalSales: 1500,
    memberSince: "2022",
    avatar: "https://sparkstack.app/api/mocks/images?query=avatar",
    location: "New York, NY",
    responseTime: "< 2 hours"
  }
}

// Mock related products
const relatedProducts = Array(4).fill(null).map((_, i) => ({
  id: i + 2,
  title: `Related Product ${i + 1}`,
  price: parseFloat((Math.random() * 500 + 100).toFixed(2)),
  type: i % 2 === 0 ? 'sale' : 'rent',
  vendor: {
    id: Math.floor(Math.random() * 5) + 1,
    name: `Vendor ${Math.floor(Math.random() * 5) + 1}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    avatar: `https://sparkstack.app/api/mocks/images?query=avatar`,
    location: ["New York, NY", "Los Angeles, CA"][Math.floor(Math.random() * 2)]
  }
}))

export default function ProductPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.title} - View ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant={product.availability === 'available' ? 'default' : 'secondary'}>
                  {product.availability === 'available' ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                  <span className="ml-1 text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <p className="text-3xl font-bold text-primary">
                  {formatCurrency(product.price, product.currency)}
                </p>
                {product.type === 'rent' && (
                  <span className="text-muted-foreground">
                    /day
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Shipping & Warranty */}
            <Card className="p-4">
              <div className="flex flex-col gap-3">
                {product.shippingInfo.free && (
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        Estimated delivery: {product.shippingInfo.estimatedDays} business days
                      </p>
                    </div>
                  </div>
                )}
                {product.warranty && (
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Warranty Protection</p>
                      <p className="text-sm text-muted-foreground">
                        {product.specs.Warranty} manufacturer warranty
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Vendor Information */}
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={product.vendor.avatar} alt={product.vendor.name} />
                  <AvatarFallback>{product.vendor.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/vendor/${product.vendor.id}`}
                      className="font-medium hover:text-primary"
                    >
                      {product.vendor.name}
                    </Link>
                    <Badge variant="outline">Verified Seller</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {product.vendor.rating} • {product.vendor.totalSales}+ sales
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {product.vendor.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Response time: {product.vendor.responseTime}
                    </div>
                  </div>
                </div>
                <Button>Contact Seller</Button>
              </div>
            </Card>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="mt-8">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold">Product Details</h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="specs">
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex border-b py-2">
                      <span className="font-medium w-1/3">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="shipping">
                <div className="space-y-4">
                  <h3 className="font-semibold">Shipping Information</h3>
                  <p className="text-muted-foreground">
                    Free standard shipping on orders over $50. Estimated delivery time: {product.shippingInfo.estimatedDays} business days.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}