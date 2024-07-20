import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ISerpAPIResponse, IShoppingResult } from "./abstractions/models/shopping-results.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingResultService {
  private _baseUrl = `${environment.apiUrl}/serp`;
  private _http = inject(HttpClient);
  constructor() { }
  public get(): Observable<IShoppingResult[]> {
    const resourceEndpoint = `/test`
    return this._http.get<ISerpAPIResponse>(`${this._baseUrl}${resourceEndpoint}`).pipe(
      map((x) =>
        x.filtered_results.map((y) =>
          ({
            product: y.source,
            vendor: y.title,
            price: y.price,
            imgUrl: y.thumbnail,
            link: y.link
          }) as IShoppingResult)
      )
    )

  }
}
