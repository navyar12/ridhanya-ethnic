// components/ProductGallery.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

interface Variant {
  color: string;
  image: string;
}

export default function ProductGallery({
  variants,
}: {
  variants: Variant[];
}) {
  const [selectedImage, setSelectedImage] = useState(
    variants[0]?.image
  );

  const [selectedVariant, setSelectedVariant] =
  useState(variants[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl border border-[#E7D8BF]">
        <Image
          src={selectedImage}
          alt="Saree"
          width={800}
          height={1200}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-gray-500">
          Color:
        </span>

        <span className="rounded-full bg-[#F8F4ED] px-3 py-1 text-sm font-medium text-[#6d0c22] border border-[#E7D8BF]">
          {selectedVariant.color}
        </span>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.color}
            title={variant.color}
            onClick={() => {
              setSelectedVariant(variant);
              setSelectedImage(variant.image);
            }}
            className={`overflow-hidden rounded-xl border-2 transition
              ${
                selectedVariant.color === variant.color
                  ? "border-[#6d0c22] ring-2 ring-[#6d0c22]/30"
                  : "border-[#E7D8BF] hover:border-[#6d0c22]"
              }
            `}
          >
            <Image
              src={variant.image}
              alt={variant.color}
              width={80}
              height={120}
              className="h-24 w-16 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Color Names */}
      {/* <div className="mt-3 flex flex-wrap gap-3">
        {variants.map((variant) => (
          <span
            key={variant.color}
            className={`rounded-full px-3 py-1 text-sm cursor-pointer
              border transition w-16 text-center
              ${
                selectedVariant.color === variant.color
                  ? "bg-[#6d0c22] text-white border-[#6d0c22]"
                  : "bg-[#F8F4ED] text-[#6d0c22] border-[#E7D8BF] hover:bg-[#d7d2bd]"
              }
            `}
            onClick={() => {
              setSelectedVariant(variant);
              setSelectedImage(variant.image);
            }} >
            {variant.color}
          </span>


        ))}
      </div> */}
    </div>
  );
}



