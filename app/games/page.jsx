import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FuturisticNavbar from "../components/futuristic-navbar";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <FuturisticNavbar/>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0">
          <Image
            src="/gamesbg.png"
            alt="Tactical Team Background"
            fill
            className="object-cover object-center opacity-90"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white animate-fadeInUp">
            Games
          </h1>
        </div>
      </section>

      {/* Explore Our Games Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 animate-fadeInUp">
            Explore Our Games
          </h2>

          {/* Featured Game Card */}
          <div className="flex justify-center">
            <div className="group relative max-w-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-md shadow-lg">
                  FEATURED
                </span>
              </div>

              {/* Game Card */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gradient-to-b from-red-600 via-red-700 to-black">
                {/* Card Image */}
                <div className="relative w-[400px] h-[500px]">
                  <Image
                    src="/explore.jpg"
                    alt="Zero Hour Game"
                    fill
                    className="object-covr object-center transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: "center center" }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Link
                      href="https://github.com/kazihasib00/Z-Inception-/releases/download/test/ZI.Installer.File.exe"
                      className="bg-red-600 hover:bg-red-700 text-white px-8
                      py-3 text-lg shadow-xl transform hover:scale-105
                      transition-all duration-300"
                    >
                      {" "}
                      Download Now
                    </Link>
                  </div>
                </div>

                {/* Game Title */}
                <div className="p-6 text-center bg-black">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-800 transition-colors duration-300">
                    Z Inception
                  </h3>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-red-900 text-2xl font-bold">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <path d="M20 0L35 10v20L20 40L5 30V10L20 0z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AttritoM7 Productions is a software company based in Bangladesh,
                specializing in the development of original video game titles,
                including Agontuk and Zero Hour.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-red-900 font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/games"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-red-900 font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>House- 57/A, Road-9A,</p>
                <p>Dhanmondi 1209, Dhaka,</p>
                <p>Bangladesh</p>
                <p className="mt-4">contact@attritom7.com</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-red-900 font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              ©2025 Attrito M7 Productions. ALL RIGHTS RESERVED
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
