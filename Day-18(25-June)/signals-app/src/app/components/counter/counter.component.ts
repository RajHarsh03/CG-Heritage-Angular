import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {

  count  = signal(0);
  double = computed(() => this.count() * 2);
  square = computed(() => this.count() * this.count());

  constructor() {
    effect(() => {
      console.log('[effect] count changed to:', this.count());
    });
  }

  increment(): void {
    this.count.update(v => v + 1);
  }

  decrement(): void {
    if (this.count() > 0) {
      this.count.update(v => v - 1);
    }
  }

  reset(): void {
    this.count.set(0);
  }

  addFive(): void {
    this.count.update(v => v + 5);
  }
}
