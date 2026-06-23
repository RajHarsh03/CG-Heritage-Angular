# Day-14: Angular HTTP Client & REST API Integration — Student App

## Overview

This project demonstrates Angular's HTTP Client module through 5 progressive assignments. It covers setting up `HttpClient`, consuming REST APIs, working with RxJS operators, handling errors gracefully, and writing type-safe HTTP calls using TypeScript generics and utility types. All data is fetched from the free [JSONPlaceholder](https://jsonplaceholder.typicode.com) API (`/todos`, `/users`).

The app uses Angular 21 standalone component architecture with `provideHttpClient()` and a global functional `HttpInterceptor`.

---

## Assignment 1: HttpClientModule Setup

**Route:** `/a1-test` | **Component:** `A1TestComponent` | **Service:** `DataService`

Sets up `HttpClient` and demonstrates all four HTTP methods against the `/todos` endpoint.

- `getTodos()` — `GET /todos` — fetches all 200 todos, displays first 3
- `createTodo()` — `POST /todos` — creates a new todo with `Content-Type: application/json` header
- `updateTodo()` — `PUT /todos/1` — fully replaces a todo
- `deleteTodo()` — `DELETE /todos/1` — removes a todo (returns `{}` on success)

All four methods are called in `ngOnInit()` and logged via `console.log`.

**Bonus:** `Content-Type: application/json` header added via `HttpHeaders` on all write requests.

**Key Concepts:**
- `provideHttpClient()` in `app.config.ts`
- `HttpClient` injection into a service
- `HttpHeaders` for custom request headers
- Observable subscription in `ngOnInit()`

---

## Assignment 2: Consuming REST APIs

**Route:** `/posts` | **Component:** `PostsComponent`

A full CRUD todo interface built on top of the JSONPlaceholder `/todos` endpoint.

- Displays a list of the first 20 todos with completed/pending status badges
- **Load single todo** — fetches `GET /todos/5` on button click
- **Add todo** — reactive form with title validation, sends `POST /todos`
- **Delete todo** — removes a todo by ID with `DELETE /todos/:id`, updates the list optimistically

**Bonus:** Login via `https://reqres.in/api/login` — displays the returned auth token on screen and in the console.

**Key Concepts:**
- `GET`, `POST`, `DELETE` with `HttpClient`
- Reactive form with `FormBuilder` and `Validators`
- Optimistic UI update after delete
- Cross-origin API request with custom headers

---

## Assignment 3: Observable-Based HTTP

**Route:** `/users` | **Component:** `UsersComponent`

Demonstrates RxJS operators applied to HTTP responses, with real-time search and chained requests.

- `tap()` — logs the raw `/users` API response to the console before any transformation
- `map()` — extracts only `id`, `name`, and `email` from each user (slims the data model)
- `filter()` — drives a real-time search input, filters users by name as you type
- `takeUntil(destroy$)` — automatically unsubscribes all streams when the component is destroyed, preventing memory leaks

**Bonus (`switchMap`):** Clicking "View Todos" on a user first fetches `GET /users/:id`, then `switchMap` chains to `GET /todos?userId=:id`. Any previous in-flight request is cancelled automatically. Displays completed/pending counts.

**Key Concepts:**
- `tap`, `map`, `filter`, `debounceTime`, `distinctUntilChanged`
- `takeUntil` with a `Subject` for clean unsubscription
- `switchMap` for chained/dependent HTTP calls
- `OnDestroy` lifecycle hook

---

## Assignment 4: Error Handling

**Route:** `/errors` | **Component:** `ErrorDemoComponent` | **Service:** `ErrorDemoService`

Demonstrates structured HTTP error handling at both the service level and globally via an interceptor.

- Calls a deliberately wrong endpoint (`/api/wrong-endpoint`) to trigger a 404
- `retry(2)` — retries the failed request 2 extra times (3 total) before giving up — visible in the Network tab
- `handleError()` — maps status codes `400`, `401`, `403`, `404`, `500` to user-friendly messages shown on screen
- Network errors (`status === 0`) handled separately
- Valid endpoint (`GET /todos/1`) provided for comparison

**Bonus:** Global `errorInterceptor` (functional `HttpInterceptorFn`) registered via `withInterceptors()`. Centrally logs every HTTP error across the entire app — all components benefit automatically.

**Key Concepts:**
- `catchError` and `throwError`
- `retry(2)` for automatic retries
- `HttpErrorResponse` status code handling
- Functional `HttpInterceptorFn` (Angular 17+ style)
- `withInterceptors()` in `provideHttpClient()`

---

## Assignment 5: Type-Safe HTTP

**Route:** `/products` | **Component:** `ProductsComponent` | **Service:** `ProductService`

Demonstrates fully typed HTTP calls using TypeScript interfaces and utility types.

**Interfaces** (`src/app/models/models.ts`):

| Interface | Source |
|---|---|
| `User` | `GET /users` |
| `Todo` | `GET /todos` |
| `Post` | JSONPlaceholder structure |
| `Comment` | JSONPlaceholder structure |
| `Product` | Mock data (local) |

**Generic service methods:**
- `http.get<User[]>('/users')` — typed user list
- `http.get<Todo[]>('/todos')` — typed todo list
- `http.get<Todo>('/todos/:id')` — typed single todo
- `http.post<Todo>('/todos', data)` — typed create
- `http.patch<User>('/users/:id', data)` — typed partial update

**Bonus — TypeScript Utility Types:**
- `NewTodo = Omit<Todo, 'id'>` — used for POST payloads, removes `id` so it cannot be accidentally sent
- `PartialUser = Partial<User>` — used for PATCH payloads, makes all fields optional

**Key Concepts:**
- TypeScript generics with `HttpClient`
- Interface-driven API modeling
- `Omit<T, K>` and `Partial<T>` utility types
- `Observable<T[]>` return types on service methods

---

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code Scaffolding

To generate a new component, run:

```bash
ng generate component component-name
```

## Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Additional Resources

- [Angular HTTP Client](https://angular.dev/guide/http)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
- [Angular CLI Overview](https://angular.dev/tools/cli)
