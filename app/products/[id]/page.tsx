import Link from "next/link";
import { sarees } from "@/data/sarees";
import ProductGallery from "@/components/ProductGallery";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowLeft } from "lucide-react";
import BrowserBackButton from '@/components/BrowserBack'
//import {addToWishlist} from '@/components/WishlistButton'

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = sarees.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-10">
        Product not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow md:grid-cols-2">

        <ProductGallery variants={product.variants} />

        <div>
          <Link
            href="/products"
            className="text-sm text-gray-500" > 
            {/* <ArrowLeftIcon className="h-5 w-5" />
              Back to Products
            <ArrowLeft size={20} />
              Back to Products */}
            <BrowserBackButton/>
          </Link>


          <h1 className="mt-4 text-5xl font-bold text-[#5B0D22]">
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
              <Link href="https://instagram.com/ridhanya.ethnic" target="_blank" rel="noopener noreferrer" 
              className="rounded-2xl border border-[#E6D3B3] bg-white p-4 text-center shadow-sm transition hover:bg-[#d7d2bd]">
              Add to Wishlist
              </Link>

              {/* <button onClick={() => addToWishlist(product)}
                className="rounded-full border px-4 py-2" > Add to Wishlist
              </button> */}

              <Link href="https://instagram.com/ridhanya.ethnic" target="_blank" rel="noopener noreferrer" 
              className="rounded-2xl border border-[#E6D3B3] bg-white p-4 text-center shadow-sm transition hover:bg-[#d7d2bd]">
                Order on Instagram
              </Link>
          </div>

        </div>

    



      </div>
    </main>
  );
}