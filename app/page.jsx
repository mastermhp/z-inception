import FuturisticNavbar from "./components/futuristic-navbar"
import AnimatedHero from "./components/animated-hero"
import Image from "next/image"

export default function FuturisticHomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FuturisticNavbar />
      <AnimatedHero />

      {/* Game Description Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="glass-morphism p-12 rounded-2xl neon-border animate-slide-in-left">
            <div className="text-center">
              <div className="text-cyber text-6xl font-black mb-4 holographic animate-hologram">Z</div>
              <div className="text-cyber text-6xl font-black text-red-400 animate-neon-glow">INCEPTION</div>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Welcome to Z Inception, a tactical FPS with online team-based action gameplay that is set across various locations in Bangladesh with real-life scale & resource management. Join forces with up to 10 players in intense cooperative missions, or go solo with up to 9 AI squad mates.
            </p>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Experience hostage rescue and bomb defusal missions that require calculated strategies in the dynamic 5v5 PvP mode. Shape your route through compelling situations by interacting with story-driven NPCs and engaging with various objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Door Mechanics */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="https://attritom7.com/storage/app/public/image/games/lgRSRmxePYmJwCxSQdOU2nTgKFltEMaro7NcABfr.gif"
                alt="Dynamic Door Mechanics"
                width={600}
                height={400}
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              DYNAMIC DOOR MECHANICS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Doors are your lifeline and your barrier. Infiltrate with caution as terrorists set traps and alarms. Meanwhile, attackers have an arsenal of over 4 breach options: kick, door rammer, C2 explosives, and back kick combined with grenades, ensuring a variety of strategies to navigate these vital entry points.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Suspect AI */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              DYNAMIC SUSPECT AI
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Face a variety of suspects, each with distinct behaviors. Some even wield suicide bombs, while others utilize sniper tactics in long-range maps. They even have the ability to sense incoming fire and strategically time their advances ensuring maximum safety. The dynamic nature of suspects keeps you on your toes, with no guarantee of their next move.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="https://attritom7.com/storage/app/public/image/games/YVcL7PguXAdcZbpppLCdeBKiqE86kkkVqcGXHbWv.gif"
                alt="Dynamic Suspect AI"
                width={600}
                height={400}
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapon Customization */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <Image
                src="https://attritom7.com/storage/app/public/image/games/PkcgFzVIdwozMnGaclpX5kjenbLWuboiBGIo0uES.gif"
                alt="Weapon Customization"
                width={600}
                height={400}
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-cyber text-4xl font-black holographic animate-hologram">
              WEAPON CUSTOMIZATION & IMMERSIVE SIM ELEMENTS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              With over 23 distinct weapons and 18 utilities to choose from, resource management becomes vital as you coordinate with your team to take on various roles. Fine-tune your arsenal with decent weapon customization. Modify rails, sights, and foregrips for optimal performance. Immerse yourself in realism by checking magazines for bullet count and repacking magazines for efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Intense Tactical Action */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-cyber text-5xl font-black holographic animate-hologram">
              INTENSE TACTICAL ACTION
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 animate-pulse-slow"></div>
            <p className="text-gaming text-lg text-gray-300 leading-relaxed">
              Z Inception presents serious slow-paced, and methodically intense gameplay. The game offers authentic gunplay and scenarios, where quick thinking and strategic execution are essential for victory. Utilize the planning table to overview operations and formulate your approach before taking action. Remember, every move counts, and success demands teamwork, strategy, and precision.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-slide-in-right">
            <div className="glass-morphism p-12 rounded-2xl neon-border">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-8 mx-auto animate-float neon-glow">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="white" className="animate-pulse-slow">
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-red-500/20 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gaming text-gray-500 animate-fade-in-scale">
            &copy; 2025 INCEPTION STUDIO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
