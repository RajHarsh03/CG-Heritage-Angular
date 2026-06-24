import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  private items = new BehaviorSubject<Product[]>([]);
  cartItems$: Observable<Product[]> = this.items.asObservable();

  addToCart(product: Product): void {
    const current = this.items.getValue();
    const exists = current.find(p => p.id === product.id);
    if (!exists) {
      this.items.next([...current, product]);
    }
  }

  removeFromCart(id: number): void {
    this.items.next(this.items.getValue().filter(p => p.id !== id));
  }

  clearCart(): void {
    this.items.next([]);
  }

  getCartTotal(): number {
    return this.items.getValue().reduce((sum, p) => sum + p.price, 0);
  }
}
