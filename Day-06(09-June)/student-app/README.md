# Day-06: Angular Component Lifecycle Hooks

## Overview

This project covers Angular component lifecycle hooks - the critical points in a component's lifecycle where you can perform initialization, detection of changes, and cleanup operations.

### Assignment 1: LifecycleLoggerComponent (20 pts)

Create a standalone Angular component named **LifecycleLoggerComponent**. Implement all 8 lifecycle hook interfaces:
- OnInit
- OnChanges
- DoCheck
- AfterContentInit
- AfterContentChecked
- AfterViewInit
- AfterViewChecked
- OnDestroy

In each hook, push an entry into a logs array containing the hook name and a timestamp (use `new Date().toISOString()`). Render the logs array in the template. Observe the order in which hooks fire by clicking a button in the parent to change an @Input() and toggle the child with *ngIf.

**Key Concepts:**
- All 8 lifecycle hooks
- Hook execution order
- Timestamp tracking
- Component toggling with *ngIf

---

### Assignment 2: ParentChildComponent with ngOnChanges() (15 pts)

Create a **ParentComponent** with a counter property and two buttons: Increment and Decrement. Pass the counter to a **ChildComponent** via @Input() counter.

In the ChildComponent, implement ngOnChanges() to detect changes to the counter input. Log both the previous and current values using SimpleChanges. Add a visual indicator (CSS class) that flashes green when the value increases and red when it decreases.

**Key Concepts:**
- @Input decorator
- ngOnChanges lifecycle hook
- SimpleChanges API
- Change detection
- CSS visual feedback


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
