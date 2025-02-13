export interface ApiResponse<T = any> {
  data?: T
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse {
  data?: T[]
  total: number
  page: number
  limit: number
}

export interface ProductFilters {
  category?: string
  type?: string
  condition?: string
  minPrice?: number
  maxPrice?: number
  search?: string
}

export interface OrderFilters {
  status?: string
  type?: string
  startDate?: Date
  endDate?: Date
} 