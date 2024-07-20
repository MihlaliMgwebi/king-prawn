import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../api/account/abstractions/models/account.model';
import { AccountService } from '../../api/account/account.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { AccountCardComponent } from '../../components/account-card/account-card.component';
import { Router } from '@angular/router';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    AccountCardComponent,
    SearchModalComponent
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  accounts$: Observable<IAccount[]> = this.accountService.getList();
  // @ViewChild('my_modal_7') modal : ElementRef;
  constructor(private accountService: AccountService, private router: Router) {
  }

  navigateToWishlist(accountId: string){
    this.router.navigate([`/wishlist/${accountId}`])
  }
}
