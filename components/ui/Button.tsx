import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export function Button({
  href,
  children,
  variant = "dark",
}: ButtonProps) {
  const styles =
    variant === "dark"
      ? "bg-black text-white hover:bg-neutral-800"
      : "bg-white text-black hover:bg-neutral-100";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${styles}`}
    >
      {children}

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}