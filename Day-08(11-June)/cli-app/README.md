# Day-08: Angular CLI Deep Dive — cli-app

## Overview

This project demonstrates Angular CLI build skills through 2 assignments. It covers setting up multi-environment configurations, reading environment values through a service, displaying them in a `ConfigDashboard` component, and setting up a full code quality pipeline with ESLint, Prettier, and a GitHub Actions CI workflow. The app uses Angular standalone component architecture.

---

## Assignment 1: Multi-Environment App with Production Build

**Route:** `/` | **Component:** `ConfigDashboardComponent` | **Service:** `EnvironmentService`

Three environment files are configured — each with four properties: `production`, `apiUrl`, `appName`, `logLevel`.

| Environment | File | API URL | Log Level |
|---|---|---|---|
| Development | `environment.ts` | `localhost:3000/api` | `debug` |
| Staging | `environment.staging.ts` | `staging-api.myapp.com` | `warn` |
| Production | `environment.prod.ts` | `api.myapp.com` | `error` |

- `EnvironmentService` reads from the active environment file and exposes all config values to components
- `ConfigDashboardComponent` displays all 4 environment properties in a table
- Environment badge shows `DEVELOPMENT` (green) or `PRODUCTION` (red) based on the `production` flag
- `fileReplacements` configured in `angular.json` for `staging` and `production` configurations
- `sourceMap: true` enabled in production build for debugging

**Build commands:**
```bash
ng build                              # development (default)
ng build --configuration staging      # staging
ng build --configuration production   # production
```

**Key Concepts:**
- `environment.ts` / `environment.prod.ts` / `environment.staging.ts`
- `fileReplacements` in `angular.json` for automatic file swapping
- `EnvironmentService` as a clean abstraction over environment files
- `sourceMap: true` in production for DevTools debugging

---

## Assignment 2: Code Quality — ESLint + Prettier + CI

**Files:** `.eslintrc.json`, `.prettierrc`, `.github/workflows/ci.yml`

Full code quality pipeline set up for the project.

- `.eslintrc.json` — five custom rules: `no-console` as warn, explicit function return types, no unused vars, component selector prefix `app`, directive selector prefix `app`
- `.prettierrc` — `singleQuote`, `semi`, `tabWidth: 2`, `printWidth: 80`, `trailingComma: es5`
- `.github/workflows/ci.yml` — GitHub Actions workflow that runs on every push: installs deps → `ng lint` → `prettier --check` → `ng test` → `ng build --configuration production`

**Commands:**
```bash
ng lint              # run ESLint
ng lint --fix        # auto-fix fixable issues
npx prettier --write "src/**/*.{ts,html,css}"   # format all files
npx prettier --check "src/**/*.{ts,html,css}"   # check formatting
```

**Key Concepts:**
- `@angular-eslint/schematics` for Angular-aware linting
- Prettier as a code formatter separate from ESLint
- GitHub Actions CI for automated quality checks on every push

---

## Project Structure

```
cli-app/
├── .eslintrc.json                          # Assignment 2 — ESLint rules
├── .prettierrc                             # Assignment 2 — Prettier config
├── .github/workflows/ci.yml               # Assignment 2 — CI pipeline
├── angular.json                            # staging + production configurations
├── src/
│   ├── environments/
│   │   ├── environment.ts                  # Development config
│   │   ├── environment.staging.ts          # Staging config
│   │   └── environment.prod.ts             # Production config
│   └── app/
│       ├── app.ts                          # Root standalone component
│       ├── app.routes.ts                   # Route definitions
│       ├── services/
│       │   └── environment.ts              # EnvironmentService
│       └── components/
│           └── config-dashboard/           # ConfigDashboardComponent
```

---

## Development Server

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

## Building

```bash
ng build                              # development
ng build --configuration production   # production (with file replacement)
```

Build artifacts are stored in the `dist/` directory.

## Additional Resources

- [Angular Environment Configuration](https://angular.dev/tools/cli/environments)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint)
- [Prettier](https://prettier.io/docs/en/)
- [GitHub Actions](https://docs.github.com/en/actions)
