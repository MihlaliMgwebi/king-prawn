import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './api/account/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'king-prawn';
  private _accountService = inject(AccountService);
  constructor() { 
    console.log(this._accountService.getList().subscribe(x => console.log(x)));
  }

}
