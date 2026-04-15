import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[76rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
