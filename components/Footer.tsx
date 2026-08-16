import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-charcoal border-t-2 border-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-5 md:px-16 py-20 max-w-site mx-auto text-sand-dark">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="font-display text-heading-sm text-sand-dark mb-6 block hover:text-accent-bright transition-colors"
          >
            HAYAT HOLDINGS
          </Link>
          <p className="text-sm text-muted max-w-xs mb-8">
            A Chicago-based real estate company that buys, renovates, and sells homes.
            Transforming houses, elevating neighborhoods.
          </p>
          <div className="flex gap-6">
            <a href="#" aria-label="Website">
              <span className="material-symbols-outlined hover:text-accent-bright transition-colors" aria-hidden="true">
                public
              </span>
            </a>
            <a href="#" aria-label="Credentials">
              <span className="material-symbols-outlined hover:text-accent-bright transition-colors" aria-hidden="true">
                token
              </span>
            </a>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <h4 className="text-[10px] uppercase tracking-widest text-accent-bright mb-6 font-semibold">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/" className="hover:text-accent-bright transition-colors">Home</Link></li>
            <li><Link href="/selling" className="hover:text-accent-bright transition-colors">Selling</Link></li>
            <li><Link href="/about" className="hover:text-accent-bright transition-colors">About Us</Link></li>
            <li><Link href="/contacts" className="hover:text-accent-bright transition-colors">Contacts</Link></li>
            <li><Link href="/appointment" className="hover:text-accent-bright transition-colors">Appointment</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-widest text-accent-bright mb-6 font-semibold">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/selling" className="hover:text-accent-bright transition-colors">Sell Your Home</Link></li>
            <li><Link href="/appointment" className="hover:text-accent-bright transition-colors">Free Consultation</Link></li>
            <li><Link href="/contacts" className="hover:text-accent-bright transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-widest text-accent-bright mb-6 font-semibold">
            Legal
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><a href="/privacy" className="hover:text-accent-bright transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent-bright transition-colors">Terms of Service</a></li>
          </ul>
          <div className="mt-12 text-xs opacity-40">&copy; 2025 Hayat Holdings. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
