import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ZeroHourPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-center py-8 px-4">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-red-500 text-2xl font-bold mr-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L35 10v20L20 40L5 30V10L20 0z" />
            </svg>
          </div>
          
          {/* Navigation Links */}
          <a href="#" className="text-white hover:text-red-500 transition-colors">Newsletter</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">Games</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">Careers</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">About</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">Store</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/herobg.png"
            alt="Z Inception Tactical Gameplay"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold">Z Inception</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Z Inception is a serious slow-paced tactical shooter where good teamwork, tactics & planning is important. This is not a run and gun game.
            </p>
            <Link href="https://github.com/kazihasib00/Z-Inception-/releases/download/test/ZI.Installer.File.exe">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Buy Now
            </Button></Link>
            
          </div>
        </div>
      </section>

      {/* Game Description */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-red-600 p-8 rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Z</div>
              <div className="text-4xl font-bold text-red-200">Inception</div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Welcome to Z Inception, a tactical FPS with online team-based action gameplay that is set across various locations in Bangladesh with real-life scale & resource management. Join forces with up to 10 players in intense cooperative missions, or go solo with up to 9 AI squad mates. Experience hostage rescue and bomb defusal missions that require calculated strategies in the dynamic 5v5 PvP mode. Shape your route through compelling situations by interacting with story-driven NPCs and engaging with various objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Door Mechanics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://attritom7.com/storage/app/public/image/games/lgRSRmxePYmJwCxSQdOU2nTgKFltEMaro7NcABfr.gif"
              alt="Dynamic Door Mechanics"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Dynamic Door Mechanics</h2>
            <div className="w-16 h-1 bg-red-600"></div>
            <p className="text-gray-300 leading-relaxed">
              Doors are your lifeline and your barrier. Infiltrate with caution as terrorists set traps and alarms. Meanwhile, attackers have an arsenal of over 4 breach options: kick, door rammer, C2 explosives, and back kick combined with grenades, ensuring a variety of strategies to navigate these vital entry points.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Suspect AI */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Dynamic Suspect AI</h2>
            <div className="w-16 h-1 bg-red-600"></div>
            <p className="text-gray-300 leading-relaxed">
              Face a variety of suspects, each with distinct behaviors. Some even wield suicide bombs, while others utilize sniper tactics in long-range maps. They even have the ability to sense incoming fire and strategically time their advances ensuring maximum safety. The dynamic nature of suspects keeps you on your toes, with no guarantee of their next move.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src="https://attritom7.com/storage/app/public/image/games/YVcL7PguXAdcZbpppLCdeBKiqE86kkkVqcGXHbWv.gif"
              alt="Dynamic Suspect AI"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Weapon Customization */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://attritom7.com/storage/app/public/image/games/PkcgFzVIdwozMnGaclpX5kjenbLWuboiBGIo0uES.gif"
              alt="Weapon Customization"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Weapon Customization and Immersive Sim Elements</h2>
            <div className="w-16 h-1 bg-red-600"></div>
            <p className="text-gray-300 leading-relaxed">
              With over 23 distinct weapons and 18 utilities to choose from, resource management becomes vital as you coordinate with your team to take on various roles. Fine-tune your arsenal with decent weapon customization. Modify rails, sights, and foregrips for optimal performance. Immerse yourself in realism by checking magazines for bullet count and repacking magazines for efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Intense Tactical Action */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Intense Tactical Action</h2>
            <div className="w-16 h-1 bg-red-600"></div>
            <p className="text-gray-300 leading-relaxed">
              Z Inception presents serious slow-paced, and methodically intense gameplay. The game offers authentic gunplay and scenarios, where quick thinking and strategic execution are essential for victory. Utilize the planning table to overview operations and formulate your approach before taking action. Remember, every move counts, and success demands teamwork, strategy, and precision.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src="/images/tactical-action.png"
              alt="Intense Tactical Action"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Innovative Gameplay Elements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Innovative Gameplay Elements</h2>
            <div className="w-16 h-1 bg-red-600"></div>
            <p className="text-gray-300 leading-relaxed">
              Strategically utilize the breaker switch to control building lights, adding depth to your tactics. Explore over 15 diverse maps set across various locations in Bangladesh, with some offering unique features, such as functional elevators for vertical traversal, bulletproof glass, and dynamic shutters that provide strategic access points, creating new challenges and potential advantages for the player.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mb-8">
                <div className="text-black text-4xl font-bold">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                    <path d="M30 0L45 15v30L30 60L15 45V15L30 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-6xl font-bold tracking-wider">
                <span className="text-gray-400">I</span>
                <span className="text-red-500 mx-2">N</span>
                <span className="text-gray-400">C E P T I O N</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Attrito Games. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
