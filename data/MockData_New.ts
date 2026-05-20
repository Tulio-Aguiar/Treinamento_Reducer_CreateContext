export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Tênis Urban Runner",
    price: 349.9,
    category: "Calçados",
    stock: 12,
  },
  {
    id: "p2",
    name: "Jaqueta Minimal",
    price: 529.0,
    category: "Vestuário",
    stock: 5,
  },
  {
    id: "p3",
    name: "Mochila Tática",
    price: 289.9,
    category: "Acessórios",
    stock: 8,
  },
  {
    id: "p4",
    name: "Relógio Field",
    price: 899.0,
    category: "Acessórios",
    stock: 3,
  },
  {
    id: "p5",
    name: "Camiseta Essencial",
    price: 89.9,
    category: "Vestuário",
    stock: 24,
  },
  {
    id: "p6",
    name: "Boné Structured",
    price: 129.9,
    category: "Acessórios",
    stock: 15,
  },
];
