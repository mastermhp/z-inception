"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function AnimatedFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
  ];

  const legalItems = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Cookies Policy", href: "#cookies" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 group transition-all duration-500 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-r from-[#700002] to-[#2d0102] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(112,0,2,0.6)] transition-all duration-300 group-hover:scale-110 neon-glow">
            <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
          </div>
          {/* Rotating Ring */}
          <div className="absolute inset-0 border-2 border-[#700002] rounded-full animate-rotate opacity-50"></div>
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-[#700002] rounded-full animate-ping opacity-20"></div>
        </div>
      </button>

      {/* Main Footer */}
      <footer className="relative bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Cyber Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#700002] rounded-full animate-float opacity-60"
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
          <div className="absolute inset-0">
            <div
              className="absolute w-96 h-96 bg-gradient-to-r from-[#700002]/20 to-[#2d0102]/20 rounded-full blur-3xl animate-float"
              style={{
                left: `${20 + Math.sin(Date.now() * 0.001) * 10}%`,
                top: `${30 + Math.cos(Date.now() * 0.001) * 10}%`,
              }}
            />
            <div
              className="absolute w-64 h-64 bg-gradient-to-r from-[#2d0102]/30 to-[#700002]/30 rounded-full blur-2xl animate-pulse-slow"
              style={{
                right: `${15 + Math.cos(Date.now() * 0.0015) * 15}%`,
                bottom: `${20 + Math.sin(Date.now() * 0.0015) * 15}%`,
              }}
            />
          </div>

          {/* Animated Scanlines */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#700002]/40 to-transparent animate-scanline"
                style={{
                  top: `${25 + i * 25}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${6 + i}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 border-t border-[#700002]/30">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-12">
              {/* Company Info */}
              <div className="col-span-3 space-y-6 animate-slide-in-left">
                <div className="group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="relative">
                      <div className="w-28 h-28  rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                        <Image
                        src="/logo1.png"
                        alt="Z Inception Tactical Gameplay"
                        fill
                        className="object-cover w-12 h-12 animate-pulse-slow"
                        priority
                      />
                      </div>
                      {/* <div className="absolute inset-0 bg-[#700002] rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"> */}
                    </div>
                    {/* </div> */}
                    <div className="text-cyber text-xl font-bold holographic">
                      <Image
                        src="/logo1.png"
                        alt="Z Inception Tactical Gameplay"
                        fill
                        className="object-cover opacity-10 w-12 h-12 animate-pulse-slow"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <p className="text-gaming text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                  Z-Inception Productions is a software company based in
                  Bangladesh, specializing in the development of original <br />video
                  game titles, including Z Inception and other innovative gaming
                  experiences.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="group relative w-12 h-12 bg-gradient-to-r from-[#2d0102] to-[#700002] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden"
                  >
                    <Facebook className="w-6 h-6 text-white relative z-10 group-hover:animate-bounce" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#700002] to-[#2d0102] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Link>

                  <Link
                    href="#"
                    className="group relative w-12 h-12 bg-gradient-to-r from-[#2d0102] to-[#700002] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden"
                  >
                    <Linkedin className="w-6 h-6 text-white relative z-10 group-hover:animate-bounce" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#700002] to-[#2d0102] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-span-1 space-y-6 animate-slide-in-left delay-200">
                <h3 className="text-cyber text-xl font-bold text-[#700002] relative">
                  QUICKS
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#700002] to-[#2d0102] group-hover:w-full transition-all duration-500"></div>
                </h3>
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group relative text-gaming text-gray-300 hover:text-white transition-all duration-300 block animate-slide-in-left delay-${
                          300 + index * 100
                        }`}
                      >
                        <span className="relative z-10 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-[#700002] rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                          <span>{item.name}</span>
                        </span>
                        <div className="absolute inset-0 bg-[#700002]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-span-2 space-y-6 animate-slide-in-right delay-300">
                <h3 className="text-cyber text-xl font-bold text-[#700002]">
                  CONTACT
                </h3>
                <div className="space-y-4">
                  <div className="group flex items-start space-x-3 text-gaming text-gray-300 hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[#700002] mt-1 group-hover:animate-bounce" />
                    <div>
                      <p>House- 57/A, Road-9A,</p>
                      <p>Dhanmondi 1209, Dhaka,</p>
                      <p>Bangladesh</p>
                    </div>
                  </div>

                  <div className="group flex items-center space-x-3 text-gaming text-gray-300 hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#700002] group-hover:animate-bounce" />
                    <span>contact@Z-Inception.com</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 space-y-6 animate-slide-in-right delay-400">
                <h3 className="text-cyber text-xl font-bold text-[#700002]">
                  STAY UPDATED
                </h3>
                <p className="text-gaming text-gray-300 text-sm">
                  Subscribe to get the latest updates about our games and
                  releases.
                </p>

                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#700002] focus:ring-2 focus:ring-[#700002]/20 transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#700002] to-[#2d0102] text-white px-4 py-1.5 rounded-md hover:scale-105 transition-transform duration-300 text-sm font-semibold">
                    Subscribe
                  </button>
                </div>

                {/* Animated Stats */}
                {/* <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#700002]/50 transition-colors duration-300">
                    <div className="text-2xl font-bold text-[#700002] animate-pulse">1.2K+</div>
                    <div className="text-xs text-gray-400">Downloads</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#700002]/50 transition-colors duration-300">
                    <div className="text-2xl font-bold text-[#700002] animate-pulse">4.8</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#700002]/20 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gaming text-gray-400 text-sm animate-fade-in-scale">
                  <span className="text-[#700002]">©2025</span> Z-Inception
                  Productions.
                  <span className="holographic ml-1">ALL RIGHTS RESERVED</span>
                </div>

                <div className="flex items-center space-x-6">
                  {legalItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-gaming text-gray-400 hover:text-[#700002] text-sm transition-colors duration-300 animate-slide-in-top delay-${
                        index * 100
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Bottom Border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#700002] to-transparent animate-pulse-slow"></div>
        </div>

        {/* Interactive Mouse Follower */}
        <div
          className="fixed w-4 h-4 bg-[#700002] rounded-full pointer-events-none z-50 opacity-20 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: `scale(${Math.sin(Date.now() * 0.005) * 0.5 + 1})`,
          }}
        />
      </footer>
    </>
  );
}
