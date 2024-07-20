import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() product: string = "Nike Air Force";
  @Input() vendor: string = "Sportscene";
  @Input() price: string = "R2999.00";
  @Output() buttonClick = new EventEmitter();

  addToWishlist() {
    this.buttonClick.emit();
  }
}