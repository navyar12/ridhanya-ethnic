import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F4EE]">
      <div className="flex justify-between mx-auto max-w-6xl font-bold pt-4 px-5 pb-8">
        <span>✓ Handmade accessories with every saree</span>
        <span>✓ Secure shipping across India</span>
        <span>✓ Carefully selected fabrics</span>
      </div>
      <section className="bg-[#5B0D22] py-6 text-center text-white md:flex justify-center gap-10">
        <div>
          <h3 className="mb-3 text-2xl font-serif">
            Loved a saree?
          </h3>



          <p className=" text-white/80">
           Click "Order on Instagram", and we'll help you complete your purchase through DM.
          </p>
        </div>

        <div className="flex justify-center align-center mt-4 md:mt-2">
          <a
            href="https://www.instagram.com/ridhanya.ethnic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#D4A84F] px-8 py-4 font-medium text-[#5B0D22] h-14">Order on Instagram
          </a>
        </div>
      </section>
    </footer>
  )}