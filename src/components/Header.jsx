"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import SearchBar from "./SearchBar"
import { ShoppingCart, UserCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <NavigationMenu className="w-full max-w-none">
          <NavigationMenuList className="w-full flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <NavigationMenuItem className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                RentSwap
              </Link>
            </NavigationMenuItem>

            {/* Navigation Links */}
            <NavigationMenuItem className="hidden md:flex items-center gap-4 mx-4">
              <Link href="/products" className="text-sm font-medium hover:text-primary">
                Products
              </Link>
            </NavigationMenuItem>

            {/* Search Bar */}
            <NavigationMenuItem className="flex-1 max-w-2xl mx-4">
              <SearchBar />
            </NavigationMenuItem>

            {/* Auth Buttons */}
            <NavigationMenuItem className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="gap-2">
                <UserCircle className="h-5 w-5" />
                Login
              </Button>
              <Button>Sign Up</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}