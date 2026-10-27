"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Wishlist", href: "/wishlist" }
];

export default function Navbar() {
  return (
    <>

    <header className="sticky top-0 z-50 bg-[#F8F4ED] shadow-md">
      <div className="mx-auto flex max-w-7xl items-left px-6 py-1">

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col px-6 py-1 items-center gap-0"
        >
          <Image
            src="/logo-r.png"
            alt="Ridhanya Logo"
            width={100}
            height={100}
          />
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex px-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href} 
              className="text-[#5B0D22] transition hover:text-[#C49A4A]">
              {link.label}
            </Link>

          ))}
        </nav>

      </div>
    </header>
    </>
)}