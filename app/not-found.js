import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream text-center px-6">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-serif text-h1 text-charcoal mb-6">
        Page not found.
      </h1>
      <p className="text-stone text-lg max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="group inline-flex items-center gap-3 text-charcoal"
      >
        <span className="font-serif text-xl md:text-2xl link-underline">
          Return home
        </span>
        <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  )
}