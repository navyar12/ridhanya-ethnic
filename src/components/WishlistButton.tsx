"use client";

import { Product } from "@/src/types/product";

export default function addToWishlist(product: Product) {
  const existing = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const alreadyAdded = existing.some(
    (item: Product) => item.id === product.id
  );

  if (!alreadyAdded) {
    localStorage.setItem(
      "wishlist",
      JSON.stringify([...existing, product])
    );
  }
}