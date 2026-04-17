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

## 📘 Historias de Usuario

### 🔐 1. Autenticación y Usuarios

#### HU-01: Registro de usuario
- **Como** usuario (paciente)  
- **Quiero** crear una cuenta  
- **Para** acceder al sistema  

#### HU-02: Inicio de sesión
- **Como** usuario  
- **Quiero** iniciar sesión  
- **Para** acceder a mis funcionalidades según mi rol  

#### HU-03: Gestión de usuarios
- **Como** admin  
- **Quiero** ver, editar y gestionar usuarios  
- **Para** administrar el sistema  

#### HU-04: Cambiar rol de usuario
- **Como** admin  
- **Quiero** asignar roles (paciente, doctor, admin)  
- **Para** definir permisos  

#### HU-05: Activar o desactivar usuario
- **Como** admin  
- **Quiero** habilitar o deshabilitar usuarios  
- **Para** controlar el acceso  

---

### 🏥 2. Especialidades Médicas

#### HU-06: Crear especialidad
- **Como** admin  
- **Quiero** crear especialidades médicas  
- **Para** clasificar a los doctores  

#### HU-07: Editar especialidad
- **Como** admin  
- **Quiero** modificar especialidades  
- **Para** mantener información actualizada  

#### HU-08: Asignar especialidades a doctor
- **Como** admin  
- **Quiero** asignar especialidades a un doctor  
- **Para** definir su área de atención  

---

### 🧾 3. Solicitudes de Atención (Paciente)

#### HU-09: Crear solicitud
- **Como** paciente  
- **Quiero** enviar una solicitud médica con mis síntomas  
- **Para** recibir atención  

#### HU-10: Ver estado de solicitud
- **Como** paciente  
- **Quiero** ver el estado de mi solicitud  
- **Para** saber si fue asignada o rechazada  

---

### ⚙️ 4. Gestión de Solicitudes (Admin)

#### HU-11: Ver solicitudes
- **Como** admin  
- **Quiero** ver todas las solicitudes  
- **Para** gestionarlas  

#### HU-12: Asignar solicitud a doctor
- **Como** admin  
- **Quiero** asignar una solicitud a un doctor  
- **Para** generar una ficha médica  

#### HU-13: Rechazar solicitud
- **Como** admin  
- **Quiero** rechazar solicitudes  
- **Para** filtrar casos no válidos  

---

### 📋 5. Fichas Médicas

#### HU-14: Generar ficha médica
- **Como** admin  
- **Quiero** crear una ficha  
- **Para** asignar una consulta al paciente  

#### HU-15: Ver ficha asignada
- **Como** paciente  
- **Quiero** ver mi ficha médica  
- **Para** conocer fecha, hora y doctor  

#### HU-16: Ver fichas asignadas
- **Como** doctor  
- **Quiero** ver mis fichas  
- **Para** atender a mis pacientes  

#### HU-17: Actualizar estado de ficha
- **Como** doctor  
- **Quiero** marcar una ficha como atendida o cancelada  
- **Para** registrar el resultado  

---

### 👨‍⚕️ 6. Panel del Doctor

#### HU-18: Ver agenda diaria
- **Como** doctor  
- **Quiero** ver mis citas del día  
- **Para** organizar mi trabajo  

#### HU-19: Ver información del paciente
- **Como** doctor  
- **Quiero** ver los datos del paciente y sus síntomas  
- **Para** preparar la consulta  

---

### 🧠 7. Diagnóstico Médico

#### HU-20: Registrar diagnóstico
- **Como** doctor  
- **Quiero** registrar el diagnóstico de una consulta  
- **Para** dejar constancia médica  

#### HU-21: Ver diagnóstico
- **Como** paciente  
- **Quiero** ver mi diagnóstico  
- **Para** conocer mi estado de salud y tratamiento  

#### HU-22: Ver historial de diagnósticos
- **Como** doctor  
- **Quiero** ver diagnósticos previos de un paciente  
- **Para** mejorar la atención médica  

#### HU-23: Ver diagnósticos (admin)
- **Como** admin  
- **Quiero** consultar diagnósticos  
- **Para** auditoría o control del sistema  

---

### 🔄 Flujo del sistema

1. Usuario se registra  
2. Paciente crea solicitud  
3. Admin revisa:
   - Asigna → genera ficha  
   - Rechaza → cambia estado  
4. Doctor:
   - Ve su agenda  
   - Atiende paciente  
   - Registra diagnóstico  
5. Paciente:
   - Ve su ficha  
   - Ve su diagnóstico ✅  
