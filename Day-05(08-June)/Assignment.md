# Assignment 1: Built-in Pipe Explorer

## Objective
Practice using all major built-in pipes in a real Angular component.

## Setup
Create a new Angular component called `pipe-demo`. Inside this component, declare the following data in your TypeScript class:

```typescript
todayDate = new Date();
productPrice = 45678.99;
productName = 'wireless noise cancelling headphones pro max';
discount = 0.1875;
orderItems = ['Phone', 'Charger', 'Case', 'Screen Guard', 'Earbuds', 'Stand'];
stockData = { name: 'TechCorp Ltd', price: 1234.5, change: 0.0312 };
```

## Tasks to Complete

1. Display `todayDate` using at least 4 different date format strings (shortDate, longDate, fullDate, dd/MM/yyyy HH:mm)
2. Format `productPrice` as Indian Rupee (INR) with no decimal places
3. Format `productPrice` as US Dollar (USD), Euro (EUR), and British Pound (GBP)
4. Transform `productName` to titlecase, uppercase, and lowercase — show all three side by side
5. Display `discount` as a formatted percentage showing exactly 2 decimal places
6. Show only the first 3 items from `orderItems` using SlicePipe in an *ngFor loop
7. Display `stockData` using JsonPipe inside a `<pre>` tag for debugging
8. Chain the date pipe output with uppercase: show today's full date in all caps

---

# Assignment 2: Pipe Chaining Challenge

## Objective
Master chaining multiple pipes to achieve complex transformations.

## Setup
Given the following data, write Angular template expressions that use pipe chaining to produce the required output:

```typescript
blogPost = {
  title: '   angular pipes: a complete guide for modern developers   ',
  publishedAt: new Date('2024-11-15T08:30:00'),
  content: 'Angular pipes are one of the most useful features for transforming data in templates...',
  tags: ['angular', 'typescript', 'frontend', 'webdev', 'pipes']
};
```

## Required Outputs Using Chaining

1. **Title**: Remove leading/trailing spaces, convert to titlecase — Display first 40 characters with '...' appended
2. **Date**: Format as 'EEEE, MMMM d, y' then pipe to uppercase — Output: 'THURSDAY, NOVEMBER 15, 2024'
3. **Content**: Show only first 80 characters, then pipe to lowercase
4. **Tags**: Use *ngFor with slice:0:3 to show first 3 tags, each displayed in uppercase
5. **Preview Card**: Create a full article preview card template combining all 4 chained pipe outputs
