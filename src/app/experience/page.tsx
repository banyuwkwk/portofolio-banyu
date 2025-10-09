"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperiencePage() {
  const { lang } = useLanguage();

  // Multi-language text
  const text = {
    en: {
      pageTitle: "My Experience",
      livePreview: "Live Preview",
      liveNotAvailable: "Live preview not available",
      technologiesUsed: "Technologies Used",
    },
    id: {
      pageTitle: "Pengalaman Saya",
      livePreview: "Lihat Langsung",
      liveNotAvailable: "Tampilan langsung tidak tersedia",
      technologiesUsed: "Teknologi yang Digunakan",
    },
  };

  const projects = [
    {
      title: "E-Commerce YAVA",
      desc: {
        en: "In the YAVA e-commerce development project, I served as a Front-End Developer in a team of five, fully responsible for ensuring the website's appearance was responsive, intuitive, and user-friendly. Using NextJS, my primary contributions included building the entire User Interface (UI), from the homepage to the dynamic checkout feature, as well as integrating an API that enabled the backend team to display product data in real-time. The project's success was in creating a seamless and fast shopping experience, ready for public launch.",
        id: "Dalam proyek pengembangan e-commerce YAVA, saya berperan sebagai Front-End Developer dalam tim beranggotakan lima orang, bertanggung jawab penuh untuk memastikan tampilan website responsif, intuitif, dan ramah pengguna. Menggunakan NextJS, kontribusi utama saya termasuk membangun seluruh User Interface (UI), dari homepage hingga fitur checkout dinamis, serta mengintegrasikan API agar tim backend bisa menampilkan data produk secara real-time. Keberhasilan proyek ini menciptakan pengalaman belanja yang mulus dan cepat, siap untuk diluncurkan publik.",
      },
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      images: [
        "/experience/yava/experience1.png",
        "/experience/yava/experience2.png",
        "/experience/yava/experience3.png",
      ],
      live: "https://yava.k8s.redtech.co.id/",
    },
    {
      title: "JPS-RE",
      desc: {
        en: "In the JPSRE insurance-themed website project, I contributed as a Front-End Developer to a team tasked with building a professional and reliable policy information and simulation platform. Using Laravel, my primary focus was designing a clean, easy-to-navigate, and responsive User Interface (UI) across multiple devices. I was responsible for creating an interactive premium calculation simulation and a valid application form, ensuring a safe and efficient user experience for potential customers.",
        id: "Dalam proyek website bertema asuransi JPSRE, saya berkontribusi sebagai Front-End Developer dalam tim yang ditugaskan untuk membangun platform informasi dan simulasi polis yang profesional dan dapat diandalkan. Menggunakan Laravel, fokus utama saya adalah merancang User Interface (UI) yang bersih, mudah dinavigasi, dan responsif di berbagai perangkat. Saya bertanggung jawab membuat simulasi perhitungan premi interaktif dan formulir aplikasi yang valid, memastikan pengalaman pengguna yang aman dan efisien bagi calon pelanggan.",
      },
      tech: ["Laravel", "Bootstrap", "PHP"],
      images: [
        "/experience/jpsre/jpsre1.png",
        "/experience/jpsre/jpsre2.png",
        "/experience/jpsre/jpsre3.png",
      ],
      live: "https://jpsre.k8s.redtech.co.id/",
    },
    {
      title: "NAWA-DATA",
      desc: {
        en: "In the NAWA DATA website development project, which serves as an internal system for data replication and management, I served as a Front-End Developer. I utilized native web technologies to build a clean, functional User Interface (UI), focused on efficient data entry. My primary task was to design complex data input forms for ease of use and validation using pure JavaScript, while ensuring each interface component was lightweight and optimized for optimal performance without external frameworks.",
        id: "Dalam proyek pengembangan website NAWA DATA, yang berfungsi sebagai sistem internal untuk replikasi dan manajemen data, saya berperan sebagai Front-End Developer. Saya menggunakan teknologi web native untuk membangun User Interface (UI) yang bersih dan fungsional, fokus pada efisiensi input data. Tugas utama saya adalah merancang form input data kompleks agar mudah digunakan dan divalidasi menggunakan JavaScript murni, sambil memastikan setiap komponen antarmuka ringan dan optimal tanpa framework eksternal.",
      },
      tech: ["HTML", "CSS"],
      images: [
        "/experience/nawa/nawa1.png",
        "/experience/nawa/nawa2.png",
        "/experience/nawa/nawa3.png",
      ],
      live: "",
    },
  ];

  const [currentSlides, setCurrentSlides] = useState<number[]>(
    projects.map(() => 0)
  );

  const nextSlide = (projectIndex: number, total: number) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[projectIndex] = (newSlides[projectIndex] + 1) % total;
      return newSlides;
    });
  };

  const prevSlide = (projectIndex: number, total: number) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[projectIndex] =
        (newSlides[projectIndex] - 1 + total) % total;
      return newSlides;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center px-6 py-24">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-14 drop-shadow-[0_0_10px_#4FB893] text-center"
        >
          {text[lang].pageTitle.split(" ")[0]}{" "}
          <span className="text-[#4FB893]">{text[lang].pageTitle.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Project Cards */}
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mb-20 bg-[#1A1A1A]/50 border border-[#4FB893] rounded-2xl p-8 shadow-[0_0_25px_#4FB89340] hover:shadow-[0_0_45px_#4FB89380] transition-all duration-500"
          >
            {/* Kiri - Deskripsi */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2 text-left space-y-4"
            >
              <h2 className="text-3xl font-bold text-[#4FB893] drop-shadow-[0_0_6px_#4FB893]">
                {project.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.desc[lang]}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-200 mb-2">
                  {text[lang].technologiesUsed}:
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-[#0F0F0F] border border-[#4FB89360] px-3 py-1 rounded-lg text-sm text-[#4FB893] shadow-[0_0_8px_#4FB89330]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol Live Preview / Coming Soon */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#4FB893] hover:bg-[#3da57c] text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#4FB893]"
                  >
                    {text[lang].livePreview}
                  </a>
                ) : (
                  <div>
                    <button
                      disabled
                      className="inline-block bg-red-600 cursor-not-allowed text-white font-medium px-5 py-2 rounded-lg shadow-[0_0_15px_#ff000050]"
                    >
                      {text[lang].livePreview}
                    </button>
                    <p className="text-sm text-gray-400 italic mt-2">
                      {text[lang].liveNotAvailable}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Kanan - Slider Gambar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:w-1/2 relative w-full max-w-lg overflow-hidden rounded-xl border border-[#4FB89380] shadow-[0_0_30px_#4FB89350]"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlides[i] * 100}%)`,
                }}
              >
                {project.images.map((img, k) => (
                  <div key={k} className="min-w-full">
                    <Image
                      src={img}
                      alt={`Project ${i + 1} Image ${k + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-80 rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Tombol navigasi slider */}
{/* Tombol navigasi slider */}
<button
  onClick={() => prevSlide(i, project.images.length)}
  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-white transition-all shadow-[0_0_8px_#4FB893]"
>
  ❮
</button>
<button
  onClick={() => nextSlide(i, project.images.length)}
  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-white transition-all shadow-[0_0_8px_#4FB893]"
>
  ❯
</button>

            </motion.div>
          </motion.div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
