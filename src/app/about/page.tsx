// app/about/page.tsx (Next.js 13+)
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />

    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0F0F0F] text-white px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Foto Profil */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#4FB893] shadow-lg mt-5">
            <Image
              src="/profile.jpg" // ganti dengan path fotomu
              alt="Banyu"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-4xl font-bold mb-3">About Me</h1>
        <p className="text-[#4FB893] mb-8">Designer • Developer • Creator</p>

        {/* Deskripsi */}
        <p className="text-lg leading-relaxed text-gray-300 mb-10">
          Hi, I’m <span className="text-white font-semibold">Banyu</span> — a passionate designer and developer 
          with a love for clean, modern, and meaningful design. I enjoy transforming creative ideas 
          into digital experiences that connect with people.
        </p>

{/* Skill Section */}
<div className="mt-12">
  {/* <h2 className="text-2xl font-semibold mb-6 text-white">My Skills</h2> */}

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
    {[
      { name: "HTML & CSS", icon: "/about/htmlcss.png" },
      { name: "Laravel", icon: "/icons/js.svg" },
      { name: "Next.js", icon: "/icons/react.svg" },
      { name: "PHP", icon: "/icons/laravel.svg" },
      { name: "UI/UX Design", icon: "/icons/design.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ].map((skill, index) => (
      <div
        key={index}
        className="group relative bg-[#1A1A1A] rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-transparent hover:border-[#4FB893] hover:shadow-[0_0_15px_#4FB89340] transition-all duration-300"
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={40}
          height={40}
          className="opacity-80 group-hover:opacity-100 transition"
        />
        <p className="text-gray-300 group-hover:text-white font-medium text-sm">
          {skill.name}
        </p>
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
