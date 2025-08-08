"use client";

import { useState, useEffect } from "react";
import { Monitor, Cpu, HardDrive, Gamepad2, Volume2, MemoryStick, Settings, Zap } from 'lucide-react';

export default function SystemRequirements() {
  const [activeTab, setActiveTab] = useState("recommended");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  const requirements = {
    minimum: {
      cpu: "Intel Core i5-7600 or AMD Ryzen 3 1000",
      ram: "12 GB RAM",
      os: "Windows 7/8/10 (64bit versions required)",
      videoCard: "Nvidia GeForce GTX 750Ti or AMD R7 260X",
      soundCard: "DirectX 9.0c compatible sound card with latest drivers",
      diskSpace: "20 GB available space",
      videoMemory: "2 GB",
      directX: "Version 11"
    },
    recommended: {
      cpu: "Intel Core i7-4770K or AMD Ryzen 5 2600X",
      ram: "16 GB RAM",
      os: "Windows 7/8/10 (64bit versions required)",
      videoCard: "Nvidia GeForce GTX 960 or AMD R9 290",
      soundCard: "DirectX 9.0c compatible sound card with latest drivers",
      diskSpace: "25 GB available space",
      videoMemory: "4 GB",
      directX: "Version 11"
    }
  };

  const specs = [
    { key: "cpu", label: "CPU", icon: Cpu },
    { key: "ram", label: "RAM", icon: MemoryStick },
    { key: "os", label: "Operating System", icon: Monitor },
    { key: "videoCard", label: "Video Card", icon: Gamepad2 },
    { key: "soundCard", label: "Sound Card", icon: Volume2 },
    { key: "diskSpace", label: "Free Disk Space", icon: HardDrive },
    { key: "videoMemory", label: "Video Memory", icon: Settings },
    { key: "directX", label: "Direct X", icon: Zap }
  ];

  return (
    <section className="py-28 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#700002] rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#700002]/20 to-[#2d0102]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#2d0102]/15 to-[#700002]/15 rounded-full blur-3xl animate-float"></div>

        {/* Animated Scanlines */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#700002]/30 to-transparent animate-scanline"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-cyber text-5xl font-black mb-6 holographic animate-hologram">
            SYSTEM REQUIREMENTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#700002] to-[#2d0102] mx-auto animate-pulse-slow"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            {/* Animated Background Slider */}
            <div
              className={`absolute top-2 h-12 bg-gradient-to-r from-[#700002] to-[#2d0102] rounded-lg transition-all duration-500 ease-out neon-glow ${
                activeTab === "minimum" ? "left-2 w-32" : "left-36 w-40"
              }`}
            />
            
            <button
              onClick={() => setActiveTab("minimum")}
              className={`relative z-10 px-8 py-3 text-gaming font-bold rounded-lg transition-all duration-300 ${
                activeTab === "minimum"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              MINIMUM
            </button>
            
            <button
              onClick={() => setActiveTab("recommended")}
              className={`relative z-10 px-8 py-3 text-gaming font-bold rounded-lg transition-all duration-300 ${
                activeTab === "recommended"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              RECOMMENDED
            </button>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={spec.key}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#700002]/50 transition-all duration-500 cursor-pointer animate-slide-in-bottom delay-${index * 100}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#700002]/10 to-[#2d0102]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(112,0,2,0.3)]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#700002] to-[#2d0102] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                    <IconComponent className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>

                  {/* Label */}
                  <h3 className="text-cyber text-lg font-bold text-[#700002] mb-3 group-hover:text-white transition-colors duration-300">
                    {spec.label}
                  </h3>

                  {/* Specification */}
                  <p className="text-gaming text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {requirements[activeTab][spec.key]}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#700002] to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#700002] to-transparent animate-pulse"></div>
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#700002] to-transparent animate-pulse"></div>
                  <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#700002] to-transparent animate-pulse"></div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#700002] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#700002] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#700002] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#700002] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Data Streams */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-8 bg-gradient-to-b from-[#700002] to-transparent animate-matrix"
                      style={{
                        left: `${20 + i * 30}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "2s",
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700/50">
            <div className="w-3 h-3 bg-[#700002] rounded-full animate-pulse"></div>
            <span className="text-gaming text-gray-300">
              System requirements may vary based on game settings and performance preferences
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
