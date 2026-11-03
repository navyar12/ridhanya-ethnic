"use client";

import { getProducts } from "@/src/services/productService";
import { Product } from "@/src/types/product";
import { useAsyncData } from "@/src/hooks/useAsyncData";

const EMPTY_PRODUCTS: Product[] = [];

export function useProducts() {
  return useAsyncData("products", getProducts, EMPTY_PRODUCTS);
}
