import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  public cartService = inject(CartService); 

  get cartItems() {
    return this.cartService.getCartItems();
  }

  get total(): number {
    return this.cartItems.reduce((acc: number, item: any) => acc + (item.price || 0), 0);
  }
}