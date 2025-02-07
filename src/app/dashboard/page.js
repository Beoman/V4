"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  Package, ShoppingCart, Heart, Settings, 
  CreditCard, User, Bell, LogOut 
} from "lucide-react"

// Mock data
const recentOrders = [
  { id: 1, product: "Product 1", date: "2024-02-20", status: "Delivered", amount: 299.99 },
  { id: 2, product: "Product 2", date: "2024-02-18", status: "Shipped", amount: 199.99 },
]

const savedItems = [
  { id: 1, title: "Product 1", price: 299.99, image: "https://sparkstack.app/api/mocks/images?query=product" },
  { id: 2, title: "Product 2", price: 199.99, image: "https://sparkstack.app/api/mocks/images?query=product" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen p-4 md:p-8 bg-muted/50">
      <div className="container mx-auto">
        {/* User Info Header */}
        <div className="mb-8 flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://sparkstack.app/api/mocks/images?query=avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
            <p className="text-muted-foreground">Manage your account and view orders</p>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <TabsTrigger value="overview" className="gap-2">
              <Package className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Orders</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wishlist Items</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reviews Given</span>
                      <span className="font-medium">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="john@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue="+1 234 567 890" type="tel" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add order history table/list here */}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {savedItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-primary font-medium">${item.price}</p>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}