'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

// ─── Set your contract address once here ───────────────────────
const CONTRACT_ADDRESS = '5xAmH2nPEcq4pgv4ggkrqG4hnss7qzQzbPan5sm3rgpump'
// ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Ideology', href: '#manifesto' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Scanner', href: '#scanner' },
  { label: 'Emerging', href: '#emerging' },
]

export default function Navbar() {
  const [copied, setCopied] = useState(false)

  function handleSmooth(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  // Truncate address for display: 0x1234…abcd
  const displayAddress = CONTRACT_ADDRESS

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: '#050505',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-6">

        {/* Logo + wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-2 shrink-0"
          aria-label="Pill Theory — back to top"
        >
          <Image src="/logo.png" alt="Pill Theory logo" width={28} height={28} className="rounded-sm object-cover" style={{ aspectRatio: '1/1' }} />
          <span className="font-sans font-black text-sm tracking-[0.2em] text-white uppercase hidden sm:block">
            Take the Pill
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmooth(e, link.href)}
              className="font-mono text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contract copy button */}
        <button
          onClick={handleCopy}
          className="shrink-0 flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase px-3 py-1.5 border border-white/10 hover:border-white/50 hover:text-white text-white/50 transition-all duration-200"
          title={`Copy contract: ${CONTRACT_ADDRESS}`}
          aria-label="Copy contract address"
        >
          <span className="hidden sm:block">CA:</span>
          <span>{displayAddress}</span>
          {copied ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6L5 9L10 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
              <rect x="1" y="3" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </button>

      </div>
    </header>
  )
}
