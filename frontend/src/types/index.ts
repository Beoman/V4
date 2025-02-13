export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Product {
  id: number
  title: string
  price: number
  type?: 'sale' | 'rent'
  vendor?: {
    id: number
    name: string
    rating: number
    avatar: string
    location: string
  }
  availability?: 'available' | 'unavailable'
  rentalPeriod?: string
  currency?: string
  condition?: string
  category?: string
  description?: string
  shippingInfo?: {
    free?: boolean
    express?: boolean
  }
  warranty?: boolean
}

export interface Vendor {
  id: string
  name: string
  rating: number
  avatar: string
  location: string
} 