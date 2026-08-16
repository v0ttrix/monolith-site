interface SectionProps {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}

export default function Section({ children, className = "", contained = true }: SectionProps) {
  if (contained) {
    return (
      <section className={`py-24 px-5 md:px-16 ${className}`}>
        <div className="max-w-site mx-auto">{children}</div>
      </section>
    );
  }

  return <section className={`py-24 ${className}`}>{children}</section>;
}
