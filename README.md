# Skaflo 🏗️

> **Clean folder structures. Zero boilerplate. Your content, your way.**

Skaflo is a CLI-first project structure generator that scaffolds clean folder hierarchies for modern JavaScript and TypeScript projects. It creates directories only — no files, no boilerplate, and no assumptions.

[![npm version](https://badge.fury.io/js/skaflo.svg)](https://badge.fury.io/js/skaflo) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://github.com/QuayeDNA/skaflo/workflows/CI/badge.svg)](https://github.com/QuayeDNA/skaflo/actions)

## 🚀 What Skaflo does

- Creates clean folder structures for new projects
- Supports frontend and backend architecture templates
- Generates directories only, so you keep full control over files, dependencies, and tooling
- Validates choices and prevents accidental overwrites
- Includes preview mode for safe structure review

## 🔧 Supported frameworks

Skaflo supports the following frameworks and structure styles:

- React
- Vue
- Next.js
- Angular
- Express
- Backend templates for NestJS, Fastify, and Koa

## 📚 Documentation

These resources help you find the right information fast:

- [Docs home](docs/README.md)
- [CLI reference](docs/api.md)
- [Template guide](docs/templates.md)
- [Architecture notes](docs/architecture.md)
- [Troubleshooting](docs/troubleshooting.md)
- [Examples](examples/README.md)
- [Contributing](CONTRIBUTING.md)
- [Roadmap](Roadmap.md)
- [Validation report](VALIDATION_REPORT.md)
- [Changelog](CHANGELOG.md)

## 🚀 Quick start

### Install dependencies

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

### Generate a new project structure

```bash
npx skaflo create my-app
```

### Preview a folder structure

```bash
npx skaflo preview --framework react --structure feature-based
```

### List available templates

```bash
npx skaflo list
```

## 🧩 CLI commands

### `skaflo create [project-name]`
Create a new project folder structure. Omit `[project-name]` to scaffold into the current directory.

```bash
skaflo create my-app --framework react --structure feature-based
```

### `skaflo preview`
Preview a template before creating it.

```bash
skaflo preview --framework react --structure component-based
```

### `skaflo list`
Show all frameworks and available structure templates.

### `skaflo --help`
Display the CLI help page.

## 🧪 Development commands

Use these scripts during development:

```bash
pnpm lint
pnpm test
pnpm typecheck
pnpm build
pnpm format
pnpm test:coverage
```

## 💡 Why use Skaflo

Skaflo removes the friction of starting a new project. Instead of guessing folder names or copying outdated boilerplate, you get a consistent, modern directory foundation that fits your architecture style.

## 📁 Recommended workflow

1. Review available templates with `skaflo list`
2. Preview the layout with `skaflo preview`
3. Generate the structure with `skaflo create`
4. Add your own files, packages, and build configuration
5. Refer to the docs for CLI details, templates, and architecture

## 🤝 Contributing

If you want to help, please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

- Add tests for new templates or features
- Update docs and examples when behavior changes
- Follow existing lint and formatting rules
- Use conventional commits for PRs

## ❤️ Support the project

- Star the repo
- Open issues for missing templates or bugs
- Share template ideas or workflow improvements
- Contribute docs, examples, and tests

---

For complete project documentation, start at [docs/README.md](docs/README.md).
