//app/products/[id]/page.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import ProductGallery from "@/src/components/ProductGallery";
import BrowserBackButton from '@/src/components/BrowserBack'
import { useParams, useSearchParams, useRouter} from "next/navigation";
import { useProduct } from "@/src/hooks/useProduct";
import ErrorMessage from "@/src/components/ui/ErrorMessage";
import Button from "@/src/components/ui/Button";
import Image from "next/image";
import { PRODUCT_PLACEHOLDER } from "@/src/constants/images";
import Tabs from "@/src/components/Tabs";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import {useRecentlyViewed} from "@/src/hooks/useRecentlyViewed";
import { Product } from "@/src/types/product";
import EmblaCarousel from "@/src/components/EmblaCarousel";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const { product, error } = useProduct(params.id);

  const searchParams = useSearchParams();
  
  const router = useRouter();

  const selectedColor =
    searchParams.get("color") ||
    product?.variants[0]?.color;

  const selectedVariant =
    product?.variants.find(
      (v) => v.color === selectedColor
    ) || product?.variants[0];


  if (error) {
    return (
      <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
        <ErrorMessage message="Unable to load this product. Please try again later." />
      </main>
    );
  }


  const handleInstagramOrder = async () => {
    const productUrl = window.location.href;

    const message = `Hi Ridhanya Ethnic 🌸

    I'm interested in this saree:
    ${productUrl} 
    Share the saree details.`;

    await navigator.clipboard.writeText(message);

    // alert(
    //   "Product details copied. Paste the message in Instagram DM."
    // );

    window.open(
      "https://www.instagram.com/ridhanya.ethnic/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const recentlyViewed = useRecentlyViewed();

  // frequently viewed
  useEffect(() => {
    if (!product) return;

    const viewed = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    ) as Product[];

    const updated = [
      product,
      ...viewed.filter((p: any) => p.id !== product.id),
    ].slice(0, 8);

    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(updated)
    );



//     localStorage.setItem(
//   "recentlyViewed",
//   JSON.stringify(productIds)
// );

  }, [product]);


  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10 ">
      <div className="mx-auto md:grid md:max-w-6xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sarees", href: "/products" },
            {
              label: product.collection,
              href: `/products?collection=${product.collection}`
            },
            {
              label: selectedVariant?.color || product.name
            }
          ]}
        />

        <div className="mx-auto grid gap-10 rounded-2xl bg-white p-4 md:p-8 shadow md:grid-cols-2">
          <div>
            <Link
              href="/products"
              className="text-sm text-gray-500 md:hidden mb-2 block" > 
              <BrowserBackButton/>
            </Link>

            <ProductGallery
              variants={product.variants}
              selectedColor={selectedColor} />

            <div className="hidden md:block" >
              <Tabs product={{ description: product.description, blouse: product.blouse, washCare: product.washCare, shippingReturns: product.shippingReturns }} />
            </div>

          </div>

          <div>
            <Link
              href="/products"
              className="text-sm text-gray-500 hidden md:block" > 
              <BrowserBackButton/>
            </Link>


            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#000]">
              {product.name}
            </h1>

            <h6 className="italic text-[#000000]">{product.productCode}</h6>

            <div className="mt-6">
              <span className="text-sm text-gray-500">
                Color:
              </span>

              <span className="ml-2 rounded-full bg-[#F8F4ED] px-3 py-1 text-sm font-medium text-[#6d0c22] border border-[#E7D8BF]">
                {selectedVariant?.color}
              </span>

              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.color}
                    title={variant.color}
                    onClick={() => {
                      router.replace(
                        `/products/${product.slug}?color=${encodeURIComponent(
                          variant.color
                        )}`
                      );
                    }}
                    className={`overflow-hidden rounded-xl border-2 cursor-pointer ${
                      selectedVariant?.color === variant.color
                        ? "border-[#6d0c22] ring-2 ring-[#6d0c22]/30"
                        : "border-[#E7D8BF]"
                    }`}
                  >
                  <Image
                    src={variant.images?.[0] || PRODUCT_PLACEHOLDER}
                    alt={variant.color}
                    width={80}
                    height={120}
                    className="h-24 w-16 object-cover"
                  />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-xl font-semibold text-[#5B0D22]">
                {`Rs.${product.sellingPrice.toFixed(2)}`}
              </span>
              <span className="text-md text-[#5B0D22] line-through">
                {`Rs.${product.actualPrice.toFixed(2)}`}
              </span>
            </div>

            <div className="md:hidden" >
              <Tabs product={{ description: product.description, blouse: product.blouse, washCare: product.washCare, shippingReturns: product.shippingReturns }} />
            </div>

            <div className="flex mt-6 gap-5">
                {/* <Link href="https://instagram.com/ridhanya.ethnic" target="_blank" rel="noopener noreferrer" 
                className="rounded-2xl border border-[#E6D3B3] bg-white p-4 text-center shadow-sm transition hover:bg-[#d7d2bd]">
                Add to Wishlist
                </Link> */}

                <Button rel="noopener noreferrer" onClick={handleInstagramOrder}
                className="rounded-full border border-[#E6D3B3] py-4 px-6 text-center text-[#5B0D22] shadow-sm bg-[#D4A84F] transition hover:bg-[#d7d2bd]">
                  Order on Instagram
                </Button>
            </div>

            <p className="mt-2 text-xs text-gray-500 italic">
              Clicking "Order on Instagram" copies the product details. Just paste the message in our Instagram DM.
            </p>

          </div>

        </div>

        <section className="mt-12">
          {recentlyViewed.length > 0 && <h2 className="text-xl font-semibold mb-4 text-[#000000]">
            Recently Viewed
          </h2>}

          <EmblaCarousel
            recentlyViewed={recentlyViewed}
            currentSlug={product.slug}
          />

        </section>
      </div>
    </main>
  );
}