# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
npm run dev       # Start development server (Next.js)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint for code quality checks
```

### TypeScript
The project uses TypeScript with strict mode enabled. Type checking occurs automatically during build, but you can run TypeScript compiler directly:
```bash
npx tsc --noEmit  # Type check without emitting files
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui components (Radix UI primitives)
- **Forms**: React Hook Form with Zod validation
- **TypeScript**: Strict mode enabled with ES6 target

### Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with Navigation and Footer
│   ├── page.tsx      # Homepage
│   ├── propiedades/  # Properties listing and detail pages
│   └── contacto/     # Contact page
├── components/       # React components
│   ├── ui/          # shadcn/ui components (Radix UI based)
│   └── *.tsx        # Feature components (navigation, property-card, etc.)
├── lib/             # Utilities and data
│   ├── types.ts     # TypeScript interfaces (Property, Agent, FilterOptions)
│   ├── data.ts      # Mock data for properties
│   └── utils.ts     # Utility functions (cn for className merging)
└── hooks/           # Custom React hooks
```

### Key Type Definitions
- `Property`: Real estate property with images, location, amenities, agent info
- `Agent`: Real estate agent with contact information
- `FilterOptions`: Search and filter parameters for property listings

### Path Aliases
The project uses TypeScript path aliases configured in `tsconfig.json`:
- `@/*` - Maps to project root
- `@/src/components` - Component imports
- `@/src/lib` - Library utilities and types
- `@/src/app` - App router pages

### shadcn/ui Configuration
Components are configured via `components.json`:
- Style: default
- Base color: neutral
- CSS variables enabled
- Using Lucide React for icons

### Real Estate Domain Context
This is a real estate website for Honduras ("InmoExpert Honduras") featuring:
- Property listings (houses, apartments, land)
- Property types: venta (sale) / alquiler (rent)
- Cities: Tegucigalpa, San Pedro Sula, La Ceiba, Roatán
- Spanish language interface