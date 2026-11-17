type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-7 bg-neutral-400" />

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
}