# Skaflo Technical Architecture

## Current Architecture (v1.5+)

```text
skaflo/
├── src/
│   ├── cli/
│   │   ├── index.ts              ✅ CLI commands (create, list, preview)
│   │   └── prompts/
│   │       └── index.ts          ✅ Interactive prompts and validation
│   ├── generators/
│   │   ├── templateEngine.ts     ✅ Folder structure generation engine
│   │   └── folderGenerator.ts    ✅ Project folder generator with safety checks
│   ├── templates/
│   │   ├── registry.ts           ✅ Template registry and lookup
│   │   ├── react.structures.ts   ✅ React folder structure definitions
│   │   ├── vue.structures.ts     ✅ Vue folder structure definitions
│   │   ├── nextjs.structures.ts  ✅ Next.js folder structure definitions
│   │   ├── angular.structures.ts ✅ Angular folder structure definitions
│   │   ├── express.structures.ts ✅ Express folder structure definitions
│   │   └── backend.structures.ts ✅ NestJS/Fastify/Koa folder structure definitions
│   ├── types/
│   │   ├── cli.types.ts          ✅ CLI interfaces
│   │   ├── generator.types.ts    ✅ Generator interfaces
│   │   ├── template.types.ts     ✅ Template interfaces
│   │   └── index.ts              ✅ Type exports
│   ├── utils/
│   │   ├── fileSystem.ts         ✅ File operations and safety helpers
│   │   └── validation.ts         ✅ Input validation and schema rules
│   └── index.ts                  ✅ Package entry point
├── tests/                        ✅ 229 tests across the unit suite
│   ├── unit/cli/                 ✅ CLI command tests
│   ├── unit/generators/          ✅ Generator tests
│   ├── unit/templates/           ✅ Template registry and structure tests
│   └── unit/utils/               ✅ Utility validation and filesystem tests
└── templates/                    📁 Reserved for future file templates and community templates
```

## Key Technologies

- **CLI Framework**: [Commander.js](https://github.com/tj/commander.js)
- **Interactive Prompts**: [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- **Folder Generation**: Custom `FolderStructureEngine` for directory-only scaffolding
- **File System**: Node.js `fs` with robust safety checks
- **Validation**: Joi-backed validation with clear error messages
- **Testing**: Jest with coverage across CLI, generator, template, and utility tests
- **Build**: TypeScript + ESLint for code quality and compile-time safety

## Folder Structure Definition Schema

```typescript
interface FolderStructure {
  id: string;
  name: string;
  description: string;
  framework: string;
  structure: string;
  directories: string[];
}
```

## Generation Process

1. **User Input** → CLI prompts or command flags
2. **Validation** → Project name, framework, structure, and path validation
3. **Template Lookup** → Find matching folder structure in `StructureRegistry`
4. **Safety Checks** → Prevent directory overwrite and verify permissions
5. **Folder Creation** → Generate the requested directory hierarchy
6. **Success Feedback** → Display the generated folder tree and next actions
