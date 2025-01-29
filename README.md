# Next.js + Tailwind CSS + Turbopack + TypeScript + EsLint + Prettier + Husky + Lint-Staged + CommitLint Starter kit

## Features

- 🟦 **TypeScript** — for type-safe JavaScript.
- 🎨 **Tailwind CSS** — for utility-first styling.
- 🛠️ **ESLint** — to maintain code quality and consistency.
- ✨ **Prettier** — for consistent code formatting.
- 🔖 **Commitlint** — to enforce conventional commit messages.
- 🚫 **lint-staged** — to run linters on git-staged files.
- 🐶 **Husky** — to manage Git hooks.
- 📜 **Conventional Commit** — to standardize commit messages.

## Getting Started

### 1. Install Dependencies

```bash
cd next-starter
yarn

or

npm i

or
pnpm install
```

### 2. Run the Development Server

Start the development server with:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open http://localhost:3000 in your browser to view the app.

# Commit Message Guidelines

This project follows the **Conventional Commits** standard to ensure consistent and readable commit history. Each commit message should follow the structure below:

### Commit Message Format

- **type**: Describes the category of the change. Examples include `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, and `build`.
- **scope** (optional): Clarifies what part of the codebase the change affects, such as `api`, `ui`, `auth`, etc.
- **subject**: A short, imperative description of the change, explaining what the commit does (e.g., `add login form validation`).

### Commit Types

| Type       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `feat`     | Adds a new feature                                            |
| `fix`      | Fixes a bug                                                   |
| `docs`     | Documentation changes                                         |
| `style`    | Code style updates (formatting, missing semi-colons, etc.)    |
| `refactor` | Code refactoring without adding features or fixing bugs       |
| `test`     | Adding or updating tests                                      |
| `chore`    | General maintenance tasks, not affecting source code or tests |
| `ci`       | CI/CD changes                                                 |
| `perf`     | Performance improvement                                       |
| `revert`   | Revert a previous commit                                      |
| `build`    | Changes affecting the build system or dependencies            |

### Additional Rules

- Keep the **subject line** to 50 characters or fewer.
- Use the **imperative mood** in the subject line (e.g., "add" not "adding").
- Capitalize the **type** and **scope** consistently (prefer lowercase).
- Avoid ending the **subject line** with a period.

By following these guidelines, the commit history will be clear, organized, and easy to understand.

### Examples

- **Feature**: `feat(auth): Add user registration flow`
- **Bug Fix**: `fix(ui): Resolve button alignment issue on mobile`
- **Chore**: `chore(deps): Update eslint to latest version`
- **Documentation**: `docs(readme): Update setup instructions`

### Examples

```bash
# Example commands for committing
git commit -m "feat(auth): add user registration flow"
git commit -m "fix(ui): resolve button alignment issue on mobile"
git commit -m "chore(deps): update eslint to latest version"
git commit -m "docs(readme): update setup instructions"
```
