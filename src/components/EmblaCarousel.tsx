import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/src/types/product";
import Link from "next/link";
import Image from "next/image";

interface EmblaCarouselProps {
  recentlyViewed: Product[];
  currentSlug: string;
}

export default function EmblaCarousel({
  recentlyViewed,
  currentSlug,
}: EmblaCarouselProps) {

const [emblaRef] = useEmblaCarousel({
  align: "start",
  dragFree: true,
});

return(
  <>
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {recentlyViewed
        .filter((p) => p.slug !== currentSlug)
        .map((item) => (
            <div
              key={item.slug}
              className="min-w-[220px] md:min-w-[300px] md:max-w-[300px] mr-4 p-3 overflow-hidden rounded-2xl border border-[#E7D8BF] bg-white shadow-sm transition hover:shadow-lg"
            >
            <Link
              href={`/products/${item.slug}`}
              className="flex flex-col items-center"
            >
              <Image
                src={item.variants[0].images[0]}
                alt={item.name}
                width={220}
                height={300}
                className="rounded-lg"
              />

              <p className="mt-2 text-sm line-clamp-2 text-center text-[#000000]">
                {item.name}
              </p>

              <div className="mt-2 text-center">
                <p className="text-md font-semibold text-[#5B0D22]">
                  {`Rs.${item.sellingPrice.toFixed(2)}`}
                </p>

                <p className="text-sm text-[#5B0D22] line-through">
                  {`Rs.${item.actualPrice.toFixed(2)}`}
                </p>
              </div>
            </Link>
            </div>
          ))}
      </div>
    </div>
    {recentlyViewed.length > 2 && <p className="m-3 md:hidden text-xs text-gray-500 italic">Swipe to see more →</p>}
    {recentlyViewed.length > 4 && <p className="m-3 hidden md:block text-xs text-gray-500 italic">Swipe to see more →</p>}
    </>
)};