
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCardRow from "@/components/catagoryCardRow";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#FFFFFF] ">

      <div className="relative overflow-hidden bg-[#F8F4EE] mt-15 mx-auto max-w-7xl">
        {/* Left Glow */}
        {/* <div className="absolute left-0 top-0 h-full w-64 bg-gradient-to-r from-[#D9B56B]/40 to-transparent" /> */}

        {/* Right Glow */}
        {/* <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-[#D9B56B]/40 to-transparent" /> */}

        {/* Content */}
        <div className="relative z-10">
          <HeroCarousel />
        </div>
      </div>

      {/* Featured Categories */}
      <section className=" px-6 py-12 mx-auto max-w-7xl">
        <>
          <h3 className="mb-8 text-center text-3xl font-serif font-semibold text-[#5B0D22]"> Our Collections </h3>
          <CategoryCardRow />
        </>
      </section>

    </main>
  );
}


{/* <a
  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    className="dark:invert h-[14px] w-4"
    src="/vercel.svg"
    alt="Vercel logomark"
    width={16}
    height={14}
  />
  Deploy Now
</a> */}