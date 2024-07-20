import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IShoppingResult } from '../../api/shopping-result/abstractions/models/shopping-results.model';
import { WishlistService } from '../../store/wishlist.service';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() imgUrl: string = ""
  @Input() link: string = '';
  @Input() product: string = "";
  @Input() vendor: string = "";
  @Input() price: string = "";
  @Output() buttonClick = new EventEmitter();

  constructor(
    private wishlistService: WishlistService
  ) { }

  addToWishlist(product: IShoppingResult) {
    this.wishlistService.addItem(product);
    this.buttonClick.emit();
  }

  createProduct(): IShoppingResult {
    const pr: IShoppingResult = {
      imgUrl: this.imgUrl,
      product: this.product,
      price: this.price,
      vendor: this.vendor,
      link: this.link
    }
    return pr
  }
}
