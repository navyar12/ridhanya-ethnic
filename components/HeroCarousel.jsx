"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "../app/global.css"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const banners = [
  {
    image: "/hero-banners/banner1.png",
    title: "Handcrafted Elegance",
    titleTxtColor: "text-[#5B0D22]",
    subTitle: "Timeless Elegance",
    subTitleTxtColor: "text-[#5B0D22]",
    desc: " Discover beautifully curated sarees designed to celebrate tradition, grace, and timeless beauty.",
    descTxtColor: "text-[#5B0D22]",
    buttonText: "Explore Collection",
    buttonTextColor: "text-[#5B0D22]",
    buttonColor: "text-[#5B0D22]",
    buttonHoverColor: "text-[#5B0D22]",
    buttonLink: "/products?category=viscose",
  },
  {
    image: "/hero-banners/banner2.png",
    title: "Pure Silk Sarees",
    titleTxtColor: "text-[#5B0D22]",
    subTitle: "Timeless Elegance",
    subTitleTxtColor: "text-[#5B0D22]",
    desc: " Handpicked designs crafted for every occasion.",
    descTxtColor: "text-[#5B0D22]",
    buttonText: "Explore Collection",
    buttonTextColor: "text-[#5B0D22]",
    buttonColor: "text-[#5B0D22]",
    buttonHoverColor: "text-[#5B0D22]",
    buttonLink: "/products?category=semi-mysore-crepe",
  },
  // {
  //   image: "/hero-banners/banner3.jpg",
  //   title: "Kanjivaram Sarees",
  //   titleTxtColor: "text-[#5B0D22]",
  //   subTitle: "Timeless Elegance",
  //   subTitleTxtColor: "text-[#5B0D22]",
  //   desc: "Experience the grandeur of traditional craftsmanship",
  //   descTxtColor: "text-[#5B0D22]",
  //   buttonText: "Explore Collection",
  //   buttonTextColor: "text-[#5B0D22]",
  //   buttonColor: "text-[#5B0D22]",
  //   buttonHoverColor: "text-[#5B0D22]",
  //   buttonLink: "/products?category=wedding",
  // },
  //   {
  //   image: "/hero-banners/banner4.jpg",
  //   title: "Wedding Collection",
  //   titleTxtColor: "text-[#5B0D22]",
  //   subTitle: "Timeless Elegance",
  //   subTitleTxtColor: "text-[#5B0D22]",
  //   desc: "Celebrate your special moments with timeless elegance.",
  //   descTxtColor: "text-[#5B0D22]",
  //   buttonText: "Explore Collection",
  //   buttonTextColor: "text-[#5B0D22]",
  //   buttonColor: "text-[#5B0D22]",
  //   buttonHoverColor: "text-[#5B0D22]",
  //   buttonLink: "/products?category=wedding",
  // },
];

export default function HeroCarousel() {
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
        //h-[70vh]"
      >

        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            {/* <div className="relative h-[65vh] min-h-[500px] max-h-[750px] overflow-hidden"> */}
            <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-3xl">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" />

              <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xl">
              {/* <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 max-w-xs md:max-w-xl"></div> */}

              {/* If some banners are bright: */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" /> */}
                <p className={`mb-3 text-sm uppercase tracking-[0.25em] ${banner.subTitleTxtColor}`}>
                  {banner.subTitle}
                </p>

                <h2 className={`mb-6 text-5xl font-serif font-bold leading-tight ${banner.titleTxtColor} md:text-6xl`}>
                {/* <h2 className="mt-3 text-2xl md:text-5xl font-bold text-white"></h2> */}
                  {banner.title}
                </h2>

                <p className={`mt-4 text-lg mb-8 max-w-md text-lg ${banner.descTxtColor}`}>
                {/* <p className="mt-4 text-sm md:text-lg text-white"></p> */}
                  {banner.desc}
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