// components/ProductGallery.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Variant} from '@/src/types/variant';
import { PRODUCT_PLACEHOLDER } from "@/src/constants/images";

export default function ProductGallery({
  variants,
  selectedColor
}: {
  variants: Variant[];
  selectedColor?: string;
}) {

  const selectedVariant =
    variants.find(
      (v) => v.color === selectedColor
    ) || variants[0];

  const [selectedImage, setSelectedImage] = useState(
    selectedVariant.images?.[0] ||
    PRODUCT_PLACEHOLDER
  );

  useEffect(() => {
    setSelectedImage(
      selectedVariant.images?.[0] ||
      PRODUCT_PLACEHOLDER
    );
  }, [selectedVariant]);


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

      {/* Image Gallery for Selected Color */}
      <div className="mt-4">
        <p className="mb-2 text-sm text-gray-500">
          More Views
        </p>

        <div className="flex gap-2">
          {selectedVariant.images?.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-lg border-2 cursor-pointer ${
                selectedImage === image
                  ? "border-[#6d0c22]"
                  : "border-[#E7D8BF]"
              }`}
            >
              <Image
                src={image}
                alt={`${selectedVariant.color}-${index}`}
                width={60}
                height={90}
                className="h-20 w-14 object-cover"
              />

            </button>
          ))}
        </div>
      </div>

    </div>
  );
}



