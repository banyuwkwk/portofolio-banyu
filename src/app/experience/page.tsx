"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ExperiencePage() {
  // data dummy
  const projects = [
    {
      title: "E-Commerce YAVA",
      desc: "Website e-commerce modern dengan tampilan minimalis dan fitur login, daftar produk, detail produk, serta sistem pembayaran. Dibuat dengan desain bersih dan responsif.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      images: [
        "/experience/yava/experience1.png",
        "/experience/yava/experience2.png",
        "/experience/yava/experience3.png",
      ],
    },
    {
      title: "JPS-RE",
      desc: "Website personal untuk menampilkan pengalaman, skill, dan project. Fokus pada animasi halus dan layout elegan.",
      tech: ["Laravel", "Bootstrap", "Php"],
      images: [
        "/experience/jpsre/jpsre1.png",
        "/experience/jpsre/jpsre2.png",
        "/experience/jpsre/jpsre3.png",
      ],
    },
    {
      title: "NAWA-DATA",
      desc: "Dashboard untuk mengelola produk, pengguna, dan transaksi. Menampilkan data secara dinamis dengan antarmuka profesional.",
      tech: ["HTML", "CSS"],
      images: [
        "/experience/nawa/nawa1.png",
        "/experience/nawa/nawa2.png",
        "/experience/nawa/nawa3.png",
      ],
    },
  ];

  // handle slider per project
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
        <h1 className="text-4xl font-extrabold mb-14 drop-shadow-lg text-center">
          My Experience
        </h1>

        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mb-20"
          >
            {/* Kiri - Deskripsi */}
            <div className="md:w-1/2 text-left space-y-4">
              <h2 className="text-3xl font-bold text-[#4FB893]">
                {project.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.desc}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-200 mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-[#1E1E1E] border border-white/10 px-3 py-1 rounded-lg text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kanan - Slider Gambar */}
            <div className="md:w-1/2 relative w-full max-w-lg overflow-hidden rounded-xl border border-white/20">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlides[i] * 100
                  }%)`,
                }}
              >
                {project.images.map((img, k) => (
                  <div key={k} className="min-w-full">
                    <Image
                      src={img}
                      alt={`Project ${i + 1} Image ${k + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-80"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => prevSlide(i, project.images.length)}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
              >
                ❮
              </button>
              <button
                onClick={() => nextSlide(i, project.images.length)}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
