import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icons";

type Variant = "primary" | "secondary" | "outline" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand-dark shadow-soft",
  secondary: "bg-brand-dark text-white hover:bg-brand-darker focus-visible:outline-white",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-brand-dark focus-visible:outline-white",
  white: "bg-white text-brand-dark hover:bg-brand-tint focus-visible:outline-brand",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon && <Icon name={icon} className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4" />}
    </Link>
  );
}
