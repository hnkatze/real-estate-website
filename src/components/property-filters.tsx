"use client"

import { useState, useEffect } from "react"
import type { FilterOptions } from "@/src/lib/types"
import { cities, propertyTypes, statusOptions } from "@/src/lib/data"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Search, Filter } from "lucide-react"

interface PropertyFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void
}

export default function PropertyFilters({ onFiltersChange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    city: "all",
    type: "all",
    status: "all",
    minPrice: 0,
    maxPrice: 0,
    search: "",
  })

  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsExpanded(false) // Oculto por defecto en todos los dispositivos
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters: FilterOptions = {
      city: "all",
      type: "all",
      status: "all",
      minPrice: 0,
      maxPrice: 0,
      search: "",
    }
    setFilters(emptyFilters)
    onFiltersChange(emptyFilters)
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            <h2 className="text-lg font-semibold">Filtros de búsqueda</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="md:hidden">
              {isExpanded ? "Ocultar" : "Mostrar"}
            </Button>
          )}
        </div>

        <div className={`${isMobile && !isExpanded ? "hidden" : "block"} ${!isMobile ? "block" : ""}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Buscador */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar propiedades..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Ciudad */}
            <Select value={filters.city} onValueChange={(value) => handleFilterChange("city", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ciudades</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Tipo de propiedad */}
            <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Estado */}
            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Venta y Alquiler</SelectItem>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Precio mínimo */}
            <Input
              type="number"
              placeholder="Precio mín."
              value={filters.minPrice || ""}
              onChange={(e) => handleFilterChange("minPrice", Number.parseInt(e.target.value) || 0)}
            />

            {/* Precio máximo */}
            <Input
              type="number"
              placeholder="Precio máx."
              value={filters.maxPrice || ""}
              onChange={(e) => handleFilterChange("maxPrice", Number.parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="mt-4">
            <Button variant="outline" onClick={clearFilters}>
              Limpiar filtros
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
