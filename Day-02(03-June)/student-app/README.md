# StudentApp - Day 02: TypeScript Fundamentals & Angular Components

This project demonstrates TypeScript fundamentals and basic Angular component concepts including property binding and interpolation.

## Learning Objectives

- ✅ Declare and use TypeScript variables with appropriate data types (string, number, boolean)
- ✅ Understand the difference between `let` and `const` keywords
- ✅ Create TypeScript interfaces for type safety
- ✅ Use Angular component properties
- ✅ Implement template interpolation using {{ }} syntax

## Project Structure

The application includes:
- **Component Properties**: Variables defined in the App component (studentID, studentName, studentBranch, age, city)
- **Template Interpolation**: Display component properties in the HTML template using `{{ }}`
- **TypeScript Types**: Demonstrates string, number, and boolean data types

## Key Concepts Covered

### 1. Variable Declaration
```typescript
let studentID: String = "STU01";
const studentRollNumber: String = "ROLL01";
```

### 2. TypeScript Interfaces
```typescript
interface Student {
  id: String;
  name: String;
  branch: String;
  age: Number;
}
```

### 3. Angular Interpolation
Display component properties in templates using `{{ }}`:
```html
<h2>{{studentID}}</h2>
<h2>{{studentName}}</h2>
```

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
