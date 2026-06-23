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

- **Day-06(09-June)/**: Angular Component Lifecycle Hooks
  - `student-app/`: Lifecycle hooks demo application
  - Assignment 1: LifecycleLoggerComponent — implement all 8 lifecycle hooks with timestamping
  - Assignment 2: ParentChildComponent with ngOnChanges — detect input changes with visual feedback
  - Learning: Lifecycle hooks, `@Input` decorator, change detection, hook execution order

- **Day-07(10-June)/**: NgModules & Modular Architecture
  - `ecommerce-app/`: Mini e-commerce platform with modular architecture
  - Part 1: Project Setup & AppModule — lean root component with NavbarComponent and routing
  - Part 2: SharedModule with reusable ButtonComponent, BadgeComponent, SpinnerComponent, HighlightDirective, TruncateTextDirective, TruncatePipe, and RupeePipe
  - Learning: NgModules, SharedModule, feature modules, lazy loading, custom pipes & directives

- **Day-08(11-June)/**: *(Content coming soon)*

- **Day-09(Mock Test)/**: Mock Evaluation & Learning Summary
  - Comprehensive mock evaluation covering all concepts from Days 5–8
  - Assessment of NgModules, SharedModule design, custom directives & pipes, and lazy loading
  - Review and consolidation of: Feature modules, route-based code splitting, reusable component architecture
  - Serves as checkpoint before advancing to Angular Router and HTTP concepts

- **Day-10(15-June)/**: Angular Services & Dependency Injection
  - Learning: `@Injectable`, `providedIn: 'root'`, DI system, injecting services into components, separating business logic, service scope

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
  - `Assignment.md`: 5-question assignment covering Angular Forms in depth
  - `solutions/`: Complete solutions for all questions
    - `q1.md`: Written comparison of Template-Driven Forms vs Reactive Forms with real-world examples
    - `q2.component.ts/html`: Job Application Reactive Form — Full Name, Email, Years of Experience, Job Role with all validation messages
    - `q3.component.ts/html`: Custom `noProfanityValidator` (`ValidatorFn`) that returns `{ hasProfanity: true }` if the field contains `'badword'`
    - `q4.component.ts/html`: Demonstration of `markAllAsTouched()` with a complete `onSubmit()` method — checks validity, logs data on success, logs all control errors on failure
    - `q5.component.ts/html`: Extended Student Registration Form with a `minAgeValidator(16)` custom validator on Date of Birth and a Gender dropdown
  - Learning: `FormBuilder`, `FormGroup`, `FormControl`, built-in validators, custom `ValidatorFn`, `markAllAsTouched()`, reactive form patterns

- **Day-14(Mock Test)/**: Mock Evaluation & Learning Summary
  - Comprehensive mock evaluation covering all concepts from Days 10–13
  - Assessment of Services & DI, Angular Router, Route Guards, and Angular Forms
  - `Readme.md`: Detailed learning summary covering key topics and practical skills for Days 10–13
  - Serves as checkpoint before advancing to Angular HTTP Client concepts

- **Day-15(22-June)/**: Angular HTTP Client & REST API Integration
  - `Assignement.md`: 5 assignments covering Angular's HTTP layer end-to-end
  - `student-app/`: Full Angular app with standalone components, `provideHttpClient()`, and a global `HttpInterceptor`
  - Assignment 1: `DataService` with `GET`, `POST`, `PUT`, `DELETE` methods against `jsonplaceholder.typicode.com/todos`, custom `Content-Type` header
  - Assignment 2: Todo CRUD UI — list, load by ID, add via reactive form, delete; bonus login via `reqres.in`
  - Assignment 3: RxJS operators — `map`, `tap`, `filter`, real-time search, `takeUntil` unsubscription, bonus `switchMap` chaining users → todos
  - Assignment 4: Error handling — `handleError()` for `400/401/403/404/500`, `retry(2)`, user-friendly messages; bonus global functional `HttpInterceptorFn`
  - Assignment 5: Type-safe HTTP — `User`, `Todo`, `Post`, `Comment`, `Product` interfaces, generic service methods (`http.get<Todo[]>()`), bonus `Partial<User>` and `Omit<Todo,'id'>` utility types
  - Learning: `HttpClient`, `provideHttpClient()`, RxJS operators, error handling, type-safe generics, HTTP interceptors

---

**Note**: This repository is designed for the Corporate Guide Angular Training Program and serves as the primary resource for internship work and learning.
