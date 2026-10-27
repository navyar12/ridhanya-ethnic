"use client";
import ProductCard from "@/components/ProductCard";
import { sarees } from "@/data/sarees";
import { useState } from "react";
import { categories } from "@/data/categories";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPage() {
  
  const params = useSearchParams();
  const category = params.get("category");
  const sort = params.get("sort");

  const router = useRouter();

  const filteredProducts = category
    ? sarees.filter(
        (product) => product.slug === category
      )
    : sarees;

  let products = category
    ? sarees.filter(
        (product) =>
          product.slug === category
      )
    : [...sarees];

    if (sort === "priceAsc") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sort === "priceDesc") {
      products.sort((a, b) => b.price - a.price);
    }

    if (sort === "nameAsc") {
      products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "nameDesc") {
      products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mt-8 mb-15 flex flex-wrap gap-3 justify-between">
          <div className=" flex flex-wrap gap-3 justify-between">
            <button onClick={() => router.push("/products")}
              className={`rounded-full px-4 py-2 transition ${
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
                  className={`rounded-full px-4 py-2 transition ${
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
              className="rounded-lg border border-[#D8B16D] bg-white p-2 text-[#6d0c22]"
            >
              <option value="">Sort By</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A-Z</option>
              <option value="nameDesc">Name: Z-A</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-15">
          {products.map((saree) => (
              <ProductCard
                key={saree.id}
                product={saree}
              />
            )) }
        </div>
      </div>
    </main>
  );
}