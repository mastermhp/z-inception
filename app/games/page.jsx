import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FuturisticNavbar from "../components/futuristic-navbar";
import AnimatedFooter from "../components/animated-footer";
import SystemRequirements from "../components/system-requirements";

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

        <div className="relative mt-68 z-10 text-center">
          <h2 className="text-6xl font-bold text-white animate-fadeInUp">
            Explore Our Games
          </h2>
        </div>
      </section>

      {/* Explore Our Games Section */}
      <section className="py-28 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          
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

      {/* System Requirements Section */}
      <SystemRequirements />

      {/* Animated Footer */}
      <AnimatedFooter />
    </div>
  );
}
