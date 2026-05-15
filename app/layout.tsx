import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'FitWeek - Your Wardrobe. Planned.',
  description: 'FitWeek helps you plan outfits for the week based on what\'s clean and the weather forecast — so you never have to guess again.',
  keywords: ['wardrobe', 'outfit planning', 'weather', 'fashion', 'AI', 'clothing'],
  openGraph: {
    title: 'FitWeek - Your Wardrobe. Planned.',
    description: 'Plan outfits for the week based on what\'s clean and the weather forecast.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7B61FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
