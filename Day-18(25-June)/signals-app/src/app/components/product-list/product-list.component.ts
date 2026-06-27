import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/cart-item.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Angular Course',          price: 999,  category: 'Education' },
    { id: 2, name: 'TypeScript Handbook',      price: 499,  category: 'Education' },
    { id: 3, name: 'VS Code Pro License',      price: 1499, category: 'Software'  },
    { id: 4, name: 'Mechanical Keyboard',      price: 2999, category: 'Hardware'  },
    { id: 5, name: 'Noise Cancelling Headset', price: 3499, category: 'Hardware'  },
  ];

  constructor(private cart: CartService) {}

  addToCart(product: Product): void {
    this.cart.addItem({ ...product, qty: 1 });
  }
}
