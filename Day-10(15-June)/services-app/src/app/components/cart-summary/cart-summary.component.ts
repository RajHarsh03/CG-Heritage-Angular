import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/student.model';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  items: Product[] = [];
  total = 0;

  private destroy$ = new Subject<void>();

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.items = items;
      this.total = this.cart.getCartTotal();
    });
  }

  removeItem(id: number): void {
    this.cart.removeFromCart(id);
  }

  clearCart(): void {
    this.cart.clearCart();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
