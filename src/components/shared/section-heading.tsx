type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl space-y-4 text-center" : "space-y-4"}>
      {eyebrow ? (
        <span className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
