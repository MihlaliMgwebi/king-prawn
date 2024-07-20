import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingResultService } from '../../api/shopping-result/shopping-result.service';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  enableImageSearch = false;
  searchText = "";

  constructor(private searchService: ShoppingResultService) {}

  search(searchText: string) {
    this.searchService.search(searchText).subscribe((data) => {
      console.log(data);
    })
  }
}
