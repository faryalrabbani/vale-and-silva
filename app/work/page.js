'use client'

import Link from 'next/link'
import Image from 'next/image'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { projectsByYear } from '../../lib/projects'

export default function WorkPage() {
  return (
    <section className="pt-32 md:pt-40 pb-section bg-cream">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <Reveal>
            <p className="eyebrow mb-6">All projects · 2021—2024</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-hero text-charcoal text-balance">
              Selected work from the studio.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 md:mt-10 text-stone text-lg md:text-xl leading-relaxed max-w-xl">
              Eight projects, across eight cities. Residential, cultural, and
              adaptive-reuse — each shaped by its site, its light, and the
              people it was built for.
            </p>
          </Reveal>
        </div>

        {/* Project rows */}
        <div className="border-t border-line">
          {projectsByYear.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <WorkRow project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkRow({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-line py-10 md:py-14"
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-sm md:text-base text-accent">{num}</p>
        </div>

        {/* Thumbnail — bigger now */}
        {/* Thumbnail */}
        <div className="col-span-12 md:col-span-4 order-last md:order-none mt-6 md:mt-0">
          <div className="relative aspect-[4/3] overflow-hidden bg-line w-full">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
            />
          </div>
        </div>

        {/* Title + category */}
        <div className="col-span-8 md:col-span-3">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight transition-colors duration-500 group-hover:text-accent">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-stone">{project.category}</p>
        </div>

        {/* Location */}
        <div className="col-span-2 md:col-span-2 text-right md:text-left">
          <p className="text-xs md:text-sm tracking-widest uppercase text-stone">
            {project.location}
          </p>
        </div>

        {/* Year */}
        <div className="hidden md:block md:col-span-2 text-right">
          <p className="text-sm text-charcoal/70">{project.year}</p>
        </div>
      </div>
    </Link>
  )
}