import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Judul */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-3">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Need to collaborate, ask something, or just chat?  
            Here’s where you can reach me!
          </p>
        </div>

        {/* Daftar media sosial / kontak */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
          <ul className="space-y-5 text-lg">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <i className="bi bi-envelope-fill text-red-400 text-2xl"></i>
                <span className="text-gray-300">Gmail</span>
              </div>
              <a
                href="mailto:rbanyuf@gmail.com"
                className="text-[#4FB893] hover:underline"
              >
                rbanyuf@gmail.com
              </a>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <i className="bi bi-instagram text-pink-500 text-2xl"></i>
                <span className="text-gray-300">Instagram</span>
              </div>
              <a
                href="https://instagram.com/banyuvwxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4FB893] hover:underline"
              >
                @banyuvwxyz
              </a>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <i className="bi bi-discord text-[#5865F2] text-2xl"></i>
                <span className="text-gray-300">Discord</span>
              </div>
              <p className="text-[#4FB893]">banyukkk</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
