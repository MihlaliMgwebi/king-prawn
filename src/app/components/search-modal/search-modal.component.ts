import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private searchService: ShoppingResultService) {}

  search(searchText: string) {
    console.log(searchText);
    
    this.searchService.search(searchText).subscribe((data: any) => {
      data.filtered_results.map((card: any) => {
        this.cards.push({
          product: card.title,
          vendor: card.source,
          price: card.price,
          imgUrl: card.thumbnail
        })
      })
      console.log(this.cards)
    })

  }

  updateSearchText(text: any) {
    this.searchText = text.target.value;
    console.log(this.searchText)
  }
}
