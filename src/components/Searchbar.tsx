//src/components/Searchbar.tsx

"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";
import { useRouter, usePathname } from "next/navigation";
import { useProducts } from "../hooks/useProducts";
import { useDebounce } from "../hooks/useDebounce";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useRedux";
import { RootState } from "@/src/store/store";
import { closeSearch, openSearch } from "../store/searchSlice";
import { PRODUCT_PLACEHOLDER } from "../constants/images";

interface SearchbarProps {
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMode?: boolean;
}

export default function Searchbar({
  setSearchOpen,
  mobileMode = false,
}: SearchbarProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const isSearchOpen = useAppSelector(
    (state: RootState) => state.search.isSearchOpen
  );

  useEffect(() => {
    dispatch(closeSearch());
  }, [pathname, dispatch]);

  const { data: products } = useProducts();

  const results = useMemo<Product[]>(() => {
    if (!debouncedSearch.trim()) {
      return [];
    }

    const query = debouncedSearch.toLowerCase();

    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.collection.toLowerCase().includes(query) ||
        p.productCode?.toLowerCase().includes(query) ||
        p.variants.some((v) => v.color.toLowerCase().includes(query))
    );
  }, [debouncedSearch, products]);
  
  const handleSearch = () => {
    const searchText = search.trim().toLowerCase();

    const product = products.find(
      (p) =>
        p.name.toLowerCase().includes(searchText) ||
        p.productCode?.toLowerCase().includes(searchText)
    );

    if (product) {
      setSearch("");
      router.push(`/products/${product.slug}`);
    }
  }

  if (mobileMode) {
    return (
        <div className="fixed inset-0 z-50 bg-white p-4">
        <div className="flex items-center gap-3 border-b pb-3">
            <button
            onClick={() => setSearchOpen(false)}
            className="text-[#5B0D22]"
            >
            ✕
            </button>

            <input
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by name or code..."
            className="flex-1 outline-none placeholder:text-[#6a7282]"
            />
        </div>

        <div className="mt-4 fixed top-10 bottom-10 left-5 right-5 overflow-y-auto">
            {results.map((product) => (
            <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => {
                setSearchOpen(false);
                setSearch("");
                }}
                className="flex gap-3 border-b p-3"
            >
                <Image
                src={product.variants[0]?.images?.[0] || PRODUCT_PLACEHOLDER}
                width={50}
                height={70}
                alt={product.name}
                />

                <div>
                <p className="text-[#000000] line-clamp-2">{product.name}</p>
                <p className="text-sm text-gray-500">
                    {product.productCode}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-md font-semibold text-[#5B0D22]">
                    {`Rs.${product.sellingPrice.toFixed(2)}`}
                  </span>
                  <span className="text-sm text-[#5B0D22] line-through">
                    {`Rs.${product.actualPrice.toFixed(2)}`}
                  </span>
                </div>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
  }

  return (
    <div>
        {/* <input
        autoFocus={isSearchOpen}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search by name or code..."
        className="h-10 w-full rounded-full border px-4 pl-8 text-sm placeholder:text-sm placeholder:text-gray-400"
        /> */}
        <div className="relative">
        <button
            onClick={() => dispatch(openSearch())}
            //onClick={() => dispatch(toggleSearch())}
            className="hidden md:block rounded-full p-2 hover:bg-gray-100"
        >
            <Search className="text-[#000000]" size={24} />
        </button>

        <button
            onClick={() => setSearchOpen(true)}
            className="md:hidden rounded-full p-2 text-[#000000]"
            >
            <Search size={24} />
            
        </button>

        <div
            className={`
            absolute left-0 top-0 overflow-hidden
            transition-all duration-300 ease-in-out
            ${isSearchOpen ? "w-72" : "w-0"}
            `}
        >
            <input
            autoFocus={isSearchOpen}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by name or code..."
            className="h-10 w-full border-b outline-0 px-4 pl-11 text-sm placeholder:text-[#000000]"
            />
        </div>
        </div>
        
        <div className="mx-auto">
        {isSearchOpen && results.length > 0 && search.trim() && (
            <div className="absolute z-50 mt-2 w-100 max-h-[400px] overflow-y-auto rounded-lg bg-white shadow-lg">
            {results.slice(0, 5).map((product) => (
                <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => {
                  dispatch(closeSearch());
                  setSearch("");
                }}
                className="flex items-center gap-3 p-3 hover:bg-gray-50"
                >
                <Image
                    src={product.variants[0]?.images?.[0] || PRODUCT_PLACEHOLDER}
                    width={50}
                    height={70}
                    alt={product.name}
                    className="rounded"
                />

                <div>
                    <p className="font-medium line-clamp-2">{product.name}</p>
                    <p className="font-medium text-[#6a7282]">{product.productCode}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-md font-semibold text-[#5B0D22]">
                        {`Rs.${product.sellingPrice.toFixed(2)}`}
                      </span>
                      <span className="text-sm text-[#5B0D22] line-through">
                        {`Rs.${product.actualPrice.toFixed(2)}`}
                      </span>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        )}
        </div>
    </div>
  );
}