import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream border-t border-cream/30">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          {/* Wordmark + tagline */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-serif text-2xl md:text-3xl tracking-editorial text-cream"
            >
              Vale <span className="text-accent">&</span> Silva
            </Link>
            <p className="mt-4 text-sm text-cream/60 max-w-xs leading-relaxed">
            Architecture, interiors, and light. Working from Lisbon,
collaborating internationally.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <p className="eyebrow text-cream/50 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/work', label: 'Work' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/80 hover:text-cream link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="md:col-span-2">
            <p className="eyebrow text-cream/50 mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {[
                { href: 'https://instagram.com', label: 'Instagram' },
                { href: 'https://linkedin.com', label: 'LinkedIn' },
                { href: 'https://behance.net', label: 'Behance' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cream/80 hover:text-cream link-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="eyebrow text-cream/50 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
              <a
  href="mailto:hello@valesilva.com"
  className="text-sm text-cream/80 hover:text-cream link-underline"
>
  hello@valesilva.com
</a>
              </li>
              <li className="text-sm text-cream/60 leading-relaxed">
              Lisbon, PT
              </li>
            </ul>
          </div>
        </div>

       {/* Bottom bar */}
       <div className="mt-16 pt-8 border-t border-cream/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-cream/70 tracking-wide">
          © {year} Vale & Silva. All rights reserved.
  </p>
  <p className="text-xs text-cream/70 tracking-wide">
    Designed & built with restraint.
  </p>
</div>
      </div>
    </footer>
  )
}