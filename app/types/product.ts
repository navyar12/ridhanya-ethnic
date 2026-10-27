export interface Product {
  id: number;
  name: string;
  price: number;
  fabric: string;
  slug: string;
  variants: {
    color: string;
    image: string;
  }[];
}