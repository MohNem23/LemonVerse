export function FaqList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="glass-panel rounded-[1.5rem] p-6 surface-ring">
          <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
