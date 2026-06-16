# Day-11: Angular Router & SPA Navigation — Student App

## Overview

This project is a multi-page Single Page Application (SPA) built with Angular Router. It demonstrates route configuration, template navigation, dynamic URL parameters, query strings, programmatic navigation, and child routes using Angular 21 (standalone architecture).

---

### Task 1: Project Setup & Routing Configuration

A lean `AppComponent` that imports `RouterOutlet`, `RouterLink`, and `RouterLinkActive` for navigation. The app is configured with `provideRouter()` and `provideClientHydration()` in `app.config.ts`.

- **Navbar** — renders navigation links: Home | About | Students
- Uses `routerLink` for client-side navigation (no page reloads)
- `routerLinkActive="active"` highlights the current page link
- `[routerLinkActiveOptions]="{ exact: true }"` used on Home to prevent false matches
- `<router-outlet>` in `app.html` as the rendering placeholder for all pages

**Key Concepts:**
- Standalone component architecture
- App configuration with `provideRouter()`
- Route definitions with redirect and wildcard (`**`) routes
- Lean root component design

---

### Task 2: Pages — Home, About & Students

Three standalone page components, each loaded by the router.

#### HomeComponent
- Landing page of the application
- Displays a welcome message

#### AboutComponent
- Describes the app and the training program context

#### StudentsComponent
- Displays a list of 5 students
- Each student name is a clickable `routerLink` navigating to `/students/:id`
- Contains a child `<router-outlet>` where `StudentDetailComponent` renders
- **Search feature (Bonus):** search box navigates to `/students?search=NAME`, filters the displayed list using `queryParams` subscription, and shows a "no results" message when no match is found

**Key Concepts:**
- Child routes with nested `<router-outlet>`
- `@for` control flow with `@empty` block
- `queryParams` subscription via `ActivatedRoute`
- Programmatic navigation with `Router.navigate()`

---

### Task 3: StudentDetailComponent — Dynamic Route Params

A standalone component that reads the student ID from the URL and displays it.

- Uses `ActivatedRoute.snapshot.paramMap.get('id')` to read `:id` from `/students/:id`
- Displays: **Viewing Student ID: X**
- **Go Back** button uses `Router.navigate(['/students'])` to return to the list

**Key Concepts:**
- Dynamic route parameters (`:id`)
- `ActivatedRoute` service
- Programmatic navigation

---

## Route Table

| Path | Component | Notes |
|------|-----------|-------|
| `/` | — | Redirects to `/home` |
| `/home` | `Home` | Landing page |
| `/about` | `About` | About page |
| `/students` | `Students` | Student list with search |
| `/students/:id` | `StudentDetail` | Child route — detail view |
| `**` | — | Redirects to `/home` |

---

## Project Structure

```
src/app/
├── app.ts                        # Root AppComponent (navbar + router-outlet)
├── app.html                      # Root template
├── app.css                       # Global navbar styles
├── app.config.ts                 # App providers (provideRouter, hydration)
├── app.routes.ts                 # Route definitions
├── app.routes.server.ts          # SSR render mode config
├── home/
│   ├── home.ts                   # HomeComponent
│   ├── home.html                 # Home page template
│   └── home.css                  # Home styles
├── about/
│   ├── about.ts                  # AboutComponent
│   ├── about.html                # About page template
│   └── about.css                 # About styles
├── students/
│   ├── students.ts               # StudentsComponent (list + search + child outlet)
│   ├── students.html             # Students page template
│   └── students.css              # Students styles
└── student-detail/
    ├── student-detail.ts         # StudentDetailComponent (reads :id, go back)
    ├── student-detail.html       # Detail view template
    └── student-detail.css        # Detail styles
```

---

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code Scaffolding

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

## Running Unit Tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
