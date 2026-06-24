import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ProductListComponent, CartSummaryComponent],
  template: `
    <div class="cart-layout">
      <div class="products-col">
        <app-product-list></app-product-list>
      </div>
      <div class="cart-col">
        <app-cart-summary></app-cart-summary>
      </div>
    </div>
  `,
  styles: [`
    .cart-layout { display: flex; gap: 1.5rem; flex-wrap: wrap; padding: 1rem; }
    .products-col { flex: 2; min-width: 280px; }
    .cart-col     { flex: 1; min-width: 240px; }
  `]
})
export class CartPageComponent {}
