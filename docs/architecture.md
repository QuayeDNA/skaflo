# Skaflo Technical Architecture

## Current Architecture (v1.0)

```text
skaflo/
├── src/
│   ├── cli/
│   │   ├── index.ts              ✅ CLI commands (create, list, preview)
│   │   └── prompts/
│   │       └── index.ts          ✅ Interactive prompts system
│   ├── generators/
│   │   ├── templateEngine.ts     ✅ Folder structure generation engine
│   │   └── folderGenerator.ts    ✅ Project folder generator with validation
│   ├── templates/
│   │   ├── registry.ts           ✅ Template registry and lookup
│   │   └── react.structures.ts   ✅ React folder structure definitions
│   ├── types/
│   │   ├── cli.types.ts          ✅ CLI interfaces
│   │   ├── generator.types.ts    ✅ Generator interfaces
│   │   ├── template.types.ts     ✅ Template interfaces
│   │   └── index.ts              ✅ Type exports
│   ├── utils/
│   │   ├── fileSystem.ts         ✅ File operations & safety
│   │   └── validation.ts         ✅ Input validation
│   └── index.ts                  ✅ Package entry point
├── tests/                        ✅ 99 tests across 8 suites
│   ├── unit/cli/                 ✅ CLI command tests
│   ├── unit/generators/          ✅ Generator tests
│   ├── unit/templates/           ✅ Template registry tests
│   └── unit/utils/               ✅ Utility function tests
└── templates/                    📁 Reserved for future file templates
```

## Key Technologies

- **CLI Framework**: [Commander.js](https://github.com/tj/commander.js) for command structure
- **Interactive Prompts**: [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for user input
- **Folder Generation**: Custom `FolderStructureEngine` (no file templating)
- **File System**: Node.js `fs` with async/await and safety checks
- **Validation**: Custom validation with comprehensive error handling
- **Testing**: Jest with 99 tests and 75.46% coverage
- **Build**: TypeScript + ESLint for code quality

## Folder Structure Definition Schema

```typescript
interface FolderStructure {
  name: string;
  description: string;
  framework: string;
  structure: string;
  folders: string[];
}
```

## Generation Process

1. **User Input** → CLI prompts or command flags
2. **Validation** → Project name, location, template validation
3. **Template Lookup** → Find matching folder structure
4. **Safety Checks** → Prevent overwrites, validate permissions
5. **Folder Creation** → Generate directory hierarchy only
6. **Success Feedback** → Confirm creation with folder count
