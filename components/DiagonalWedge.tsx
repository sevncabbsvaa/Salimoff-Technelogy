export default function DiagonalWedge({ position, angle }: { position: "in" | "out"; angle: "right" | "left" }) {
  const dir = angle === "right" ? "to bottom right" : "to bottom left";
  const background =
    position === "in"
      ? `linear-gradient(${dir}, transparent 49.6%, var(--color-bg-tint) 50.4%)`
      : `linear-gradient(${dir}, var(--color-bg-tint) 49.6%, transparent 50.4%)`;

  return <div aria-hidden="true" className="h-[90px]" style={{ marginTop: position === "in" ? "-90px" : undefined, background }} />;
}
