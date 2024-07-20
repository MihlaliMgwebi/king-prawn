import {Component, Input} from '@angular/core';
import {IAccount} from "../../api/account/abstractions/models/account.model";

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss'
})
export class AccountCardComponent {
  @Input({ required: true }) account!: IAccount;
}
