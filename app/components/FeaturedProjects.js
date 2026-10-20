'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import Reveal from './Reveal'
import { projects, featuredSlugs } from '../../lib/projects'

// Pick which projects to show on the homepage row


// Center = tallest. Sides step down. [height in vh]
// index:  0     1     2(center)  3     4
const heights = ['44vh', '52vh', '60vh', '52vh', '44vh']

export default function FeaturedProjects() {
  const scrollRef = useRef(null)

  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)

  // Drag-to-scroll on desktop
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e) => {
      isDown = true
      el.classList.add('cursor-grabbing')
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onLeave = () => {
      isDown = false
      el.classList.remove('cursor-grabbing')
    }
    const onUp = () => {
      isDown = false
      el.classList.remove('cursor-grabbing')
    }
    const onMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.5
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseup', onUp)
    el.addEventListener('mousemove', onMove)

    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseup', onUp)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section className="section bg-cream overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Selected work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-h1 text-charcoal max-w-[16ch] text-balance">
                A few projects we're proud of.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/work"
              className="link-underline text-charcoal text-sm tracking-wide whitespace-nowrap"
            >
              View all work →
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll row — bleeds to viewport edges */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex items-end gap-4 md:gap-5 overflow-x-auto cursor-grab select-none px-6 md:px-12 xl:px-20"
      >
        {featured.map((project, i) => (
          <ProjectRowCard
            key={project.slug}
            project={project}
            height={heights[i] || '52vh'}
          />
        ))}

        <div className="flex-shrink-0 w-4 md:w-12" aria-hidden />
      </div>
    </section>
  )
}

function ProjectRowCard({ project, height }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex-shrink-0 flex flex-col"
      style={{ width: 'clamp(180px, 17vw, 260px)' }}
      aria-label={`View project: ${project.title}`}
    >
      <div
        className="relative overflow-hidden bg-line w-full"
        style={{ height }}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700 ease-editorial" />
      </div>

      <div className="mt-4 md:mt-5">
        <h3 className="font-serif text-base md:text-lg text-charcoal leading-snug">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[0.65rem] tracking-[0.15em] uppercase text-stone">
          {project.location} · {project.year}
        </p>
      </div>
    </Link>
  )
}