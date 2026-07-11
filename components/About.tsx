import type { SiteContent } from "@/data/types";

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-surface border border-accent-light/12 rounded-card px-7 py-6.5 shadow-[inset_0_1px_0_rgba(96,165,250,0.08)] transition-all duration-250 hover:border-accent-light/40 hover:-translate-y-0.75 hover:shadow-[0_10px_30px_rgba(59,130,246,0.14),inset_0_1px_0_rgba(96,165,250,0.12)]">
      <h3 className="font-heading text-lg font-semibold m-0 mb-2 text-accent-light">{title}</h3>
      <p className="text-[15px] leading-[1.6] text-muted m-0">{text}</p>
    </div>
  );
}

export default function About({ content }: { content: SiteContent }) {
  const { about } = content;
  return (
    <section id="haqqimizda" className="px-6 py-[90px]">
      <div className="max-w-[1200px] mx-auto grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-12 items-center">
        <div className="flex flex-col gap-4.5">
          <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold m-0 leading-[1.15]">{about.title}</h2>
          <p className="text-base leading-[1.7] text-muted m-0">{about.text}</p>
        </div>
        <div className="grid gap-4.5">
          <InfoCard title={about.mission.title} text={about.mission.text} />
          <InfoCard title={about.vision.title} text={about.vision.text} />
        </div>
      </div>
    </section>
  );
}
