import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Section 1 - Welcome */}
        <section
          id="welcome"
          className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-[#0F0F0F] to-[#333232]"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Hi, I’m Banyu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Welcome to My Portfolio
          </p>
        </section>

        {/* Section 2 - Profile dengan background image setengah kanan */}
        <section
          id="profile"
          className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 text-white bg-[#0F0F0F] overflow-hidden"
        >
          {/* Background gambar hanya setengah kanan */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-transparent via-[#0F0F0F]/60 to-[#0F0F0F]"
            style={{
              backgroundImage: "url('/home/bg porto.jpg')", // ubah sesuai path kamu
              backgroundSize: "cover",
              backgroundPosition: "center left",
              opacity: 0.5,
            }}
          ></div>

          {/* Konten utama */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center">
            {/* Foto profil */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-1 border-white/20 shadow-lg mb-6 md:mb-0 md:mr-10">
              <img
                src="/home/face.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Deskripsi singkat */}
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4">Hi, I'm Banyu</h2>
              <p className="text-gray-300 leading-relaxed">
                A passionate developer and designer who loves creating modern,
                minimal, and aesthetic digital experiences. Currently focusing
                on web development and creative projects.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
