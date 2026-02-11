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

addItemToApi(productData: any): Observable<any> {
  const apiUrl = 'http://localhost:8080/api/items/add'; 
  return this.http.post(apiUrl, productData);
}

deleteItemFromApi(id: number): Observable<any> {
  const url = `http://localhost:8080/api/items/delete/${id}`;
  return this.http.delete(url, { responseType: 'text' as 'json' });
}

updateItemStatus(id: number, status: string): Observable<any> {
  const url = `http://localhost:8080/api/items/{id}`;
  return this.http.put(url, { status: status });
}
} 
