"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();

  const text = {
    en: {
      title: "About Me",
      subtitle: "Designer • Developer",
      description:
        "Hi, I’m Banyu — a passionate designer and developer who loves creating modern, minimal, and meaningful designs. I focus on building clean, functional, and aesthetic digital experiences that truly connect with people.",
      skills: [
        "HTML & CSS",
        "Laravel",
        "Next.js",
        "PHP",
        "UI/UX Design",
        "Tailwind CSS",
      ],
    },
    id: {
      title: "Tentang Saya",
      subtitle: "Desainer • Developer",
      description:
        "Halo, saya Banyu — seorang desainer dan developer yang suka membuat desain modern, minimal, dan bermakna. Saya fokus membuat pengalaman digital yang bersih, fungsional, dan estetik yang benar-benar terhubung dengan orang.",
      skills: [
        "HTML & CSS",
        "Laravel",
        "Next.js",
        "PHP",
        "Desain UI/UX",
        "Tailwind CSS",
      ],
    },
  };

  return (
    <div>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2B2B2B] text-white px-6 py-20 relative overflow-hidden">
        {/* Efek background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,184,147,0.1)_0%,_transparent_70%)]"></div>

        <div className="max-w-4xl w-full text-center relative z-10">
          {/* Judul */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-md animate-fade-in">
            {text[lang].title.split(" ")[0]}{" "}
            <span className="text-[#4FB893]">{text[lang].title.split(" ")[1]}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#4FB893] text-lg md:text-xl mb-10 tracking-wide">
            {text[lang].subtitle}
          </p>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-16 animate-slide-up">
            {text[lang].description}
          </p>

          {/* Skill Section - 6 per baris */}
          <div className="mt-12 animate-fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {text[lang].skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] px-4 py-3 rounded-lg flex items-center justify-center text-center border border-transparent hover:border-[#4FB893] hover:shadow-[0_0_15px_#4FB89340] transition-all duration-300 font-medium text-gray-300 hover:text-white text-sm md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
