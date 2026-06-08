import { Component } from '@angular/core';
import {
  DatePipe, CurrencyPipe, TitleCasePipe, UpperCasePipe,
  LowerCasePipe, PercentPipe, SlicePipe, JsonPipe
} from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pipe-demo',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe, UpperCasePipe,
    LowerCasePipe, PercentPipe, SlicePipe, NgFor, JsonPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})

export class PipeDemo {
  todayDate = new Date();
  productPrice = 45678.99;
  productName = 'wireless noise cancelling headphones pro max';
  discount = 0.1875;
  orderItems = ['Phone', 'Charger', 'Case', 'Screen Guard', 'Earbuds', 'Stand'];
  stockData = { name: 'TechCorp Ltd', price: 1234.5, change: 0.0312 };


  blogPost = {
    title: '   angular pipes: a complete guide for modern developers   ',
    publishedAt: new Date('2024-11-15T08:30:00'),
    content: 'Angular pipes are one of the most useful features for transforming data in templates...',
    tags: ['angular', 'typescript', 'frontend', 'webdev', 'pipes']
  };
}

