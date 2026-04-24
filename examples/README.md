# Skaflo Usage Examples

This directory contains real-world usage examples and demonstrations of Skaflo's folder structure generation capabilities.

## 📁 Example Outputs

### React Feature-based Structure

Generated with: `skaflo create my-saas-app --framework react --structure feature-based`

```
my-saas-app/
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

**Perfect for**: Large applications with multiple features like SaaS platforms, e-commerce sites, or complex web applications.

### React Component-based Structure

Generated with: `skaflo create my-design-system --framework react --structure component-based`

```
my-design-system/
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

**Perfect for**: Component libraries, design systems, smaller applications, or projects with traditional React organization.

## 🎯 Common Use Cases

### 1. Starting a New SaaS Application

```bash
# Interactive mode (recommended)
skaflo create my-saas

# You'll be prompted to choose:
# ✓ Framework: React
# ✓ Structure: Feature-based
# ✓ Location: ./my-saas

# Result: 37 organized folders ready for your authentication,
# dashboard, billing, and other feature development
```

### 2. Creating a Component Library

```bash
# Non-interactive mode
skaflo create design-system --framework react --structure component-based

# Result: 25 folders optimized for component development,
# with clear separation between UI components, utilities, and tests
```

### 3. Preview Before Creating

```bash
# See the structure first
skaflo preview --framework react --structure feature-based

# When you're satisfied, create it
skaflo create my-project --framework react --structure feature-based
```

### 4. Check Available Options

```bash
# List all available templates
skaflo list

# Output shows:
# React Templates:
#   - feature-based: Feature-driven architecture (37 folders)
#   - component-based: Traditional component organization (25 folders)
# Express Templates:
#   - layered: Layered architecture with clean separation
#   - mvc: Model-View-Controller structure
#   - feature-based: Domain-driven feature architecture
#   - typescript: TypeScript-friendly Express architecture
# NestJS Templates:
#   - modular: Modular NestJS structure with shared modules
```

## 💡 Pro Tips

### Organizing Your Features

When using the **feature-based** structure, organize your features by domain:

```
src/features/
├── auth/          # Authentication & user management
├── dashboard/     # Main dashboard functionality
├── billing/       # Payment & subscription features
├── analytics/     # Data visualization & reports
├── settings/      # User & application settings
├── notifications/ # Push notifications & alerts
└── profile/       # User profile management
```

### Component Organization

With the **component-based** structure, organize by component type:

```
src/components/
├── ui/            # Basic UI components (Button, Input, Modal)
├── forms/         # Form-specific components (LoginForm, ContactForm)
├── layout/        # Layout components (Header, Sidebar, Footer)
└── common/        # Shared components used across features
```

### Testing Structure

Both structures include organized test folders:

```
tests/
├── components/    # Component unit tests
├── hooks/         # Custom hooks tests
├── services/      # API & service tests
├── utils/         # Utility function tests
├── fixtures/      # Test data & fixtures
├── helpers/       # Test helper functions
├── mocks/         # Mock implementations
└── setup/         # Test configuration
```

## 🚀 Quick Start Workflow

1. **Decide on your architecture**:
   - Large app with multiple features? → `feature-based`
   - Component library or smaller app? → `component-based`

2. **Generate the structure**:

   ```bash
   skaflo create my-project --framework react --structure feature-based
   ```

3. **Start building**:
   - Add your `package.json` with preferred dependencies
   - Create your first component files in the appropriate folders
   - Set up your build tools (Vite, Create React App, etc.)

4. **Maintain organization**:
   - Keep features self-contained in feature-based structure
   - Group similar components together in component-based structure
   - Use the `shared/` directory for cross-cutting concerns

## ❓ FAQ

**Q: Can I modify the folder structure after generation?**  
A: Absolutely! Skaflo creates the initial structure, but you have complete control to add, remove, or reorganize folders as your project evolves.

**Q: What if I need additional folders?**  
A: Simply create them! The generated structure is a starting point. Add folders like `docs/`, `scripts/`, or feature-specific folders as needed.

**Q: Can I use this with existing projects?**  
A: Yes, but be careful. Skaflo won't overwrite existing directories, but it will create new ones. Consider generating in a temporary location first and manually copying the structure you need.

**Q: Why no files?**  
A: Skaflo focuses on organization, not opinions. You choose your own:

- Build tools (Vite, Webpack, etc.)
- Package manager (npm, yarn, pnpm)
- Testing framework (Jest, Vitest, etc.)
- Linting setup (ESLint config)
- Dependencies and versions

This gives you a clean foundation without any assumptions about your preferences or requirements.

---

## 🔄 What's Next?

As you use Skaflo, consider:

1. **Documenting your patterns**: Create internal documentation about how your team uses each folder
2. **Team templates**: Once we support custom templates, you can define organization-specific structures
3. **Feedback**: Let us know what folder structures would be helpful for your projects!

**Happy building! 🚀**
