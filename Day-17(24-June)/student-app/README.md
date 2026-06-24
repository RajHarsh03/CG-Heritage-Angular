# Day-17: Angular HTTP Interceptors — Student App

## Overview

This project demonstrates Angular HTTP Interceptors through 2 assignments. It covers registering interceptors, logging outgoing requests and responses, timing HTTP calls, handling errors globally with user-friendly toast messages, and tracking all caught errors on a debug page. The app uses Angular standalone component architecture with functional `HttpInterceptorFn` registered via `provideHttpClient(withInterceptors([...]))`.

---

### Assignment 1: Logging & Timing Interceptors

**Route:** `/posts` | **Component:** `Posts`

Demonstrates the basics of HTTP interceptors — every outgoing request and incoming response is intercepted and logged.

- `LoggingInterceptor` — logs the HTTP method and URL of every outgoing request, and the response status code when the response arrives
- `TimingInterceptor` (Bonus) — records the start time before the request and logs how many milliseconds the call took when the response arrives
- Both interceptors are registered in `app.config.ts` via `withInterceptors([])`
- A **Fetch Posts** button makes a `GET /posts?_limit=10` call — open the browser console to see the logs

**Key Concepts:**
- `HttpInterceptorFn` — functional interceptor style (Angular 15+)
- `withInterceptors()` inside `provideHttpClient()`
- `tap()` operator to peek at `HttpResponse` events without modifying them
- Interceptor chaining — multiple interceptors run in registration order

---

### Assignment 3: Global Error Interceptor

**Route:** `/posts` (error triggers) | **Service:** `ErrorInterceptor`, `ToastService`, `ErrorLogService`

Centralised HTTP error handling — every error in the app is caught in one place.

- `ErrorInterceptor` uses `retry(2)` before `catchError` — the request is retried twice before the error handler fires
- Handles `400`, `401`, `403`, `404`, and `500` status codes with specific user-friendly messages
- `401` — clears `token` from `localStorage` and redirects to `/login`
- `500` — also calls `console.error` with the raw error
- `ToastService` — `BehaviorSubject`-powered service that shows a toast notification in the UI for every error (auto-hides after 3.5s)
- `ErrorLogService` (Bonus) — stores every caught error (status, message, URL, time) in an array; viewable on the `/error-log` page
- Three trigger buttons on the Posts page fire deliberate `404`, `500`, and `401` errors to test the interceptor

**Key Concepts:**
- `catchError` and `throwError` for error propagation
- `retry(2)` for automatic retries before failing
- `inject()` inside functional interceptors for service access
- `BehaviorSubject` for reactive toast state
- Centralised error logging pattern

---

## Route Table

| Path | Component | Notes |
|---|---|---|
| `/` | — | Redirects to `/posts` |
| `/posts` | `Posts` | Assignment 1 & 3 demo — fetch + error triggers |
| `/error-log` | `ErrorLog` | Bonus — debug page listing all caught errors |
| `/login` | — | Redirect target for 401 errors |

---

## Project Structure

```
src/app/
├── app.ts                              # Root standalone component (navbar + toast + router-outlet)
├── app.html                            # Root template
├── app.css                             # Global navbar styles
├── app.config.ts                       # provideHttpClient + withInterceptors
├── app.routes.ts                       # Route definitions
├── interceptors/
│   ├── logging.interceptor.ts          # Assignment 1 — logs method, URL, response status
│   ├── timing.interceptor.ts           # Assignment 1 Bonus — logs ms per request
│   └── error.interceptor.ts            # Assignment 3 — retry + catchError + toast + log
├── services/
│   ├── toast.ts                        # BehaviorSubject toast service
│   └── error-log.ts                    # Bonus — stores array of past errors
└── components/
    ├── posts/                           # Fetch posts + 3 error trigger buttons
    ├── toast/                           # Fixed-position toast UI
    └── error-log/                       # Bonus debug page
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

- [Angular HTTP Interceptors](https://angular.dev/guide/http/interceptors)
- [Angular CLI Overview](https://angular.dev/tools/cli)
