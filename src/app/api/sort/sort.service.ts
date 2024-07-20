import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

export enum SortByType {
  relevance = 'relevance',
  price = 'price',
  review = 'review'
}


@Injectable({
  providedIn: 'root'
})
export class SortService {
  private _http = inject(HttpClient);

  constructor() { }

  sortBy(type: SortByType) {
    const sort = '/serp/sort/' + type;
    return this._http.get(sort).pipe(map(data => console.log(data)));
  }
}
