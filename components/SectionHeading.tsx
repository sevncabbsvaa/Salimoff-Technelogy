export default function SectionHeading({
  eyebrow,
  heading,
  align = "center",
}: {
  eyebrow: string;
  heading: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`flex flex-col gap-3.5 ${align === "center" ? "text-center max-w-160 mx-auto" : ""}`}>
      <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-accent-light">{eyebrow}</span>
      <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold m-0 leading-[1.15]">{heading}</h2>
    </div>
  );
}
