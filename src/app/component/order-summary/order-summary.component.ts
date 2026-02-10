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

  const subtotal = this.cartItems.reduce((acc: number, item: any) => acc + (item.price || 0), 0);
  
  if (subtotal === 0) return 0;


  const discount = subtotal * 0.10;      
  const amountAfterDiscount = subtotal - discount;
  const tax = amountAfterDiscount * 0.08; 

  return amountAfterDiscount + tax;
}
}