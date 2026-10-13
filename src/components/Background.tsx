import { certifications, education, profile } from '../data/portfolio';
import { Card, Chip, Label, SectionHead } from './ui';

export default function Background() {
  return (
    <section id="background">
      <SectionHead kicker="Education & credentials" title="Background" />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        <Card className="col-span-12 md:col-span-7">
          <Label className="mb-6">Education</Label>
          <ol className="relative flex flex-col gap-7 border-l border-line pl-6">
            {education.map((e, i) => (
              <li key={`${e.school}-${e.period}`} className="relative">
                <span aria-hidden className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card ${i === 0 ? 'bg-accent' : 'bg-line'}`} />
                <p className="font-mono text-[12px] text-mute">{e.period}</p>
                <h3 className="mt-1 font-display text-[1.25rem] font-bold leading-snug tracking-[-0.015em]">
                  {e.school}, {e.place}
                </h3>
                <p className="text-[15px] text-mute">{e.degree}</p>
                {e.score && <p className="mt-2 inline-block rounded-full bg-accent-soft px-3 py-1 font-mono text-[12px] text-accent">{e.score}</p>}
              </li>
            ))}
          </ol>
        </Card>

        <Card className="col-span-12 md:col-span-5 md:row-span-2">
          <Label className="mb-6">Certifications</Label>
          <ul className="flex flex-col divide-y divide-line">
            {certifications.map((c) => (
              <li key={c.name} className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">{c.issuer}</span>
                <span className="text-[15px] font-medium leading-snug">{c.name}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="col-span-12 grid gap-6 sm:grid-cols-2 md:col-span-7">
          <div>
            <Label className="mb-3">Languages</Label>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((l) => (
                <Chip key={l}>{l}</Chip>
              ))}
            </div>
          </div>
          <div>
            <Label className="mb-3">Soft skills</Label>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
