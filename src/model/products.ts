export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  status: 'Available' | 'Out of Stock' | 'Sold Out';
}

