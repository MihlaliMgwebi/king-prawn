import { Component } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {IAccount} from "../../api/account/abstractions/models/account.model";
import {AccountService} from "../../api/account/account.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AccountCardComponent} from "../../components/account-card/account-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    AccountCardComponent
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  accounts$: Observable<IAccount[]> = this.accountService.getList();

  constructor(private accountService: AccountService, private router: Router) {
  }

  navigateToWishlist(accountId: string){
    this.router.navigate([`/wishlist/${accountId}`])
  }
}
