"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/me/skills", label: "Skills" },
  { href: "/me/projects", label: "Projects" },
  { href: "/me/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-prompt font-bold text-xl gradient-text">
          RP.Dev
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-gray-300 hover:text-indigo-400 font-sarabun transition-colors text-sm font-medium">
              {l.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-indigo-400 font-sarabun transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
