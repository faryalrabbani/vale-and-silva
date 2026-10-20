'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import Reveal from '../../components/Reveal'
import { projects, getProjectBySlug } from '../../../lib/projects'

export default function ProjectPage() {
  const params = useParams()
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Find index for prev/next navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <article className="bg-cream">
      {/* ============================================
          HERO — full-bleed cover with title overlay
          ============================================ */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-ink">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="container-editorial">
            <p className="eyebrow text-cream/70 mb-6">
              {project.category} · {project.year}
            </p>
            <h1 className="font-serif text-cream text-display max-w-[18ch] text-balance leading-[0.95]">
              {project.title}
            </h1>
            <p className="mt-6 md:mt-8 text-cream/80 text-base md:text-lg max-w-xl leading-relaxed">
              {project.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          OVERVIEW — description + facts
          ============================================ */}
      <section className="py-20 md:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Description — big column */}
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow mb-8">The project</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-serif text-h3 text-charcoal leading-[1.4] text-pretty">
                  {project.description}
                </p>
              </Reveal>
            </div>

            {/* Facts — small column */}
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.2}>
                <p className="eyebrow mb-6">Details</p>
                <dl className="space-y-4 border-t border-line pt-6">
                  {[
                    { label: 'Location', value: project.location },
                    { label: 'Year', value: project.year },
                    { label: 'Category', value: project.category },
                    { label: 'Client', value: project.client },
                    { label: 'Area', value: project.area },
                    { label: 'Status', value: project.status },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-6 border-b border-line pb-4"
                    >
                      <dt className="text-xs tracking-widest uppercase text-stone">
                        {item.label}
                      </dt>
                      <dd className="text-sm text-charcoal text-right">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY — 3 images
          Layout: image 1 full width, images 2 & 3 side by side
          ============================================ */}
      <section className="pb-20 md:pb-32">
        <div className="container-editorial space-y-8 md:space-y-12">
          {/* Image 1 — full width */}
          {project.gallery[0] && (
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden bg-line">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.title} — view 1`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          {/* Images 2 & 3 — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.gallery[1] && (
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden bg-line">
                  <Image
                    src={project.gallery[1]}
                    alt={`${project.title} — view 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
            {project.gallery[2] && (
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden bg-line">
                  <Image
                    src={project.gallery[2]}
                    alt={`${project.title} — view 3`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          PREV / NEXT NAVIGATION
          ============================================ */}
      <section className="border-t border-line">
        <div className="container-editorial py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous */}
            <div>
              {prevProject ? (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="group block"
                >
                  <p className="eyebrow mb-3">← Previous project</p>
                  <p className="font-serif text-2xl md:text-3xl text-charcoal transition-colors duration-500 group-hover:text-accent">
                    {prevProject.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Next */}
            <div className="md:text-right">
              {nextProject ? (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group block"
                >
                  <p className="eyebrow mb-3">Next project →</p>
                  <p className="font-serif text-2xl md:text-3xl text-charcoal transition-colors duration-500 group-hover:text-accent">
                    {nextProject.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA — back to all work / contact
          ============================================ */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial text-center">
          <Reveal>
            <p className="eyebrow mb-6">Explore further</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-h2 text-charcoal text-balance max-w-2xl mx-auto">
              See all projects, or start a conversation about yours.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <Link
                href="/work"
                className="link-underline text-charcoal text-sm tracking-wide"
              >
                View all work →
              </Link>
              <Link
                href="/contact"
                className="link-underline text-charcoal text-sm tracking-wide"
              >
                Get in touch →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}