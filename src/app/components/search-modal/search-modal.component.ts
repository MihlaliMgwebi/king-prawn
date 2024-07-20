import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingResultService } from '../../api/shopping-result/shopping-result.service';
import { SearchCardComponent } from "../search-card/search-card.component";

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [CommonModule, SearchCardComponent],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  enableImageSearch = false;
  searchText = "";
  cards: any[] = [];
  @Output() clicked = new EventEmitter();

  constructor(private searchService: ShoppingResultService) {}

  search(searchText: string) {
    if(this.cards) {
      this.cards = [];
    }
    
    this.searchService.search(searchText).subscribe((data: any) => {
      data.filtered_results.map((card: any) => {
        this.cards.push({
          product: card.title,
          vendor: card.source,
          price: card.price,
          imgUrl: card.thumbnail
        })
      })
    })

  }

  updateSearchText(text: any) {
    this.searchText = text.target.value;
  }

  addToWishlist() {
    this.clicked.emit();
  }
}
