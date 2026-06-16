# Day-07: NgModules & Modular Architecture — E-Commerce App

## Overview

This project is a modular Angular application for a mini e-commerce platform. It demonstrates proper use of NgModules, feature modules, SharedModule, and lazy loading using Angular 21 (standalone architecture).

### Part 1: Project Setup & AppModule (15 pts)

A lean `AppComponent` that only imports the `NavbarComponent` and `RouterOutlet`. The app is configured with `provideRouter()`, `provideHttpClient()`, and `provideClientHydration()` in `app.config.ts`.

- **NavbarComponent** — renders navigation links: Home | Products | Orders | Cart
- Uses `RouterLink` for client-side navigation
- `HttpClientModule` equivalent configured via `provideHttpClient()`
- `BrowserModule` equivalent configured only at the root level

**Key Concepts:**
- Standalone component architecture
- App configuration with providers
- Router setup and navigation
- Lean root component design

---

### Part 2: SharedModule with Components, Directives & Pipes (25 pts)

A `SharedModule` (`NgModule`) that groups and re-exports reusable UI building blocks. Since Angular 21 generates standalone components by default, all items are placed in `imports` and `exports` (not `declarations`).

#### 2a. Components (10 pts)
- **ButtonComponent** — accepts `@Input() variant: 'primary' | 'secondary' | 'danger'` with styled variants
- **BadgeComponent** — accepts `@Input() label: string` and `@Input() color: string` for colored badges
- **SpinnerComponent** — displays a pure CSS loading animation (no external libraries)

#### 2b. Directives (8 pts)
- **HighlightDirective** — highlights element background on `mouseenter` with configurable `@Input() color`
- **TruncateTextDirective** — truncates `innerText` of an element to `@Input() maxChars` characters

#### 2c. Pipes (7 pts)
- **TruncatePipe** — `{{ text | truncate:50:'...' }}` — truncates string at a given character limit
- **RupeePipe** — `{{ price | rupee }}` — formats a number as Indian Rupee: ₹1,25,000

**Key Concepts:**
- NgModule for grouping shared functionality
- Re-exporting CommonModule, FormsModule, ReactiveFormsModule
- Custom components, directives, and pipes
- Standalone items inside NgModule (imports/exports pattern)

---

## Project Structure

```
src/app/
├── app.ts                    # Root AppComponent
├── app.html                  # Root template (navbar + router-outlet)
├── app.config.ts             # App providers configuration
├── app.routes.ts             # Route definitions
├── navbar/
│   ├── navbar.ts             # NavbarComponent
│   └── navbar.html           # Navigation links
└── shared/
    ├── shared-module.ts      # SharedModule (NgModule)
    ├── components/
    │   ├── button/           # ButtonComponent
    │   ├── badge/            # BadgeComponent
    │   └── spinner/          # SpinnerComponent
    ├── directives/
    │   ├── highlight.ts      # HighlightDirective
    │   └── truncate-text.ts  # TruncateTextDirective
    └── pipes/
        ├── truncate-pipe.ts  # TruncatePipe
        └── rupee-pipe.ts     # RupeePipe
```

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
