import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/student.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Angular Course',     price: 999,  category: 'Education' },
    { id: 2, name: 'TypeScript Handbook', price: 499,  category: 'Education' },
    { id: 3, name: 'VS Code Pro License', price: 1499, category: 'Software' },
    { id: 4, name: 'Mechanical Keyboard', price: 2999, category: 'Hardware' },
    { id: 5, name: 'Noise Cancelling Headphones', price: 3499, category: 'Hardware' },
    { id: 6, name: 'GitHub Copilot (1yr)', price: 1200, category: 'Software' },
  ];

  constructor(private cart: CartService) {}

  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }
}
