import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";
import TeamPhoto from "./TeamPhoto";

export default function Team({ content }: { content: SiteContent }) {
  const eyebrow = content.nav.links.find((l) => l.href === "#komanda")?.label ?? content.team.title;
  const { ceo, members } = content.team;

  return (
    <section id="komanda" className="px-6 pt-7.5 pb-[110px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <SectionHeading eyebrow={eyebrow} heading={content.team.title} />
        </div>

        <div className="flex justify-center mb-10">
          <div className="group bg-surface border border-accent-light/20 rounded-[18px] p-9 w-full max-w-95 text-center flex flex-col items-center gap-4 shadow-[inset_0_1px_0_rgba(96,165,250,0.1)] transition-all duration-250 hover:border-accent-light/50 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(96,165,250,0.15)]">
            <TeamPhoto src={ceo.photo} alt={ceo.name} size={128} />
            <div>
              <h3 className="font-heading text-[22px] font-bold m-0 mb-1.5">{ceo.name}</h3>
              <p className="text-sm font-semibold text-accent-light m-0">{ceo.role}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] gap-5 max-w-245 mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="group bg-surface border border-accent-light/12 rounded-card px-4.5 py-6 text-center flex flex-col items-center gap-3 transition-all duration-250 hover:border-accent-light/40 hover:-translate-y-0.75 hover:shadow-[0_10px_30px_rgba(59,130,246,0.14)]"
            >
              <TeamPhoto src={member.photo} alt={member.name} size={84} />
              <div>
                <h3 className="font-heading text-[15px] font-semibold m-0 mb-1">{member.name}</h3>
                <p className="text-[12.5px] text-muted m-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
