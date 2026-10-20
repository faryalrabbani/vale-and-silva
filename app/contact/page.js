'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '../components/Reveal'

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    })
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        setTimeout(() => {
            setStatus('sent')
            setTimeout(() => {
                setFormState({
                    name: '',
                    email: '',
                    projectType: '',
                    message: '',
                })
                setStatus('idle')
            }, 5000)
        }, 900)
    }

    return (
        <div className="bg-cream">
            {/* HERO */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24">
                <div className="container-editorial">
                    <div className="max-w-4xl">
                        <Reveal>
                            <p className="eyebrow mb-8 md:mb-10">Start a conversation</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="font-serif text-hero text-charcoal text-balance max-w-[16ch] leading-[1]">
                                Let's talk about your project.
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-8 md:mt-10 text-stone text-lg md:text-xl leading-relaxed max-w-2xl">
                                Tell us a little about what you're planning. We respond to
                                every enquiry personally — usually within two working days.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FORM + INFO */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                        {/* FORM */}
                        <div className="md:col-span-7">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs tracking-widest uppercase text-charcoal mb-3"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-0 border-b border-line focus:border-charcoal focus:outline-none focus:ring-0 text-charcoal text-lg py-3 transition-colors duration-300 placeholder:text-stone/50"
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs tracking-widest uppercase text-charcoal mb-3"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-0 border-b border-line focus:border-charcoal focus:outline-none focus:ring-0 text-charcoal text-lg py-3 transition-colors duration-300 placeholder:text-stone/50"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                {/* Project type — with placeholder */}
                                <div>
                                    <label
                                        htmlFor="projectType"
                                        className="block text-xs tracking-widest uppercase text-charcoal mb-3"
                                    >
                                        Project type
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        required
                                        value={formState.projectType}
                                        onChange={handleChange}
                                        className={`w-full bg-transparent border-0 border-b border-line focus:border-charcoal focus:outline-none focus:ring-0 text-lg py-3 transition-colors duration-300 cursor-pointer ${formState.projectType === ''
                                                ? 'text-stone/50'
                                                : 'text-charcoal'
                                            }`}
                                    >
                                        <option value="" disabled hidden>
                                            Select a project type
                                        </option>
                                        <option value="Residential">Residential</option>
                                        <option value="Interiors">Interiors</option>
                                        <option value="Adaptive Reuse">Adaptive Reuse</option>
                                        <option value="Cultural">Cultural</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs tracking-widest uppercase text-charcoal mb-3"
                                    >
                                        About the project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-0 border-b border-line focus:border-charcoal focus:outline-none focus:ring-0 text-charcoal text-lg py-3 transition-colors duration-300 placeholder:text-stone/50 resize-none"
                                        placeholder="A few lines about what you're planning — site, brief, timeline, anything you have in mind."
                                    />
                                </div>

                                {/* Submit */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="group inline-flex items-center gap-4 text-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="font-serif text-2xl md:text-3xl link-underline">
                                            {status === 'sending'
                                                ? 'Sending...'
                                                : status === 'sent'
                                                    ? 'Thank you'
                                                    : 'Send message'}
                                        </span>
                                        <span
                                            aria-hidden
                                            className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2"
                                        >
                                            {status === 'sent' ? '✓' : '→'}
                                        </span>
                                    </button>

                                    {status === 'sent' && (
                                        <p className="mt-4 text-sm text-stone">
                                            We've received your message and will be in touch
                                            shortly.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* INFO */}
                        <div className="md:col-span-4 md:col-start-9">
                            <Reveal>
                                <p className="eyebrow mb-6">Direct</p>
                                <ul className="space-y-5 border-t border-line pt-6">
                                    <li>
                                        <p className="text-xs tracking-widest uppercase text-stone mb-1">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:hello@valesilva.com"
                                            className="link-underline text-charcoal text-base"
                                        >
                                            hello@valesilva.com
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-xs tracking-widest uppercase text-stone mb-1">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+351211234567"
                                            className="link-underline text-charcoal text-base"
                                        >
                                            +351 21 123 4567
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-xs tracking-widest uppercase text-stone mb-1">
                                            Studio
                                        </p>
                                        <p className="text-charcoal text-base leading-relaxed">
                                            Rua da Boavista 128
                                            <br />
                                            1200-069 Lisboa, Portugal
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-xs tracking-widest uppercase text-stone mb-1">
                                            Hours
                                        </p>
                                        <p className="text-charcoal text-base leading-relaxed">
                                            Mon — Fri, 10am — 6pm WET
                                        </p>
                                    </li>
                                </ul>
                            </Reveal>

                            <Reveal delay={0.15}>
                                <div className="mt-12 pt-8 border-t border-line">
                                    <p className="eyebrow mb-4">Not a project?</p>
                                    <p className="text-stone text-sm leading-relaxed">
                                        For press, collaborations, or general enquiries, email us
                                        directly at{' '}
                                        <a
                                            href="mailto:press@valesilva.com"
                                            className="link-underline text-charcoal"
                                        >
                                            press@valesilva.com
                                        </a>
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="pb-20 md:pb-32">
                <div className="container-editorial">
                    <Reveal>
                        <p className="eyebrow mb-6">Find us</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-line border border-line">
                            <iframe
                                title="Studio location — Lisbon, Portugal"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.162%2C38.704%2C-9.140%2C38.718&layer=mapnik&marker=38.711%2C-9.151"
                                className="absolute inset-0 w-full h-full"
                                style={{
                                    border: 0,
                                    filter: 'grayscale(0.7) sepia(0.15) contrast(0.95)',
                                }}
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHAT HAPPENS NEXT */}
            <section className="py-20 md:py-28 bg-ivory border-t border-line">
                <div className="container-editorial">
                    <div className="max-w-3xl mb-14 md:mb-20">
                        <Reveal>
                            <p className="eyebrow mb-6">What happens next</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="font-serif text-h2 text-charcoal text-balance">
                                A quiet, three-step beginning.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        {[
                            {
                                num: '01',
                                title: 'You write to us',
                                body: 'Tell us what you have in mind. No pressure, no commitment — just a first conversation.',
                            },
                            {
                                num: '02',
                                title: 'We reply personally',
                                body: 'A principal of the studio will read your message and respond directly, usually within two working days.',
                            },
                            {
                                num: '03',
                                title: 'We meet',
                                body: 'If there is a fit, we arrange a first meeting — in person or on a call — to talk through your brief.',
                            },
                        ].map((step, i) => (
                            <Reveal key={step.num} delay={i * 0.1}>
                                <div className="border-t border-line pt-8">
                                    <p className="font-serif text-3xl md:text-4xl text-accent leading-none mb-6">
                                        {step.num}
                                    </p>
                                    <h3 className="font-serif text-h3 text-charcoal mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-stone text-base leading-relaxed">
                                        {step.body}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}