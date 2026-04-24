# Skaflo Templates Guide

## Available Templates

### React Framework

#### Feature-based Structure (37 folders)

Organized by feature/domain with shared components and utilities. Perfect for medium to large applications.

**Structure:**

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
│   │   └── ... (other features)
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

#### Component-based Structure (25 folders)

Traditional component organization with clear separation of concerns. Ideal for component libraries and smaller apps.

**Structure:**

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

### Vue Framework

#### Vue 3 Composition API (31 folders)

Modern Vue 3 application with Composition API and best practices for 2025.

**Structure:**

```text
my-vue-app/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   ├── components/
│   │   ├── ui/
│   │   ├── common/
│   │   └── layout/
│   ├── composables/
│   ├── stores/
│   ├── views/
│   ├── router/
│   ├── services/
│   │   └── api/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   ├── constants/
│   └── plugins/
└── tests/
    ├── unit/
    │   ├── components/
    │   ├── composables/
    │   └── stores/
    ├── e2e/
    └── docs/
```

#### Nuxt 3 App Router (31 folders)

Nuxt 3 application with App Router, server-side rendering, and modern architecture.

**Structure:**

```text
my-nuxt-app/
├── assets/
│   ├── css/
│   ├── images/
│   └── icons/
├── components/
│   ├── ui/
│   ├── common/
│   └── layout/
├── composables/
├── layouts/
├── middleware/
├── pages/
│   ├── auth/
│   └── dashboard/
├── plugins/
├── public/
│   └── assets/
├── server/
│   ├── api/
│   ├── middleware/
│   ├── routes/
│   └── utils/
├── stores/
├── types/
├── utils/
│   ├── helpers/
│   └── validators/
└── tests/
    ├── unit/
    ├── e2e/
    └── docs/
```

### Next.js Framework

#### Next.js 15 App Router (45 folders)

Next.js 15 with App Router, server components, and route groups for modern web applications.

**Structure:**

```text
my-next-app/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   └── api/
│   │       ├── auth/
│   │       └── users/
│   ├── components/
│   │   ├── ui/
│   │   ├── shared/
│   │   ├── dashboard/
│   │   └── auth/
│   ├── lib/
│   │   ├── auth/
│   │   └── db/
│   ├── services/
│   │   └── api/
│   ├── hooks/
│   ├── contexts/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   ├── constants/
│   └── styles/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

#### Next.js Pages Router (38 folders)

Traditional Next.js with Pages Router architecture for backward compatibility.

**Structure:**

```text
my-next-app/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── auth/
│   │   └── dashboard/
│   ├── components/
│   │   ├── ui/
│   │   ├── common/
│   │   └── layout/
│   ├── hooks/
│   ├── services/
│   │   └── api/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── lib/
│   │   ├── auth/
│   │   └── db/
│   ├── contexts/
│   ├── types/
│   ├── constants/
│   └── styles/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

### Angular Framework

#### Angular 18 Standalone (35 folders)

Angular 18 with standalone components architecture - no NgModules needed.

**Structure:**

```text
my-angular-app/
├── public/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── models/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   └── utils/
│   │   └── features/
│   │       ├── home/
│   │       │   ├── components/
│   │       │   └── services/
│   │       ├── auth/
│   │       │   ├── components/
│   │       │   ├── services/
│   │       │   └── guards/
│   │       └── dashboard/
│   │           ├── components/
│   │           └── services/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   └── environments/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

#### Angular Feature-Based (47 folders)

Angular 18 with feature-based modular architecture for enterprise applications.

**Structure:**

```text
my-angular-app/
├── public/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   └── constants/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   └── layout/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   ├── utils/
│   │   │   └── validators/
│   │   └── features/
│   │       ├── home/
│   │       │   ├── components/
│   │       │   ├── services/
│   │       │   └── models/
│   │       ├── auth/
│   │       │   ├── components/
│   │       │   ├── services/
│   │       │   ├── guards/
│   │       │   └── models/
│   │       ├── dashboard/
│   │       │   ├── components/
│   │       │   ├── services/
│   │       │   └── models/
│   │       └── profile/
│   │           ├── components/
│   │           ├── services/
│   │           └── models/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── styles/
│   │   └── fonts/
│   └── environments/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

### Express/Node.js Framework

#### Express Layered Architecture (26 folders)

Express application with clean layered architecture and separation of concerns.

**Structure:**

```text
my-express-app/
├── public/
│   └── assets/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   ├── constants/
│   └── errors/
└── tests/
    ├── unit/
    │   ├── controllers/
    │   ├── services/
    │   └── repositories/
    ├── integration/
    ├── e2e/
    └── docs/
```

#### Express MVC Pattern (29 folders)

Traditional Model-View-Controller architecture for Express applications.

**Structure:**

```text
my-express-app/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── src/
│   ├── config/
│   │   └── database/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   │   ├── layouts/
│   │   └── partials/
│   ├── routes/
│   ├── middleware/
│   │   ├── auth/
│   │   └── validation/
│   ├── services/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   └── constants/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

#### Express Feature-Based (37 folders)

Domain-driven feature-based architecture for scalable Express applications.

**Structure:**

```text
my-express-app/
├── public/
│   └── assets/
├── src/
│   ├── config/
│   │   ├── database/
│   │   └── auth/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── routes/
│   │   ├── users/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── routes/
│   │   └── products/
│   │       ├── controllers/
│   │       ├── services/
│   │       ├── models/
│   │       └── routes/
│   └── shared/
│       ├── middleware/
│       ├── utils/
│       ├── types/
│       ├── constants/
│       └── errors/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

#### Express TypeScript Architecture (32 folders)

