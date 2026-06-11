# 📝 ASSIGNMENT

> **Week 2 · Day 8 · NgModules & Modular Architecture**

---

## Assignment: E-Commerce Modular Angular Application

### 💡 Assignment Overview

You will build a modular Angular application for a mini e-commerce platform.
The application must demonstrate proper use of NgModules, feature modules, SharedModule, and lazy loading.

| Estimated Time | Marks       |
| -------------- | ----------- |
| 3–4 hours      | 100 points  |

---

## Part 1 – Project Setup & AppModule (15 marks)

- Create a new Angular project: `ng new ecommerce-app --routing --style=scss`
- Configure AppModule to be lean — it should declare ONLY `AppComponent` and the `NavbarComponent`
- Import `BrowserModule`, `HttpClientModule`, and `AppRoutingModule` in AppModule
- Create a `NavbarComponent` with working navigation links: **Home | Products | Orders | Cart**
- Verify the application builds and the navbar renders correctly

#### 💡 Evaluation Criteria – Part 1

| Criteria                                                       | Marks |
| -------------------------------------------------------------- | ----- |
| AppModule contains only shell-level declarations               | 2     |
| BrowserModule imported only in AppModule, not in feature modules | 3     |
| NavbarComponent renders without errors                         | 5     |
| HttpClientModule correctly configured                          | 5     |

---

## Part 2 – SharedModule with Components, Directives & Pipes (25 marks)

Create a SharedModule at `src/app/shared/shared.module.ts` and implement the following:

### 2a. Components (10 marks)

- **ButtonComponent** — accepts `@Input() variant: 'primary' | 'secondary' | 'danger'`
- **BadgeComponent** — accepts `@Input() label: string` and `@Input() color: string`
- **SpinnerComponent** — displays a loading animation (CSS only, no external library)

### 2b. Directives (8 marks)

- **HighlightDirective** — highlights element background on `mouseenter` with `@Input() color`
- **TruncateTextDirective** — truncates `innerText` of an element to `@Input() maxChars` characters

### 2c. Pipes (7 marks)

- **TruncatePipe** — `{{ text | truncate:50:'...' }}` — truncates string at given character limit
- **RupeePipe** — `{{ price | rupee }}` — formats a number as Indian Rupee: `₹1,25,000`

> SharedModule must re-export `CommonModule`, `FormsModule`, and `ReactiveFormsModule`.
> All components, directives, and pipes must be exported so feature modules can use them.
