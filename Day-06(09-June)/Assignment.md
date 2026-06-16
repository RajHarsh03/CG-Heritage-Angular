# Day-06: Angular Component Lifecycle Hooks

## Assignment Sheet

**Week 2 – Day 7** | **Total Points: 100** | **Submit via GitHub repository link**

---

## Task Summary

| # | Task | Concept Tested | Points |
|---|------|-----------------|--------|
| 1 | Create a LifecycleLoggerComponent that implements all 8 lifecycle hooks and logs a timestamped message to the console for each. | All Lifecycle Hooks | 20 |
| 2 | Build a ParentChildComponent where the parent passes a counter value via @Input() and the child uses ngOnChanges() to log old and new values on every change. | ngOnChanges + @Input | 15 |
| 3 | Implement a DataFetchComponent that uses ngOnInit() to simulate an HTTP call (use setTimeout or of() from RxJS) and displays the result in the template. | ngOnInit + Data Fetching | 15 |
| 4 | Create a TimerComponent that starts a setInterval in ngOnInit() and clears it in ngOnDestroy() to prevent memory leaks. | ngOnDestroy + Cleanup | 15 |
| 5 | Build a FocusBoxComponent that uses ngAfterViewInit() with @ViewChild to auto-focus an input element when the component loads. | ngAfterViewInit + ViewChild | 15 |
| 6 | Write a LifecycleOrderComponent that implements all hooks and uses an array to record hook names in the order they fire. Display the list in the template. | Hook Execution Order | 20 |

---

## Detailed Assignment Descriptions

### Assignment 1 – LifecycleLoggerComponent (20 pts)

Create a standalone Angular component named **LifecycleLoggerComponent**. Implement all 8 lifecycle hook interfaces (OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy). In each hook, push an entry into a logs array containing the hook name and a timestamp (use `new Date().toISOString()`). Render the logs array in the template. Observe the order in which hooks fire by clicking a button in the parent to change an @Input() and toggle the child with *ngIf.

---

### Assignment 2 – ParentChildComponent with ngOnChanges() (15 pts)

Create a **ParentComponent** with a counter property and two buttons: Increment and Decrement. Pass the counter to a **ChildComponent** via @Input() counter. In the ChildComponent, implement ngOnChanges() to detect changes to the counter input. Log both the previous and current values using SimpleChanges. Add a visual indicator (CSS class) that flashes green when the value increases and red when it decreases.

---

### Assignment 3 – DataFetchComponent with ngOnInit() (15 pts)

Build a **DataFetchComponent** that uses ngOnInit() to fetch a list of posts from `https://jsonplaceholder.typicode.com/posts` using Angular's HttpClient. Show a loading spinner while data is being fetched (isLoading flag). On success, display post titles in a styled list. On error, display a user-friendly error message. Ensure the constructor has no logic — all initialization happens in ngOnInit().

---

### Assignment 4 – TimerComponent with ngOnDestroy() (15 pts)

Create a **TimerComponent** that displays a running stopwatch (HH:MM:SS format). Start a setInterval in ngOnInit() to update the elapsed time every second. In ngOnDestroy(), clear the interval. Add the component to a parent and include a Toggle Timer button. Demonstrate in the browser console that the interval stops (no more logs) after the component is destroyed using *ngIf.

---

### Assignment 5 – FocusBoxComponent with ngAfterViewInit() (15 pts)

Create a **FocusBoxComponent** that contains an input field and a submit button. Use @ViewChild with ElementRef to get a reference to the input. In ngAfterViewInit(), programmatically focus the input element. Also add a method resetFocus() that can be triggered by the parent via @ViewChild on the FocusBoxComponent. Avoid the ExpressionChangedAfterItHasBeenCheckedError — use ChangeDetectorRef if necessary.

---

### Assignment 6 – LifecycleOrderComponent (20 pts)

Build a comprehensive **LifecycleOrderComponent** that implements all hooks. Maintain an ordered log array that records each hook name as it fires. Render the log as a numbered list in the template. Add a Reset button that clears the logs and uses `ChangeDetectorRef.detectChanges()` to update the view. The parent should toggle the component with *ngIf to trigger the full birth and death sequence. Write a short paragraph (5–7 sentences) as a code comment explaining the order you observed and why ngOnDestroy fires after the component is removed from the DOM.

---

## Key Concepts to Review

- Component Lifecycle Hooks
- @Input and @Output decorators
- @ViewChild and ElementRef
- ngOnChanges and SimpleChanges
- HttpClient and async data loading
- Memory leak prevention with cleanup
- Change Detection strategies

---

**Deadline**: Submit via GitHub repository link
