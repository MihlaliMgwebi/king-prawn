import { Routes } from '@angular/router';
import {WishlistComponent} from "./pages/wishlist/wishlist.component";
import {AccountsComponent} from "./pages/accounts/accounts.component";

export const routes: Routes = [
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
];
