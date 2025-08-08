"use client";

import { useState, useEffect } from "react";
import { Clock, Rocket, Zap, Star, ArrowRight, Mail, Bell } from 'lucide-react';

export default function ComingSoon({ 
  title = "COMING SOON", 
  subtitle = "Something Amazing is Loading...",
  description = "We're working hard to bring you an incredible experience. Stay tuned for updates!",
  type = "default" // "careers" or "store"
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState(title);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Glitch effect for title
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = title;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        let glitched = "";
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.8) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitched += originalText[i];
          }
        }
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [title]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const getTypeSpecificContent = () => {
    switch (type) {
      case "careers":
        return {
          icon: Rocket,
          color: "from-blue-600 to-purple-600",
          accentColor: "blue-500",
          features: [
            "Remote Work Opportunities",
            "Competitive Salaries",
            "Creative Freedom",
            "Growth & Learning"
          ]
        };
      case "store":
        return {
          icon: Star,
          color: "from-green-600 to-emerald-600",
          accentColor: "green-500",
          features: [
            "Exclusive Merchandise",
            "Digital Downloads",
            "Limited Editions",
            "Member Discounts"
          ]
        };
      default:
        return {
          icon: Zap,
          color: "from-[#700002] to-[#2d0102]",
          accentColor: "[#700002]",
          features: [
            "Amazing Features",
            "Great Experience",
            "Innovation",
            "Excellence"
          ]
        };
    }
  };

  const typeContent = getTypeSpecificContent();
  const IconComponent = typeContent.icon;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-96 h-96 bg-gradient-to-r ${typeContent.color} opacity-20 rounded-full blur-3xl animate-float`}
              style={{
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-px h-20 bg-gradient-to-b from-${typeContent.accentColor} to-transparent animate-matrix opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-${typeContent.accentColor} rounded-full animate-float opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Scanlines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${typeContent.accentColor}/40 to-transparent animate-scanline`}
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className={`fixed w-8 h-8 bg-${typeContent.accentColor} rounded-full pointer-events-none z-50 opacity-30 transition-all duration-300 ease-out blur-sm`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.5 + 1})`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto py-32 text-center">
          {/* Animated Icon */}
          <div className="mb-12 animate-slide-in-top">
            <div className="relative inline-block">
              <div className={`w-32 h-32 bg-gradient-to-r ${typeContent.color} rounded-full flex items-center justify-center mx-auto animate-float shadow-2xl`}>
                <IconComponent className="w-16 h-16 text-white animate-pulse" />
              </div>
              
              {/* Rotating Rings */}
              <div className={`absolute inset-0 border-4 border-${typeContent.accentColor} rounded-full animate-rotate opacity-30`}></div>
              <div className={`absolute inset-2 border-2 border-${typeContent.accentColor} rounded-full animate-rotate opacity-20`} style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
              
              {/* Pulse Rings */}
              <div className={`absolute inset-0 bg-${typeContent.accentColor} rounded-full animate-ping opacity-20`}></div>
            </div>
          </div>

          {/* Glitch Title */}
          <div className="mb-8 animate-slide-in-left delay-300">
            <h1 className="text-cyber text-7xl md:text-9xl font-black mb-4 holographic animate-hologram">
              {glitchText}
            </h1>
            <div className={`w-64 h-2 bg-gradient-to-r ${typeContent.color} mx-auto animate-pulse-slow`}></div>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-slide-in-right delay-500">
            <h2 className="text-gaming text-2xl md:text-4xl text-gray-300 mb-6">
              {subtitle.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-scale"
                  style={{ animationDelay: `${1 + index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <p className="text-gaming text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16 animate-slide-in-bottom delay-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div
                  key={unit}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-${typeContent.accentColor}/50 transition-all duration-500 animate-slide-in-bottom delay-${800 + index * 100}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${typeContent.accentColor}/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`text-4xl md:text-5xl font-bold text-${typeContent.accentColor} mb-2 animate-pulse`}>
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gaming text-sm text-gray-400 uppercase tracking-wider">
                      {unit}
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-${typeContent.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-${typeContent.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-${typeContent.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-${typeContent.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-16 animate-slide-in-left delay-900">
            <h3 className="text-cyber text-2xl font-bold mb-8 text-gray-300">
              WHAT TO EXPECT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {typeContent.features.map((feature, index) => (
                <div
                  key={feature}
                  className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-${typeContent.accentColor}/50 transition-all duration-500 animate-slide-in-bottom delay-${1000 + index * 100}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${typeContent.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${typeContent.accentColor} rounded-full animate-pulse`}></div>
                    <span className="text-gaming text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="animate-slide-in-right delay-1100">
            <div className="max-w-md mx-auto">
              <h3 className="text-cyber text-xl font-bold mb-6 text-gray-300">
                GET NOTIFIED WHEN WE LAUNCH
              </h3>
              
              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-${typeContent.accentColor} focus:ring-2 focus:ring-${typeContent.accentColor}/20 transition-all duration-300`}
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r ${typeContent.color} text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 font-semibold flex items-center space-x-2 disabled:opacity-50`}
                  >
                    {isSubscribed ? (
                      <>
                        <Bell className="w-4 h-4" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Notify Me</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <p className="text-gaming text-xs text-gray-500 mt-3">
                We'll never spam you. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          {/* <div className="mt-16 animate-slide-in-bottom delay-1300">
            <div className="max-w-lg mx-auto">
              <div className="flex justify-between text-gaming text-sm text-gray-400 mb-2">
                <span>Development Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${typeContent.color} rounded-full animate-pulse relative`}
                  style={{ width: '75%' }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="fixed bottom-8 right-8 z-50 animate-slide-in-right delay-1500">
        <div className={`bg-gray-900/80 backdrop-blur-sm border border-${typeContent.accentColor}/50 rounded-xl p-4 flex items-center space-x-3`}>
          <div className={`w-3 h-3 bg-${typeContent.accentColor} rounded-full animate-pulse`}></div>
          <span className="text-gaming text-sm text-gray-300">
            Status: In Development
          </span>
        </div>
      </div>
    </div>
  );
}
