import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccountBalance } from '../../api/account/abstractions/models/account.model';
import { AccountService } from '../../api/account/account.service';
import { User } from '../../store/user';
import { IShoppingResult } from '../../api/shopping-result/abstractions/models/shopping-results.model';
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

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a great product with many features.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 100,
      currentBalance: 70,
      progress: 70,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another great product that you will love.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 150,
      currentBalance: 60,
      progress: 60,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A must-have item for any collection.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 200,
      currentBalance: 120,
      progress: 60,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This product is top-rated and highly recommended.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 250,
      currentBalance: 180,
      progress: 72,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'An innovative product with cutting-edge technology.',
      price: 69.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 300,
      currentBalance: 200,
      progress: 67,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This product offers great value for money.',
      price: 79.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 350,
      currentBalance: 220,
      progress: 63,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'A premium quality product with excellent features.',
      price: 89.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 400,
      currentBalance: 250,
      progress: 62,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Experience the best with this high-end product.',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/150',
      totalAmount: 500,
      currentBalance: 300,
      progress: 60,
    },
  ];






  fetchAccountData(): void {
    if (this.accountId !== undefined) {
      this._accountService.getBalance(this.accountId).subscribe(balance => {
        this.currentBalance = balance.currentBalance;
        this.calculateTotalAmount(); // Recalculate total amount after setting balance
      });
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.products.reduce((sum, product) => sum + product.price, 0);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
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
          wishlist: this.products as unknown as IShoppingResult[]
        };
        this.wishlistService.setUser(user);
      });
      this.calculateTotalAmount();
    }
  }

}
