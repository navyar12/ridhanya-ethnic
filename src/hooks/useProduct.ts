import { getProductById } from "@/src/services/productService";
import { Product } from "@/src/types/product";
import { useAsyncData } from "@/src/hooks/useAsyncData";

export function useProduct(id: string) {
  const result = useAsyncData<Product | null>(
    `product:${id}`,
    () => getProductById(id),
    null,
  );

  return { ...result, product: result.data };
}