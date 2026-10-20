'use client'

import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="section bg-cream">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image — left on desktop */}
         {/* Image — left on desktop */}
<div className="md:col-span-4">
  <Reveal>
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
      <Image
        src="https://images.pexels.com/photos/8068876/pexels-photo-8068876.jpeg?auto=compress&cs=tinysrgb&w=1400"
        alt="People having a conversation about a project"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  </Reveal>
</div>

          {/* Content — right on desktop */}
          <div className="md:col-span-8 md:pl-8 lg:pl-16">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-8 md:mb-10">Start a conversation</p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-serif text-hero text-charcoal text-balance leading-[1] max-w-[14ch]">
                Have a project in mind?
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 md:mt-10 text-stone text-base md:text-lg leading-relaxed max-w-lg">
                We take on a small number of projects each year. If your
                brief aligns with how we work, we'd love to hear from you —
                whether it's a first sketch, a site, or simply an idea worth
                talking through.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 text-charcoal"
                >
                  <span className="font-serif text-2xl md:text-3xl link-underline">
                    Get in touch
                  </span>
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>

                <a
  href="mailto:hello@valesilva.com"
  className="text-sm text-stone hover:text-charcoal transition-colors duration-300 link-underline"
>
  hello@valesilva.com
</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}