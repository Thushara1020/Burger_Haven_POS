import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-removitems',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './removitems.component.html',
  styleUrl: './removitems.component.css',
})
export class RemovitemsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; 
  

  selectedCategory: string = 'all';
  selectedStatus: string = 'all';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.cartService.getAllItemsFromApi().subscribe({
      next: (data) => {
        this.products = data;
        this.applyFilter(); 
        console.log('Products loaded:', this.products);
      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }


  applyFilter() {
    this.filteredProducts = this.products.filter(item => {
      const categoryMatch = this.selectedCategory === 'all' || item.filter === this.selectedCategory;
      const statusMatch = this.selectedStatus === 'all' || item.status === this.selectedStatus;
      
      return categoryMatch && statusMatch;
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
        this.applyFilter();
        console.log('Status updated!');
      },
      error: (err) => {
        alert('Failed to update status');
        console.error(err);
      },
    });
  }
}