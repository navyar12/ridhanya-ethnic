"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Variant} from '@/src/types/variant';
import { PRODUCT_PLACEHOLDER } from "@/src/constants/images";

export default function ProductCarousel({
  variants,
}: {
  variants: Variant[];
}) {
  return (
    <Swiper slidesPerView={1}>
      {variants.map((variant) => (
        <SwiperSlide key={variant.color}>
          <img
            src={variant.images?.[0] || PRODUCT_PLACEHOLDER}
            alt={variant.color}
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}