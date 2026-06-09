import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class ParentComponent {

  counter = 0;
  showChild = true;

  increment(): void {
    this.counter++;
    console.log(`Parent: Counter incremented to ${this.counter}`);
  }

  decrement(): void {
    this.counter--;
    console.log(`Parent: Counter decremented to ${this.counter}`);
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
    console.log(`Parent: Child visibility toggled to ${this.showChild}`);
  }

}