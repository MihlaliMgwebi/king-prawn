import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AccountService } from './api/account/account.service';
import {ShoppingResultService} from "./api/shopping-result/shopping-result.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'king-prawn';
  private _accountService = inject(ShoppingResultService);
  constructor() {
   this._accountService.get().subscribe(x => console.log(x));
  }

}
