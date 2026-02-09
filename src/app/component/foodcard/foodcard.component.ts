import { Component, inject, OnInit } from '@angular/core'; // 1. OnInit import කරන්න
import { Product } from "../../../model/products";
import { CartService } from "../../../cart.service";
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
  selector: 'app-foodcard',
  standalone: true, 
  imports: [OrderSummaryComponent],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent implements OnInit {
  
  products: Product[] = []; 
  selectedProductIds: number[] = [];

  private cartService = inject(CartService);


  ngOnInit() {
  this.cartService.getAllItemsFromApi().subscribe(data => {
    console.log("Backend එකෙන් ආපු බඩු:", data);
    this.products = data;
  });
}

  loadProducts() {
    this.cartService.getAllItemsFromApi().subscribe({
      next: (data: Product[]) => {
        this.products = data; 
        console.log('Data loaded successfully:', data);
      },
      error: (err) => {
        console.error('API Error:', err);
        alert('Backend is Nor Work!');
      }
    });
  }

  addToOrder(item: Product) {
    this.cartService.addItem(item);
    this.selectedProductIds.push(item.id);
  }
}