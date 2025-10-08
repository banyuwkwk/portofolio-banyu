"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { lang } = useLanguage();

  const text = {
    en: {
      title: "Get in Touch",
      subtitle: "Need to collaborate, ask something, or just chat? Here’s where you can reach me!",
      contacts: [
        { type: "Gmail", value: "rbanyuf@gmail.com", href: "mailto:rbanyuf@gmail.com", icon: SiGmail },
        { type: "Instagram", value: "@banyuvwxyz", href: "https://instagram.com/banyuvwxyz", icon: FaInstagram },
        { type: "Discord", value: "banyukkk", href: "https://discord.gg/bay", icon: FaDiscord },
      ],
    },
    id: {
      title: "Hubungi Saya",
      subtitle: "Ingin berkolaborasi, bertanya sesuatu, atau sekadar ngobrol? Berikut cara menghubungi saya!",
      contacts: [
        { type: "Gmail", value: "rbanyuf@gmail.com", href: "mailto:rbanyuf@gmail.com", icon: SiGmail },
        { type: "Instagram", value: "@banyuvwxyz", href: "https://instagram.com/banyuvwxyz", icon: FaInstagram },
        { type: "Discord", value: "banyukkk", href: "https://discord.gg/bay", icon: FaDiscord },
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2B2B2B] text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4FB89320_0%,_transparent_70%)] blur-3xl"></div>

        {/* Title Section */}
        <div
          className="text-center mb-14 mt-12 relative z-10 opacity-0 translate-y-10 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            {text[lang].title.split(" ")[0]}{" "}
            <span className="text-[#4FB893]">{text[lang].title.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">{text[lang].subtitle}</p>
        </div>

        {/* Contact Card */}
        <div
          className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_#4FB89310] hover:shadow-[0_0_60px_#4FB89320] transition-all duration-500 opacity-0 translate-y-10 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <ul className="space-y-8 text-lg">
            {text[lang].contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <li key={idx} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4">
                    <Icon className="text-gray-300 text-3xl group-hover:scale-110 group-hover:text-white transition-all duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-all duration-300">
                      {contact.type}
                    </span>
                  </div>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4FB893] hover:text-white font-medium transition-all duration-300"
                  >
                    {contact.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Accent Glow Bottom */}
        <div className="absolute bottom-0 w-[300px] h-[300px] bg-[#4FB893]/20 blur-[120px] rounded-full"></div>
      </main>

      <Footer />
    </div>
  );
}
