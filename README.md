# Ficha Fácil

Sistema de gestión de fichas médicas para profesionales de la salud.

## Estructura del Proyecto

```
src/
├── app/
│   ├── providers/      # Contextos globales (Auth, Query, etc.)
│   ├── routes/         # Configuración de rutas (React Router)
│   └── store/         # Estado global (Zustand)
│
├── features/          # Funcionalidades por dominio
│   ├── auth/          # Autenticación
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   └── health/        # Health check
│       ├── api/
│       ├── components/
│       ├── hooks/
│       └── pages/
│
├── services/          # Conexiones externas
│   └── supabaseClient.ts
│
└── shared/            # Componentes, hooks y utilidades reutilizables
    ├── components/
    ├── hooks/
    ├── utils/
    └── types/
```

## Paquetes Instalados

- **React** 19.2.4 - Framework UI
- **React Router DOM** - Enrutamiento
- **Supabase** (@supabase/supabase-js) - Base de datos y autenticación
- **TanStack Query** (@tanstack/react-query) - Gestión de estado servidor
- **React Hook Form** - Formularios
- **Zod** - Validación de esquemas
- **Zustand** - Estado global
- **Vite** - Build tool
- **TypeScript** - Lenguaje

## Tech Stack

- Frontend: React + TypeScript
- Build: Vite
- Router: React Router DOM
- Backend: Supabase (PostgreSQL)
- Estado: Zustand + TanStack Query
- Estilos: CSS (pendiente)

## Getting Started

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Build producción
npm run build
```

## Variables de Entorno

Crear archivo `.env` con:

```
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_anon_key
```