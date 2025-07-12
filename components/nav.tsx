"use client";

import { useState } from "react";
import { routes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navRoutes = [
  { name: "About", href: routes.ABOUT },
  { name: "Classes", href: routes.CLASSES },
  { name: "Contact", href: routes.CONTACT },
];

const Nav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex items-center justify-between text-white bg-transparent">
      {/* Logo */}
      <Link href={routes.HOME} className="text-2xl font-bold cursor-pointer">
        Abeth
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navRoutes.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={i}
              href={link.href}
              className={`cursor-pointer hover:underline ${
                isActive ? "underline font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Desktop Action Button */}
      <div className="ml-4 hidden md:block space-x-2">
        <Link
          href={routes.BOOK_CLASS}
          className="border px-4 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
        >
          Book a Class →
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden cursor-pointer text-white focus:outline-none z-30"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {/* Toggle between hamburger and X icon */}
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/40 text-white flex flex-col items-start px-8 py-6 space-y-4 md:hidden z-20">
          {navRoutes.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                className={`block w-full text-lg ${
                  isActive ? "font-bold underline" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href={routes.BOOK_CLASS}
            className="mt-4 border px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Class →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
