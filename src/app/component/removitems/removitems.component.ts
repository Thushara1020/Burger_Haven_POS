import {  } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-removitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './removitems.component.html',
  styleUrl: './removitems.component.css'
})
export class RemovitemsComponent {

  products = [
    { name: 'Laptop', price: 150000, status: 'available', image: 'https://placehold.co/100x100' },
    { name: 'Mouse', price: 2500, status: 'out-of-stock', image: 'https://placehold.co/100x100' },
        { name: 'Mouse', price: 2500, status: 'out-of-stock', image: 'https://placehold.co/100x100' },
            { name: 'Mouse', price: 2500, status: 'out-of-stock', image: 'https://placehold.co/100x100' },
                { name: 'Mouse', price: 2500, status: 'out-of-stock', image: 'https://placehold.co/100x100' },
    { name: 'Keyboard', price: 5000, status: 'available', image: 'https://placehold.co/100x100' }
  ];

  deleteItem(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.products.splice(index, 1);
    }
  }
}