# Angular Corporate Guide Training & Internship

This repository contains comprehensive learning materials, practices, and projects for the **Corporate Guide Angular Training and Internship Program**.

## Overview

This repository serves as a central hub for all Angular training activities and internship projects. It includes:

- **Learning Practices**: Hands-on exercises and tutorials covering Angular fundamentals and advanced concepts
- **Projects**: Complete internship projects demonstrating real-world Angular application development
- **Training Materials**: Structured lessons organized by day/week for progressive learning

## Repository Structure

- **Day-01(02-June)/**: Introduction to Angular and foundational concepts
  - `student-app/`: First Angular application with basic setup and configuration
  - Learning: Angular CLI, project structure, development environment setup

- **Day-02(03-June)/**: TypeScript Fundamentals and Angular Component Basics
  - `student-app/`: Student application demonstrating component properties and interpolation
  - `Day-02-Assign.txt`: Assignment covering TypeScript variables, data types, interfaces, and Angular interpolation
  - Learning: TypeScript typing, variables (let/const), interfaces, component properties, data binding

- **Day-03(04-June)/**: Angular Components and Signals
  - `student-app/`: Student application with ProfileCard component
  - Features a custom `profile-card` component displaying user information and follower count
  - Implements Angular signals for reactive state management
  - Includes follow button with increment functionality
  - Learning: Component creation, signals, event handling, reactive programming

- **Day-04(Mock Test)/**: Mock Evaluation & Learning Summary
  - Comprehensive mock evaluation covering all concepts from Days 1–3
  - Assessment of Angular fundamentals, TypeScript proficiency, and component architecture
  - Review and consolidation of: Project setup, TypeScript typing, Components, Signals, Event handling
  - Serves as checkpoint before advancing to advanced Angular concepts

- **Day-05(08-June)/**: Angular Pipes — Built-in Pipes & Pipe Chaining
  - `student-app/`: Pipe demo application with advanced data transformation
  - Assignment 1: Built-in Pipe Explorer — date, currency, text transformation, percent, slice, and json pipes
  - Assignment 2: Pipe Chaining Challenge — master combining multiple pipes for complex transformations
  - Learning: Pipe syntax, chaining pipes, real-world data transformation, template optimization

- **Day-06(09-June)/**: @Component Decorator & Angular Lifecycle Hooks
  - `@Component` decorator — `selector`, `templateUrl`, `styleUrls`, `changeDetection`, `encapsulation`
  - All 8 lifecycle hooks and their execution order
  - `ngOnChanges()` — reacts to `@Input()` changes via `SimpleChanges`
  - `ngOnInit()` — data fetching, subscriptions, form setup (not constructor)
  - `ngDoCheck()` — custom change detection logic
  - `ngAfterContentInit()` / `ngAfterContentChecked()` — projected content via `ng-content`
  - `ngAfterViewInit()` — accessing `@ViewChild` and DOM references after view is ready
  - `ngAfterViewChecked()` — runs after every view change detection cycle
  - `ngOnDestroy()` — cleanup subscriptions, timers, event listeners; `takeUntil(destroy$)` pattern

- **Day-07(10-June)/**: NgModules & Modular Architecture
  - NgModules — `declarations`, `imports`, `providers`, `exports`, `bootstrap`
  - `AppModule` — root module, `BrowserModule`, `HttpClientModule`, lean shell pattern
  - Feature Modules — domain-driven modules, eager vs lazy loading
  - Lazy loading via `loadChildren` and `RouterModule.forChild()`
  - `SharedModule` — reusable components, directives, pipes; re-exports `CommonModule`
  - `CoreModule` — singleton services, duplicate-import guard pattern
  - `ng generate module` — `--route`, `--routing`, `--module`, `--flat`, `--dry-run` flags
  - `forRoot()` in `AppRoutingModule`, `forChild()` in all feature routing modules

- **Day-08(11-June)/**: Angular CLI Deep Dive — DevOps & Build Skills
  - `ng generate` — component, service, module, pipe, guard, interface with flags (`--flat`, `--skip-tests`)
  - `ng build` — dev vs production builds, `--watch`, `--stats-json`
  - `ng test` — Karma + Jasmine, code coverage, targeted test runs
  - Environment files — `environment.ts` vs `environment.prod.ts`, file replacements in `angular.json`
  - Production optimizations — minification, bundling, dead code elimination, AOT compilation
  - Tree Shaking — removes unused exports from the final bundle
  - Angular DevTools — component tree inspector, change detection profiler, `ng.getComponent()` in console
  - ESLint + Prettier — linting rules, auto-formatting, Husky pre-commit hooks

- **Day-09(Mock Test)/**: Mock Evaluation & Learning Summary
  - Comprehensive mock evaluation covering all concepts from Days 5–8
  - Assessment of NgModules, SharedModule design, custom directives & pipes, and lazy loading
  - Review and consolidation of: Feature modules, route-based code splitting, reusable component architecture
  - Serves as checkpoint before advancing to Angular Router and HTTP concepts

- **Day-10(15-June)/**: Angular Services & Dependency Injection
  - What services are, when to use them, and how they differ from components
  - `ng generate service` — auto-registered via `providedIn: 'root'`
  - `@Injectable` decorator — `providedIn` options: root, module-level, component-level
  - Dependency Injection — constructor injection, DI hierarchy (Root → Module → Component)
  - Singleton behaviour — one shared instance across the entire app
  - Service communication using `BehaviorSubject` and `Observable` for reactive data sharing
  - Hands-on build: `StudentService` with in-memory CRUD — `getStudents`, `getStudentById`, `addStudent`, `updateStudent`, `deleteStudent`

- **Day-11(16-June)/**: Angular Router & SPA Navigation
  - `student-app/`: Multi-page SPA with Home, About, and Students pages
  - Route configuration with `RouterModule`, `routerLink`, `routerLinkActive`, and `ActivatedRoute`
  - Dynamic route parameters (`/students/:id`) and query params (`?search=NAME`)
  - Programmatic navigation with `Router.navigate()` and a "Go Back" button
  - Nested/child routes with `<router-outlet>` in parent component
  - Learning: Route setup, SPA navigation, child routes, reading URL params and query strings

- **Day-12(17-June)/**: Angular Routing — Security & Performance
  - `student-app/`: Secure, lazy-loaded Angular application with route guards
  - `CanActivate` Auth Guard protecting the `/dashboard` route, redirecting unauthenticated users to `/login`
  - `CanDeactivate` guard on a form page — warns users before navigating away with unsaved changes
  - Lazy-loaded `StudentsModule` with child routes: `StudentListComponent` and `StudentDetailComponent`
  - Route Resolver (`StudentResolver`) pre-fetching student data before the detail page renders
  - Wildcard route (`**`) pointing to a custom `NotFoundComponent` (404 page)
  - Bonus: Role-based guard with `admin` and `student` roles, unauthorized access redirected to `/unauthorized`
  - Learning: `CanActivate`, `CanDeactivate`, lazy loading with `loadChildren`, route resolvers, wildcard routes

- **Day-13(18-June)/**: Angular Forms — Template-Driven & Reactive
  - Template-Driven Forms — `ngForm`, `ngModel`, two-way binding, `FormsModule`
  - Reactive Forms — `FormGroup`, `FormControl`, `FormBuilder`, `ReactiveFormsModule`
  - Built-in Validators — `required`, `minLength`, `maxLength`, `email`, `min`, `max`, `pattern`
  - Custom Validators — reusable `ValidatorFn` functions, group-level cross-field validators
  - Form Submission — `markAllAsTouched()`, validity check, displaying validation errors

- **Day-14(Mock Test)/**: Mock Evaluation & Learning Summary
  - Comprehensive mock evaluation covering all concepts from Days 10–13
  - Assessment of Services & DI, Angular Router, Route Guards, and Angular Forms
  - `Readme.md`: Detailed learning summary covering key topics and practical skills for Days 10–13
  - Serves as checkpoint before advancing to Angular HTTP Client concepts

- **Day-15(22-June)/**: Angular HTTP Client & REST API Integration
  - `HttpClientModule` — setup, `GET`, `POST`, `PUT`, `DELETE` with `HttpClient`
  - Consuming REST APIs — JSON Placeholder & mock API integration
  - Observable-based HTTP — subscribing, handling responses, `async` patterns
  - Error handling — `catchError`, `throwError`, `retry`, global `HttpInterceptor`
  - Type-safe HTTP — interfaces with `HttpClient` generics (`http.get<Todo[]>()`)

- **Day-16(23-June)/**: RxJS — Observables, Operators & Subscriptions
  - RxJS Fundamentals — `Observable`, `Observer`, `Subscription`
  - Core Operators — `map`, `filter`, `tap`, `switchMap`, `mergeMap`
  - `Subject` & `BehaviorSubject` — sharing state across components
  - `debounceTime` & `distinctUntilChanged` — search optimization
  - `combineLatest` & `forkJoin` — handling multiple streams

- **Day-17(24-June)/**: Angular HTTP Interceptors
  - HTTP Interceptors — what they are and how to register with `HTTP_INTERCEPTORS`
  - Adding auth token to all requests via interceptor
  - Global Error Interceptor — centralized error handling with `catchError`
  - Loading Spinner Interceptor — show/hide on HTTP calls
  - Testing Interceptors — unit test strategies

- **Day-18(25-June)/**: State Management Architecture
  - Angular Signals (`v17+`) — `signal()`, `computed()`, `effect()` core API
  - Component state with Signals vs Observables — when to use each
  - `BehaviorSubject` for shared service state across components
  - NgRx overview — Store, Actions, Reducers, Effects (concept)
  - Local state vs Global state — decision guide

---

**Note**: This repository is designed for the Corporate Guide Angular Training Program and serves as the primary resource for internship work and learning.
