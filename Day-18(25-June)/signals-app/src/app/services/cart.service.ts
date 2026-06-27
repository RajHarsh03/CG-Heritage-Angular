import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  addItem(item: CartItem): void {
    const current = this.cartSubject.getValue();
    const existing = current.find(i => i.id === item.id);
    if (existing) {
      this.cartSubject.next(
        current.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      );
    } else {
      this.cartSubject.next([...current, { ...item, qty: 1 }]);
    }
  }

  removeItem(id: number): void {
    this.cartSubject.next(this.cartSubject.getValue().filter(i => i.id !== id));
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  getTotal(): number {
    return this.cartSubject.getValue().reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  getCount(): number {
    return this.cartSubject.getValue().reduce((sum, i) => sum + i.qty, 0);
  }
}
