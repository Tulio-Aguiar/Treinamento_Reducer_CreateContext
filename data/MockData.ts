export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Curso React 19 + TypeScript",
    price: 197.0,
    description: "Do zero ao avançado com projetos reais.",
  },
  {
    id: "p2",
    name: "Curso NestJS 11 na Prática",
    price: 147.0,
    description: "APIs profissionais com Node.js e TypeScript.",
  },
  {
    id: "p3",
    name: "Mentoria DACH — 4 sessões",
    price: 480.0,
    description: "Preparação técnica para o mercado alemão.",
  },
  {
    id: "p4",
    name: "Template Agency Landing Page",
    price: 89.0,
    description: "Boilerplate React 19 + Tailwind 4 + Zod.",
  },
];
