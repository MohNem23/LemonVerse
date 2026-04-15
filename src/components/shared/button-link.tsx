import Link from "next/link";
import { cn } from "@/lib/cn";

const styles = {
  primary: "bg-primary !text-black hover:bg-primary-soft",
  secondary: "border border-line bg-white/3 text-primary hover:bg-white/6",
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
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        styles[variant],
        className,
      )}
    />
  );
}
