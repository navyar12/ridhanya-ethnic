
import HeroCarousel from "@/src/components/HeroCarousel";
import CategoryRow from "@/src/components/catagoryRow";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#FFFFFF] ">

      <div className="relative overflow-hidden bg-[#F8F4EE] md:mt-15 mx-auto max-w-6xl md:rounded-xl">
        {/* Content */}
        <div className="relative z-10">
          <HeroCarousel />
        </div>
      </div>

      {/* Featured Categories */}
      <section className=" px-6 py-12 mx-auto max-w-6xl">
        <>
          <h3 className="mb-8 text-center text-3xl font-serif font-semibold text-[#5B0D22]"> Our Collections </h3>
          <CategoryRow />
        </>
      </section>

    </main>
  );
}
