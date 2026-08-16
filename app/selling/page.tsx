"use client";

import Image from "next/image";
import { Button, FormField, Section, PageHero } from "@/components/ui";
import RevealGroup from "@/components/RevealGroup";
import { FormEvent, useState } from "react";

const properties = [
  { name: "The Evergreen Estate", specs: "4 Bed · 3 Bath · 3,200 sqft", price: "$1.85M · 5 Days on Market", img: "/images/property-1.jpg" },
  { name: "Parkview Residence", specs: "5 Bed · 4 Bath · 4,100 sqft", price: "$2.4M · 12 Days on Market", img: "/images/property-2.jpg" },
  { name: "Horizon Heights", specs: "3 Bed · 2.5 Bath · 2,800 sqft", price: "$1.2M · 8 Days on Market", img: "/images/property-3.jpg" },
];

export default function SellingPage() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        const name = (form.elements.namedItem("First Name") as HTMLInputElement).value;
        alert(`Thank you, ${name}! Your property has been submitted. We'll contact you within 24 hours.`);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Sell Your Home"
        title={<>We Buy. <span className="text-accent-bright italic">You Win.</span></>}
        subtitle="We buy homes directly from owners at fair, competitive prices, ensuring a smooth, respectful, and stress-free experience. No agents, no waiting, no hidden fees."
        image="/images/selling-house.jpg"
      />

      {/* Form + Sidebar */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-sm border border-muted-light/30 p-6 md:p-12">
              <h2 className="font-display text-heading-lg text-brand mb-4">Tell Us About Your Property</h2>
              <p className="text-slate mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours with a fair offer — no obligation.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="ff183841-0e7c-4f48-a7bc-9f4c0070b281" />
                <input type="hidden" name="subject" value="New Property Submission, Ushayat Holdings" />
                <input type="hidden" name="from_name" value="Ushayat Holdings Website" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" id="sellerFirstName" name="First Name" required placeholder="John" />
                  <FormField label="Last Name" id="sellerLastName" name="Last Name" required placeholder="Doe" />
                </div>
                <FormField label="Phone Number" id="sellerPhone" type="tel" name="Phone" required placeholder="+1 (555) 000-0000" />
                <FormField label="Email" id="sellerEmail" type="email" name="Email" required placeholder="you@example.com" />
                <FormField label="Property Address" id="propertyAddress" name="Property Address" required placeholder="123 Main Street, City, State, ZIP" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Property Type" id="propertyType" type="select" name="Property Type" required>
                    <option value="">Select type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condo / Apartment</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land / Lot</option>
                  </FormField>
                  <FormField label="Asking Price" id="askingPrice" name="Asking Price" required placeholder="$500,000" />
                </div>

                <FormField label="Additional Details (Optional)" id="propertyDetails" type="textarea" name="Additional Details" placeholder="Bedrooms, bathrooms, square footage, special features..." />

                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Submitting..." : "Submit Property"}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-sand p-8">
              <h3 className="font-display text-heading-sm mb-6">What Happens Next?</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "We Review", desc: "Our team reviews your property details and researches comparable sales in your area." },
                  { step: "2", title: "We Make an Offer", desc: "Within 24 hours, we contact you with a fair, no-obligation cash offer for your home." },
                  { step: "3", title: "You Choose", desc: "Accept the offer and we close on your timeline, or walk away with zero pressure." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
                      <span className="text-[10px] text-white font-semibold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal text-bone p-8 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] text-accent-bright uppercase tracking-widest mb-1">Avg. Days on Market</p>
                <p className="font-display text-heading-sm text-white">21 Days</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] text-accent-bright uppercase tracking-widest mb-1">Asking Price Achieved</p>
                <p className="font-display text-heading-sm text-white">98%</p>
              </div>
              <div>
                <p className="text-[10px] text-accent-bright uppercase tracking-widest mb-1">Properties Sold</p>
                <p className="font-display text-heading-sm text-white">150+</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recently Sold */}
      <Section className="bg-sand-light">
        <RevealGroup className="text-center mb-16">
          <h2 className="font-display text-heading-lg text-brand mb-4">Recently Sold</h2>
          <p className="text-slate max-w-2xl mx-auto">A selection of properties we&apos;ve successfully brought to market.</p>
        </RevealGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <RevealGroup key={p.name} className={i > 0 ? `reveal-delay-${i}` : ""}>
              <div className="group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-accent px-3 py-1 text-[10px] uppercase tracking-widest text-white">Sold</div>
                </div>
                <div className="pt-6">
                  <h3 className="font-display text-heading-sm mb-1">{p.name}</h3>
                  <p className="text-sm text-slate">{p.specs}</p>
                  <p className="text-[10px] text-accent uppercase tracking-widest mt-2">{p.price}</p>
                </div>
              </div>
            </RevealGroup>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-brand-light">
        <RevealGroup className="max-w-site mx-auto text-center px-5 md:px-16">
          <h2 className="font-display text-heading-lg text-white mb-4">Prefer to talk first?</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Schedule a call with one of our agents to discuss your property before submitting.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button href="/appointment" className="hover:scale-105 transition-transform duration-300">Book a Call</Button>
            <Button href="/contacts" variant="outline">Contact Us</Button>
          </div>
        </RevealGroup>
      </section>
    </main>
  );
}
