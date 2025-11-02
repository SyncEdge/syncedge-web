# SyncEdge Web - Development Setup

This project is fully configured with modern development tools and quality checks.

## Tools Installed

### 1. Vite

- Fast build tool and dev server
- Version: 6.4.1
- Run dev server: `npm run dev`

### 2. TypeScript

- Static type checking
- Version: 5.9.3
- Check types: `npm run type-check`

### 3. ESLint

- Code linting with TypeScript and React support
- Integrated with Prettier
- Run linting: `npm run lint`
- Auto-fix issues: `npm run lint:fix`

### 4. Prettier

- Code formatting
- Format all files: `npm run format`
- Check formatting: `npm run format:check`
- Configuration: `.prettierrc`

### 5. vite-plugin-checker

- Real-time TypeScript and ESLint checking during development
- Displays errors in the browser overlay
- Configured in `vite.config.ts`

### 6. Vitest

- Testing framework with React Testing Library
- Run tests: `npm run test`
- Run tests with UI: `npm run test:ui`
- Run tests once: `npm run test:run`
- Coverage report: `npm run test:coverage`
- Configuration: `vitest.config.ts`

### 7. Husky

- Git hooks management
- Pre-commit hook runs lint-staged automatically
- Configuration: `.husky/` directory

### 8. lint-staged

- Run linters on staged files only
- Configured in `package.json`
- Runs automatically before each commit

## Available Scripts

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start development server       |
| `npm run build`         | Build for production           |
| `npm run preview`       | Preview production build       |
| `npm run lint`          | Run ESLint                     |
| `npm run lint:fix`      | Fix ESLint issues              |
| `npm run format`        | Format all files with Prettier |
| `npm run format:check`  | Check if files are formatted   |
| `npm run type-check`    | Check TypeScript types         |
| `npm run test`          | Run tests in watch mode        |
| `npm run test:ui`       | Run tests with UI              |
| `npm run test:run`      | Run tests once                 |
| `npm run test:coverage` | Generate coverage report       |

## Pre-commit Checks

When you commit changes, the following checks run automatically:

- ESLint auto-fix on `.ts` and `.tsx` files
- Prettier formatting on all supported files

## Development Workflow

1. Start the dev server: `npm run dev`
2. Make your changes (TypeScript and ESLint errors will show in the browser)
3. Run tests: `npm run test`
4. Commit your changes (pre-commit hooks will run automatically)
5. Build for production: `npm run build`

## Testing

Tests are located in files with `.test.ts` or `.test.tsx` extensions.

Example test structure:

```typescript
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders app', () => {
  render(<App />)
  expect(screen.getByText(/Vite/i)).toBeInTheDocument()
})
```

## Configuration Files

- `vite.config.ts` - Vite configuration with checker plugin
- `vitest.config.ts` - Vitest testing configuration
- `eslint.config.js` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier formatting rules
- `.prettierignore` - Files to ignore for Prettier
- `.husky/pre-commit` - Pre-commit hook configuration
- `package.json` - Contains lint-staged configuration

## Notes

- All tools are configured to work together seamlessly
- The vite-plugin-checker provides real-time feedback during development
- Pre-commit hooks ensure code quality before commits
- TypeScript strict mode is enabled for better type safety
