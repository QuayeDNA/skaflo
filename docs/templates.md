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

## Template Selection

When using `skaflo create`, you'll be prompted to choose:

1. **Framework**: Currently React (more coming soon)
2. **Structure Style**: Feature-based or Component-based

## Usage Examples

```bash
# Create feature-based React app
skaflo create my-saas-app --framework react --structure feature-based

# Create component-based React library
skaflo create my-components --framework react --structure component-based
```

## Future Templates

- Vue.js & Nuxt structures
- Next.js App Router and Pages Router
- Express/Node.js MVC and layered architectures
- Angular standalone and module-based
- Backend frameworks (NestJS, Fastify, Koa)
- Mobile frameworks (React Native, Flutter)
