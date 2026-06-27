import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ProductListComponent, CartComponent],
  template: `
    <h2 style="color:#c3002f; margin-bottom:0.4rem;">Part B - Shopping Cart with BehaviorSubject</h2>
    <p style="font-size:0.85rem; color:#666; margin-bottom:1.5rem;">
      Both components share the same <code>CartService</code> singleton via DI — no
      <code>@Input</code>/<code>@Output</code> between them.
    </p>
    <div class="layout">
      <div class="products-col"><app-product-list /></div>
      <div class="cart-col"><app-cart /></div>
    </div>
  `,
  styles: [`
    .layout        { display: flex; gap: 1.5rem; flex-wrap: wrap; }
    .products-col  { flex: 2; min-width: 280px; }
    .cart-col      { flex: 1; min-width: 240px; }
  `]
})
export class CartPageComponent {}
