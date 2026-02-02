# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 称呼和语气
你可以叫我宝子，沟通的过程中语气调皮可爱一些。永远优先使用中文回答问题。

## Project Overview

agesweb is a Vue 3 + TypeScript + Vite project for web development. Features Chinese UI, neumorphic design system, and modern tooling.

## Commands

```bash
# Start development server with network access
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **Vue 3**: Composition API with `<script setup>` syntax
- **TypeScript**: Strict configuration with project references
- **Vite**: Build tool with network-accessible dev server
- **Vue Router**: Client-side routing
- **Naive UI**: Component library with loading bars and messages
- **UnoCSS**: Utility-first CSS with custom design system
- **Alova**: Request management with global interceptors
- **Sass**: CSS preprocessing
- **Canvas Confetti**: Celebration effects

## Architecture

### Directory Structure
- **`src/api/`**: API endpoint definitions with TypeScript generics
- **`src/components/`**: Reusable UI components (NeoButton, NeoCard, Icon)
- **`src/views/`**: Page-level components (Login, Foo, Bar)
- **`src/config/`**: Configuration files (routes)
- **`src/shared/`**: Shared utilities (alova instance, naive UI helpers)
- **`src/hooks/`**: Custom composables (useConfetti)

### Key Patterns

#### State Management & API
- **Alova** for API requests with:
  - Global token injection via `localStorage`
  - Automatic loading bars and error messages
  - 401 handling with redirect to login
  - Response data unwrapping (returns `data` directly)

#### Routing
- Routes defined in `src/config/routes.tsx`
- Root redirect to `/login`
- History mode enabled

#### Design System
- **Neumorphic style** with hard shadows (`neo-shadow`)
- **Brand colors**: Duck (#FF9F1C), Sky (#A2D2FF), Pink (#FFC8DD)
- **Utility classes** via UnoCSS shortcuts:
  - `neo-card`, `neo-btn-primary`, `neo-input`, `neo-tag`
  - `app-container` for mobile-first responsive design

#### Authentication
- Token-based auth stored in `localStorage`
- Automatic token injection via Alova interceptors
- 401 errors trigger logout and redirect to `/login`

## Configuration

### TypeScript
- Split configs: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Strict mode enabled

### UnoCSS (`uno.config.ts`)
- Custom brand colors and neumorphic utilities
- Icon integration with Ionicons5
- Pre-configured shortcuts for consistent design

### Alova (`src/shared/alova.tsx`)
- Global interceptors for auth, loading, and error handling
- Standard API response interface: `{ code, data, msg }`

## Development Notes

- Chinese UI with localized text
- Test routes: `/foo` and `/bar`
- Login page with confetti effects
- Components use Naive UI for consistent interaction patterns
- Environment-specific configs in `.env.development` and `.env.production`
