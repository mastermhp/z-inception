"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Play, Users, Star } from "lucide-react";
// import DownloadCounter from "@/components/download-counter"
import LiveStats from "./live-stats";
import DownloadCounter from "./download-counter";

export default function AnimatedHero() {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Dive into the Apocalypse"];
  const fullText =
    "A gritty, story-driven zombie FPS set in ultra-realistic, real-world-inspired locations. Survive the outbreak. Uncover the truth. This isn’t just a shooter — it’s your last stand.";

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentWord.length) {
            setTypedText(currentWord.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentWord.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting, words]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black/10">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Image
          src="/herobg.png"
          alt="Z Inception Tactical Gameplay"
          fill
          className="object-cover opacity-20 animate-pulse-slow"
          priority
        />

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        {/* Gradient Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div> */}

        {/* Animated Scanlines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#2d0102]/30 to-transparent animate-scanline"
              style={{
                top: `${20 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#2d0102] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Animated Title */}
          <div className="">
            <div className="animate-slide-in-left">
              <Image
                src="/logo.png"
                alt="Logo"
                width={600}
                height={500}
                className="hover:scale-105 transition-transform duration-500 mt-14"
              />
            </div>

            {/* Typewriter Effect */}
            <div className="text-cyber pl-8 text-2xl font-bold text-[#700002] h-8 animate-slide-in-left delay-300">
              <span className="animate-typewriter">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Animated Description */}
          <div className="animate-slide-in-left delay-500 pl-8">
            <p className="text-gaming text-xl text-gray-300 leading-relaxed">
              {fullText.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-scale"
                  style={{ animationDelay: `${1 + index * 0.02}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>

          {/* Download Counter */}
          <div className="animate-slide-in-left delay-700">
            <DownloadCounter />
          </div>

          {/* Animated CTA Button */}
          <div className="animate-slide-in-left delay-900 pl-8 pt-10">
            <Link href="https://github.com/kazihasib00/Z-Inception-/releases/download/test/ZI.Installer.File.exe">
              <Button className="group relative bg-gradient-to-r from-[#700002] to-[#2d0102] hover:from-[#2d0102] hover:to-[#700002] hover:cursor-pointer text-white px-10 py-6 text-xl font-bold text-cyber rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 neon-glow">
                <span className="relative z-10 flex items-center space-x-3">
                  <Download className="w-8 h-8 group-hover:animate-bounce" />
                  <span>DOWNLOAD NOW</span>
                </span>

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d0102] to-[#700002] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

                {/* Glitch Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 group-hover:animate-glitch"></div>
              </Button>
            </Link>
          </div>

          {/* Live Stats */}
          <div className="animate-slide-in-left delay-1000">
            <LiveStats />
          </div>
        </div>
      </div>
    </section>
  );
}
