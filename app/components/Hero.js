'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/1719477/pexels-photo-1719477.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Futuristic modern building illuminated at night',
  },
  {
    src: 'https://images.pexels.com/photos/37266439/pexels-photo-37266439.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Abstract brutalist architecture with strong geometric forms',
  },
  {
    src: 'https://images.pexels.com/photos/6036400/pexels-photo-6036400.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Modern skyscraper reflecting blue sky',
  },
]

const ROTATE_INTERVAL = 5000 // 5 seconds

export default function Hero() {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)

  // Rotate image
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(id)
  }, [])

  // Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink"
    >
      {/* Background images with crossfade + parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[index].src}
              alt={heroImages[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

       {/* Subtle gradient so text is readable but image stays bright */}
       <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24"
      >
        <div className="container-editorial">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-cream/80 mb-6"
          >
            Architecture · Interiors · Light
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-cream text-display max-w-[14ch] text-balance"
          >
            Quiet spaces for considered living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-cream/70 text-sm md:text-base max-w-md leading-relaxed">
            Vale & Silva is a design studio working at the intersection of 
architecture, interiors, and natural light. Based in Lisbon, 
working internationally.
            </p>
          </motion.div>
        </div>
      </motion.div>

     

      {/* Image dots — bottom-left indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-2"
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`h-px transition-all duration-500 ease-editorial ${
              i === index ? 'w-10 bg-cream' : 'w-5 bg-cream/40 hover:bg-cream/70'
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}