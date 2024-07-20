import { Component } from '@angular/core';
import { SortByType, SortService } from '../../api/sort/sort.service';


@Component({
  selector: 'app-sort-modal',
  standalone: true,
  imports: [],
  templateUrl: './sort-modal.component.html',
  styleUrl: './sort-modal.component.scss'
})
export class SortModalComponent {
  constructor(private sortByService: SortService) { }

  sort(type: SortByType) {
    this.sortByService.sortBy(type).subscribe((data) => {
      console.log("Sorted:", data);
    })
  }
}
