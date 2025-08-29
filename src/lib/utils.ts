import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para formatear números al estilo hondureño
export function formatHonduranNumber(num: number): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

// Función para formatear precios en Lempiras
export function formatPrice(price: number, status: string): string {
  const formattedNumber = formatHonduranNumber(price)
  return status === "alquiler" ? `L ${formattedNumber}/mes` : `L ${formattedNumber}`
}
