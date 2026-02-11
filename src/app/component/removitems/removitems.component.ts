import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-removitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './removitems.component.html',
  styleUrl: './removitems.component.css',
})
export class RemovitemsComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.cartService.getAllItemsFromApi().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.cartService.deleteItemFromApi(id).subscribe({
        next: () => {
          alert('Item deleted successfully!');
          this.loadProducts();
        },
        error: (err) => {
          console.error('Delete error:', err);
          alert('Failed to delete item from database.');
        },
      });
    }
  }

  updateStatus(item: any, newStatus: string) {
    this.cartService.updateItemStatus(item.id, newStatus).subscribe({
      next: (updatedItem) => {
        item.status = updatedItem.status;
        console.log('Status updated!');
      },
      error: (err) => {
        alert('Failed to update status');
        console.error(err);
      },
    });
  }
}
