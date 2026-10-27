"use client";

import {useState, useEffect} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "../../app/global.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {getBanners} from "@/src/services/bannerService";
import {Banner} from "@/src/types/banner";

export default function HeroCarousel() {

  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const loadBanners = async () => {
      const bannersData = await getBanners();

      const activeBanners = bannersData
        .filter((banner) => banner.active)
        .sort((a, b) => a.displayOrder - b.displayOrder);

      setBanners(activeBanners);
    };

    loadBanners();
  }, []);

  return (
    // aspect-[16/6] for 16:6 ratio or aspect-[21/7] for 21:7 ratio, you can adjust the ratio as needed
    <div className="overflow-hidden" > 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true} // show navigation arrows
        pagination={{ clickable: true }} // show pagination dots
        loop={true}
        // autoplay={{
        //   delay: 5000, // speed between slides
        //   pauseOnMouseEnter: true, // stops on hover // Mouse leaves // Rotation restarts
        // }}
        speed={700} // transition animation speed // 300 = fast // 800 = smooth // 1500 = slow
        className="overflow-hidden"
      >

        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden md:rounded-xl md:hidden">
              <Image
                src={banner.mobImage}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden md:rounded-xl" />

              <div className="absolute left-5 top-6 max-w-xl">

                <p className={`mb-3 text-xs uppercase tracking-[0.25em] 5B0D22`}>
                  {banner.subTitle}
                </p>

                <h2 className={`mb-2 text-2xl font-serif font-bold leading-tight text-[#5B0D22] md:text-6xl`}>
                  {banner.title}
                </h2>

                <p className={`mt-4 text-sm mb-8 max-w-md text-lg text-[#5B0D22]`}>
                  {banner.description}
                </p>

                <Link
                    href={banner.buttonLink}
                    className="rounded-full bg-[#6A1124] px-8 py-4 font-medium text-white transition hover:bg-[#55101e]"
                  >{banner.buttonText}
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-xl hidden md:block">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden rounded-xl" />

              <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xl">

                <p className={`mb-3 text-sm uppercase tracking-[0.25em] 5B0D22`}>
                  {banner.subTitle}
                </p>

                <h2 className={`mb-6 text-5xl font-serif font-bold leading-tight text-[#5B0D22] md:text-6xl`}>
                  {banner.title}
                </h2>

                <p className={`mt-4 text-lg mb-8 max-w-md text-lg text-[#5B0D22]`}>
                  {banner.description}
                </p>

                <Link
                    href={banner.buttonLink}
                    className="rounded-full bg-[#6A1124] px-8 py-4 font-medium text-white transition hover:bg-[#55101e]"
                  >{banner.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}