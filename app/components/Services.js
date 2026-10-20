'use client'

import Image from 'next/image'
import Reveal from './Reveal'

const services = [
  {
    num: '01',
    title: 'Architecture',
    body:
      'Full-scope design from first sketch to final handover. Site analysis, concept, planning, construction documentation, and on-site guidance — a single continuous thread from idea to building.',
    image:
      'https://images.pexels.com/photos/9976121/pexels-photo-9976121.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary house exterior with minimalist design',
  },
  {
    num: '02',
    title: 'Interiors',
    body:
      'Considered interior architecture: spatial planning, materials, lighting, joinery, and the small details that make a room feel finished rather than filled. We treat interiors as a continuation of the building, not an afterthought.',
    image:
      'https://images.pexels.com/photos/20259349/pexels-photo-20259349.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Stylish modern living room with contemporary furniture',
  },
  {
    num: '03',
    title: 'Adaptive Reuse',
    body:
      'Working with what already exists. Giving old structures a second life through careful insertion, restraint, and respect — preserving the bones while quietly reimagining the whole.',
    image:
      'https://images.pexels.com/photos/5505874/pexels-photo-5505874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Old factory buildings transformed into modern spaces',
  },
]

export default function Services() {
  return (
    <section className="section bg-cream">
      <div className="container-editorial">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-20 md:mb-28">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6">How we work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-h1 text-charcoal text-balance max-w-[14ch]">
                Three disciplines, one practice.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-4">
            <Reveal delay={0.2}>
              <p className="text-stone text-lg md:text-xl leading-relaxed">
                Every project moves through the same three lenses. Not as
                phases, but as a single continuous conversation between
                space, material, and light.
              </p>
              <p className="mt-6 text-stone text-lg md:text-xl leading-relaxed">
                We work slowly and deliberately, with a small team and a
                limited number of projects each year...
              </p>
            </Reveal>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-line">
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service, index }) {
  // Alternate: even rows = image on right; odd rows = image on left
  const imageOnRight = index % 2 === 0

  return (
    <Reveal delay={index * 0.1}>
      <div className="border-b border-line py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Number */}
          <div className="md:col-span-2">
            <p className="font-serif text-2xl md:text-3xl text-accent leading-none">
              {service.num}
            </p>
          </div>

          {/* Text block */}
          <div
            className={`md:col-span-5 ${imageOnRight ? '' : 'md:order-3'
              }`}
          >
            <h3 className="font-serif text-h2 text-charcoal leading-[1.1] text-balance">
              {service.title}
            </h3>
            <p className="mt-6 md:mt-8 text-stone text-lg md:text-xl leading-relaxed max-w-xl">
              {service.body}
            </p>
          </div>

          {/* Image block — fixed aspect, centered */}
          <div
            className={`md:col-span-5 ${imageOnRight ? '' : 'md:order-2'
              }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-line">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}