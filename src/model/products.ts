export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  status: 'Available' | 'Out of Stock';
}


export const products: Product[] = [
  {
    id: 1,
    name: "Classic Burger",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
    status: "Available"
  },
  {
    id: 2,
    name: "French Fries",
    price: 4.99,
    image: "https://s3.ca-central-1.amazonaws.com/files.exceldor.ca/files/recettes/Catherine_Cote_Classique_Fume_Burger_Exceldor_Vu_Face_H_LR.jpg",
    status: "Available"
  },
  {
    id: 3,
    name: "Wagyu Steak",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    status: "Available"
  }
];