"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "../../app/global.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useBanners } from "@/src/hooks/useBanners";
import ErrorMessage from "@/src/components/ui/ErrorMessage";

export default function HeroCarousel() {
  const { data: banners, error } = useBanners();

  if (error) {
    return <ErrorMessage message="Unable to load featured collections. Please try again later." />;
  }

  return (
    // aspect-[16/6] for 16:6 ratio or aspect-[21/7] for 21:7 ratio, you can adjust the ratio as needed
    <div className="overflow-hidden" > 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true} // show navigation arrows
        pagination={{ clickable: true }} // show pagination dots
        loop={true}
        // autoplay={{
        //   delay: 3000, // speed between slides
        //   pauseOnMouseEnter: true, // stops on hover // Mouse leaves // Rotation restarts
        // }}
        speed={700} // transition animation speed // 300 = fast // 800 = smooth // 1500 = slow
        className="overflow-hidden"
      >

        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[750px] lg:h-[750px] xl:h-[750px] overflow-hidden md:rounded-xl md:hidden">
              <Image
                src={banner.mobImage}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden md:rounded-xl" />

              <div className="absolute left-5 top-20 max-w-xl">

                <p className={`mb-3 text-sm uppercase tracking-[0.25em] 5B0D22`}>
                  {banner.subTitle}
                </p>

                <h2 className={`mb-2 text-3xl font-serif font-bold leading-tight text-[#5B0D22] md:text-6xl`}>
                  {banner.title}
                </h2>

                <p className={`mt-4 text-sm mb-8 max-w-md text-lg text-[#5B0D22]`}>
                  {banner.description}
                </p>

              </div>
               <div className="absolute left-5 bottom-25 max-w-xl">
                  {banner.buttonText && banner.buttonLink && <Link
                    href={banner.buttonLink}
                    className="rounded-full bg-[#6A1124] px-8 py-4 font-medium text-white transition hover:bg-[#55101e]"
                  >{banner.buttonText}
                </Link>}
              </div>
            </div>
            <div className="relative h-[650px] lg:h-[650px] xl:h-[650px] overflow-hidden rounded-xl hidden md:block">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden rounded-xl" />

              <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xl">

                <p className={`mb-3 text-md uppercase tracking-[0.25em] 5B0D22`}>
                  {banner.subTitle}
                </p>

                <h2 className={`mb-6 text-5xl font-serif font-bold leading-tight text-[#5B0D22] md:text-6xl`}>
                  {banner.title}
                </h2>

                <p className={`mt-4 text-lg mb-8 max-w-md text-lg text-[#5B0D22]`}>
                  {banner.description}
                </p>

                {banner.buttonText && banner.buttonLink &&    
                <Link
                    href={banner.buttonLink}
                    className="rounded-full bg-[#6A1124] px-8 py-4 font-medium text-white transition hover:bg-[#55101e]"
                  >{banner.buttonText}
                </Link>
                }
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}