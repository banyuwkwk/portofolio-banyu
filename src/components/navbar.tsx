"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = {
    en: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/contact" },
    ],
    id: [
      { name: "Beranda", href: "/" },
      { name: "Tentang", href: "/about" },
      { name: "Pengalaman", href: "/experience" },
      { name: "Kontak", href: "/contact" },
    ],
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between border border-white/20 shadow-lg">
        {/* Logo */}
        <div className="text-white font-extrabold text-lg tracking-wide">
          <Link href="/">MyProfile</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems[lang].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`text-white transition hover:drop-shadow-[0_0_8px_white] ${
                  pathname === item.href
                    ? "text-[#4FB893] drop-shadow-[0_0_6px_#4FB893]"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Bahasa */}
        <div
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="hidden md:flex ml-6 w-16 h-8 items-center bg-[#DDDDDD] rounded-full cursor-pointer p-1 transition"
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
              lang === "en"
                ? "translate-x-8 bg-black text-white drop-shadow-[0_0_6px_black]"
                : "translate-x-0 bg-white text-black drop-shadow-[0_0_6px_white]"
            }`}
          >
            {lang.toUpperCase()}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 py-4 px-6 flex flex-col items-center space-y-4 shadow-lg animate-fadeIn">
          {menuItems[lang].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-white text-sm transition hover:text-[#4FB893] ${
                pathname === item.href ? "text-[#4FB893]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Toggle bahasa di mobile */}
          <div
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="w-16 h-8 flex items-center bg-[#DDDDDD] rounded-full cursor-pointer p-1 transition"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                lang === "en"
                  ? "translate-x-8 bg-black text-white drop-shadow-[0_0_6px_black]"
                  : "translate-x-0 bg-white text-black drop-shadow-[0_0_6px_white]"
              }`}
            >
              {lang.toUpperCase()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
