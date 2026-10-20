'use client'

import Image from 'next/image'
import Reveal from './Reveal'

// Small line-icon set — 24x24, stroke: currentColor
const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="5" width="18" height="16" rx="1" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

const IconLayers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
)

const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
  </svg>
)

const IconAward = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
  </svg>
)

const stats = [
  { num: '11', label: 'Years of practice', Icon: IconCalendar },
  { num: '48', label: 'Projects delivered', Icon: IconLayers },
  { num: '9', label: 'Countries', Icon: IconGlobe },
  { num: '14', label: 'Design awards', Icon: IconAward },
]

export default function Intro() {
  return (
    <section className="section bg-cream">
      <div className="container-editorial">
        {/* Eyebrow */}
        <Reveal>
          <p className="eyebrow mb-10 md:mb-14">About the studio</p>
        </Reveal>

        {/* Main editorial statement + supporting column + image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Big statement */}
          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-h1 text-charcoal text-balance leading-[1.05]">
                We design buildings that hold light, silence, and time —
                spaces that feel inevitable rather than imposed.
              </h2>
            </Reveal>
          </div>

          {/* Supporting column */}
          <div className="md:col-span-3 md:pt-3">
            <Reveal delay={0.25}>
              <p className="text-stone text-base md:text-lg leading-relaxed mb-6">
                Founded in 2014, we work across residential, cultural, and
                adaptive-reuse projects. Our practice is small by design —
                every project is led by a principal, from first sketch to
                final handover.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <a
                href="/about"
                className="link-underline text-charcoal text-sm tracking-wide"
              >
                Read our story →
              </a>
            </Reveal>
          </div>

          {/* Editorial image */}
          <div className="md:col-span-3">
            <Reveal delay={0.4}>
              <div className="relative aspect-[3/4] overflow-hidden bg-line">
                <Image
                  src="https://images.pexels.com/photos/12690164/pexels-photo-12690164.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Close-up of modern window blinds showing texture and pattern"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats row — centered, with icons */}
        <div className="mt-20 md:mt-28 pt-10 md:pt-12 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {stats.map((s, i) => {
            const { Icon } = s
            return (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent mb-5" />
                  <p className="font-serif text-2xl md:text-3xl text-charcoal leading-none font-light">
                    {s.num}
                  </p>
                  <p className="mt-4 text-[0.7rem] tracking-[0.15em] uppercase text-stone leading-relaxed">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}