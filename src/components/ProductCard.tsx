import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import {Product} from '@/src/types/product';
import { PRODUCT_PLACEHOLDER } from "@/src/constants/images";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className={`${styles.card} overflow-hidden rounded-2xl border border-[#E7D8BF] bg-white shadow-sm transition hover:shadow-lg`}>
      <div className="relative h-80 w-full">
       <Image
          src={product.variants?.[0]?.images?.[0] || PRODUCT_PLACEHOLDER}
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

      <div className="p-4 h-40 relative">
        <h3 className="text-md font-semibold text-[#000] line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-md font-semibold text-[#5B0D22]">
            {`Rs.${product.sellingPrice.toFixed(2)}`}
          </span>
          <span className="text-sm text-[#5B0D22] line-through">
            {`Rs.${product.actualPrice.toFixed(2)}`}
          </span>
        </div>

        <Link
          href={`/products/${product.id}?color=${product.variants[0]?.color}`}
          className="mt-4 block rounded-full border border-[#B08A4A] py-1 text-[14px] text-center text-[#5B0D22] transition hover:bg-[#5B0D22] hover:text-white
          absolute bottom-5 m-auto left-5 right-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}