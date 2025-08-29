"use client"

import { useState, useMemo } from "react"
import { properties } from "@/src/lib/data"
import type { FilterOptions } from "@/src/lib/types"
import PropertyCard from "@/src/components/property-card"
import PropertyFilters from "@/src/components/property-filters"

export default function PropertiesPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    city: "",
    type: "",
    status: "",
    minPrice: 0,
    maxPrice: 0,
    search: "",
  })

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Filtro por ciudad
      if (filters.city && property.city !== filters.city) return false

      // Filtro por tipo
      if (filters.type && property.type !== filters.type) return false

      // Filtro por estado
      if (filters.status && property.status !== filters.status) return false

      // Filtro por precio mínimo
      if (filters.minPrice > 0 && property.price < filters.minPrice) return false

      // Filtro por precio máximo
      if (filters.maxPrice > 0 && property.price > filters.maxPrice) return false

      // Filtro por búsqueda de texto
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const matchesTitle = property.title.toLowerCase().includes(searchTerm)
        const matchesDescription = property.description.toLowerCase().includes(searchTerm)
        const matchesCity = property.city.toLowerCase().includes(searchTerm)
        const matchesAgent = property.agent.name.toLowerCase().includes(searchTerm)

        if (!matchesTitle && !matchesDescription && !matchesCity && !matchesAgent) {
          return false
        }
      }

      return true
    })
  }, [filters])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Propiedades</h1>
        <p className="text-lg text-gray-600">
          Encuentra la propiedad perfecta para ti. Tenemos {properties.length} propiedades disponibles.
        </p>
      </div>

      <PropertyFilters onFiltersChange={setFilters} />

      <div className="mb-6">
        <p className="text-gray-600">
          Mostrando {filteredProperties.length} de {properties.length} propiedades
        </p>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">No se encontraron propiedades con los filtros seleccionados</p>
          <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  )
}
