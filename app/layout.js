import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import LenisProvider from './components/LenisProvider'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: {
    default: 'Vale & Silva — Architecture & Interiors',
    template: '%s — Vale & Silva',
  },
  description:
    'A design studio working at the intersection of architecture, interiors, and light. Based in Lisbon, working internationally.',
}

export const viewport = {
  themeColor: '#F5F2ED',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
           <body>
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <Chatbot /> {/* <-- Add it right here, below Footer */}
        </LenisProvider>
      </body>
    </html>
  )
}