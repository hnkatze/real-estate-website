import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { properties } from "@/src/lib/data"
import PropertyCard from "@/src/components/property-card"
import { Home, Users, Award, Phone } from "lucide-react"

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://i.postimg.cc/ZKzjk8pg/pexels-asphotograpy-101808.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Encuentra tu hogar ideal en Honduras</h1>
          <p className="text-xl md:text-2xl mb-8">
            Tu equipo de confianza en bienes raíces. Más de 10 años ayudando a familias hondureñas a encontrar su hogar
            perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/propiedades">Ver Propiedades</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Misión y Objetivo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 mb-8">
              En <strong>InmoExpert Honduras</strong>, nos dedicamos a conectar a las personas con sus hogares ideales
              en todo el territorio hondureño. Nuestro objetivo es brindar un servicio personalizado, transparente y
              profesional que haga de la compra, venta o alquiler de propiedades una experiencia exitosa y sin
              complicaciones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
                  <p className="text-gray-600">Más de 10 años en el mercado inmobiliario hondureño</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Equipo Profesional</h3>
                  <p className="text-gray-600">Agentes certificados y especializados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Confianza</h3>
                  <p className="text-gray-600">Miles de familias hondureñas satisfechas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Propiedades Destacadas</h2>
            <p className="text-lg text-gray-600">Descubre algunas de nuestras mejores ofertas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/propiedades">Ver todas las propiedades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para encontrar tu hogar?</h2>
          <p className="text-xl mb-8">Nuestro equipo está aquí para ayudarte en cada paso del camino</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/propiedades">Explorar Propiedades</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contacto">
                <Phone className="mr-2 h-4 w-4" />
                Contactar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
