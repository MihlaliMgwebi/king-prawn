import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountService} from "./api/account/account.service";
import {tap} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'king-prawn';
  private _x = inject(AccountService)
  constructor() {
    this._x.getList().pipe(tap((y)=> console.log(y))).subscribe()
  }
}
