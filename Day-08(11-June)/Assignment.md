# Assignment — Day 08

**Topic: Angular CLI Deep Dive — DevOps & Build Skills**

---

## Assignment 1: Multi-Environment Angular App with Production Build

- Create a new Angular project and set up three environments: `development`, `staging`, and `production`
- In each environment file define at least four properties: `production` flag, `apiUrl`, `appName`, and `logLevel`
- Create an `EnvironmentService` that reads from the environment file and exposes the config to components
- Build a `ConfigDashboard` component that displays all environment values using the service
- Run `ng build --configuration production` and document the bundle size difference vs development in a `README.md`
- Enable source maps for production (`sourceMap: true` in `angular.json`) and verify the build output in `dist/`
- Take a screenshot of the Angular DevTools component tree and include it in the `README.md`

**Bonus:** Add `webpack-bundle-analyzer` and generate a visual report of your production bundle

---

## Assignment 2: Code Quality Enforcer — ESLint + Prettier + Pre-Commit Hooks

- Add ESLint to an existing or new Angular project using `ng add @angular-eslint/schematics`
- Customize `.eslintrc.json` with at least five custom rules (e.g. `no-console` as error, explicit return types, component selector prefix)
- Install Prettier and configure `.prettierrc` with your team's preferred style (`singleQuote`, `printWidth`, `trailingComma`, etc.)
- Intentionally introduce five linting violations and five formatting errors into a component, then fix them using `ng lint --fix` and `prettier --write`
- Set up Husky pre-commit hooks so that `ng lint` and `prettier --check` run automatically before every commit
- Add `lint-staged` to only lint and format files that are staged for commit, not the entire project
- Create a GitHub Actions CI workflow file (`.github/workflows/ci.yml`) that runs `ng lint`, `ng test`, and `ng build --configuration production` on every push

**Bonus:** Integrate `eslint-plugin-sonarjs` for deeper code quality analysis
