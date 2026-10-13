import { experience } from '../data/portfolio';
import { Card, Chip, Label, SectionHead } from './ui';

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead kicker="Where I have worked" title="Experience">
        Two summers at HPS (Hightech Payment Systems) in Casablanca, first building a product interface, then working on AI for payment data.
      </SectionHead>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {experience.map((x) => {
          const stack = x.points.find((p) => p.startsWith('Stack:'));
          const bullets = x.points.filter((p) => !p.startsWith('Stack:'));
          return (
            <Card key={`${x.company}-${x.period}`} className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Label>{x.period}</Label>
                <Label>{x.place}</Label>
              </div>
              <div>
                <h3 className="font-display text-[1.6rem] font-bold leading-tight tracking-[-0.02em]">{x.role}</h3>
                <p className="mt-1 text-[15px] font-medium text-accent">{x.company}</p>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] text-mute">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {stack && (
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {stack
                    .replace('Stack: ', '')
                    .replace(/\.$/, '')
                    .split(', ')
                    .map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
