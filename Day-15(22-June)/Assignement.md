# Assignment — Day 15

**Topic: Angular HTTP Client & REST API Integration**

> Practice these assignments to reinforce each topic. Try to complete them without looking at the notes first!

---

## Assignment 1: HttpClientModule Setup

- Create a new Angular project and add `HttpClientModule` to `AppModule`
- Create a `DataService` and inject `HttpClient` into it
- Write methods for `GET`, `POST`, `PUT`, and `DELETE` that call `https://jsonplaceholder.typicode.com`
- Test each method using `console.log` in a component's `ngOnInit`

**Bonus:** Add HTTP headers (`Content-Type: application/json`) to your `POST` request

---

## Assignment 2: Consuming REST APIs

- Create a `PostsComponent` that displays a list of all posts from JSON Placeholder
- Add a button to load a single post by its ID (e.g. Post #5)
- Create a form to add a new post and send it via `POST` request
- Implement a delete button that removes a post by its ID

**Bonus:** Use `https://reqres.in` to simulate user login and display the token in the console

---

## Assignment 3: Observable-Based HTTP

- Fetch a list of users and use the `map` operator to extract only their names and emails
- Use the `tap` operator to log the raw API response before processing it
- Create a search feature using the `filter` operator to filter users by name in real-time
- Implement proper unsubscription using `takeUntil` and a `Subject` in your component

**Bonus:** Chain two API calls using `switchMap` (get users, then get their posts)

---

## Assignment 4: Error Handling

- Deliberately call a wrong URL (e.g. `/api/wrong-endpoint`) and handle the 404 error
- Create a `handleError()` method in your service that handles `400`, `401`, `403`, `404`, and `500` status codes
- Display a user-friendly error message on screen when an API call fails
- Use `retry(2)` to automatically retry a failed request twice

**Bonus:** Create a global `HttpInterceptor` that catches all errors in one place

---

## Assignment 5: Type-Safe HTTP

- Create interfaces for `User`, `Post`, and `Comment` based on the JSON Placeholder API structure
- Update all your service methods to use generics: `http.get<User[]>()`, `http.post<Post>()`, etc.
- Create a `Product` interface with `id`, `name`, `price`, and optional `description` fields
- Write a `ProductService` that returns `Observable<Product[]>` and test it in a component

**Bonus:** Use TypeScript utility types (`Partial<User>`, `Omit<Post, 'id'>`) in your service methods
