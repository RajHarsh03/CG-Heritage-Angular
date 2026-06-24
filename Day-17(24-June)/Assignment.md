# Assignment — Day 17

**Topic: HTTP Interceptors**

---

## Assignment 1: HTTP Interceptors — Registration & Basics

- Create a new interceptor called `LoggingInterceptor` that logs the URL and method of every outgoing request
- Register the interceptor in `AppModule` using `HTTP_INTERCEPTORS` with `multi: true`
- Make a `GET` request from any component and verify the log appears in the console
- Modify the interceptor to also log the response status code when the response arrives

**Bonus:** Create a second interceptor `TimingInterceptor` that logs how long each HTTP call takes in milliseconds

---

## Assignment 3: Global Error Interceptor

- Create an `ErrorInterceptor` using `catchError` that handles `400`, `401`, `403`, `404`, and `500` status codes
- For `401` errors: clear the token from `localStorage` and redirect the user to `/login`
- For `500` errors: show a `console.error` with a user-friendly message
- Create a simple `ToastService` and display error messages in the UI instead of just `console.error`
- Add `retry(2)` before `catchError` so the request retries twice before showing an error

**Bonus:** Track all errors in an `ErrorLogService` (array of past errors) so you can view them on a debug page
