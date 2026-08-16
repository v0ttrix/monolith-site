import Link from "next/link";

type Variant = "primary" | "outline" | "outline-dark" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90",
  outline:
    "border border-white/40 text-white hover:bg-white/10",
  "outline-dark":
    "border border-accent text-accent hover:bg-accent hover:text-white",
  dark:
    "bg-brand text-white hover:opacity-80",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-block px-10 py-4 font-body text-label uppercase tracking-widest transition-all text-center active:scale-95";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
