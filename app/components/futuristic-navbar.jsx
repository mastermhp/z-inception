"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function FuturisticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    // { name: 'Newsletter', href: '#newsletter' },
    { name: 'Games', href: '/games' },
    { name: 'Careers', href: '#careers' },
    { name: 'About', href: '#about' },
    { name: 'Store', href: '#store' },
  ]

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
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-30 animate-scanline"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-morphism backdrop-blur-xl border-b border-red-900/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="relative group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <svg 
                    width="50" 
                    height="50" 
                    viewBox="0 0 50 50" 
                    className="text-red-900 group-hover:text-red-800 transition-all duration-300 animate-pulse-slow group-hover:animate-rotate"
                  >
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff0000" />
                        <stop offset="50%" stopColor="#ff4444" />
                        <stop offset="100%" stopColor="#ff0000" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M25 0L45 12.5v25L25 50L5 37.5v-25L25 0z" 
                      fill="url(#logoGradient)"
                      className="drop-shadow-lg"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-red-900 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-cyber text-2xl font-bold">
                  <span className="text-white group-hover:text-neon transition-all duration-300">
                    INCEPTION
                  </span>
                  <span className="text-red-900 animate-neon-glow">STUDIO</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group text-gaming font-semibold transition-all duration-300 hover:text-red-800 animate-slide-in-top delay-${(index + 1) * 100}`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem('')}
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
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-morphism border-t border-red-900/20 px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-gaming font-semibold text-lg hover:text-red-800 transition-all duration-300 animate-slide-in-left delay-${(index + 1) * 100}`}
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
  )
}
