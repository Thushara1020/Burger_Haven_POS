import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }
}