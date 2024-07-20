import { Component, computed, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

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
  title = 'Accounts';
  currentRoute = signal('');
  showBackButton = computed(() => this.currentRoute().includes('/wishlist'));
  showSearchButton = computed(() => this.currentRoute().includes('/wishlist'));

  constructor(private router: Router) {}

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
    // TODO: navigate back
  }

  onSearchClick() {
    // TODO: navigate search
  }
}
