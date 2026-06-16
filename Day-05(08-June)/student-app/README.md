# Day-05: Angular Pipes - Built-in Pipes & Pipe Chaining

## Overview

This project covers Angular pipes, one of the most powerful features for transforming data in templates. Learn how to use built-in pipes and master the art of chaining multiple pipes for complex transformations.

## Assignments

### Assignment 1: Built-in Pipe Explorer

Practice using all major built-in pipes in a real Angular component:
- **Date Pipe**: Multiple date formatting options
- **Currency Pipe**: Format prices in different currencies (INR, USD, EUR, GBP)
- **Text Transformation Pipes**: titlecase, uppercase, lowercase
- **Percent Pipe**: Format percentages with specific decimal places
- **Slice Pipe**: Extract portions of arrays and strings
- **JSON Pipe**: Debug complex objects
- **Pipe Chaining**: Combine multiple pipes for enhanced transformations

Create a `pipe-demo` component that implements all these pipes with the provided data.

### Assignment 2: Pipe Chaining Challenge

Master chaining multiple pipes to achieve complex transformations:
- **Title Transformation**: Trim whitespace → titlecase → slice with truncation indicator
- **Date Formatting Chain**: Format date → convert to uppercase
- **Content Truncation**: Slice characters → apply lowercase transformation
- **Tags Processing**: Array filtering with slice → uppercase transformation
- **Article Preview Card**: Build a complete template combining all chained pipe outputs

## Key Concepts

- **Built-in Pipes**: date, currency, percent, uppercase, lowercase, titlecase, slice, json
- **Pipe Syntax**: `{{ data | pipe:'params' }}`
- **Pipe Chaining**: `{{ data | pipe1:'param' | pipe2 | pipe3 }}`
- **Practical Application**: Real-world data transformation scenarios
- **Template Optimization**: Using pipes for display logic

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
