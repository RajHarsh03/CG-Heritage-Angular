import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent implements OnChanges {
  @Input() counter: number = 0;

  previousCounter: number = 0;
  changeDirection: 'increase' | 'decrease' | 'none' = 'none';
  showFlash: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      const change = changes['counter'];
      const oldValue = change.previousValue;
      const newValue = change.currentValue;

      console.log(`ngOnChanges: counter changed from ${oldValue} to ${newValue}`);

      if (newValue > oldValue) {
        this.changeDirection = 'increase';
      } else if (newValue < oldValue) {
        this.changeDirection = 'decrease';
      }

      this.previousCounter = oldValue;
      this.triggerFlash();
    }
  }

  private triggerFlash(): void {
    this.showFlash = true;
    setTimeout(() => {
      this.showFlash = false;
    }, 600);
  }
}
