import { Injectable } from '@angular/core';
import { IShoppingResult, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _user: User = {
    accountId: '',
    wishlist: []
  };

  // Getter for the user
  getUser(): User {
    return this._user;
  }

  // Setter for the user
  setUser(user: User) {
    this._user = user;
  }

  // Add an item to the wishlist
  addItem(item: IShoppingResult): void {
    this._user.wishlist.push(item);
  }

  // Remove an item from the wishlist
  removeItem(item: IShoppingResult): void {
    this._user.wishlist = this._user.wishlist.filter(wishlistItem => wishlistItem !== item);
  }

  // Get an item from the wishlist by its link
  getItemWithLink(link: string): IShoppingResult | undefined {
    return this._user.wishlist.find(wishlistItem => wishlistItem.link === link);
  }
}
