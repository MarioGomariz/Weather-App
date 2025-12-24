# 🌤️ Modern Weather App — React + TypeScript

Una aplicación de clima de nivel profesional construida con un enfoque en **Arquitectura Limpia**, rendimiento optimizado y experiencia de usuario fluida. Este proyecto demuestra el manejo avanzado de estados de servidor, integración de APIs de terceros y hooks personalizados.

![Versión](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=flat&logo=react-query&logoColor=white)

---

## 🚀 Características Principales

- **Búsqueda por Ciudad**: Consulta en tiempo real el clima de cualquier ciudad del mundo.
- **📍 Geolocalización**: Acceso al clima local mediante la API nativa del navegador con un solo clic.
- **⚡ Búsqueda Optimizada**: Implementación de **Debouncing** para reducir llamadas innecesarias a la API mientras el usuario escribe.
- **📦 Caché Inteligente**: Gestión de estado del servidor mediante **TanStack Query** (5 min de staleTime).
- **🎨 UI/UX Senior**:
  - Modo oscuro nativo.
  - **Skeleton Loaders** dinámicos para una carga visual fluida.
  - Manejo exhaustivo de estados (Carga, Error 404, Ubicación denegada, Estado vacío).
- **🛡️ Tipado Estricto**: Uso de interfaces de TypeScript en toda la aplicación para máxima seguridad de tipos.

---

## 🛠️ Stack Tecnológico

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **API**: [OpenWeatherMap API](https://openweathermap.org/)

---

## 📐 Arquitectura del Proyecto

El proyecto sigue principios de **Clean Architecture** y **SOLID**:

```text
src/
├── components/     # Componentes de UI atómicos y reutilizables
├── hooks/          # Lógica personalizada (useWeather, useGeolocation, useDebounce)
├── services/       # Capa de servicios (Data Mapping de API a Interfaz)
├── types/          # Definición de interfaces y tipos globales
└── App.tsx         # Orquestador principal de la lógica