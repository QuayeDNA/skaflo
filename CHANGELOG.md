# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-10-05

### ✨ Enhanced Developer Experience

#### Added
- **Enhanced npm scripts** with visual feedback and success/failure messages
- **New scripts**:
  - `npm run typecheck` - Type checking with feedback messages
  - `npm run build:clean` - Clean build directory before building
  - `npm run test:watch` - Watch mode for tests
  - `npm run format:check` - Check code formatting without fixing
  - `npm run quality` - Run all quality checks (lint, typecheck, test) in sequence
- **Cross-platform messaging system** using Node.js script for consistent output
- **Visual indicators** with emojis for better script feedback

#### Fixed
- **npm configuration warnings** by separating PNPM-specific configs to `.pnpmrc`
- **Cross-platform compatibility** for development scripts
- **ESLint configuration** to properly ignore scripts directory

#### Changed
- **Improved feedback** for all development commands (build, test, lint, etc.)
- **Better developer workflow** with clear success/failure indicators

#### Technical Details
- Added `scripts/message.js` utility for consistent cross-platform messaging
- Updated ESLint config to exclude scripts directory
- Added `rimraf` dev dependency for clean builds
- Separated `.npmrc` and `.pnpmrc` for package manager compatibility

### 🔧 Developer Experience Impact
- **Clear feedback** on command success/failure
- **Consistent messaging** across all platforms (Windows, macOS, Linux)
- **Visual indicators** make development workflow more intuitive
- **Reduced confusion** with proper command completion messages

---

## [1.0.0] - 2025-10-04

### 🎯 MAJOR TRANSFORMATION: File Generation → Folder-Only Structure Generator

This is a complete architectural transformation of Skaflo from a file generation tool to a focused folder structure generator.

### ✨ Added

#### Core Functionality

- **Folder-Only Generation**: Creates organized directory hierarchies without any files
- **React Templates**: Feature-based (37 folders) and Component-based (25 folders) structures
- **Complete CLI**: Three working commands (`create`, `list`, `preview`)
- **Interactive Prompts**: Framework and architecture selection with validation
- **Non-Interactive Mode**: Command-line flags for automated usage

#### New CLI Commands

- `skaflo create <project-name>` - Create folder structure with interactive prompts
- `skaflo create <name> --framework react --structure feature-based` - Non-interactive creation
- `skaflo list` - Display all available templates
- `skaflo preview` - Preview folder structure before creation
- `skaflo --version` - Show version information
- `skaflo --help` - Display help information

#### New Architecture Components

- **FolderStructureEngine** (`src/generators/templateEngine.ts`) - Core folder generation system
- **ProjectFolderGenerator** (`src/generators/folderGenerator.ts`) - Validation and generation orchestrator
- **StructureRegistry** (`src/templates/registry.ts`) - Template lookup and management system
- **React Structure Definitions** (`src/templates/react.structures.ts`) - Predefined React architectures

#### Enhanced Type System

- **Generator Types** (`src/types/generator.types.ts`) - Interfaces for generation system
- **Template Types** (`src/types/template.types.ts`) - Template definition interfaces
- **CLI Types** (`src/types/cli.types.ts`) - Command-line interface types
- **Unified Exports** (`src/types/index.ts`) - Centralized type exports

#### Testing Infrastructure

- **97 Tests Passing** across 8 comprehensive test suites
- **75.46% Code Coverage** with detailed test scenarios
- **CLI Command Testing** with mocking and validation
- **Generator Testing** for folder creation and validation
- **Template Registry Testing** for lookup and validation
- **Utility Testing** for file system operations and validation

### 🔄 Changed

#### Architecture Transformation

- **Removed Handlebars dependency** - No longer generating file content
- **Replaced template engine** with custom folder structure system
- **Simplified generation process** - Focus on directory creation only
- **Enhanced validation system** - Comprehensive project name and location validation

#### CLI Experience

- **Improved prompts** with better UX and validation
- **Enhanced error handling** with user-friendly messages
- **Better feedback** with success messages and folder counts
- **Faster generation** - Sub-10 second structure creation

#### Development Experience

- **Updated TypeScript configuration** with stricter type checking
- **Enhanced Jest configuration** with better coverage reporting
- **Improved ESLint rules** for code quality
- **Better npm scripts** for development and testing

### 🗑️ Removed

#### File Generation System

- **Handlebars template engine** - No longer needed for folder-only generation
- **File template definitions** - Removed all boilerplate file creation
- **Package.json generation** - Users maintain full control over dependencies
- **Configuration file creation** - No opinionated setup files

#### Dependencies Cleanup

- **Handlebars** - Template engine no longer needed
- **File system template processing** - Simplified to folder creation only
- **Complex template inheritance** - Simplified to direct folder definitions

### 🛠️ Technical Details

#### File Structure Changes

```
Added:
├── src/generators/
│   ├── templateEngine.ts       # Folder structure generation engine
│   └── folderGenerator.ts      # Project generator with validation
├── src/templates/
│   ├── registry.ts             # Template lookup system
│   └── react.structures.ts     # React folder definitions
├── src/types/
│   └── index.ts                # Unified type exports
└── tests/unit/
    ├── generators/             # Generator test suites
    ├── templates/              # Template test suites
    └── cli/actions.test.ts     # CLI action tests

Modified:
├── src/cli/index.ts            # Enhanced with 3 working commands
├── src/cli/prompts/index.ts    # Improved user experience
├── src/utils/fileSystem.ts     # Focused on folder operations
├── src/utils/validation.ts     # Enhanced validation logic
└── All test files              # Updated for new architecture
```

#### Performance Improvements

- **Generation Speed**: Sub-10 second creation for complex structures
- **Memory Usage**: Reduced by removing file template processing
- **Bundle Size**: Smaller due to removed dependencies
- **Startup Time**: Faster CLI initialization

#### Quality Metrics

- **Test Coverage**: 75.46% with 97 passing tests
- **Type Safety**: 100% TypeScript with strict mode
- **Code Quality**: Zero ESLint errors
- **Documentation**: Comprehensive README and examples

### 🚀 Migration Guide

#### For Users

```bash
# OLD: Generated files with boilerplate
skaflo create my-app --with-files

# NEW: Clean folder structure only
skaflo create my-app
# Creates organized folders, you add your own files
```

#### For Developers

- **API Changes**: Complete rewrite - see new type definitions
- **Template System**: JSON-based folder definitions instead of Handlebars
- **Generation Process**: Direct folder creation instead of file templating

### 🎯 What's Next (v1.5)

- Vue.js and Nuxt folder structure templates
- Next.js App Router and Pages Router structures
- Express/Node.js layered and MVC architectures
- Angular standalone and module-based structures
- VS Code extension for in-editor generation

---

## [0.x.x] - Previous Versions

Previous versions focused on file generation with Handlebars templates. This changelog starts fresh with v1.0.0 as it represents a complete architectural transformation.

### Breaking Changes from Previous Versions

- **No file generation** - Complete removal of boilerplate file creation
- **New CLI commands** - Different command structure and options
- **Template system rewrite** - JSON-based instead of Handlebars
- **Different project structure** - Folder-only output

---

## Versioning Strategy

- **Major versions (1.x.x)**: Breaking changes, new framework support
- **Minor versions (x.1.x)**: New templates, enhanced features
- **Patch versions (x.x.1)**: Bug fixes, performance improvements

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## License

[MIT](LICENSE) © [QuayeDNA](https://github.com/QuayeDNA)
