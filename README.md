# Skaflo 🏗️

> **Clean folder structures. Zero boilerplate. Your content, your way.**

A focused CLI tool that generates organized folder structures for modern JavaScript/TypeScript projects. No files, no boilerplate, no assumptions – just clean, professional directory hierarchies that you can populate with your own content.

[![npm version](https://badge.fury.io/js/skaflo.svg)](https://badge.fury.io/js/skaflo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/QuayeDNA/skaflo/workflows/CI/badge.svg)](https://github.com/QuayeDNA/skaflo/actions)

## 🚀 Quick Start

```bash
# Install globally (npm)
npm install -g skaflo

# Or install globally (pnpm - recommended)
pnpm add -g skaflo

# Generate folder structure
skaflo create my-app

# Preview structure before creating
skaflo preview

# List available templates
skaflo list

# Or use npx (no installation required)
npx skaflo create my-app
```

## ✨ Why Skaflo?

Every developer has been there – staring at an empty folder, wondering how to organize their new project. Should components go in `/src/components` or `/src/features/*/components`? Where do utilities live? What about tests?

**Skaflo solves this by:**

- 📁 Creating clean, organized folder structures without any files
- 🎯 Supporting proven architectural patterns (feature-based, component-based)
- � **No boilerplate files** - you maintain complete control over your content
- ⚡ Getting you from idea to organized structure in under 10 seconds
- 🛡️ Smart validation prevents overwrites and ensures clean directory creation

## 🎯 Current Status: ✅ Phase 2 COMPLETE (v1.5)

### ✅ What's Working (v1.5)

- **Complete CLI with 3 commands**: `create`, `list`, `preview`
- **Interactive prompts** with framework and architecture selection
- **Folder-only generation** - No files, no boilerplate, just clean structure
- **11 Production Templates** across 5 frameworks:
  - **React**: Feature-based & Component-based
  - **Vue**: Composition API & Nuxt 3
  - **Next.js**: App Router & Pages Router
  - **Angular**: Standalone & Feature-based
  - **Express**: Layered, MVC & Feature-based
- **Comprehensive validation** with error handling and safety checks
- **Production ready** with TypeScript, ESLint, and Jest

### 🚫 What Skaflo Does NOT Do

- **No file generation** - We create folders only
- **No boilerplate code** - You write your own content
- **No dependencies** - You choose your own packages
- **No opinionated configurations** - You control your setup

> **✨ Phase 2 Focus:** Skaflo now supports 5 major frameworks with 18 production-ready templates. You maintain complete control over file content, dependencies, and configurations.

## 🎯 Available Templates

### React Framework (4 templates)

- **Feature-based Structure** (37 folders)
  - Organized by feature/domain
  - Shared components and utilities
  - Perfect for medium to large applications

- **Component-based Structure** (25 folders)
  - Traditional component organization
  - Clear separation of concerns
  - Ideal for component libraries and smaller apps

- **Atomic Design** (39 folders)
  - Atoms, molecules, organisms, templates
  - Design system architecture
  - Perfect for design system projects

- **Monorepo** (23 folders)
  - Multiple apps with shared packages
  - Scalable multi-app architecture
  - Ideal for large-scale projects

### Vue Framework (4 templates)

- **Composition API** (31 folders)
  - Modern Vue 3 with Composition API
  - Composables and Pinia stores
  - Perfect for scalable Vue applications

- **Nuxt 3 App Router** (31 folders)
  - Server-side rendering with Nuxt 3
  - File-based routing and server API
  - Ideal for full-stack Vue applications

- **Options API** (27 folders)
  - Traditional Vue Options API
  - Vuex store pattern
  - Legacy Vue 2 migration path

- **Feature-based** (43 folders)
  - Domain-driven architecture
  - Feature modules with full isolation
  - Enterprise Vue applications

### Next.js Framework (4 templates)

- **App Router** (45 folders)
  - Next.js 15 with server components
  - Route groups and API routes
  - Modern Next.js architecture

- **Pages Router** (38 folders)
  - Traditional Pages Router
  - API routes and SSR support
  - Backward compatible structure

- **Feature-based** (39 folders)
  - Domain-driven Next.js structure
  - Feature modules with layouts
  - Scalable Next.js applications

- **Monorepo** (23 folders)
  - Multiple Next.js apps
  - Shared packages and configs
  - Multi-tenant architectures

### Angular Framework (3 templates)

- **Standalone Components** (35 folders)
  - Angular 18 standalone architecture
  - No NgModules required
  - Modern Angular best practices

- **Feature-based** (47 folders)
  - Modular feature architecture
  - Core, shared, and feature modules
  - Enterprise-ready structure

- **Module-based** (30 folders)
  - Traditional NgModule architecture
  - Legacy Angular support
  - Migration-friendly structure

### Express/Node.js Framework (3 templates)

- **Layered Architecture** (26 folders)
  - Clean separation of concerns
  - Repository and service layers
  - Scalable API structure

- **MVC Pattern** (29 folders)
  - Model-View-Controller
  - Traditional Express structure
  - Full-stack Node.js apps

- **Feature-based** (37 folders)
  - Domain-driven design
  - Feature modules with full stack
  - Microservices-ready

### Core Functionality ✅

- ✅ **Interactive CLI prompts** with framework/architecture selection
- ✅ **Non-interactive mode** with command-line flags
- ✅ **Project structure preview** before generation
- ✅ **Folder-only generation** - no files created
- ✅ **Smart validation** - prevents overwrites and validates project names
- ✅ **Comprehensive error handling** with user-friendly messages

## 🛠️ CLI Usage

### Interactive Mode (Recommended)

```bash
# Create a new project in a new directory
skaflo create my-awesome-app

# Scaffold structure into current directory (NEW in v1.1.4!)
skaflo create
```

This launches an interactive wizard that asks you:

1. **Framework**: React, Vue, Next.js, Angular, Express
2. **Structure Style**: Depends on selected framework
3. **Project location**: Where to create the folder structure (or current directory if no name provided)

### Non-Interactive Mode

```bash
# Create with specific options in new directory
skaflo create my-app --framework react --structure feature-based

# Scaffold into current directory with specific options (NEW in v1.1.4!)
skaflo create --framework react --structure feature-based

# Preview a structure
skaflo preview --framework react --structure component-based

# List all available templates
skaflo list
```

### Available Commands

- `skaflo create [project-name]` - Create a new folder structure (optional name - scaffolds into current directory if omitted)
- `skaflo list` - Show all available templates
- `skaflo preview` - Preview folder structure before creating
- `skaflo --version` - Show version information
- `skaflo --help` - Show help information

## 📁 Generated Folder Structures

### React Feature-based Structure (37 folders)

```text
my-react-app/
├── public/
├── src/
│   ├── app/
│   │   ├── layout/
│   │   ├── providers/
│   │   └── store/
│   ├── components/
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── shared/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── profile/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── stores/
│   │       ├── types/
│   │       └── utils/
│   ├── shared/
│   │   ├── api/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── utils/
│   └── assets/
│       ├── icons/
│       ├── images/
│       └── styles/
└── tests/
    ├── fixtures/
    ├── helpers/
    ├── mocks/
    └── setup/
```

### React Component-based Structure (25 folders)

```text
my-react-app/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── ui/
│   ├── hooks/
│   ├── services/
│   │   └── api/
│   ├── store/
│   │   ├── slices/
│   │   └── middleware/
│   ├── types/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── constants/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   └── pages/
└── tests/
    ├── components/
    ├── hooks/
    ├── services/
    ├── utils/
    └── fixtures/
```

> **Note**: These are folder structures only. No files are created - you have complete control over your content!

## 🧪 Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/QuayeDNA/skaflo.git
cd skaflo

# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install dependencies (recommended)
pnpm install

# Or use npm if preferred
npm install

# Run in development mode
pnpm dev
# or: npm run dev

# Run tests
pnpm test
# or: npm test

# Run tests with coverage
pnpm test:coverage

# Run linting
pnpm lint

# Build for production
pnpm build

# Test CLI locally
pnpm link --global
skaflo --help
```

### Example 1: React Feature-based App

```bash
$ skaflo create my-saas-app

? Select framework: React
? Select structure: Feature-based
? Project location: ./my-saas-app

✅ Creating folder structure...
✅ Created 37 directories for React feature-based structure
✅ Structure created successfully at: ./my-saas-app

Your organized folder structure is ready!
Add your files and start building. 🚀
```

**Result**: Clean 37-folder structure ready for your SaaS features like authentication, dashboard, billing, etc.

### Example 2: Component Library

```bash
$ skaflo create design-system --framework react --structure component-based

✅ Creating folder structure...
✅ Created 25 directories for React component-based structure
✅ Structure created successfully at: ./design-system

Perfect for organizing UI components, hooks, and utilities! 📚
```

**Result**: Well-organized structure perfect for a component library with clear separation.

### Example 3: Quick Preview

```bash
$ skaflo preview --framework react --structure feature-based

📁 React Feature-Based folder structure preview:

├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── profile/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── types/
│   │       └── utils/
│   └── shared/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       ├── utils/
│       ├── constants/
│       └── contexts/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── docs/

Ready to create this structure? Run: skaflo create my-project
```

## 📄 License

MIT © [QuayeDNA](https://github.com/QuayeDNA)

---

**Ready to organize your next project?**

```bash
npm install -g skaflo
skaflo create my-next-project
```

⭐ **Star this repo** if Skaflo helps you build better organized projects!
