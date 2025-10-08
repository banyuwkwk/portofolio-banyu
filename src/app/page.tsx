"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Monitor } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Home() {
  const { lang } = useLanguage();

  const text = {
    en: {
      hi: "Hi, I’m",
      welcome: "Welcome to My Portfolio",
      intro:
        "A passionate developer and designer who loves creating modern, minimal, and aesthetic digital experiences. Currently focusing on web development and creative projects.",
      contact: "Contact Me",
      uiDesign: "UI Design",
      frontend: "Frontend",
    },
    id: {
      hi: "Halo, saya",
      welcome: "Selamat datang di Portofolio saya",
      intro:
        "Seorang developer dan desainer yang suka membuat pengalaman digital modern, minimalis, dan estetik. Saat ini fokus pada pengembangan web dan proyek kreatif.",
      contact: "Hubungi Saya",
      uiDesign: "Desain UI",
      frontend: "Frontend",
    },
  };

  const scrollToSection2 = () => {
    const section2 = document.getElementById("front-end-section");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Section 1 - Welcome */}
        <section
          id="welcome"
          className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1C1C1C] to-[#333232]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4FB89340_0%,_transparent_70%)] animate-pulse"></div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-4xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-4"
          >
            {text[lang].hi} <span className="text-[#4FB893]">Banyu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-xl md:text-2xl text-gray-300 font-medium"
          >
            {text[lang].welcome}
          </motion.p>

          {/* Elegant scroll arrow */}
          <motion.div
            onClick={scrollToSection2}
            className="absolute bottom-10 text-[#4FB893] text-6xl md:text-8xl animate-bounce cursor-pointer drop-shadow-[0_0_20px_#4FB89380]"
          >
            <HiOutlineChevronDown />
          </motion.div>
        </section>

        {/* Section 2 - Front End Developer Section */}
        <section
          id="front-end-section"
          className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] overflow-hidden"
        >
          {/* Background text */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.08, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute text-[10vw] font-extrabold tracking-tight select-none z-0"
          >
            FRONT END DEVELOPER
          </motion.h1>

          {/* Face image with glowing border */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-15 mt-15"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[40px] bg-[#4FB89380] animate-pulse"></div>
              <Image
                src="/home/face.png"
                alt="My Face"
                width={280}
                height={250}
                className="relative rounded-full object-cover border-1 border-[#4FB893] shadow-[0_0_30px_#4FB89380]"
              />
            </div>
          </motion.div>

          {/* Icons section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6 mt-10 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <Monitor size={32} />
              <p className="text-sm text-gray-300">{text[lang].uiDesign}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Code size={32} />
              <p className="text-sm text-gray-300">{text[lang].frontend}</p>
            </div>
          </motion.div>

          {/* Small intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-gray-400 text-center z-10 max-w-md"
          >
            {text[lang].intro}
          </motion.p>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 flex flex-col items-center mt-15"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#4FB893]">
              {text[lang].contact}
            </h3>

            <div className="flex justify-center gap-6 text-3xl text-gray-400">
              <a
                href="mailto:rbanyuf@gmail.com"
                className="hover:text-white transition"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.instagram.com/banyuvwxz"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://discord.gg/banyukkk"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaDiscord />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
