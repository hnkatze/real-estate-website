import Link from "next/link"
import { Building, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">InmoExpert</span>
            </div>
            <p className="text-gray-300 mb-4">
              Tu equipo de confianza en bienes raíces. Más de 10 años ayudando a familias hondureñas a encontrar su
              hogar perfecto en todo Honduras.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>+504 2234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span>info@inmoexpert.hn</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span>Col. Palmira, Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="text-gray-300 hover:text-white transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Venta de propiedades</li>
              <li>Alquiler de propiedades</li>
              <li>Asesoría inmobiliaria</li>
              <li>Valoración de propiedades</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InmoExpert. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
