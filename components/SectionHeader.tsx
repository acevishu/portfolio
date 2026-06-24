type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-28">
      <p className="signal-title mb-3 text-xs text-neon">[{eyebrow}]</p>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-normal text-white md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-muted md:text-base">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
