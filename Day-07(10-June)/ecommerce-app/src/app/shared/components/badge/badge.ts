import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class BadgeComponent {
  @Input() label: string = '';
  @Input() color: string = '#3b82f6';
}
