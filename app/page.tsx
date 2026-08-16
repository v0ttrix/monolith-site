import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Section } from "@/components/ui";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "HAYAT HOLDINGS | We Buy. We Renovate. We Sell.",
  description: "Hayat Holdings is a Chicago-based real estate company that buys, renovates, and sells homes. We transform houses and elevate neighborhoods.",
  openGraph: {
    title: "HAYAT HOLDINGS | We Buy. We Renovate. We Sell.",
    description: "Chicago-based real estate company transforming houses and elevating neighborhoods.",
    url: "https://www.ushayat.com/",
  },
  alternates: { canonical: "https://www.ushayat.com/" },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center bg-brand-light overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-building.jpg"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 px-5 md:px-16 max-w-site mx-auto w-full">
          <RevealGroup>
            <span className="font-body text-label tracking-[0.3em] uppercase mb-6 block text-accent-bright">
              Chicago-Based. Community-Focused. Results-Driven.
            </span>
            <h1 className="font-display text-display-mobile md:text-display-xl text-white max-w-4xl leading-none">
              We Buy. We Renovate.<br />We <span className="text-accent-bright italic">Sell.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Hayat Holdings is a Chicago-based real estate company with a simple mission: to transform houses and elevate neighborhoods.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/selling">Sell Your Home</Button>
              <Button href="/appointment" variant="outline">Book a Consultation</Button>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <Section className="bg-sand-light" contained={false}>
        <div className="max-w-site mx-auto px-5 md:px-16">
          <RevealGroup className="text-center mb-16">
            <h2 className="font-display text-heading-lg mb-4 text-brand">How We Work</h2>
            <p className="text-slate max-w-2xl mx-auto">
              From buying to renovating to selling, we handle everything so you don&apos;t have to.
            </p>
          </RevealGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-8 max-w-[1600px] mx-auto">
          {[
            { src: "/images/slide-chicago-skyline.jpg", alt: "Chicago skyline" },
            { src: "/images/slide-we-buy.jpg", alt: "We buy homes" },
            { src: "/images/slide-we-renovate.jpg", alt: "We renovate properties" },
            { src: "/images/slide-we-sell.jpg", alt: "We sell move-in ready homes" },
            { src: "/images/slide-building-futures.jpg", alt: "Building futures" },
          ].map((img, i) => (
            <RevealGroup key={img.src} className={`reveal-delay-${i + 1}`}>
              <Image src={img.src} alt={img.alt} width={400} height={300} className="w-full rounded-sm" />
            </RevealGroup>
          ))}
        </div>
      </Section>

      {/* Before & After */}
      <Section className="bg-charcoal text-bone overflow-hidden">
        <RevealGroup className="mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <h2 className="font-display text-heading-lg text-white">Transformations That Speak</h2>
          <p className="font-body text-label uppercase tracking-widest text-accent-bright">Before &amp; After</p>
        </RevealGroup>

        <RevealGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative bg-brand-light aspect-[4/3] overflow-hidden">
                <Image src="/images/before-renovation.jpg" alt="Property before renovation" fill className="object-cover opacity-60 grayscale" />
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-4 py-2 text-[10px] tracking-widest uppercase text-white">Before</div>
              </div>
              <div className="relative bg-accent aspect-[4/3] overflow-hidden">
                <Image src="/images/after-renovation.jpg" alt="Property after renovation" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-accent px-4 py-2 text-[10px] tracking-widest uppercase text-white">After</div>
              </div>
            </div>

            <div className="md:pl-12 space-y-8">
              <div>
                <span className="font-display text-accent-bright mb-2 block italic">Chicago, IL</span>
                <h3 className="font-display text-heading-sm leading-tight">From Overlooked to Outstanding</h3>
                <p className="text-sand-dark mt-4 opacity-80">
                  What others see as a problem property, we see as potential. Our team transformed this home into a modern, move-in-ready residence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[10px] text-accent-bright uppercase tracking-widest mb-2">Value Increase</p>
                  <p className="font-display text-heading-sm text-white">+142%</p>
                </div>
                <div>
                  <p className="text-[10px] text-accent-bright uppercase tracking-widest mb-2">Community Impact</p>
                  <p className="font-display text-heading-sm text-white">High</p>
                </div>
              </div>
              <Button href="/selling" variant="outline-dark" className="w-full md:w-auto">
                Sell Us Your Property
              </Button>
            </div>
          </div>
        </RevealGroup>
      </Section>

      {/* Mission */}
      <Section>
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-heading-lg text-brand mb-6">
            Building More Than Homes. We&apos;re Building Futures.
          </h2>
          <p className="text-lg text-slate mb-6">
            At Hayat Holdings, we don&apos;t just flip houses — we create opportunities, strengthen communities, and turn real estate dreams into reality.
          </p>
          <p className="text-slate mb-8">Chicago is our home. Making dreams real, one home at a time.</p>
          <Link href="/about" className="inline-flex items-center gap-4 text-accent group">
            <span className="text-label uppercase tracking-widest border-b border-transparent group-hover:border-accent transition-all">
              Learn More About Us
            </span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2" aria-hidden="true">
              arrow_right_alt
            </span>
          </Link>
        </RevealGroup>
      </Section>

      {/* CTA */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-building.jpg" alt="" fill className="object-cover opacity-10" aria-hidden="true" />
        </div>
        <RevealGroup className="relative z-10 text-center px-5">
          <h2 className="font-display text-display-mobile md:text-heading-lg text-white mb-8">
            Ready to Sell Your Property?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-12">
            We buy homes directly from owners. No hassle, no pressure — just a fair offer and a smooth process.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button href="/selling" className="hover:scale-105 transition-transform duration-300">
              Get a Fair Offer
            </Button>
            <Button href="/appointment" variant="outline">Book a Consultation</Button>
          </div>
        </RevealGroup>
      </section>
    </main>
  );
}
