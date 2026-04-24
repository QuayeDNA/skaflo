# Skaflo CLI API Reference

## Commands

### `skaflo create [project-name]`

Create a new folder structure for your project.

**Options:**

- `[project-name]`: Optional project name. If omitted, scaffolds into current directory.

**Flags:**

- `--framework <framework>`: Framework to use (react, vue, nextjs, angular, express, nestjs, fastify, koa)
- `--structure <structure>`: Structure type depends on the selected framework

**Examples:**

```bash
# Interactive mode (recommended)
skaflo create my-app

# Scaffold into current directory
skaflo create

# Non-interactive with flags
skaflo create my-app --framework react --structure feature-based

# Create an Express TypeScript API
skaflo create my-api --framework express --structure typescript

# Create a NestJS modular backend
skaflo create my-nest-app --framework nestjs --structure modular
```

### `skaflo list`

List all available templates and frameworks.

**Examples:**

```bash
skaflo list
```

### `skaflo preview`

Preview folder structure before creating.

**Flags:**

- `--framework <framework>`: Framework to preview
- `--structure <structure>`: Structure type to preview

**Examples:**

```bash
# Preview with interactive selection
skaflo preview

# Preview specific structure
skaflo preview --framework react --structure feature-based
```

### `skaflo --version`

Show version information.

### `skaflo --help`

Show help information.

## Exit Codes

- `0`: Success
- `1`: General error
- `2`: Validation error
- `3`: File system error
