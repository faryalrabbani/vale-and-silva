'use client'

import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'
import { projects } from '../../lib/projects'

const featuredSlugs = [
  'casa-lumen',
  'maison-verre',
  'atelier-nord',
  'house-of-shade',
  'villa-silentia',
]

export default function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)

  // If we don't have 5 projects for some reason, fallback
  if (featured.length < 5) return null

  return (
    <section className="section bg-cream">
      <div className="container-editorial">
        {/* Header row */}
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

        {/* Custom Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* 1. Large Hero Project (Left) */}
          <div className="md:col-span-8">
            <Reveal>
              <ProjectCard project={featured[0]} aspect="aspect-[4/3] md:aspect-[16/10]" size="large" />
            </Reveal>
          </div>

          {/* 2. Tall Portrait Project (Right) */}
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <ProjectCard project={featured[1]} aspect="aspect-[4/5] md:aspect-[3/4]" size="large" />
            </Reveal>
          </div>

          {/* 3, 4, 5. Bottom Row - Three equal projects */}
          <div className="md:col-span-4">
            <Reveal delay={0.2}>
              <ProjectCard project={featured[2]} aspect="aspect-[4/3]" size="small" />
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.3}>
              <ProjectCard project={featured[3]} aspect="aspect-[4/3]" size="small" />
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.4}>
              <ProjectCard project={featured[4]} aspect="aspect-[4/3]" size="small" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, aspect, size = 'small' }) {
  const titleSize = size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
  
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      aria-label={`View project: ${project.title}`}
    >
      <div className={`relative overflow-hidden bg-line ${aspect}`}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes={size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700 ease-editorial" />
      </div>

      <div className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
        <div>
          <h3 className={`font-serif ${titleSize} text-charcoal leading-snug`}>
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-stone">{project.location}</p>
        </div>
        <p className="text-xs tracking-widest uppercase text-stone whitespace-nowrap pt-1 md:pt-2">
          {project.year}
        </p>
      </div>
    </Link>
  )
}