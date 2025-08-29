"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { properties } from "@/src/lib/data"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { MapPin, Home, Bed, Bath, Car, Phone, Mail, ExternalLink, ArrowLeft } from "lucide-react"
import { formatPrice } from "@/src/lib/utils"

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}`
    window.open(url, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navegación */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/propiedades">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al catálogo
          </Link>
        </Button>
      </div>

      {/* Título y badges */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant={property.status === "venta" ? "default" : "secondary"} className="text-sm">
            {property.status.toUpperCase()}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          <span className="text-lg">{property.city}</span>
        </div>
        <div className="text-3xl font-bold text-blue-600">{formatPrice(property.price, property.status)}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal */}
        <div className="lg:col-span-2">
          {/* Galería de imágenes */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <div key={index} className={`relative ${index === 0 ? "md:col-span-2 h-96" : "h-48"}`}>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </CardContent>
          </Card>

          {/* Características */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Superficie</p>
                    <p className="font-semibold">{property.dimensions} m²</p>
                  </div>
                </div>

                {property.bedrooms && (
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Habitaciones</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  </div>
                )}

                {property.bathrooms && (
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Baños</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  </div>
                )}

                {property.garage !== undefined && (
                  <div className="flex items-center">
                    <Car className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Garaje</p>
                      <p className="font-semibold">{property.garage ? "Sí" : "No"}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Comodidades */}
              {property.amenities.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Comodidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Ubicación */}
          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-2">
                    Coordenadas: {property.coordinates.lat}, {property.coordinates.lng}
                  </p>
                  <p className="text-sm text-gray-500">
                    Haz clic en "Ver en mapa" para abrir la ubicación en Google Maps
                  </p>
                </div>
                <Button onClick={openInGoogleMaps} variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en mapa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Información del agente */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Agente Inmobiliario</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <Image
                  src={property.agent.avatar || "/placeholder.svg"}
                  alt={property.agent.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{property.agent.name}</h3>
                <p className="text-gray-600">Agente inmobiliario</p>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-4">
                {property.agent.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="font-medium">{property.agent.phone}</p>
                    </div>
                  </div>
                )}

                {property.agent.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{property.agent.email}</p>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/contacto">
                    <Phone className="mr-2 h-4 w-4" />
                    Contactar Agente
                  </Link>
                </Button>

                {property.agent.phone && (
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={`tel:${property.agent.phone}`}>Llamar Ahora</a>
                  </Button>
                )}

                {property.agent.email && (
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={`mailto:${property.agent.email}?subject=Consulta sobre ${property.title}`}>Enviar Email</a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
