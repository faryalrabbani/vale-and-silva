'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '../components/Reveal'

const team = [
    {
        name: 'Zara Mahmood',
        role: 'Founding Principal',
        line:
            'Leads every project from first sketch to final handover. Trained in Karachi and Copenhagen.',
    },
    {
        name: 'Elias Berg',
        role: 'Associate, Architecture',
        line:
            'Responsible for design development and construction documentation across the practice.',
    },
    {
        name: 'Noor El-Amin',
        role: 'Associate, Interiors',
        line:
            'Leads the interiors and materials work — the small details that make a room feel finished.',
    },
    {
        name: 'Tomás Reyes',
        role: 'Studio Director',
        line:
            'Manages the studio\'s day-to-day operations, collaborations, and site supervision.',
    },
]

const principles = [
    {
        num: '01',
        title: 'Restraint',
        body: 'We design less than we want to. Every element must earn its place — ornament is not a substitute for architecture.',
    },
    {
        num: '02',
        title: 'Material',
        body: 'We work with honest materials: stone, timber, concrete, plaster. Materials that age well, and that look better in ten years than they do on the day of completion.',
    },
    {
        num: '03',
        title: 'Light',
        body: 'Every project begins with a study of how the sun moves across its site. Light is not decoration — it is the first material.',
    },
    {
        num: '04',
        title: 'Time',
        body: 'We work slowly. Small teams, few projects, long relationships. Architecture is not a fast medium, and we do not pretend otherwise.',
    },
]

export default function AboutPage() {
    return (
        <div className="bg-cream">
            {/* ============================================
          HERO — editorial statement
          ============================================ */}
            <section className="pt-32 md:pt-44 pb-20 md:pb-32">
                <div className="container-editorial">
                    <Reveal>
                    <p className="eyebrow mb-8 md:mb-12">About Vale & Silva</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                    <h1 className="font-serif text-hero text-charcoal text-balance max-w-[18ch] leading-[1]">
  A small studio, working slowly, on buildings that last.
</h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-10 md:mt-14 text-stone text-lg md:text-xl leading-relaxed max-w-2xl">
                        Founded in Lisbon in 2014 by Zara Mahmood and Elias Silva, Vale & Silva 
works across residential, cultural, and adaptive-reuse projects. 
Our practice is intentionally small — every project is led by a 
principal, and every drawing passes through the same two hands.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ============================================
          IMAGE — editorial moment
          ============================================ */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <Reveal>
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-line">
                            <Image
                                src="/images/about.jpg"
                                alt="Architectural model being assembled over blueprints"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============================================
          FULL STORY — two-column editorial text
          ============================================ */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                        <div className="md:col-span-4">
                            <Reveal>
                                <p className="eyebrow">The practice</p>
                            </Reveal>
                        </div>
                        <div className="md:col-span-8 space-y-6 md:space-y-8">
                            <Reveal delay={0.1}>
                                <p className="font-serif text-h3 text-charcoal leading-[1.35] text-pretty">
                                    We started with a simple conviction: that good architecture
                                    is quiet, patient, and largely invisible. It does not shout.
                                    It does not follow trends. It responds to a site, a climate,
                                    and a set of human needs — and then it steps aside.
                                </p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <p className="text-stone text-base md:text-lg leading-relaxed">
                                    Over eleven years, we've built houses, chapels, reading
                                    rooms, warehouses-turned-studios, and a handful of projects
                                    that don't fit neatly into a category. What they share is a
                                    temperament: restraint in form, honesty in material, and a
                                    deep respect for light.
                                </p>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-stone text-base md:text-lg leading-relaxed">
                                    We work with a small team — four people in the studio, plus
                                    a trusted network of engineers, fabricators, and craftsmen
                                    we've collaborated with for years. We take on four to six
                                    projects a year. Not more. Every project is led by a
                                    principal, from first sketch to the final site visit.
                                </p>
                            </Reveal>
                            <Reveal delay={0.25}>
                                <p className="text-stone text-base md:text-lg leading-relaxed">
                                    We believe architecture is a long-term commitment. What we
                                    build should be standing — and better — in fifty years. That
                                    belief shapes every decision we make, from the way we detail
                                    a corner to the way we choose a client.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          PRINCIPLES — four numbered statements
          ============================================ */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <div className="mb-14 md:mb-20">
                        <Reveal>
                            <p className="eyebrow mb-6">Principles</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="font-serif text-h1 text-charcoal max-w-[16ch] text-balance">
                                Four ideas that shape every project.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-20">
                        {principles.map((p, i) => (
                            <Reveal key={p.num} delay={i * 0.08}>
                                <div className="border-t border-line pt-8">
                                    <p className="font-serif text-3xl md:text-4xl text-accent leading-none mb-6">
                                        {p.num}
                                    </p>
                                    <h3 className="font-serif text-h3 text-charcoal mb-4">
                                        {p.title}
                                    </h3>
                                    <p className="text-stone text-base md:text-lg leading-relaxed">
                                        {p.body}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          TEAM — name, role, short line (no photos)
          ============================================ */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <div className="mb-14 md:mb-20">
                        <Reveal>
                            <p className="eyebrow mb-6">The team</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="font-serif text-h1 text-charcoal max-w-[16ch] text-balance">
                                A small group, working closely.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="border-t border-line">
                        {team.map((person, i) => (
                            <Reveal key={person.name} delay={i * 0.08}>
                                <div className="border-b border-line py-8 md:py-10">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline">
                                        <div className="md:col-span-4">
                                            <h3 className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">
                                                {person.name}
                                            </h3>
                                        </div>
                                        <div className="md:col-span-3">
                                            <p className="text-xs tracking-widest uppercase text-stone">
                                                {person.role}
                                            </p>
                                        </div>
                                        <div className="md:col-span-5">
                                            <p className="text-stone text-base leading-relaxed">
                                                {person.line}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          CTA
          ============================================ */}
            <section className="py-24 md:py-32 bg-ivory">
                <div className="container-editorial text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">Work with us</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-h1 text-charcoal text-balance max-w-2xl mx-auto">
                            Have a project in mind?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 text-charcoal"
                            >
                                <span className="font-serif text-xl md:text-2xl link-underline">
                                    Get in touch
                                </span>
                                <span
                                    aria-hidden
                                    className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                            <Link
                                href="/work"
                                className="link-underline text-charcoal text-sm tracking-wide"
                            >
                                View our work →
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}