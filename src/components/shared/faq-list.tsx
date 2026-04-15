export function FaqList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group glass-panel rounded-[1.5rem] p-6 surface-ring"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            
            <span>{item.question}</span>

            {/* Arrow */}
            <span className="ml-4 transition-transform duration-200 group-open:rotate-180">
              ▼
            </span>

          </summary>

          <p className="mt-4  text-sm leading-7 text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}