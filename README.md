# nachodiaz.me

Portfolio personal de Nacho Díaz — Software Engineer con +10 años en producto digital.

## Stack

- **Next.js 15** — App Router, TypeScript, sin Tailwind
- **CSS Modules** — un módulo por componente, sin librerías UI
- **next/font/google** — fuente Onest (variable font)
- **React 19**

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz, fuente Onest, Nav global
│   ├── globals.css         # Variables de diseño, utilidades (.container, .gutter, .eyebrow…)
│   ├── page.tsx            # Home
│   ├── proyectos/          # Página /proyectos con filtrado por categoría
│   └── experiencia/        # Página /experiencia con áreas y trayectoria
│
├── components/
│   ├── Nav/                # Nav fija con hamburger menu en móvil
│   ├── Hero/               # Hero full-height con métricas
│   ├── EnfoqueSection/     # Grid de áreas de trabajo
│   ├── TrabajoSection/     # Preview de proyectos destacados
│   ├── IaBanda/            # Banda oscura sobre uso de IA
│   ├── ServiciosSection/   # Servicios que ofrece
│   ├── PropositoSection/   # Cards de propósito
│   ├── SobreSection/       # Bio + trayectoria
│   ├── CtaBanner/          # Banner de llamada a la acción
│   ├── ContactoSection/    # Links y disponibilidad
│   ├── Footer/             # Footer
│   └── RevealProvider/     # IntersectionObserver para animaciones de entrada
│
└── data/
    └── proyectos.ts        # Datos de proyectos con categorías
```

## Variables de diseño

Definidas en `globals.css` como custom properties:

| Variable | Valor por defecto | Uso |
|---|---|---|
| `--base-font` | `18px` | Tamaño de fuente base (escala todo el texto en `rem`) |
| `--container-w` | `1200px` | Ancho máximo del contenedor |
| `--gutter` | `2.5rem` | Padding horizontal en desktop |
| `--gutter-sm` | `1.25rem` | Padding horizontal en móvil |

## Comandos

```bash
pnpm dev      # Servidor de desarrollo en localhost:3000
pnpm build    # Build de producción
pnpm start    # Servidor de producción (requiere build previo)
```
