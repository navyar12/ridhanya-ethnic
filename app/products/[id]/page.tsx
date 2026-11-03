//app/products/[id]/page.tsx

"use client";

import Link from "next/link";
import ProductGallery from "@/src/components/ProductGallery";
import BrowserBackButton from '@/src/components/BrowserBack'
import { useParams, useSearchParams, useRouter} from "next/navigation";
import { useProduct } from "@/src/hooks/useProduct";
import ErrorMessage from "@/src/components/ui/ErrorMessage";
import Button from "@/src/components/ui/Button";
import Image from "next/image";
import { PRODUCT_PLACEHOLDER } from "@/src/constants/images";

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

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const handleInstagramOrder = async () => {
    const productUrl = window.location.href;

    const message = `Hi Ridhanya Ethnic 🌸

    I'm interested in this saree:
    ${productUrl} 
    Share the saree details.`;

    await navigator.clipboard.writeText(message);

    alert(
      "Product details copied. Paste the message in Instagram DM."
    );

    window.open(
      "https://www.instagram.com/ridhanya.ethnic/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow md:grid-cols-2">

          <Link
            href="/products"
            className="text-sm text-gray-500 md:hidden" > 
            <BrowserBackButton/>
          </Link>

        <ProductGallery
          variants={product.variants}
          selectedColor={selectedColor}
        />
        <div>
          <Link
            href="/products"
            className="text-sm text-gray-500 hidden md:block" > 
            <BrowserBackButton/>
          </Link>


          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#5B0D22]">
            {product.name}
          </h1>

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
                  className={`overflow-hidden rounded-xl border-2 ${
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

          <p className="mt-4 text-2xl font-semibold text-[#5B0D22]">
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

              <Button rel="noopener noreferrer" onClick={handleInstagramOrder}
              className="rounded-full border border-[#E6D3B3] py-4 px-6 text-center text-[#5B0D22] shadow-sm bg-[#D4A84F] transition hover:bg-[#d7d2bd]">
                Order on Instagram
              </Button>

          </div>

        </div>

      </div>
    </main>
  );
}