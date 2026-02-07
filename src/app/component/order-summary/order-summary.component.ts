import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent {
  public cartService = inject(CartService);

  get cartItems() {
    return this.cartService.getItems();
  }

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  get discount() {
    return this.subtotal * 0.10;
  }

  get tax() {
    return this.subtotal * 0.08;
  }

  get total() {
    return this.subtotal - this.discount + this.tax;
  }

  onDelete(index: number) {
    this.cartService.removeItem(index);
  }
}