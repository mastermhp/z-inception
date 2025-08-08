"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function FuturisticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    // { name: 'Newsletter', href: '#newsletter' },
    { name: "Games", href: "/games" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "#about" },
    { name: "Store", href: "/store" },
  ];

  return (
    <>
      {/* Particle Background */}
      <div className="particles fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-30 animate-scanline"></div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-morphism backdrop-blur-xl border-b border-red-900/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/logo1.png"
                    alt="Dynamic Door Mechanics"
                    width={100}
                    height={100}
                    className="w-20 h-20 mt-3 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-red-900 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-cyber text-2xl font-bold">
                  <span className="text-white group-hover:text-neon -ml-10 transition-all duration-300">
                    STUDIO
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group text-gaming font-semibold transition-all duration-300 hover:text-red-800 animate-slide-in-top delay-${
                    (index + 1) * 100
                  }`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem("")}
                >
                  <span className="relative z-10 px-4 py-2 block">
                    {item.name}
                  </span>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-900 to-red-800 transition-all duration-300 group-hover:w-full"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-900/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>

                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group p-2"
            >
              <div className="w-6 h-6 relative">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-red-900 animate-fade-in-scale" />
                ) : (
                  <Menu className="w-6 h-6 text-white group-hover:text-red-900 transition-colors duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-red-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-morphism border-t border-red-900/20 px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-gaming font-semibold text-lg hover:text-red-800 transition-all duration-300 animate-slide-in-left delay-${
                  (index + 1) * 100
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative group py-2">
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-red-900/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
