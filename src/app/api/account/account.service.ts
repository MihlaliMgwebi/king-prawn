import {inject, Injectable} from '@angular/core';
import {AccountIdType} from "../../abstractions/types";
import {map, Observable} from "rxjs";
import {IAccount, IAccountBalance, ITransferList} from "./abstractions/models/account.model";
import {IAPIResponse} from "../../abstractions/models/api-response.model";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _baseUrl = `${environment.apiUrl}/investec/api/accounts`;
  private _http = inject(HttpClient);
  constructor() { }

  // GET {{host}}/za/pb/v1/accounts
  public getList():  Observable<IAccount[]> {
    const resourceEndpoint = ''
    return this._http.get<IAPIResponse<Record<'accounts',IAccount[]>>>(`${this._baseUrl}${resourceEndpoint}`).pipe(map((x)=> x.data.accounts));
  }
  // GET {{host}}/za/pb/v1/accounts/:accountId/balance
  public getBalance(id: AccountIdType):  Observable<IAccountBalance> {
    const resourceEndpoint = `/${id}/balance`
    return this._http.get<IAPIResponse<IAccountBalance>>(`${this._baseUrl}${resourceEndpoint}`).pipe(map((x)=> x.data));
  }

  // POST {{host}}/za/pb/v1/accounts/:accountId/transfermultiple
  public transferMultiple(id: AccountIdType, transferList: ITransferList[]){
    const resourceEndpoint = `/${id}/transfermultiple`
    const body = {
      "transferList": transferList
    }
    return this._http.post(`${this._baseUrl}${resourceEndpoint}`, body)
  }
}
