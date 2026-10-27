"use client";

import "../app/global.css";
import { categories } from "@/data/categories";
import Link from "next/link";

export default function CategoryCardRow() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {categories.map((item) => (
      <div key={item.title}
        className="bg-white rounded-2xl rounded-t-[999px] rounded-b-[50px] border border-[#E7D8BF] shadow-sm hover:shadow-lg transition overflow-hidden" >
        <div className="relative h-72 ">
          <img
            src={item.image}
            alt={item.title}
            className="absolute bottom-3 left-1/2 -translate-x-1/2"
          />
          <span className="rounded-full bg-[#F8F4EE] px-3 py-1 text-xs text-[#6D0C22] shadow">
            {item.tag}
          </span>
        </div>
        <div className="py-4 text-center">
          <Link href={`/products?category=${item.slug}`}>
            <h3 className="text-2xl font-serif text-[#2D1B1B]">
              {item.title}
            </h3>
          </Link>
        </div>
      </div>
    ))}
  </div>
      
)}