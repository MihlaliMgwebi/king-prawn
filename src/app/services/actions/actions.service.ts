import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  isAddModalOpen = signal(false);

  constructor() { }

  openAddModal() {
    this.isAddModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }
}
