export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  status: 'Available' | 'Out of Stock' | 'Sold Out';
}


export const products: Product[] = [
  {
    id: 1,
    name: "Classic Burger",
    price: 1200.00,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
    status: "Available"
  },
  {
    id: 2,
    name: "French Fries",
    price: 800.00,
    image: "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
    status: "Available"
  },
  {
    id: 3,
    name: "Wagyu Steak",
    price: 1400.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    status: "Available"
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    price: 1850.00,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800",
    status: "Available"
  },
  {
    id: 5,
    name: "Fresh Garden Salad",
    price: 1900.00,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
    status: "Available"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: 750.00,
    image: "https://www.billyparisi.com/wp-content/uploads/2022/02/lava-cake-1.jpg",
    status: "Available"
  },
  {
    id: 7,
    name: "Iced Caramel Macchiato",
    price: 480.00,
    image: "https://www.zulaykitchen.com/cdn/shop/articles/Easy_Iced_Caramel_Macchiato_Two_Delicious_Ways_to_Satisfy_Your_Coffee_Cravings.jpg?v=1743022060&width=5280",
    status: "Available"
  },
  {
    id: 8,
    name: "Grilled Salmon",
    price: 2400.00,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800",
    status: "Available"
  },
  {
    id: 9,
    name: "Chicken Tacos",
    price: 750.00,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800",
    status: "Sold Out"
  },
  {
    id: 10,
    name: "Sushi Platter",
    price: 1900.00,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
    status: "Available"
  }
];