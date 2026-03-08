'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const TRACK_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cyber%20Trap%20Type%20Beat%20_Chroma_-i4hFdMtPbFIuyH9XgMNUHTRdAYfU2b.mp3'

const BAR_COUNT = 20

let sharedAudio: HTMLAudioElement | null = null
let sharedCtx: AudioContext | null = null
let sharedAnalyser: AnalyserNode | null = null
let sharedConnected = false

export function getSharedAudio() {
  if (typeof window === 'undefined') return null
  if (!sharedAudio) {
    sharedAudio = new Audio(TRACK_URL)
    sharedAudio.loop = true
    sharedAudio.volume = 0.7
  }
  return sharedAudio
}

export function initSharedAudio() {
  const audio = getSharedAudio()
  if (!audio) return
  if (!sharedCtx) {
    sharedCtx = new AudioContext()
    sharedAnalyser = sharedCtx.createAnalyser()
    sharedAnalyser.fftSize = 64
  }
  if (!sharedConnected) {
    const src = sharedCtx.createMediaElementSource(audio)
    src.connect(sharedAnalyser!)
    sharedAnalyser!.connect(sharedCtx.destination)
    sharedConnected = true
  }
  if (sharedCtx.state === 'suspended') sharedCtx.resume()
}

export default function MusicPlayer({ playing }: { playing: boolean }) {
  const [muted, setMuted] = useState(false)
  const [localPlaying, setLocalPlaying] = useState(false)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number>(0)
  const dataRef = useRef<Uint8Array>(new Uint8Array(32))

  // When parent signals play, start audio
  useEffect(() => {
    if (!playing) return
    const audio = getSharedAudio()
    if (!audio) return
    initSharedAudio()
    if (sharedAnalyser) {
      dataRef.current = new Uint8Array(sharedAnalyser.frequencyBinCount)
    }
    audio.play().then(() => {
      setLocalPlaying(true)
    }).catch(() => {})
  }, [playing])

  const togglePlay = useCallback(() => {
    const audio = getSharedAudio()
    if (!audio) return
    if (localPlaying) {
      audio.pause()
      setLocalPlaying(false)
    } else {
      initSharedAudio()
      if (sharedAnalyser) {
        dataRef.current = new Uint8Array(sharedAnalyser.frequencyBinCount)
      }
      audio.play().then(() => setLocalPlaying(true)).catch(() => {})
    }
  }, [localPlaying])

  const toggleMute = useCallback(() => {
    const audio = getSharedAudio()
    if (!audio) return
    const next = !muted
    audio.muted = next
    setMuted(next)
  }, [muted])

  // Visualizer RAF loop
  useEffect(() => {
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      if (!sharedAnalyser || !localPlaying) {
        barsRef.current.forEach(b => { if (b) b.style.height = '2px' })
        return
      }
      sharedAnalyser.getByteFrequencyData(dataRef.current)
      const step = Math.floor(dataRef.current.length / BAR_COUNT)
      barsRef.current.forEach((b, i) => {
        if (!b) return
        const val = dataRef.current[i * step] ?? 0
        const h = Math.max(2, (val / 255) * 40)
        b.style.height = `${h}px`
      })
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [localPlaying])

  return (
    <div
      className="fixed bottom-6 right-6 flex items-end gap-3 z-[100] select-none"
      style={{
        backgroundColor: 'rgba(5,5,5,0.92)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(12px)',
        padding: '10px 14px',
        borderRadius: '2px',
        opacity: playing || localPlaying ? 1 : 0.35,
        transition: 'opacity 0.4s ease',
      }}
      aria-label="Music player"
    >
      {/* Visualizer bars */}
      <div className="flex items-end gap-[2px]" style={{ height: '40px' }} aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => { barsRef.current[i] = el }}
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: muted ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
              borderRadius: '1px',
              transition: 'height 0.05s linear',
              alignSelf: 'flex-end',
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 ml-1">
        <button
          onClick={togglePlay}
          className="text-white/60 hover:text-white transition-colors focus:outline-none"
          aria-label={localPlaying ? 'Pause' : 'Play'}
        >
          {localPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <rect x="1" y="1" width="4" height="12" rx="1" />
              <rect x="9" y="1" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M2 1.5l11 5.5-11 5.5V1.5z" />
            </svg>
          )}
        </button>

        <button
          onClick={toggleMute}
          className="text-white/60 hover:text-white transition-colors focus:outline-none"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <path d="M19.07 4.93a10 10 0 010 14.14"/>
              <path d="M15.54 8.46a5 5 0 010 7.07"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
