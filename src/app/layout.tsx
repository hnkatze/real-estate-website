import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/src/components/navigation"
import Footer from "@/src/components/footer"
import { Toaster } from "@/src/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InmoExpert Honduras - Bienes Raíces",
  description: "Tu equipo de confianza en bienes raíces en Honduras. Encuentra tu hogar ideal con nosotros.",
  keywords:
    "bienes raíces honduras, propiedades honduras, casas tegucigalpa, apartamentos san pedro sula, terrenos honduras, venta, alquiler",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
