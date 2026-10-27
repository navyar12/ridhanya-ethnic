import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import {Product} from '@/src/types/product'

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className={`${styles.card} overflow-hidden rounded-2xl border border-[#E7D8BF] bg-white shadow-sm transition hover:shadow-lg`}>
      <div className="relative h-80 w-full">
        <Image
          src={product.variants[0].image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-sm p-4 text-[#6d0c22] h-10">
        {product.variants.length > 1 && (
          <span className="inline-block rounded-full bg-[#F8F4ED] px-3 py-1 text-xs text-[#6d0c22]">
            {product.variants.length} Colors
          </span>
        )}
      </p>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#5B0D22]">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {product.fabric}
        </p>

        <p className="mt-2 text-xl font-bold text-[#5B0D22]">
          ₹{product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block rounded-full border border-[#B08A4A] py-2 text-center text-[#5B0D22] transition hover:bg-[#5B0D22] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}