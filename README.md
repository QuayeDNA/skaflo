# DevForge 🏗️

> **Stop reinventing project structures. Start building faster.**

A powerful CLI tool that generates production-ready folder structures and boilerplate code for modern JavaScript/TypeScript projects. No more blank canvas paralysis – just pick your stack, choose your style, and start coding.

[![npm version](https://badge.fury.io/js/devforge.svg)](https://badge.fury.io/js/devforge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/yourusername/devforge/workflows/CI/badge.svg)](https://github.com/yourusername/devforge/actions)

## 🚀 Quick Start

```bash
# Install globally
npm install -g devforge

# Generate a new project
devforge create my-app

# Or use npx (no installation required)
npx devforge create my-app
```

## ✨ Why DevForge?

Every developer has been there – staring at an empty folder, wondering how to organize their new project. Should components go in `/src/components` or `/src/features/*/components`? Where do utilities live? What about tests?

**ScaffoldJS solves this by:**

- 📁 Providing battle-tested folder structures from successful projects
- 🎯 Supporting multiple architectural patterns (feature-based, layered, domain-driven)
- 🔧 Generating framework-specific boilerplate with best practices baked in
- ⚡ Getting you from idea to coding in under 30 seconds
- 🛡️ Preventing accidental file overwrites with smart validation

## 🎯 MVP Features (v1.0)

### Supported Frameworks

- **React** (Vite + TypeScript)
  - Feature-based structure
  - Component-based structure
- **Next.js**
  - App Router structure
  - Pages Router structure
- **Express/Node.js**
  - Layered architecture
  - MVC pattern

### Core Functionality

- ✅ Interactive CLI prompts
- ✅ Non-interactive mode with flags
- ✅ Project structure preview before generation
- ✅ Template file generation with placeholders
- ✅ TypeScript/JavaScript toggle
- ✅ Git initialization
- ✅ Package.json generation with relevant dependencies

## 🛠️ Usage

### Interactive Mode (Recommended)

```bash
devforge create my-awesome-app
```

This launches an interactive wizard that asks you:

1. **Framework** : React, Next.js, Express, etc.
2. **Structure Style** : Feature-based, layered, domain-driven
3. **Language** : TypeScript or JavaScript
4. **Additional Options** : Testing setup, linting, CI/CD configs

### Non-Interactive Mode

```bash
devforge create my-app \
  --framework react \
  --structure feature-based \
  --typescript \
  --testing \
  --git-init
```

### Preview Mode

```bash
devforge preview --framework react --structure feature-based
```

## 📁 Example Generated Structure

### React (Feature-based + TypeScript)

```
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   ├── services/
│   │   │   │   └── authApi.ts
│   │   │   └── types/
│   │   │       └── auth.types.ts
│   │   └── dashboard/
│   │       └── ... (similar structure)
│   ├── shared/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   └── Modal/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚧 Roadmap

### 🎯 Phase 1: MVP (v1.0) - Q1 2024

- [x] Core CLI framework
- [x] React, Next.js, Express templates
- [x] Interactive prompts
- [x] Basic file generation
- [ ] Testing & CI setup
- [ ] Documentation
- [ ] npm package publication

### 🔥 Phase 2: Enhanced Features (v1.5) - Q2 2024

- [ ] **Vue.js & Nuxt support**
- [ ] **Monorepo structures** (Turborepo, Nx)
- [ ] **Custom template system** - Users can define their own templates
- [ ] **Template marketplace** - Community-contributed templates
- [ ] **VS Code extension** - Generate structures directly in editor
- [ ] **Configuration file support** (`.scaffoldrc`)

### 🌟 Phase 3: Advanced Capabilities (v2.0) - Q3 2024

- [ ] **AI-powered suggestions** - Analyze existing codebase and suggest improvements
- [ ] **Migration tools** - Convert between different structures
- [ ] **Team templates** - Share organization-specific templates
- [ ] **Integration with popular tools** :
  - Storybook setup
  - Docker configurations
  - Database migrations
  - API documentation (OpenAPI)
- [ ] **Analytics dashboard** - Track template usage and success metrics

### 🚀 Phase 4: Enterprise Features (v3.0) - Q4 2024

- [ ] **Enterprise template governance** - Approve/manage templates at org level
- [ ] **Integration APIs** - Embed ScaffoldJS in other tools
- [ ] **Advanced customization** - Conditional logic in templates
- [ ] **Multi-language support** - Python, Go, Rust project structures
- [ ] **Cloud deployment integration** - Auto-configure Vercel, Netlify, AWS

## 🏗️ Technical Implementation

### MVP Architecture

```
devforge-cli/
├── src/
│   ├── cli/
│   │   ├── commands/
│   │   ├── prompts/
│   │   └── index.ts
│   ├── templates/
│   │   ├── react/
│   │   ├── nextjs/
│   │   └── express/
│   ├── generators/
│   │   ├── fileGenerator.ts
│   │   ├── templateRenderer.ts
│   │   └── projectInitializer.ts
│   └── utils/
├── templates/ (JSON definitions)
└── tests/
```

### Key Technologies

- **CLI Framework** : [Commander.js](https://github.com/tj/commander.js) + [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- **Template Engine** : [Handlebars](https://handlebarsjs.com/) for file templating
- **File System** : Node.js `fs` with async/await
- **Validation** : [Joi](https://joi.dev/) for input validation
- **Testing** : Jest + supertest for CLI testing

### Template Definition Schema

```typescript
interface TemplateDefinition {
  name: string;
  description: string;
  framework: string;
  structure: string;
  srcRoot: string;
  rootFolders: string[];
  srcStructure: TemplateNode;
  templateFiles: TemplateFile[];
  dependencies: string[];
  devDependencies: string[];
  scripts: Record<string, string>;
}
```

## 🧪 Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/devforge.git
cd devforge

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Test CLI locally
npm link
devforge --help
```

## 🤝 Contributing

We love contributions! Here's how you can help:

### Adding New Templates

1. Create template definition in `/templates/{framework}/`
2. Add corresponding test in `/tests/templates/`
3. Update documentation
4. Submit PR with example generated project

### Template Contribution Guidelines

- Follow established folder structure patterns
- Include comprehensive README in generated projects
- Add TypeScript support where applicable
- Include basic testing setup
- Follow framework-specific best practices

## 📊 Success Metrics

### MVP Success Criteria

- [ ] 1,000+ npm downloads in first month
- [ ] 5+ community-contributed templates
- [ ] 95%+ success rate in project generation
- [ ] Average setup time < 30 seconds

### Long-term Goals

- 50k+ monthly active users
- Integration with major development tools
- Adoption by enterprise development teams
- Template marketplace with 100+ templates

## 🎭 Example Usage Scenarios

### Scenario 1: Startup MVP

```bash
devforge create startup-mvp --framework react --structure feature-based --typescript --testing
# Generates production-ready React app with testing, linting, CI/CD
```

### Scenario 2: Enterprise API

```bash
devforge create enterprise-api --framework express --structure layered --typescript --docker --monitoring
# Generates scalable Node.js API with logging, monitoring, containerization
```

### Scenario 3: Full-stack Application

```bash
devforge create fullstack-app --type monorepo --frontend react --backend express --database postgres
# Generates monorepo with shared types, API client, database migrations
```

## 📄 License

MIT © [Your Name](https://github.com/yourusername)

---

**Ready to scaffold your next project?**

```bash
npm install -g devforge
devforge create my-next-big-thing
```

⭐ **Star this repo** if ScaffoldJS helps you build faster!
