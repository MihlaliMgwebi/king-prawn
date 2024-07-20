import { Component, computed, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ActionsService } from '../../services/actions/actions.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentRoute = signal('');
  title = computed(() => this.currentRoute().includes('/accounts') ? 'Accounts' : 'Wishlist');
  showBackButton = computed(() => this.currentRoute().includes('/wishlist'));
  showSearchButton = computed(() => this.currentRoute().includes('/wishlist'));

  constructor(private router: Router, private actionsService: ActionsService) {}

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  getCurrentRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.currentRoute.set(event.urlAfterRedirects);
    });
  }

  onBackClick() {
    this.router.navigateByUrl('/accounts');
  }
}
