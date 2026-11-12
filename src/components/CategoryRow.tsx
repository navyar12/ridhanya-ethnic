"use client";

import "../../app/global.css"
import Link from "next/link";
import { useCategories } from "@/src/hooks/useCategories";
import ErrorMessage from "@/src/components/ui/ErrorMessage";

export default function CategoryRow() {
  const { data: categories, error } = useCategories();

  if (error) {
    return <ErrorMessage message="Unable to load collections. Please try again later." />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {categories.map((item) =>
        item.active && (
          <div
            key={item.title}
            className="bg-[#F8F4ED] rounded-2xl rounded-t-[999px] rounded-b-[999px] border border-[#E7D8BF] shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            <div className="py-1 md:py-4 text-center">
              <Link href={`/products?collection=${item.slug}`}>
                <h3 className="text-md font-serif text-[#2D1B1B]">
                  {item.title}
                </h3>
              </Link>
            </div>

            {/* <div className="relative h-34 md:h-60 ">
              <img
                src={item.image}
                alt={item.title}
                className="absolute bottom-3 left-1/2 -translate-x-1/2"
              />
              <span className="rounded-full bg-[#F8F4EE] px-3 py-1 text-xs text-[#6D0C22] shadow">
                {item.tag}
              </span>
            </div> */}

          </div>
        )
      )}
    </div>
  )}