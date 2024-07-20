import {Component, Input} from '@angular/core';
import {IAccount} from "../../api/account/abstractions/models/account.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss'
})
export class AccountCardComponent {
  @Input({ required: true }) account!: IAccount;
  shouldNavigate = false;

  navigateToWishlist(accountId: string){
    this.router.navigate([`/wishlist/${accountId}`])
  }

  constructor(private router: Router) {
  }
}
