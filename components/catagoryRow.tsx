"use client";

import Link from "next/link";

export default function CategoryRow() {

  const categories = [
    { label: "Silk", href: "/products?category=silk" },
    { label: "Banarasi", href: "/products?category=banarasi" },
    { label: "Kanjivaram", href: "/products?category=kanjivaram" },
    { label: "Cotton", href: "/products?category=cotton" }
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item, index) => (
              <Link href={item.href} key={item.href}
                className={`rounded-full px-5 py-2 text-sm border transition
                  ${
                    index === 0
                      ? "bg-[#D8B16D] text-[#6D0C22]"
                      : "bg-[#F8F4EE] border-[#D8B16D] text-[#6D0C22] hover:bg-[#F5E7C5]"
                  }
                `} >{item.label}
              </Link>
            )
          )}
        </div>
    </>
)}