import type { Metadata } from 'next'
import { Barlow_Condensed, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Pill Theory — Archive of Ideological Awakenings',
  description: 'A digital archive of ideological awakenings and internet philosophy.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${spaceMono.variable} font-sans antialiased scanlines film-grain`}
        style={{ backgroundColor: '#050505', color: '#f5f5f5', minHeight: '100vh' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
