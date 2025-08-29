import Image from "next/image"
import Link from "next/link"
import type { Property } from "@/src/lib/types"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"
import { MapPin, Home, User } from "lucide-react"
import { formatPrice } from "@/src/lib/utils"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/propiedades/${property.id}`}>
        <div className="relative h-48">
          <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          <div className="absolute top-2 left-2">
            <Badge variant={property.status === "venta" ? "default" : "secondary"}>
              {property.status.toUpperCase()}
            </Badge>
          </div>
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-white/90">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/propiedades/${property.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">{property.title}</h3>
        </Link>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.city}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Home className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.dimensions} m²</span>
        </div>

        <div className="text-2xl font-bold text-blue-600 mb-3">{formatPrice(property.price, property.status)}</div>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t">
        <div className="flex items-center w-full">
          <Image
            src={property.agent.avatar || "/placeholder.svg"}
            alt={property.agent.name}
            width={32}
            height={32}
            className="rounded-full mr-2"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{property.agent.name}</p>
            <p className="text-xs text-gray-500">Agente inmobiliario</p>
          </div>
          <User className="h-4 w-4 text-gray-400" />
        </div>
      </CardFooter>
    </Card>
  )
}
