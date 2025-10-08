"use client";

import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const text = {
    en: {
      brand: "NYU",
      home: "Home",
      about: "About",
      experience: "Experience",
      contact: "Contact",
    },
    id: {
      brand: "NYU",
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      contact: "Kontak",
    },
  };

  return (
    <footer className="relative bg-[#1A1A1A] text-white py-12 flex flex-col items-center justify-center rounded-2xl border border-[#4FB893] mx-5 my-5 shadow-[0_0_25px_#4FB89340] overflow-hidden group">
      
      {/* Efek border glowing */}
      <div className="absolute inset-0 rounded-2xl border border-[#4FB893] opacity-60 blur-md animate-glow pointer-events-none"></div>

      {/* Efek gradient bergerak lembut */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4FB89310] via-[#4FB89330] to-[#4FB89310] opacity-60 blur-lg animate-gradient-move pointer-events-none"></div>

      {/* Konten utama footer */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-lg font-semibold">{text[lang].brand}</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-gray-300 text-sm">
          <a href="/" className="hover:text-white transition">{text[lang].home}</a>
          <a href="/about" className="hover:text-white transition">{text[lang].about}</a>
          <a href="/experience" className="hover:text-white transition">{text[lang].experience}</a>
          <a href="/contact" className="hover:text-white transition">{text[lang].contact}</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <a href="mailto:rbanyuf@gmail.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/banyuvwxyz" target="_blank" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/banyukkk" target="_blank" className="hover:text-white transition">
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
}
