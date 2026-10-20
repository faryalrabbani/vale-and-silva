'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal, { Stagger, StaggerItem } from './Reveal'

const testimonials = [
  {
    quote:
      'They listened more than they spoke. The house they built for us feels like it was always there — as if they simply uncovered it.',
    name: 'Amelia Costa',
    role: 'Casa Lumen, Lisbon',
  },
  {
    quote:
      'A rare studio that treats restraint as a material. Every detail earns its place, and nothing is decorative. Working with them changed how we think about space.',
    name: 'Jonas Vermeulen',
    role: 'Maison Verre, Antwerp',
  },
  {
    quote:
      'They understood the building before we did. What emerged was not a renovation but a quiet re-reading of everything we thought we knew about the site.',
    name: 'Sofia Berg',
    role: 'Atelier Nord, Copenhagen',
  },
]

export default function Testimonials() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section
      ref={ref}
      className="relative py-section bg-ink text-cream overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <Image
          src="https://images.pexels.com/photos/29122162/pexels-photo-29122162.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlays — matched to Philosophy section brightness */}
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
              </motion.div>

      {/* Content */}
      <div className="relative z-10 container-editorial">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <p className="eyebrow text-cream/60 mb-6">Clients</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-h1 text-cream text-balance">
              Words from the people we've built for.
            </h2>
          </Reveal>
        </div>

        {/* Quotes grid */}
        <Stagger
          staggerAmount={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16"
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i} className="flex flex-col">
              <div className="w-10 h-px bg-accent mb-8" />

              <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-cream/95 text-pretty flex-1">
                “{t.quote}”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-cream/20">
                <p className="text-sm text-cream tracking-wide">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-cream/60 mt-1">
                  {t.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}