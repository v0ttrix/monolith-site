import Image from "next/image";
import RevealGroup from "@/components/RevealGroup";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative py-20 px-5 md:px-16 bg-brand-light overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
      )}
      <div className="max-w-site mx-auto relative z-10">
        <RevealGroup>
          <span className="font-body text-label tracking-[0.3em] uppercase mb-4 block text-accent-bright">
            {eyebrow}
          </span>
          <h1 className="font-display text-display-mobile md:text-display-xl text-white max-w-3xl leading-none">
            {title}
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl">{subtitle}</p>
        </RevealGroup>
      </div>
    </section>
  );
}
