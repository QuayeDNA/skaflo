# Contributing to Skaflo

Thank you for your interest in contributing to Skaflo! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher (recommended)
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/skaflo.git
   cd skaflo
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Workflow

```bash
# Run in development mode
pnpm dev

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Build project
pnpm build
```

## 🔧 Project Structure

```text
skaflo/
├── src/
│   ├── cli/                 # CLI commands and prompts
│   ├── generators/          # Folder structure generators
│   ├── templates/           # Template definitions and registry
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── templates/               # Template folder structures (JSON)
├── tests/                   # Test files
│   └── unit/               # Unit tests
├── docs/                   # Documentation
├── .github/                # GitHub workflows and templates
└── examples/               # Usage examples
```

## 📝 Pull Request Process

### Before Submitting

1. **Run all checks locally**:

   ```bash
   pnpm lint && pnpm test && pnpm build
   ```

2. **Update documentation** if needed
3. **Add tests** for new features
4. **Follow commit message conventions**

### Commit Message Format

Use conventional commit format:

```text
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```text
feat(cli): add interactive project structure selection
fix(validation): resolve project name validation edge case
docs(readme): update installation instructions
test(utils): add unit tests for file system utilities
```

### Pull Request Requirements

#### Automated Checks ✅

All PRs must pass these CI checks:

- **Linting**: ESLint code quality checks
- **Testing**: Jest unit tests (Node.js 18.x, 20.x)
- **Build**: TypeScript compilation
- **Type Check**: TypeScript type validation
- **Security Audit**: Dependency vulnerability scan

#### Code Review Requirements

- [ ] At least 1 approving review from maintainers
- [ ] All CI checks passing
- [ ] Branch is up-to-date with base branch
- [ ] No merge conflicts
- [ ] Documentation updated (if applicable)

### Quality Standards

#### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for formatting
- Write descriptive variable and function names
- Add JSDoc comments for public APIs

#### Testing

- Write unit tests for new features
- Maintain or improve test coverage
- Test both happy path and edge cases
- Use descriptive test names

#### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new functions
- Update type definitions
- Include examples in documentation

## 🎯 Contribution Areas

### High Priority

1. **Template Implementation**: React, Next.js, Express templates
2. **File Generation**: Template rendering and project scaffolding
3. **CLI Enhancements**: Additional command options
4. **Testing**: Expand test coverage

### Medium Priority

1. **Documentation**: Improve examples and guides
2. **Error Handling**: Better error messages and recovery
3. **Performance**: Optimize file operations
4. **Validation**: Enhanced input validation

### Future Enhancements

1. **New Frameworks**: Vue.js, Svelte, etc.
2. **Advanced Features**: Custom templates, plugins
3. **Integrations**: VS Code extension, GitHub integration

## 🚨 Issue Reporting

### Bug Reports

When reporting bugs, please include:

- **Environment**: OS, Node.js version, pnpm version
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Error messages** or screenshots
- **Additional context**

### Feature Requests

For feature requests, please provide:

- **Use case**: Why is this feature needed?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other approaches
- **Additional context**: Examples, mockups, etc.

## 📋 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Be constructive** in feedback
- **Focus on the code**, not the person
- **Help others learn** and grow
- **Celebrate contributions** of all sizes

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal attacks
- Publishing private information
- Other unprofessional conduct

## 🎉 Recognition

Contributors are recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Special mentions for exceptional contributions

## 🤝 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community chat
- **Email**: For security issues or private matters

## 📄 License

By contributing to Skaflo, you agree that your contributions will be licensed under the same license as the project (MIT).

---

Thank you for contributing to Skaflo! 🎉
