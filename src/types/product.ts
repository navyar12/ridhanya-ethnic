export interface Product {
  id: string;
  active: true;
  name: string;
  slug: string;
  description: string;
  price: number;
  fabric: string;
  collection: string;
  category: string;
  occasion: string[];
  blouse: string;
  washCare: Array<string>;
  variants: {
    color: string;
    slug: string;
    sku: string;
    stock: number;
    images: string[];
    displayOrder: number;
    active: boolean;
  }[];
  featured: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  shippingReturns: string[];
  shipping: string;
  productCode: string;
  actualPrice: number;
  sellingPrice: number;
  discount: string;
}
