import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-additems',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './additems.component.html',
  styleUrl: './additems.component.css'
})
export class AdditemsComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartService , private router: Router) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      status: ['available', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      filter: ['Food', [Validators.required]]
      
    });
  }

onSubmit() {
  if (this.productForm.valid) {
    const formData = this.productForm.value;

    this.cartService.addItemToApi(formData).subscribe({
      next: (response) => {
        console.log('Saved successfully:', response);
        alert('Product added successfully!');
        
    
        this.productForm.reset({
          status: 'available'
        });
        this.router.navigate(['/manage-items']);
      },
      error: (error) => {
        console.error('Error saving product:', error);
        alert('Failed to save product. Please try again.');
      }
    });
  } else {
    alert('Please fill all the required fields!');
  }
}
}