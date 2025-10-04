# Repository Settings Configuration

# This file documents the recommended branch protection rules

# These should be configured in GitHub repository settings

## Branch Protection Rules for 'main'

### Required Status Checks

- [x] Require status checks to pass before merging
- [x] Require branches to be up to date before merging

#### Required Status Checks:

- `lint` (CI workflow)
- `test (18.x)` (CI workflow)
- `test (20.x)` (CI workflow)
- `build` (CI workflow)
- `security-audit` (CI workflow)
- `type-check` (CI workflow)
- `all-checks` (CI workflow)

### Pull Request Requirements

- [x] Require pull requests before merging
- [x] Require approvals: 1
- [x] Dismiss stale reviews when new commits are pushed
- [x] Require review from code owners (when CODEOWNERS file exists)

### Additional Restrictions

- [x] Restrict pushes that create public repos
- [x] Include administrators in these restrictions
- [x] Allow force pushes: NO
- [x] Allow deletions: NO

## Auto-merge Settings

- [x] Allow auto-merge for pull requests
- Merge method: Squash and merge (preferred)
- Delete head branches: YES

## Recommended Repository Settings

### General

- [x] Enable issues
- [x] Enable projects
- [x] Enable wiki
- [x] Enable discussions

### Security

- [x] Enable Dependabot alerts
- [x] Enable Dependabot security updates
- [x] Enable Dependabot version updates

### Branch Settings

- Default branch: `main`
- Automatically delete head branches: YES
