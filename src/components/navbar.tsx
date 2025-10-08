"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

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
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      }`}
    >
      <div className="relative group">
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-full border border-[#4FB893] opacity-60 blur-md animate-glow pointer-events-none"></div>
        {/* Gradient bergerak */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4FB89310] via-[#4FB89330] to-[#4FB89310] opacity-60 blur-lg animate-gradient-move pointer-events-none"></div>

        {/* Konten Navbar */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between border border-[#4FB893] shadow-[0_0_20px_#4FB89330] overflow-hidden">
          {/* Logo */}
          <div className="text-white font-extrabold text-lg tracking-wide">
            <Link href="/">NYU</Link>
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

          {/* Toggle Bahasa (Desktop) */}
          <div
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="hidden md:flex ml-6 w-16 h-8 items-center bg-[#4FB893]/20 border border-[#4FB89380] rounded-full cursor-pointer p-1 transition shadow-[0_0_12px_#4FB89380]"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 text-white shadow-[0_0_8px_#4FB893] ${
                lang === "en"
                  ? "translate-x-8 bg-[#4FB893]"
                  : "translate-x-0 bg-[#4FB893]"
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
          <div className="md:hidden mt-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 py-4 px-6 flex flex-col items-center space-y-4 shadow-lg animate-fadeIn relative z-10">
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

            {/* Toggle bahasa (Mobile) */}
            <div
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="w-16 h-8 flex items-center bg-[#4FB893]/20 border border-[#4FB89380] rounded-full cursor-pointer p-1 transition shadow-[0_0_12px_#4FB89380]"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 text-white shadow-[0_0_8px_#4FB893] ${
                  lang === "en"
                    ? "translate-x-8 bg-[#4FB893]"
                    : "translate-x-0 bg-[#4FB893]"
                }`}
              >
                {lang.toUpperCase()}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
