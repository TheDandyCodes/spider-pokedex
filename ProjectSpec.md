# SpiderDex — Especificación del Proyecto

## 1. Resumen del Proyecto

SpiderDex es una aplicación web interactiva (estilo "Pokédex") que permite a los usuarios subir imágenes de arañas para identificar su especie mediante Inteligencia Artificial. La aplicación compara la imagen con una base de datos vectorial para buscar similitudes, genera datos biológicos útiles utilizando un LLM y permite a los usuarios crear un **"cuaderno de campo"** de sus descubrimientos.

> **Restricción principal:** Arquitectura 100% Serverless y de coste nulo para su fase MVP.

---

## 2. Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| **Frontend** | Next.js (App Router), React, Tailwind CSS |
| **Backend** | Python (Flask) desplegado como Vercel Serverless Functions |
| **Gestor de paquetes Python** | `uv` (inicializar entorno, instalar dependencias y exportar `requirements.txt`) |
| **Base de datos & Storage** | Supabase (PostgreSQL + extensión `pgvector` para similitud coseno + Supabase Storage para imágenes) |
| **Autenticación** | Google OAuth (vía Supabase Auth) |
| **Inteligencia Artificial** | Google Gemini API (Embeddings Multimodal + Gemini 1.5 Flash/Pro) |
| **Despliegue** | Vercel |

---

## 3. Estructura del Repositorio

```
/spiderdex
├── /api
│   ├── pyproject.toml       # Configuración de dependencias (uv init)
│   ├── requirements.txt     # Generado con uv pip compile (para Vercel)
│   └── index.py             # Endpoint principal Flask
├── /app
│   ├── /pokedex             # Vista de colección del usuario
│   ├── layout.tsx
│   └── page.tsx             # UI Principal: Cámara / Subida
├── /components
│   ├── ImageUploader.tsx
│   └── SpiderCard.tsx
├── /lib
│   └── supabase.ts          # Cliente Supabase
├── next.config.js           # Redirige /api → Flask en desarrollo
└── package.json
```

---

## 4. Flujo Principal — `/api/identify`

Cuando un usuario sube una imagen desde el frontend, el backend sigue este flujo de forma estricta:

```
1. Recibir Imagen
   └── Capturar el archivo .jpg / .png enviado desde el frontend

2. Generar Embedding
   └── Enviar la imagen al modelo Embeddings 2 de Google → obtener vector numérico

3. Búsqueda Vectorial (RAG)
   └── Consultar Supabase (pgvector) → vecinos más cercanos por distancia coseno

4. Validación de Umbral (Threshold)
   └── Evaluar el score del vecino más cercano
       ├── score < 0.75 → Abortar y devolver LOW_CONFIDENCE (no llamar a Gemini)
       └── score ≥ 0.75 → Continuar

5. Gestión de Caché / LLM
   ├── Especie ya existe en Supabase → Recuperar JSON cacheado
   └── Especie nueva → Llamar a Gemini Vision/Text → Guardar JSON en Supabase

6. Respuesta
   └── Devolver JSON con: especie, score, metadatos, URL de imagen guardada
```

---

## 5. Consideraciones Críticas de Negocio

### 👤 Gestión de Usuarios
- Autenticación con **Google OAuth** vía Supabase.
- Cada usuario tiene su **biblioteca personal de arañas** encontradas.

### 🚫 Regla del Umbral (Anti-Zapatillo)
Si el score de similitud devuelto por `pgvector` está **por debajo de 0.75** (configurable), la API debe abortar el flujo y devolver:

```json
{
  "error": "Imagen no reconocida como araña conocida",
  "code": "LOW_CONFIDENCE"
}
```

> **Importante:** NO llamar a Gemini en este caso.

### 💾 Regla de Caché de LLM
- Los datos generados por Gemini (descripción, hábitat, dieta, tips) **deben guardarse** en una tabla relacional en Supabase vinculada al nombre de la especie.
- Antes de llamar a Gemini, el sistema **comprueba si ya existe** una descripción cacheada para esa especie.
- Objetivo: reducir costes y latencia.

### ⏳ Regla de UX Asíncrona
El proceso de identificación puede tardar **3–8 segundos**. El frontend debe implementar **loading states progresivos e informativos** para evitar el abandono del usuario:

```
"Analizando imagen..."
"Buscando coincidencias..."
"Consultando base de datos..."
```

### 🔒 Aislamiento de Datos del Usuario
- Las imágenes subidas se guardan en el **cuaderno de campo personal** del usuario.
- **NO se añaden** automáticamente al dataset base de embeddings vectoriales.
- Motivo: evitar contaminación del modelo por falsos positivos (**Concept Drift**).
```
