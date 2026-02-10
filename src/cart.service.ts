import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor(private http: HttpClient) {}

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }


  getCartItems() {
    return this.items;
  }

  getAllItemsFromApi(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/items/all');
  }
}