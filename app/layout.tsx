import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Wire'Build Game",
  description: 'A game to learn wireframing with questions and challenges',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" sizes='16x16' type='image/png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
