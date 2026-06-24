import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: SearchComponent },
  { path: 'cart',     component: CartPageComponent },
];
