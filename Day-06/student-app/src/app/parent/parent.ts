import { Component } from '@angular/core';
import { LifecycleLogger } from '../lifecycle-logger/lifecycle-logger';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [LifecycleLogger],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class ParentComponent {

  counter = 0;
  showChild = true;

}