import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additems',
  standalone: true, // Standalone component nisa meka thiyenna oni
  imports: [ReactiveFormsModule, CommonModule], // Methana aniwaaryen thiyenna oni
  templateUrl: './additems.component.html',
  styleUrl: './additems.component.css'
})
export class AdditemsComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Form eka initialize kireema
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      status: ['available', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
  
      alert('Product added successfully!');
      this.productForm.reset({ status: 'available' }); 
    } else {
      alert('Please fill all required fields!');
    }
  }
}