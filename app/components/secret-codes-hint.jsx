"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Code, BarChart3 } from 'lucide-react';

export default function SecretCodesHint() {
  const [showHints, setShowHints] = useState(false);
  const [keySequence, setKeySequence] = useState('');

  const HINT_CODE = 'HELP' // Code to show/hide hints

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        const newSequence = (keySequence + event.key.toUpperCase()).slice(-HINT_CODE.length)
        setKeySequence(newSequence)
        
        if (newSequence === HINT_CODE) {
          setShowHints(prev => !prev)
          setKeySequence('')
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [keySequence])

  if (!showHints) {
    return (
      <div className="fixed bottom-4 left-4 z-50 animate-fadeIn">
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-2 flex items-center space-x-2">
          <Code className="w-4 h-4 text-[#700002]" />
          <span className="text-xs text-gray-400 font-mono">
            Type <span className="text-[#700002]">HELP</span> for secret codes
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-gray-900/90 backdrop-blur-sm border border-[#700002]/50 rounded-xl p-4 max-w-sm neon-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-[#700002]" />
            <span className="text-cyber text-sm font-bold text-[#700002]">SECRET CODES</span>
          </div>
          <button
            onClick={() => setShowHints(false)}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <EyeOff className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg">
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <div>
              <div className="text-xs font-mono text-blue-400">STATS2025</div>
              <div className="text-xs text-gray-400">Show live statistics</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg">
            <Code className="w-4 h-4 text-green-500" />
            <div>
              <div className="text-xs font-mono text-green-400">ZINCEPTION</div>
              <div className="text-xs text-gray-400">Show download counter</div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <p className="text-xs text-gray-500">
            Type codes anywhere on the page to toggle features
          </p>
        </div>
      </div>
    </div>
  )
}
