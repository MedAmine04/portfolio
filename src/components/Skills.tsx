import { useState } from 'react';
import { skillCategories, skillEvidence } from '../data/portfolio';
import { Card, Label, SectionHead } from './ui';

export default function Skills() {
  // Hover (or tap) a skill to see where it was used.
  const [picked, setPicked] = useState<Record<string, string | null>>({});

  return (
    <section id="skills">
      <SectionHead kicker="Toolbox" title="Skills">
        Hover or tap a skill to see where it shows up in my internships, projects and certificates.
      </SectionHead>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {skillCategories.map((c, i) => {
          const skill = picked[c.id] ?? null;
          const evidence = skill ? skillEvidence[skill] : undefined;
          return (
            <Card key={c.id} className={`flex flex-col gap-4 p-5 sm:p-6 ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <div>
                <h3 className="font-display text-[1.3rem] font-bold leading-tight tracking-[-0.02em]">{c.title}</h3>
                <Label className="mt-1 normal-case tracking-normal">{c.subtitle}</Label>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => {
                  const active = skill === s.name;
                  return (
                    <button
                      key={s.name}
                      type="button"
                      aria-pressed={active}
                      onMouseEnter={() => setPicked((p) => ({ ...p, [c.id]: s.name }))}
                      onMouseLeave={() => setPicked((p) => ({ ...p, [c.id]: null }))}
                      onFocus={() => setPicked((p) => ({ ...p, [c.id]: s.name }))}
                      onBlur={() => setPicked((p) => ({ ...p, [c.id]: null }))}
                      onClick={() => setPicked((p) => ({ ...p, [c.id]: p[c.id] === s.name ? null : s.name }))}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[14px] font-medium transition ${
                        active ? 'border-accent bg-accent text-accent-ink' : 'border-line text-ink hover:border-ink'
                      }`}
                    >
                      {s.name}
                      {s.note && <span className={`font-mono text-[10px] uppercase ${active ? 'text-accent-ink' : 'text-accent'}`}>{s.note}</span>}
                    </button>
                  );
                })}
              </div>
              <p className="mt-auto min-h-[2.75rem] border-t border-line pt-3 font-mono text-[12px] leading-snug text-mute">
                {evidence ? `${skill} · ${evidence.join(' · ')}` : skill ? `${skill} · listed on my CV` : 'Select a skill'}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
