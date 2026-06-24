import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  text: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private message = new BehaviorSubject<ToastMessage | null>(null);
  message$ = this.message.asObservable();

  show(text: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message.next({ text, type });
    setTimeout(() => this.message.next(null), 3500);
  }
}
