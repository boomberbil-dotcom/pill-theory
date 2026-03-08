'use client'

import Navbar from '@/components/pill-theory/navbar'
import Hero from '@/components/pill-theory/hero'
import Manifesto from '@/components/pill-theory/manifesto'
import AwakeningTimeline from '@/components/pill-theory/awakening-timeline'
import Pharmacy from '@/components/pill-theory/pharmacy'
import RealityScanner from '@/components/pill-theory/reality-scanner'
import EmergingPills from '@/components/pill-theory/emerging-pills'
import FinalPill from '@/components/pill-theory/final-pill'
import Footer from '@/components/pill-theory/footer'
import MusicPlayer from '@/components/pill-theory/music-player'
import { useState, useCallback } from 'react'

export default function Home() {
  const [musicPlaying, setMusicPlaying] = useState(false)

  const handleMusicStart = useCallback(() => {
    setMusicPlaying(true)
  }, [])

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <div className="relative" style={{ zIndex: 50 }}>
        <Navbar />
      </div>

      <Hero onMusicStart={handleMusicStart} />

      <main
        className="relative mx-auto w-full"
        style={{ color: '#f5f5f5', backgroundColor: '#050505', maxWidth: '1280px' }}
      >
        <Manifesto />
        <AwakeningTimeline />
        <RealityScanner />
        <EmergingPills />
        <FinalPill />
        <Footer />
      </main>

      <MusicPlayer playing={musicPlaying} />
    </div>
  )
}
