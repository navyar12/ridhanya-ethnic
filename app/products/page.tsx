"use client";

import {useState, useEffect, useMemo} from "react"
import ProductCard from "@/src/components/ProductCard";
import { getProducts } from "@/src/services/productService";
import { getCategories } from "@/src/services/categoryService";
import { useRouter, useSearchParams } from "next/navigation";
import {Product} from '@/src/types/product';
import {Category} from '@/src/types/category';

export default function ProductsPage() {
  
  const params = useSearchParams();
  const category = params.get("category");
  const sort = params.get("sort");

  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [productsData, categoriesData] =
        await Promise.all([
          getProducts(),
          getCategories(),
        ]);

      setProducts(productsData);
      setCategories(categoriesData);
    };

    loadData();
  }, []);

  const displayProducts = useMemo(() => {
    let data = category
      ? products.filter(
          (product) => product.slug === category
        )
      : [...products];

    switch (sort) {
      case "priceAsc":
        data.sort((a, b) => a.price - b.price);
        break;

      case "priceDesc":
        data.sort((a, b) => b.price - a.price);
        break;

      case "nameAsc":
        data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "nameDesc":
        data.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
    }

    return data;
  }, [products, category, sort]);

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-5 md:py-10">
      <div className="mx-auto max-w-7xl">

        <div className="md:mt-8 mt-4 md:mb-15 mb-5 flex flex-wrap gap-3 justify-between">
          <div className=" flex flex-wrap gap-1 justify-between">
            <button onClick={() => router.push("/products")}
              className={`rounded-full px-4 py-2 transition text-[12px] ${
                !category
                  ? "bg-[#6d0c22] text-white"
                  : "border border-[#D8B16D] bg-white text-[#6d0c22]"
              }`} >All</button>
              {categories.map((fabric) => (
                <button
                  key={fabric.fabricType}
                  onClick={() =>
                    router.push(`/products?category=${fabric.slug}`)
                  }
                  className={`rounded-full px-4 py-2 transition text-[12px] ${
                    category === fabric.slug
                      ? "bg-[#6d0c22] text-white"
                      : "border border-[#D8B16D] bg-white text-[#6d0c22]"
                  }`}
                >
                  {fabric.fabricType}
                </button>
              ))}
          </div>
        
          <div>
            <select
              value={sort || ""}
              onChange={(e) => {
                const newParams = new URLSearchParams(params);

                if (e.target.value) {
                  newParams.set("sort", e.target.value);
                } else {
                  newParams.delete("sort");
                }

                router.push(`/products?${newParams.toString()}`);
              }}
              className="rounded-lg border border-[#D8B16D] bg-white p-2 text-[#6d0c22] text-[12px]"
            >
              <option value="">Sort By</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A-Z</option>
              <option value="nameDesc">Name: Z-A</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-15 mt-6">
          {displayProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
              />
            )) }
        </div>
      </div>
    </main>
  );
}