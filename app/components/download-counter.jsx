"use client"

import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'

export default function DownloadCounter() {
  const [downloadCount, setDownloadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        // Fetch release data from GitHub API
        const response = await fetch('https://api.github.com/repos/kazihasib00/Z-Inception-/releases')
        
        if (!response.ok) {
          throw new Error('Failed to fetch release data')
        }
        
        const releases = await response.json()
        
        // Calculate total downloads across all releases and assets
        let totalDownloads = 0
        releases.forEach(release => {
          release.assets.forEach(asset => {
            totalDownloads += asset.download_count
          })
        })
        
        setDownloadCount(totalDownloads)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching download count:', err)
        setError(true)
        setLoading(false)
        // Set a fallback number or keep at 0
        setDownloadCount(1247) // Fallback number
      }
    }

    fetchDownloadCount()
  }, [])

  // Secret key listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Press 'D' key to toggle download stats
      if (event.key.toLowerCase() === 'd' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        // Only trigger if not typing in an input field
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          setIsVisible(prev => !prev)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Don't render anything if not visible
  if (!isVisible) {
    return null
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-gray-400 animate-fadeIn">
        <Download className="w-5 h-5 animate-pulse" />
        <span className="text-lg">Loading downloads...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-700 animate-fadeIn">
      <div className="flex items-center space-x-2">
        <Download className="w-5 h-5 text-red-500" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white">
            {downloadCount.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400">Total Downloads</span>
        </div>
      </div>
      <div className="text-xs text-gray-500 ml-2">
        Press 'D' to hide
      </div>
    </div>
  )
}
