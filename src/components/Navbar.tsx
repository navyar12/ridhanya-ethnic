"use client";

import {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  // { label: "Wishlist", href: "/wishlist" }
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    
    <header className="sticky top-0 z-50 bg-[#F8F4ED] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 md:justify-start">
        {/* Logo */}
        <Link href="/" className="flex items-center px-0 py-1 md:px-6">
          <Image
            src="https://res.cloudinary.com/wogf5ux1/image/upload/v1793110933/logo-r.png"
            alt="Ridhanya Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 px-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] text-[#5B0D22] transition hover:text-[#C49A4A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-[#5B0D22] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className={`grid bg-[#F8F4ED] transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out md:hidden ${
            open
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col border-t border-[#5B0D22]/10 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[12px] text-[#5B0D22] transition hover:text-[#C49A4A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}