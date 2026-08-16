import type { Metadata } from "next";
import Image from "next/image";
import { Button, Section, PageHero } from "@/components/ui";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "HAYAT HOLDINGS | About Us",
  description: "Hayat Holdings is a Chicago-based real estate company that buys, renovates, and sells homes. We transform houses and elevate neighborhoods, one home at a time.",
  openGraph: {
    title: "HAYAT HOLDINGS | About Us",
    description: "Chicago-based real estate company transforming houses and elevating neighborhoods. Learn our story.",
    url: "https://www.ushayat.com/about",
  },
  alternates: { canonical: "https://www.ushayat.com/about" },
};

const values = [
  { icon: "handshake", title: "Fair Dealing", desc: "We offer honest, competitive prices and treat every homeowner with the respect they deserve. No pressure, no games." },
  { icon: "groups", title: "Community First", desc: "We measure success by the positive impact we create in neighborhoods, not just the bottom line." },
  { icon: "construction", title: "Quality Craftsmanship", desc: "Every renovation is done right — quality materials, expert contractors, and attention to detail that stands the test of time." },
  { icon: "location_city", title: "Chicago Proud", desc: "Chicago is our home. We know its neighborhoods, its people, and its potential. We're invested in this city's future." },
];

const stats = [
  { value: "50+", label: "Homes Bought" },
  { value: "50+", label: "Homes Renovated" },
  { value: "50+", label: "Homes Sold" },
  { value: "100%", label: "Chicago Focused" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who We Are"
        title={<>Chicago-Based. Community-Focused. <span className="text-accent-bright italic">Results-Driven.</span></>}
        subtitle="Hayat Holdings is a Chicago-based real estate company with a simple mission: to transform houses and elevate neighborhoods."
        image="/images/team.jpg"
      />

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <RevealGroup>
              <h2 className="font-display text-heading-lg text-brand mb-6">Our Story</h2>
              <p className="text-lg text-slate mb-6">
                We started with a simple belief: every home has potential, and every neighborhood deserves investment. What began as a passion for renovating homes in Chicago has grown into a full-service real estate operation.
              </p>
              <p className="text-slate mb-6">
                Today, Hayat Holdings buys properties directly from homeowners, renovates them with care and quality craftsmanship, and brings them back to market as beautiful, move-in-ready homes.
              </p>
              <p className="text-slate">
                We don&apos;t just flip houses — we create opportunities, strengthen communities, and turn real estate dreams into reality.
              </p>
            </RevealGroup>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealGroup>
              <Image
                src="/images/office.jpg"
                alt="Hayat Holdings office"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-sand-light" contained={false}>
        <div className="max-w-site mx-auto px-5 md:px-16">
          <RevealGroup className="text-center mb-16">
            <h2 className="font-display text-heading-lg text-brand mb-4">What We Do</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Our process is simple, transparent, and built around respect for homeowners and communities.
            </p>
          </RevealGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 max-w-[1200px] mx-auto">
          {[
            { src: "/images/slide-we-buy.jpg", alt: "We buy homes" },
            { src: "/images/slide-we-renovate.jpg", alt: "We renovate with quality" },
            { src: "/images/slide-we-sell.jpg", alt: "We sell move-in ready" },
          ].map((img, i) => (
            <RevealGroup key={img.src} className={i > 0 ? `reveal-delay-${i}` : ""}>
              <Image src={img.src} alt={img.alt} width={500} height={375} className="w-full rounded-sm" />
            </RevealGroup>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <RevealGroup className="text-center mb-20">
          <h2 className="font-display text-heading-lg text-brand mb-4">Our Values</h2>
          <p className="text-slate max-w-2xl mx-auto">The principles that guide every decision we make.</p>
        </RevealGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {values.map((v, i) => (
            <RevealGroup key={v.title} className={i > 0 ? `reveal-delay-${i}` : ""}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-accent" aria-hidden="true">{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-heading-sm mb-3">{v.title}</h3>
                  <p className="text-slate">{v.desc}</p>
                </div>
              </div>
            </RevealGroup>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-charcoal text-bone">
        <RevealGroup>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-display-mobile text-accent-bright">{s.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-brand-light">
        <RevealGroup className="max-w-site mx-auto text-center px-5 md:px-16">
          <h2 className="font-display text-heading-lg text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Whether you&apos;re looking to sell your home fast or buy a beautifully renovated property, let&apos;s talk.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button href="/selling" className="hover:scale-105 transition-transform duration-300">Sell Your Home</Button>
            <Button href="/appointment" variant="outline">Book a Consultation</Button>
          </div>
        </RevealGroup>
      </section>
    </main>
  );
}
