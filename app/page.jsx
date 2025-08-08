import FuturisticNavbar from "./components/futuristic-navbar";
import AnimatedHero from "./components/animated-hero";
import AnimatedFooter from "./components/animated-footer";
import Image from "next/image";

export default function FuturisticHomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FuturisticNavbar />
      <AnimatedHero />

      {/* Game Description Section */}
      <section className="py-28 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
          <div className="col-span-1 glass-morphism p-12 rounded-2xl neon-border animate-slide-in-left">
            <div className="text-center">
              <div className="text-cyber text-6xl font-black mb-4 holographic animate-hologram">
                Z
              </div>
              <div className="text-cyber text-6xl font-black text-[#700002] animate-neon-glow">
                INCEPTION
              </div>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-[#2d0102] to-transparent"></div>
            </div>
          </div>

          <div className="col-span-2 space-y-6 animate-slide-in-right">
            <p className="text-gaming text-sm text-gray-300 leading-relaxed">
              Z Inception is a gripping first-person zombie shooter set in a
              world where chaos has just begun. The story unfolds in Inception
              City, a futuristic metropolis inspired by real-world urban
              landscapes. A classified experiment gone wrong at the NSU Research
              Lab unleashes a deadly virus, turning ordinary citizens into
              ruthless undead. As panic spreads, the city collapses into silence
              — except for the haunting sounds of survival.
            </p>
            <p className="text-gaming text-sm text-gray-300 leading-relaxed">
              You are part of Inception Force, an elite unit deployed to contain
              the outbreak and uncover the truth. From the dense streets of the
              infected city to eerie research labs and abandoned coastlines,
              every mission will test your aim, instincts, and courage. This is
              not just another zombie game — it's your fight for humanity's
              final stand. Are you ready to pull the trigger?
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Door Mechanics */}
      <section className="py-28 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="/inception-city.png"
                alt="Dynamic Door Mechanics"
                width={600}
                height={400}
                className="rounded-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              Inception City
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2d0102] to-[#700002] animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Ground zero. Chaos spreads through the streets.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Suspect AI */}
      <section className="py-28 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              Cox's Bazar
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2d0102] to-[#700002] animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Coastal paradise turned warzone. Beaches, blood, and survival.
            </p>
          </div>

          <div className="relative order-1 lg:order-2 animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="/coxs-bazar.png"
                alt="Dynamic Suspect AI"
                width={600}
                height={400}
                className="rounded-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapon Customization */}
      <section className="py-28 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="/NSU_Research_Lab.png"
                alt="Weapon Customization"
                width={600}
                height={400}
                className="rounded-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-cyber text-4xl font-black holographic animate-hologram">
              NSU Research Lab
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2d0102] to-[#700002] animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              A secret experiment gone wrong. Now it's crawling with danger.
            </p>
          </div>
        </div>
      </section>

      {/* Intense Tactical Action */}
      <section className="py-28 mb-10 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              INTENSE TACTICAL ACTION
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2d0102] to-[#700002] animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Z Inception presents serious slow-paced, and methodically intense
              gameplay. The game offers authentic gunplay and scenarios, where
              quick thinking and strategic execution are essential for victory.
              Utilize the planning table to overview operations and formulate
              your approach before taking action. Remember, every move counts,
              and success demands teamwork, strategy, and precision.
            </p>
          </div>

          <div className="relative order-1 lg:order-2 animate-slide-in-right">
            <div className="glass-morphism p-12 rounded-2xl neon-border">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-8 mx-auto animate-float neon-glow">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="white"
                    className="animate-pulse-slow"
                  >
                    <path d="M30 0L45 15v30L30 60L15 45V15L30 0z" />
                  </svg>
                </div>
                <div className="text-cyber text-4xl font-black tracking-wider holographic animate-hologram">
                  INCEPTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Footer */}
      <AnimatedFooter />
    </div>
  );
}
