import { Component, inject } from '@angular/core';
import { Product, products } from "../../../model/products";
import { CartService } from "../../../cart.service";
import { OrderSummaryComponent } from "../order-summary/order-summary.component"; 

@Component({
  selector: 'app-foodcard',
  standalone: true, 
  imports: [OrderSummaryComponent],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
  products: Product[] = products;
  selectedProductIds: (number | string)[] = [];

  private cartService = inject(CartService);

  constructor() {}

    addToOrder(item: Product) {
    this.cartService.addItem(item);
    
    this.selectedProductIds.push(item.id,item.name,item.price,item.image);
    
    console.log('Current ID Array:', this.selectedProductIds);
  }
  }