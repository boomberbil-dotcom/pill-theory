'use client'

import { useState } from 'react'
import { PILLS, type Pill } from '@/lib/pill-data'
import PillModal from './pill-modal'

const NODES = [
  { id: 'blue',   x: 80,  y: 80  },
  { id: 'red',    x: 280, y: 80  },
  { id: 'black',  x: 480, y: 80  },
  { id: 'white',  x: 280, y: 220 },
  { id: 'orange', x: 120, y: 340 },
  { id: 'pump',   x: 440, y: 340 },
]

const EDGES: [string, string][] = [
  ['blue', 'red'],
  ['red', 'black'],
  ['red', 'white'],
  ['white', 'orange'],
  ['white', 'pump'],
]

export default function IdeologyMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedPill, setSelectedPill] = useState<Pill | null>(null)
  const pillMap = Object.fromEntries(PILLS.map((p) => [p.id, p]))

  function isConnected(a: string, b: string) {
    return EDGES.some(([x, y]) => (x === a && y === b) || (x === b && y === a))
  }

  return (
    <>
      <section id="ideology-map" className="relative py-24 px-4 md:px-8" aria-label="Ideology Map">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#22c55e] tracking-[0.3em] uppercase mb-4">
              / 04 — Network
            </p>
            <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
              Ideology<br />Map
            </h2>
          </div>

          <div className="relative border border-white/10 bg-white/[0.02] overflow-hidden">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
              aria-hidden="true"
            />

            <svg
              viewBox="0 0 600 440"
              className="w-full"
              style={{ minHeight: 280 }}
              role="img"
              aria-label="Pill ideology relationship graph"
            >
              {/* Edges */}
              {EDGES.map(([a, b], i) => {
                const nodeA = NODES.find((n) => n.id === a)!
                const nodeB = NODES.find((n) => n.id === b)!
                const lit =
                  hoveredNode === a ||
                  hoveredNode === b ||
                  (hoveredNode && (isConnected(hoveredNode, a) || isConnected(hoveredNode, b)))

                return (
                  <line
                    key={i}
                    x1={nodeA.x + 20} y1={nodeA.y + 10}
                    x2={nodeB.x + 20} y2={nodeB.y + 10}
                    stroke={lit ? '#22c55e' : 'rgba(255,255,255,0.1)'}
                    strokeWidth={lit ? 1.5 : 0.5}
                    strokeDasharray="4 4"
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />
                )
              })}

              {/* Nodes */}
              {NODES.map((node) => {
                const pill = pillMap[node.id]
                if (!pill) return null
                const isHovered = hoveredNode === node.id

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedPill(pill)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    aria-label={`Open ${pill.name}`}
                  >
                    {/* Capsule */}
                    <rect
                      x={0} y={0} width={40} height={20} rx={10}
                      style={{
                        fill: isHovered ? pill.color : pill.color + '44',
                        filter: isHovered ? `drop-shadow(0 0 10px ${pill.color})` : 'none',
                        transition: 'fill 0.3s, filter 0.3s',
                      }}
                    />
                    <line x1={20} y1={0} x2={20} y2={20} stroke="rgba(0,0,0,0.3)" strokeWidth={1.5} />

                    {/* Label */}
                    <text
                      x={20} y={36}
                      textAnchor="middle"
                      fontFamily="var(--font-space-mono, monospace)"
                      fontSize={7}
                      letterSpacing={1}
                      style={{
                        fill: isHovered ? pill.color : 'rgba(255,255,255,0.5)',
                        transition: 'fill 0.3s',
                      }}
                    >
                      {pill.name.toUpperCase()}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          <p className="font-mono text-xs text-white/30 mt-4 text-center tracking-widest uppercase">
            Hover nodes to trace connections — click to open archive
          </p>
        </div>
      </section>

      <PillModal pill={selectedPill} onClose={() => setSelectedPill(null)} />
    </>
  )
}
