import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../store/user';
import { WishlistService } from '../../store/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

  user: User = this.wishlistService.getUser()

  constructor(
    private wishlistService: WishlistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.user.accountId === '') {
      this.route.params.subscribe(params => {
        const userId = +params['userId'];
        const user: User = {
          accountId: userId.toString(),
          wishlist: []
        };
        this.wishlistService.setUser(user);
      });
    }
  }

}
