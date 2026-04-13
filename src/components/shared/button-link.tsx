import Link from "next/link";
import { cn } from "@/lib/cn";

const styles = {
  primary:
    "bg-primary text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_18px_40px_rgba(244,208,63,0.16)] border border-white/28 hover:brightness-105 [text-shadow:0_1px_0_rgba(0,0,0,0.7),0_0_10px_rgba(0,0,0,0.32),0_0_14px_rgba(255,255,255,0.14)]",
  secondary: "border border-line bg-white/3 text-foreground hover:bg-white/6",
  ghost: "text-foreground hover:text-primary",
} as const;

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: keyof typeof styles;
}) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition duration-200 hover:-translate-y-0.5",
        styles[variant],
        className,
      )}
    />
  );
}
