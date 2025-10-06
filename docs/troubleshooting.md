# Troubleshooting

## Common Issues

### Permission Errors

**Error:** `EACCES: permission denied`

**Solution:**

- Ensure you have write permissions in the target directory
- On Unix systems, you may need to use `sudo` or change ownership
- On Windows, run your terminal as Administrator

### Directory Already Exists

**Error:** `Directory already exists`

**Solution:**

- Choose a different project name
- Use `skaflo create` without a name to scaffold into current directory
- Delete or rename the existing directory

### Invalid Framework/Structure

**Error:** `Invalid framework or structure specified`

**Solution:**

- Use `skaflo list` to see available options
- Currently supported: `--framework react --structure feature-based|component-based`

### Node.js Version Issues

**Error:** `Node.js version X.X.X is not supported`

**Solution:**

- Upgrade to Node.js 18.0.0 or higher
- Check your version with `node --version`

### PNPM Issues

**Error:** `pnpm command not found`

**Solution:**

- Install PNPM globally: `npm install -g pnpm`
- Or use NPM instead: `npm install -g skaflo`

## CLI Commands Not Working

### Command not found

```bash
# Install globally
pnpm add -g skaflo
# or
npm install -g skaflo

# Verify installation
skaflo --version
```

### Old version cached

```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install -g skaflo
```

## Development Issues

### Tests failing

```bash
# Run tests with verbose output
pnpm test --verbose

# Run specific test
pnpm test -- test-name
```

### Build failing

```bash
# Clean and rebuild
pnpm build:clean

# Check TypeScript errors
pnpm typecheck
```

### Linting errors

```bash
# Fix automatically
pnpm lint:fix

# Check manually
pnpm lint
```

## Getting Help

If you encounter an issue not covered here:

1. Check the [GitHub Issues](https://github.com/QuayeDNA/skaflo/issues) for similar problems
2. Create a new issue with:
   - Your OS and Node.js version
   - The exact command you ran
   - The full error message
   - Steps to reproduce

## FAQ

**Q: Can I use Skaflo with Yarn?**
A: Yes, but PNPM is recommended. Use `yarn global add skaflo` if needed.

**Q: Does Skaflo work on Windows?**
A: Yes, Skaflo works on Windows, macOS, and Linux.

**Q: Can I customize the folder structures?**
A: Not yet, but this is planned for future versions. See the roadmap for details.

**Q: Why no file generation?**
A: Skaflo focuses on folder structure only, giving you complete control over your files and dependencies.
