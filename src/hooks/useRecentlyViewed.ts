// src/hooks/useRecentlyViewed.ts

import { useEffect, useState } from "react";
import { Product } from "@/src/types/product";

export function useRecentlyViewed() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const viewed = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    );

    setProducts(viewed);
  }, []);

  return products;
}
