import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccountBalance } from '../../api/account/abstractions/models/account.model';
import { AccountService } from '../../api/account/account.service';
import { IShoppingResult } from '../../api/shopping-result/abstractions/models/shopping-results.model';
import { User } from '../../store/user';
import { WishlistService } from '../../store/wishlist.service';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  totalAmount: number;
  currentBalance: number;
  progress: number; // Percentage for radial progress
}
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  private _accountService = inject(AccountService);
  private _route = inject(ActivatedRoute);
  accountId: string | undefined;
  currentBalance: IAccountBalance['currentBalance'] | 0 = 0;
  totalAmount: number = 0;

  fetchAccountData(): void {
    if (this.accountId !== undefined) {
      this._accountService.getBalance(this.accountId).subscribe(balance => {
        this.currentBalance = balance.currentBalance;
        this.calculateTotalAmount(); // Recalculate total amount after setting balance
      });
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.user.wishlist.reduce((sum, product) => sum + product.price, 0);
  }

  removeProduct(product: IShoppingResult): void {
    this.wishlistService.removeItem(product);
    this.user = this.wishlistService.getUser();
    this.calculateTotalAmount(); // Recalculate total amount after removal
  }

  user: User = this.wishlistService.getUser()

  constructor(
    private wishlistService: WishlistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.user.accountId === '') {
      this.route.params.subscribe(params => {
        const userId = +params['userId'];
        const user: User = {
          accountId: userId.toString(),
          wishlist: []
        };
        this.wishlistService.setUser(user);
      });
      this.calculateTotalAmount();
    }
  }

}
