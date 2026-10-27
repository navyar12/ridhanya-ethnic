"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface Variant {
  color: string;
  image: string;
}

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
            src={variant.image}
            alt={variant.color}
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}