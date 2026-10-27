import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#5B0D22] py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-serif">
          See More Sarees on Instagram
        </h3>

        <p className="mb-6 text-white/80">
          Browse our latest collections and place orders through Instagram DM.
        </p>

        <a
          href="https://www.instagram.com/ridhanya.ethnic/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#D4A84F] px-8 py-4 font-medium text-[#5B0D22]">Order on Instagram
        </a>
      </section>
    </footer>
  )}