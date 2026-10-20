'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Is this a page that has a dark hero at the top? (only home for now)
  const isHome = pathname === '/'

  // Scroll threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // "Light mode" = nav sits on a dark hero AND user hasn't scrolled yet
  const lightMode = isHome && !scrolled

  const linkColor = lightMode
    ? 'text-cream hover:text-cream'
    : 'text-charcoal/80 hover:text-charcoal'
  const wordmarkColor = lightMode ? 'text-cream' : 'text-charcoal'
  const burgerColor = lightMode ? 'bg-cream' : 'bg-charcoal'

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-editorial ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-md border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-20 md:h-24">
          {/* Wordmark */}
          <Link
            href="/"
            className={`font-serif text-xl md:text-2xl tracking-editorial transition-colors duration-500 ${wordmarkColor}`}
            aria-label="Studio — Home"
          >
           Vale <span className="text-accent">&</span> Silva
          </Link>

          {/* Desktop links */}
                  {/* Desktop links + CTA Button */}
                  <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-500 ${linkColor}`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Start a project button */}
            <Link
              href="/contact"
              className={`ml-4 inline-flex items-center gap-2 border px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-500 ease-editorial ${
                lightMode
                  ? 'border-cream/40 text-cream hover:bg-cream hover:text-charcoal'
                  : 'border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-cream'
              }`}
            >
              Start a project
              <span className="text-[0.7rem]">→</span>
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px ${burgerColor} transition-transform duration-300 ease-editorial ${
                  menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px ${burgerColor} transition-transform duration-300 ease-editorial ${
                  menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream md:hidden"
          >
            <nav className="flex flex-col items-start justify-center h-full px-8 gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-5xl text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}