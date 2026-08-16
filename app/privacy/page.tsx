import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "USHAYAT HOLDINGS | Privacy Policy",
  description: "Privacy policy for Ushayat Holdings. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.ushayat.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="text-accent-bright italic">Policy</span></>}
        subtitle="Last updated: August 16, 2026"
      />

      <Section>
        <div className="max-w-3xl mx-auto prose-style">
          <p className="text-slate mb-8 text-lg">
            Ushayat Holdings (&quot;we,&quot; &quot;us&quot;) is a cash home buyer that purchases properties directly from owners in the Chicago area. This page describes the personal information we gather when you use{" "}
            <a href="https://www.ushayat.com" className="text-accent hover:underline">ushayat.com</a>, what we do with it, and the control you have over it.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Information we gather</h2>
          <p className="text-slate mb-4">
            We receive only what you hand to us, along with some routine browsing data:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate mb-8">
            <li>
              <strong>Details you give us</strong> — when you complete a form to get a cash offer, we receive things like your name, phone, email, the address of the property, and whatever you choose to tell us about it (its condition, your timeline, why you&apos;re selling, and so on).
            </li>
            <li>
              <strong>Data collected automatically</strong> — as you browse, we log ordinary technical details such as the page you arrived on, the website that sent you here, and any campaign tags in the link (for instance UTM values or ad-click IDs) so we can tell where our visitors come from.
            </li>
          </ul>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Why we use it</h2>
          <p className="text-slate mb-4">
            We rely on your information for a short list of reasons:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate mb-8">
            <li>Putting together an offer on your property and getting in touch with you about it.</li>
            <li>Answering your questions and following up after you reach out.</li>
            <li>Seeing which of our marketing efforts actually reach real sellers.</li>
          </ul>
          <p className="text-slate mb-8">
            We never sell your personal information, and we don&apos;t send marketing email to anyone who hasn&apos;t asked to hear from us.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Who else sees it</h2>
          <p className="text-slate mb-8">
            The only outside parties that touch your information are the vendors that keep our business running — such as the email provider that forwards your enquiry to us, the company that hosts this website, and, when we use one, the CRM tool we rely on to track seller enquiries. We pass along only what is necessary, and we never sell or rent your details. We may release information when the law requires it.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Cookies and analytics</h2>
          <p className="text-slate mb-8">
            This website may place cookies and run analytics software to count visits and improve the experience. You&apos;re free to turn cookies off or clear them in your browser — everything will still function. Our cookies are not used to identify you personally.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Keeping it safe</h2>
          <p className="text-slate mb-8">
            We apply sensible security measures to guard your information and hold onto it only for as long as we need it to handle your enquiry and meet our legal and operational obligations. No way of sending or storing data is ever completely secure, but we do what is reasonable to keep the risk low.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Updates to this policy</h2>
          <p className="text-slate mb-8">
            This policy may change over time. The date shown near the top tells you when we last revised it.
          </p>

          <h2 className="font-display text-heading-sm text-brand mt-12 mb-4">Contact us</h2>
          <p className="text-slate">
            Questions about this policy or your information? Email{" "}
            <a href="mailto:deals@ushayat.com" className="text-accent hover:underline">deals@ushayat.com</a>{" "}
            or call{" "}
            <a href="tel:+16479178121" className="text-accent hover:underline">(647) 917-8121</a>.
          </p>
        </div>
      </Section>
    </main>
  );
}
