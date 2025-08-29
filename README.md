# InmoExpert Honduras - Real Estate Website

Una plataforma web moderna para bienes raíces en Honduras, diseñada para conectar compradores y vendedores de propiedades en las principales ciudades del país.

## 🏠 Descripción

InmoExpert Honduras es una aplicación web completa para la gestión y visualización de propiedades inmobiliarias. Ofrece una experiencia intuitiva para buscar casas, apartamentos y terrenos en venta o alquiler en Honduras.

## ✨ Características

### Funcionalidades Principales
- **Catálogo de Propiedades**: Explora propiedades con imágenes, descripciones detalladas y especificaciones
- **Filtros Avanzados**: Búsqueda por ciudad, tipo de propiedad, rango de precio y modalidad (venta/alquiler)
- **Vista Detallada**: Información completa de cada propiedad incluyendo amenidades, dimensiones y ubicación
- **Galería de Imágenes**: Carrusel interactivo para visualizar múltiples fotos de cada propiedad
- **Información del Agente**: Contacto directo con agentes inmobiliarios asignados
- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop

### Páginas
- **Homepage**: Hero section atractivo con propiedades destacadas
- **Catálogo de Propiedades** (`/propiedades`): Listado completo con sistema de filtrado
- **Detalle de Propiedad** (`/propiedades/[id]`): Vista individual con toda la información
- **Contacto** (`/contacto`): Formulario para consultas generales

## 🚀 Tecnologías

- **Framework**: [Next.js 15.2](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) (basado en Radix UI)
- **Formularios**: [React Hook Form](https://react-hook-form.com/)
- **Validación**: [Zod](https://zod.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Notificaciones**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/real-estate-website.git
cd real-estate-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Scripts Disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm run start     # Inicia el servidor de producción
npm run lint      # Ejecuta el linter para verificar el código
```

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Páginas y rutas (Next.js App Router)
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   ├── propiedades/     # Páginas de propiedades
│   └── contacto/        # Página de contacto
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── navigation.tsx   # Barra de navegación
│   ├── footer.tsx      # Pie de página
│   └── property-*.tsx   # Componentes relacionados con propiedades
├── lib/                # Utilidades y datos
│   ├── types.ts        # Definiciones de TypeScript
│   ├── data.ts         # Datos de ejemplo
│   └── utils.ts        # Funciones utilitarias
└── hooks/              # Custom React hooks
```

## 🏙️ Ciudades Soportadas

- Tegucigalpa
- San Pedro Sula
- La Ceiba
- Roatán
- Comayagua
- Choluteca

## 🏘️ Tipos de Propiedades

- **Casas**: Viviendas unifamiliares
- **Apartamentos**: Unidades en edificios residenciales
- **Terrenos**: Lotes para construcción

## 🎨 Personalización

### Colores y Temas
El proyecto utiliza CSS variables para los colores, configurables en `src/app/globals.css`. El tema base es neutral con acentos en azul.

### Componentes UI
Los componentes están basados en shadcn/ui y pueden ser personalizados individualmente en `src/components/ui/`.

## 📱 Responsive Design

La aplicación está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propietario de InmoExpert Honduras.

## 📞 Contacto

Para consultas sobre el proyecto, contacta al equipo de desarrollo de InmoExpert Honduras.

---

Desarrollado con ❤️ para el mercado inmobiliario hondureño