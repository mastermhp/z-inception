"use client"

import { useState, useEffect } from 'react'
import { Users, Download, Star, Activity } from 'lucide-react'

export default function LiveStats() {
  const [stats, setStats] = useState({
    downloads: 0,
    players: 0,
    rating: 4.8,
    servers: 12
  })
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [keySequence, setKeySequence] = useState('')

  const SECRET_CODE = 'STATS2025' // Secret code to show live stats

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch GitHub release data
        const response = await fetch('https://api.github.com/repos/kazihasib00/Z-Inception-/releases')
        
        if (response.ok) {
          const releases = await response.json()
          let totalDownloads = 0
          
          releases.forEach(release => {
            release.assets.forEach(asset => {
              totalDownloads += asset.download_count
            })
          })
          
          setStats(prev => ({
            ...prev,
            downloads: totalDownloads,
            players: Math.floor(totalDownloads * 0.7), // Estimate active players as 70% of downloads
            servers: Math.floor(Math.random() * 5) + 10 // Random server count between 10-15
          }))
        } else {
          // Fallback numbers if API fails
          setStats(prev => ({
            ...prev,
            downloads: 1247,
            players: 873,
            servers: 12
          }))
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching stats:', error)
        // Fallback numbers
        setStats({
          downloads: 1247,
          players: 873,
          rating: 4.8,
          servers: 12
        })
        setLoading(false)
      }
    }

    fetchStats()
    
    // Update stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Secret code listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only trigger if not typing in an input field
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        const newSequence = (keySequence + event.key.toUpperCase()).slice(-SECRET_CODE.length)
        setKeySequence(newSequence)
        
        if (newSequence === SECRET_CODE) {
          setIsVisible(prev => !prev)
          setKeySequence('') // Reset sequence after successful match
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [keySequence])

  // Don't render anything if not visible
  if (!isVisible) {
    return null
  }

  const StatCard = ({ icon: Icon, value, label, loading: isLoading, color = "[#2d0102]" }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-[#700002]/50 transition-all duration-300 neon-border">
      <div className="flex items-center space-x-3">
        <Icon className={`w-6 h-6 text-${color} animate-pulse`} />
        <div>
          <div className="text-2xl font-bold text-white">
            {isLoading ? (
              <div className="w-16 h-6 bg-gray-600 animate-pulse rounded"></div>
            ) : (
              typeof value === 'number' && value > 100 ? value.toLocaleString() : value
            )}
          </div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="animate-fadeIn pl-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <StatCard 
          icon={Download} 
          value={stats.downloads} 
          label="Total Downloads" 
          loading={loading}
          color="[#700002]"
        />
        <StatCard 
          icon={Users} 
          value={stats.players} 
          label="Active Players" 
          loading={loading}
          color="blue-500"
        />
        <StatCard 
          icon={Star} 
          value={stats.rating} 
          label="User Rating" 
          loading={loading}
          color="yellow-500"
        />
        <StatCard 
          icon={Activity} 
          value={stats.servers} 
          label="Live Servers" 
          loading={loading}
          color="green-500"
        />
      </div>
      <div className="text-center mt-4">
        <div className="inline-flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/50">
          <div className="w-2 h-2 bg-[#700002] rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500 font-mono">
            Type: <span className="text-[#700002]">{SECRET_CODE}</span> to hide stats
          </span>
        </div>
      </div>
    </div>
  )
}
