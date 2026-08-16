"use client";

import { useState } from "react";
import { Button, PageHero } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: "process",
    title: "About Our Process",
    items: [
      {
        question: "How do I sell my house fast in Chicago?",
        answer: "Send us your Chicago property address through our form or call/text us at (647) 917-8121. We ask a few quick questions about the home's condition and your timeline, then send a fair, no-obligation cash offer — usually within 24 hours. Accept it and we can close in as little as 7 days through a local real estate attorney, with no repairs, no open houses, and no commissions.",
      },
      {
        question: "What services does Hayat Holdings provide?",
        answer: "We are real estate investors that help homeowners sell their properties quickly. We provide cash offers, handle paperwork, and guide you through the process for a fast, stress-free sale.",
      },
      {
        question: "Which areas do you serve?",
        answer: "We buy properties and houses across the Chicago metropolitan area and surrounding suburbs. Our local team provides competitive offers no matter the location within our service area.",
      },
      {
        question: "How quickly can I close?",
        answer: "After you provide details about your home, we can present you with a competitive, no-obligation cash offer within 24 hours. If you accept, we can close the sale at a trusted local attorney's office in as little as 7 days — far faster than the typical 30+ days required when selling through a traditional listing.",
      },
      {
        question: "What if I don't need a fast closing?",
        answer: "Your timeline matters to us. If you prefer a later closing to align with your plans, we'll schedule the sale for a date that works best for you.",
      },
      {
        question: "Is this a legitimate process?",
        answer: "Absolutely! The real estate market is evolving, and many property owners are seeking faster, more convenient alternatives to the traditional selling process. We provide a trustworthy, transparent solution for those who may not have the time or resources to maximize their home's value on the open market. We'll assess your situation, present a straightforward offer, and close on your schedule.",
      },
    ],
  },
  {
    id: "offer",
    title: "Your Cash Offer",
    items: [
      {
        question: "What is an \"All-Cash Offer\"?",
        answer: "An all-cash offer means you receive the full purchase amount in cash — no banks, no financing contingencies, and no delays. As direct real estate investors, we eliminate the uncertainties that come with traditional buyers relying on mortgages. When we make you an offer, that's exactly what you'll receive at closing.",
      },
      {
        question: "Will I receive a low offer?",
        answer: "Our goal is to make you a fair and competitive offer. Unlike big corporations or wholesalers, we're transparent about how we determine our pricing. Our offer reflects your property's potential value after any necessary improvements. We're happy to walk you through our process so you understand exactly how we arrive at our numbers.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees & Closing Costs",
    items: [
      {
        question: "Are there any fees or commissions when selling my home?",
        answer: "No. We handle the sale with zero realtor fees or hidden commissions, ensuring you receive the full cash value of your property. Sell your house to us with no fees!",
      },
      {
        question: "What about closing costs?",
        answer: "No worries — we can cover your closing costs! Many buyers focus on the purchase price but forget about additional expenses like legal fees, title insurance, and other closing costs that can add up quickly. We work to save you as much as possible on closing day.",
      },
    ],
  },
  {
    id: "property",
    title: "Properties We Buy",
    items: [
      {
        question: "Can you buy my home in any condition?",
        answer: "Yes! We purchase properties as-is, including fixer-uppers, messy homes, and properties needing major work. No repairs, cleaning, or renovations are required. We specialize in doing the hard work, and since we buy with cash we can move fast!",
      },
      {
        question: "What does \"As-Is\" mean?",
        answer: "Selling your home \"as-is\" means you won't have to worry about making repairs or preparing it for showings. Skip the hassle of renovations — once we purchase your home, we take care of all necessary repairs and inspections. While these costs are factored into our offer, you'll save time, money, and stress by selling without any prep work.",
      },
    ],
  },
  {
    id: "situations",
    title: "Your Situation",
    items: [
      {
        question: "Can I sell inherited or rental properties quickly?",
        answer: "Yes. Our team specializes in inherited homes, estate sales, and rental properties. We provide fast, firm cash offers so you can close on your timeline without stress.",
      },
      {
        question: "What if I'm behind on mortgage payments?",
        answer: "We can help. Selling your home quickly for cash can help you avoid foreclosure and protect your credit. We'll work with your timeline and situation to find the best solution.",
      },
      {
        question: "Can I sell if I'm going through a divorce?",
        answer: "Absolutely. We understand that selling during a divorce can be stressful. A fast cash sale simplifies the process — no drawn-out listings, no showings, and a clean closing that helps both parties move forward.",
      },
    ],
  },
];

function Accordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-muted-light/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left group"
        aria-expanded={open}
      >
        <h3 className="font-display text-lg pr-8 text-charcoal group-hover:text-accent transition-colors">
          {item.question}
        </h3>
        <span className={`material-symbols-outlined text-accent shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-6" : "max-h-0"}`}
      >
        <p className="text-slate leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("process");

  const activeCategory = faqData.find((c) => c.id === activeTab) || faqData[0];

  return (
    <main>
      <PageHero
        eyebrow="Common Questions"
        title={<>Frequently Asked <span className="text-accent-bright italic">Questions</span></>}
        subtitle="Everything you need to know about selling your property for cash in Chicago. Have a different question? Call or text us — we're happy to help."
      />

      <section className="py-24 px-5 md:px-16">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Tab navigation */}
            <div className="lg:col-span-3">
              <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                {faqData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`whitespace-nowrap px-4 py-3 text-sm text-left transition-all rounded-sm ${
                      activeTab === category.id
                        ? "bg-accent text-white font-semibold"
                        : "text-slate hover:bg-sand hover:text-charcoal"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ content */}
            <div className="lg:col-span-9">
              <h2 className="font-display text-heading-lg text-brand mb-8">{activeCategory.title}</h2>
              <div>
                {activeCategory.items.map((item) => (
                  <Accordion key={item.question} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f5ede4]">
        <div className="max-w-site mx-auto text-center px-5 md:px-16">
          <h2 className="font-display text-heading-lg text-brand mb-4">
            Have a different question? Call us.
          </h2>
          <p className="text-slate max-w-xl mx-auto mb-10">
            Our team has handled hundreds of seller situations across Chicago. If your question isn&apos;t answered above, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/selling">Get a Cash Offer</Button>
            <Button href="tel:+16479178121" variant="outline-dark">Call Us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
