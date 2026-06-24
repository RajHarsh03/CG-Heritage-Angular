# Day-13: Angular Forms — Reactive Forms & Custom Validators

## Overview

This project demonstrates Angular Reactive Forms through 4 assignment questions (Q2–Q5). It covers building forms with `FormBuilder`, applying built-in validators, writing custom `ValidatorFn` functions, using `markAllAsTouched()` for submission handling, and extending a Student Registration Form with a custom age validator and a gender dropdown. The app uses Angular standalone component architecture.

---

## Q2: Job Application Form

**Route:** `/q2` | **Component:** `Q2Component`

A Reactive Form for a job application with 4 fields and full inline validation messages.

- `fullName` — required, min 3 characters
- `email` — required, valid email format
- `yearsOfExperience` — required, `min(0)`, `max(40)`
- `jobRole` — required
- All error messages shown inline in the template
- `markAllAsTouched()` called on submit to reveal all errors at once

**Key Concepts:**
- `FormBuilder.group()` with multiple validators per field
- Convenience getter `get f()` for clean template access
- Displaying errors with `*ngIf` and `errors?.['key']`

---

## Q3: Custom Validator — noProfanityValidator

**Route:** `/q3` | **Component:** `Q3Component`

Demonstrates writing and attaching a custom `ValidatorFn`.

- `noProfanityValidator()` — returns `{ hasProfanity: true }` if the value contains `'badword'`, otherwise returns `null`
- Attached to the `comment` `FormControl` in the validators array
- Error message shown when `hasProfanity` fires, success feedback when valid and dirty

**Key Concepts:**
- `ValidatorFn` signature — `(control: AbstractControl) => ValidationErrors | null`
- Attaching custom validators alongside built-in ones
- Exporting validators as reusable standalone functions

---

## Q4: markAllAsTouched() & onSubmit()

**Route:** `/q4` | **Component:** `Q4Component`

Demonstrates the correct pattern for form submission.

- `markAllAsTouched()` — forces all controls into the touched state so every error message becomes visible, even if the user skipped a field
- `onSubmit()` handles all 3 cases: marks touched → checks validity → logs data on success → logs each control's errors on failure
- Submission status displayed in the template: success (green) or error (red)

**Key Concepts:**
- Why `markAllAsTouched()` is essential in `onSubmit()`
- Iterating `Object.keys(form.controls)` to log all errors
- `submissionStatus` flag for UI feedback

---

## Q5: Extended Student Registration Form

**Route:** `/q5` | **Component:** `Q5Component`

Extends the Student Registration Form with two new required fields.

- Original fields: `firstName`, `lastName`, `email`, `course` — all required
- `dateOfBirth` — required + `minAgeValidator(16)` — returns `{ minAge: { required, actual } }` if under 16; accounts for whether the birthday has occurred yet this year
- `gender` dropdown — required, options: `Male`, `Female`, `Prefer not to say`

**Key Concepts:**
- Parameterised validator factory — `minAgeValidator(n): ValidatorFn`
- Date arithmetic for accurate age calculation
- Combining built-in and custom validators on the same control
- `select` dropdown with `formControlName`

---

## Route Table

| Path | Component | Notes |
|---|---|---|
| `/` | — | Redirects to `/q2` |
| `/q2` | `Q2Component` | Job Application Form |
| `/q3` | `Q3Component` | Custom profanity validator |
| `/q4` | `Q4Component` | markAllAsTouched + onSubmit |
| `/q5` | `Q5Component` | Extended Student Registration |

---

## Project Structure

```
src/app/
├── app.ts                  # Root standalone component (navbar + router-outlet)
├── app.html                # Root template
├── app.css                 # Global navbar styles
├── app.config.ts           # provideRouter
├── app.routes.ts           # Route definitions
├── q2.component.ts/html    # Job Application Reactive Form
├── q3.component.ts/html    # noProfanityValidator demo
├── q4.component.ts/html    # markAllAsTouched + onSubmit demo
└── q5.component.ts/html    # Extended Student Registration with minAgeValidator
```

---

## Development Server

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

## Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Additional Resources

- [Angular Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
- [Angular Custom Validators](https://angular.dev/guide/forms/form-validation#defining-custom-validators)
- [Angular CLI Overview](https://angular.dev/tools/cli)
