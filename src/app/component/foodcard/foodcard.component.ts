import { Component, inject } from '@angular/core';
import { Product, products } from "../../../model/products";
import { CartService } from "../../../cart.service"; 

@Component({
  selector: 'app-foodcard',
  standalone: true, 
  imports: [],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
  products: Product[] = products;

  private cartService = inject(CartService);

  constructor() {}


  addToOrder(item: Product) {
    this.cartService.addItem(item);
    console.log(item.id);
  }
}