Express application structure optimized for TypeScript with organized configs, interfaces, and middleware.

**Structure:**

```text
my-express-app/
├── public/
│   └── assets/
├── src/
│   ├── config/
│   │   ├── database/
│   │   ├── logger/
│   │   └── env/
│   ├── controllers/
│   ├── routes/
│   │   ├── auth/
│   │   └── users/
│   ├── services/
│   ├── repositories/
│   ├── middleware/
│   │   ├── auth/
│   │   └── validation/
│   ├── models/
│   ├── types/
│   ├── interfaces/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── constants/
│   └── errors/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── docs/
```

### NestJS Framework

#### NestJS Modular Architecture (1 template)

NestJS application with modular architecture, shared modules, and feature-based organization.

**Structure:**

```text
my-nest-app/
├── docs/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── controllers/
│   │   │   │   ├── services/
│   │   │   │   └── dtos/
│   │   │   ├── users/
│   │   │   │   ├── controllers/
│   │   │   │   ├── services/
│   │   │   │   └── dtos/
│   │   │   └── products/
│   │   │       ├── controllers/
│   │   │       ├── services/
│   │   │       └── dtos/
│   │   ├── common/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── filters/
│   │   │   ├── pipes/
│   │   │   └── utils/
│   │   └── shared/
│   │       ├── interfaces/
│   │       └── constants/
│   ├── config/
│   │   ├── database/
│   │   ├── env/
│   │   ├── logger/
│   │   └── swagger/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   └── constants/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

### Fastify Framework

#### Fastify Plugin-Based Architecture (1 template)

Fastify application structured around plugins, routes, schemas, and services.

**Structure:**

```text
my-fastify-app/
├── docs/
├── src/
│   ├── plugins/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── database/
│   │   └── logger/
│   ├── routes/
│   │   ├── auth/
│   │   ├── users/
│   │   └── products/
│   ├── services/
│   │   ├── auth/
│   │   ├── users/
│   │   └── products/
│   ├── controllers/
│   ├── schemas/
│   │   ├── auth/
│   │   ├── users/
│   │   └── products/
│   ├── config/
│   │   ├── env/
│   │   ├── logger/
│   │   └── database/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   └── constants/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

### Koa Framework

#### Koa Middleware Architecture (1 template)

Koa application organized around middleware, controllers, routes, and services.

**Structure:**

```text
my-koa-app/
├── docs/
├── src/
│   ├── app/
│   ├── middleware/
│   │   ├── auth/
│   │   ├── error/
│   │   ├── validation/
│   │   └── logging/
│   ├── routes/
│   │   ├── auth/
│   │   ├── users/
│   │   └── products/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── config/
│   │   ├── env/
│   │   └── logger/
│   ├── utils/
│   │   ├── helpers/
│   │   └── validators/
│   ├── types/
│   └── constants/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

## Template Selection

When using `skaflo create`, you'll be prompted to choose:

1. **Framework**: React, Vue, Next.js, Angular, Express, NestJS, Fastify, Koa
2. **Structure Style**: Depends on framework selected

## Usage Examples

```bash
# Create feature-based React app
skaflo create my-saas-app --framework react --structure feature-based

# Create Vue 3 app with Composition API
skaflo create my-vue-app --framework vue --structure composition-api

# Create Next.js app with App Router
skaflo create my-next-app --framework nextjs --structure app-router

# Create Angular app with standalone components
skaflo create my-angular-app --framework angular --structure standalone

# Create Express API with layered architecture
skaflo create my-api --framework express --structure layered
```

## All Available Templates

### Frontend Frameworks

#### React (4 templates)

- **Feature-based** - Domain-driven architecture for large apps
- **Component-based** - Traditional structure for component libraries
- **Atomic Design** - Design system with atoms, molecules, organisms
- **Monorepo** - Multiple apps with shared packages

#### Vue (4 templates)

- **Composition API** - Vue 3 with modern Composition API structure
- **Nuxt 3** - Nuxt 3 with App Router and SSR support
- **Options API** - Traditional Vue Options API with Vuex
- **Feature-based** - Domain-driven Vue architecture

#### Next.js (4 templates)

- **App Router** - Next.js 15 with server components
- **Pages Router** - Traditional Pages Router structure
- **Feature-based** - Domain-driven Next.js architecture
- **Monorepo** - Multiple Next.js apps with shared packages

#### Angular (3 templates)

- **Standalone** - Angular 18 with standalone components
- **Feature-based** - Modular feature architecture
- **Module-based** - Traditional NgModule architecture

#### Express/Node.js (4 templates)

- **Layered** - Layered architecture with separation of concerns
- **MVC** - Model-View-Controller pattern
- **Feature-based** - Domain-driven feature architecture
- **TypeScript** - Express architecture optimized for TypeScript

#### NestJS (1 template)

- **Modular** - NestJS application structure with feature and shared modules

#### Fastify (1 template)

- **Plugin-based** - Fastify application organized around plugins, routes, and shared schemas

#### Koa (1 template)

- **Middleware** - Koa application structured around middleware and routes

### Backend Frameworks

#### Express/Node.js (4 templates)

- **Layered** - Layered architecture with separation of concerns
- **MVC** - Model-View-Controller pattern
- **Feature-based** - Domain-driven feature architecture
- **TypeScript** - Express architecture optimized for TypeScript with config, types, and middleware organization

#### NestJS (1 template)

- **Modular** - NestJS application with feature modules, shared modules, and common utilities

#### Fastify (1 template)

- **Plugin-based** - Fastify application organized around plugins, route modules, schemas, and services

#### Koa (1 template)

- **Middleware** - Koa application structured around middleware, routes, controllers, and services
