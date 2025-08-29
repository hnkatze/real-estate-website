"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { useToast } from "@/src/hooks/use-toast"
import { properties, agents } from "@/src/lib/data"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyId: "general", // Updated default value
    agentId: "none", // Updated default value
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Aquí normalmente enviarías los datos a tu backend
    console.log("Formulario enviado:", formData)

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyId: "general", // Updated default value
      agentId: "none", // Updated default value
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta o estás interesado en una propiedad? Contáctanos y te ayudaremos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+504 9876-5432"
                  />
                </div>

                <div>
                  <Label htmlFor="property">Propiedad de interés (opcional)</Label>
                  <Select value={formData.propertyId} onValueChange={(value) => handleInputChange("propertyId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una propiedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Consulta general</SelectItem>
                      {properties.map((property) => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.title} - {property.city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="agent">Agente preferido (opcional)</Label>
                  <Select value={formData.agentId} onValueChange={(value) => handleInputChange("agentId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un agente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Sin preferencia</SelectItem>
                      {agents.map((agent) => (
                        <SelectItem key={agent.id} value={agent.id}>
                          {agent.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">Teléfono principal</p>
                    <p className="text-gray-600">+504 2234-5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@inmoexpert.hn</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">Oficina principal</p>
                    <p className="text-gray-600">Col. Palmira, Tegucigalpa, Honduras</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sáb: 10:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nuestro equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <div key={agent.id} className="flex items-center space-x-3">
                      <img
                        src={agent.avatar || "/placeholder.svg"}
                        alt={agent.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm text-gray-600">Agente inmobiliario</p>
                        {agent.phone && <p className="text-sm text-blue-600">{agent.phone}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
