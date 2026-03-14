import { ButtonHTMLAttributes } from "react";

type Variant = "green" | "purple" | "outline";

const variants: Record<Variant, string> = {
  green:
    "bg-brand-green text-white hover:bg-brand-green-hover hover:scale-[1.01] active:scale-[0.99]",
  purple:
    "bg-brand-purple text-white hover:bg-brand-purple-dark hover:scale-[1.01] active:scale-[0.99]",
  outline:
    "border border-white text-white hover:bg-white/10",
};

export default function Button({
  variant = "green",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`px-8 py-4 rounded font-semibold text-lg transition-all duration-150 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
