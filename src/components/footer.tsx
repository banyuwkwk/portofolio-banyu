import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#242323] text-white py-12 flex flex-col items-center justify-center rounded-2xl border border-white mx-5 my-5">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-2 mb-6">
        {/* <div className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md"> */}
          {/* <span className="font-bold text-white text-lg">RS</span> */}
        {/* </div> */}
        <span className="text-lg font-semibold">AWIUDAWID</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-8 text-gray-300 text-sm">
        <a href="#" className="hover:text-white transition">Homepage</a>
        <a href="#" className="hover:text-white transition">Products</a>
        <a href="#" className="hover:text-white transition">Services</a>
        <a href="#" className="hover:text-white transition">About Us</a>
        <a href="#" className="hover:text-white transition">Contact Us</a>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl text-gray-400">
        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-white transition"><FaXTwitter /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
}
