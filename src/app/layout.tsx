import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/globals.css'

const font = Quicksand({ 
  weight: ['500', '400',],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Front-End - eKaizen',
  description: 'Front-End teste para a empresa eKaizen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
