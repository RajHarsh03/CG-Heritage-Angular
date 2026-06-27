import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
  { path: '',        redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'cart',    component: CartPageComponent },
];
