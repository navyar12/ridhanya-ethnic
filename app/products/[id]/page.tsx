"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductById } from "@/src/services/productService";
import ProductGallery from "@/src/components/ProductGallery";
import BrowserBackButton from '@/src/components/BrowserBack'
import { useParams } from "next/navigation";
import { Product } from "@/src/types/product";
import PageLoader from "@/src/components/PageLoader";

export default function ProductDetailsPage() {
  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const data = await getProductById(params.id as string);
        setProduct(data);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [params.id]);

  
  if (loading) {
    return <PageLoader />;
  }

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow md:grid-cols-2">

          <Link
            href="/products"
            className="text-sm text-gray-500 md:hidden" > 
            <BrowserBackButton/>
          </Link>

        <ProductGallery variants={product.variants} />

        <div>
          <Link
            href="/products"
            className="text-sm text-gray-500 hidden md:block" > 
            <BrowserBackButton/>
          </Link>


          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#5B0D22]">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-semibold text-[#5B0D22]">
            ₹{product.price}
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>{`✓ ${product.description}`}</li>
            <li>{`✓ ${product.blouse}`}</li>
            <li>{`✓ ${product.washCare}`}</li>
          </ul>

          <div className="flex mt-6 gap-5">
              {/* <Link href="https://instagram.com/ridhanya.ethnic" target="_blank" rel="noopener noreferrer" 
              className="rounded-2xl border border-[#E6D3B3] bg-white p-4 text-center shadow-sm transition hover:bg-[#d7d2bd]">
              Add to Wishlist
              </Link> */}

              <Link href="https://instagram.com/ridhanya.ethnic" target="_blank" rel="noopener noreferrer" 
              className="rounded-full border border-[#E6D3B3] py-4 px-6 text-center text-[#5B0D22] shadow-sm bg-[#D4A84F] transition hover:bg-[#d7d2bd]">
                Order on Instagram
              </Link>

          </div>

        </div>

      </div>
    </main>
  );
}