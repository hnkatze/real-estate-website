export interface Agent {
  id: string
  name: string
  avatar: string
  phone?: string
  email?: string
}

export interface Property {
  id: string
  title: string
  description: string
  images: string[]
  city: string
  price: number
  type: "casa" | "terreno" | "apartamento"
  status: "venta" | "alquiler"
  dimensions: number
  bedrooms?: number
  bathrooms?: number
  garage?: boolean
  amenities: string[]
  coordinates: {
    lat: number
    lng: number
  }
  agent: Agent
}

export interface FilterOptions {
  city: string
  type: string
  status: string
  minPrice: number
  maxPrice: number
  search: string
}
