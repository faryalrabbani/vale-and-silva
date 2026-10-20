'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'

export default function Philosophy() {
  const ref = useRef(null)

  // Subtle parallax on background image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 lg:py-32 bg-ink text-cream overflow-hidden"
    >
      {/* Background image with parallax + heavy overlay */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <Image
          src="https://images.pexels.com/photos/35608256/pexels-photo-35608256.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlays — layered so text is always legible */}
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
              </motion.div>

      {/* Subtle accent vertical line (desktop) */}
      <div className="hidden md:block absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 h-32 w-px bg-accent/50 z-10" />

      {/* Content */}
      <div className="relative z-10 container-editorial">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-cream/60 mb-10 md:mb-14">
              Philosophy
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="font-serif text-h1 leading-[1.15] text-cream text-balance">
              <span className="text-accent">“</span>
              Architecture is not about the walls we build, but the light we
              let in and the silence we protect.
              <span className="text-accent">”</span>
            </blockquote>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 md:mt-16 flex flex-col items-center gap-2">
              <div className="w-10 h-px bg-accent/60" />
              <p className="text-xs tracking-widest uppercase text-cream/70 mt-4">
                Zara Mahmood
              </p>
              <p className="text-xs tracking-widest uppercase text-cream/50">
                Founding Principal
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}