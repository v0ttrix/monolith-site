"use client";

import Image from "next/image";
import { Button, FormField, Section, PageHero } from "@/components/ui";
import RevealGroup from "@/components/RevealGroup";
import { FormEvent } from "react";

const contactInfo = [
  { icon: "location_on", title: "Office", content: "680 S Federal Street\nSuite 400\nChicago, IL 60605" },
  { icon: "phone", title: "Phone", content: "+1 (647) 917-8121", href: "tel:+16479178121" },
  { icon: "mail", title: "Email", content: "deals@ushayat.com", href: "mailto:deals@ushayat.com" },
  { icon: "schedule", title: "Business Hours", content: "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed" },
];

export default function ContactsPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you within 24 hours.");
    e.currentTarget.reset();
  }

  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title={<><span className="text-accent-bright italic">Contact</span> Us</>}
        subtitle="We'd love to hear from you. Reach out through any of the channels below or send us a message directly."
      />

      {/* Contact Info + Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info */}
          <div className="lg:col-span-5 space-y-10">
            <RevealGroup>
              <h2 className="font-display text-heading-lg text-brand mb-8">Contact Information</h2>
              <p className="text-slate">Our team is available during business hours to assist you with any inquiries.</p>
            </RevealGroup>

            <div className="space-y-8">
              {contactInfo.map((item) => (
                <RevealGroup key={item.title}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-accent" aria-hidden="true">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.href ? (
                        <p className="text-slate">
                          <a href={item.href} className="hover:text-accent transition-colors">{item.content}</a>
                        </p>
                      ) : (
                        <p className="text-slate whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealGroup>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <RevealGroup>
              <div className="bg-white shadow-sm border border-muted-light/30 p-8 md:p-12">
                <h3 className="font-display text-heading-sm mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="First Name" id="firstName" required placeholder="John" />
                    <FormField label="Last Name" id="lastName" required placeholder="Doe" />
                  </div>
                  <FormField label="Email" id="contactEmail" type="email" required placeholder="you@example.com" />
                  <FormField label="Phone (Optional)" id="contactPhone" type="tel" placeholder="+1 (555) 000-0000" />
                  <FormField label="Subject" id="subject" type="select" required>
                    <option value="">Select a topic</option>
                    <option value="selling">Selling a Property</option>
                    <option value="buying">Buying/Investing</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </FormField>
                  <FormField label="Message" id="message" type="textarea" required rows={5} placeholder="How can we help you?" />
                  <Button type="submit" variant="dark" className="w-full">Send Message</Button>
                </form>
              </div>
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* Map placeholder */}
      <section className="bg-sand-light">
        <div className="w-full h-[400px] overflow-hidden relative">
          <Image src="/images/interior-modern.jpg" alt="Office building" fill className="object-cover" />
          <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-[48px] text-white mb-4" aria-hidden="true">location_on</span>
              <p className="text-xs uppercase tracking-widest text-white">680 S Federal Street, Chicago</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
