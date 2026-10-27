export interface Product {
  id: string;
  name: string;
  price: number;
  fabric: string;
  slug: string;
  blouse: string;
  description: string;
  washCare: string;
  variantCount: number;
  variants: {
    color: string;
    image: string;
  }[];
}