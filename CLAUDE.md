# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

agesweb is a Vue 3 + TypeScript + Vite project for web development.

## Commands

```bash
# Start development server (with --host for network access)
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **Vue 3**: Using Composition API with `<script setup>` syntax
- **TypeScript**: Strict configuration with project references (tsconfig.json, tsconfig.app.json, tsconfig.node.json)
- **Vite**: Fast build tool and dev server

## Architecture

- **Entry point**: `src/main.ts` creates and mounts the Vue app to `#app` in `index.html`
- **Root component**: `src/App.vue` is the top-level Vue component
- **Components**: Reusable Vue SFCs in `src/components/`
- **Views**: Page-level components in `src/views/` (currently empty)
- **Assets**: Static resources in `src/assets/`
- **Public assets**: Files served directly at root in `public/`

## TypeScript Configuration

The project uses split TypeScript configurations via project references:
- `tsconfig.json` - Root config that references app and node configs
- `tsconfig.app.json` - Application code with strict type checking
- `tsconfig.node.json` - Node/Vite build tool configuration

This ensures type safety for both application code and build scripts.
