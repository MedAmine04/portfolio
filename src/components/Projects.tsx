import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { ProjectArt } from './Poster';
import { buttonPrimary, Chip, Icon, Label, SectionHead } from './ui';

// 12-column bento: two wide tiles, then three equal ones.
const SPANS = ['md:col-span-7', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4'];

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects">
      <SectionHead kicker="Selected work" title="Projects">
        Five platforms that turn raw data into something people can ask questions of. Open a card for the full story.
      </SectionHead>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {projects.map((p, i) => (
          <article key={p.id} className={`col-span-12 flex flex-col overflow-hidden rounded-[28px] border border-line bg-card transition hover:-translate-y-0.5 hover:border-ink/40 ${SPANS[i % SPANS.length]}`}>
            <button type="button" onClick={() => setOpen(p)} className="group flex flex-1 flex-col text-left" aria-label={`Open ${p.title}`}>
              <div className={`relative m-2 overflow-hidden rounded-[22px] ${i < 2 ? 'h-52 sm:h-60' : 'h-44'}`}>
                <ProjectArt project={p} />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">{p.year}</span>
                <span className="absolute bottom-4 left-4 font-display text-[1.9rem] font-bold leading-none tracking-[-0.02em] text-white">{p.metrics[0].value}</span>
                <span className="absolute bottom-4 right-4 max-w-[55%] text-right font-mono text-[11px] leading-tight text-white/80">{p.metrics[0].label}</span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 pb-3 pt-3 sm:px-6">
                <Label>{p.genre}</Label>
                <h3 className="font-display text-[1.45rem] font-bold leading-[1.1] tracking-[-0.02em]">{p.title}</h3>
                <p className="text-[15px] text-mute">{p.logline}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                  {p.stack.length > 4 && <span className="px-1 py-1 font-mono text-[12px] text-mute">+{p.stack.length - 4}</span>}
                </div>
              </div>
            </button>
            <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-1 sm:px-6">
              <button type="button" onClick={() => setOpen(p)} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent hover:underline">
                Details <Icon name="arrow" className="h-3.5 w-3.5" />
              </button>
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink">
                  <Icon name="github" className="h-[18px] w-[18px]" />
                </a>
              ) : (
                <span className="font-mono text-[11px] text-mute">Code not published</span>
              )}
            </div>
          </article>
        ))}
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="col-span-12 flex min-h-[120px] items-center justify-between gap-4 rounded-[28px] border border-dashed border-line p-6 transition hover:border-ink md:col-span-12"
        >
          <span>
            <span className="block font-display text-[1.4rem] font-bold tracking-[-0.02em]">More on GitHub</span>
            <span className="font-mono text-[12px] text-mute">{profile.githubHandle}</span>
          </span>
          <Icon name="arrow" className="h-6 w-6" />
        </a>
      </div>

      <AnimatePresence>{open && <ProjectDialog key={open.id} project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] border border-line bg-card sm:rounded-[28px]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black"
        >
          <Icon name="close" />
        </button>

        <div className="relative m-2 h-48 overflow-hidden rounded-[22px] sm:h-56">
          <ProjectArt project={project} />
        </div>

        <div className="flex flex-col gap-8 p-6 sm:p-8">
          <div>
            <Label>
              {project.genre} · {project.year}
            </Label>
            <h3 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">{project.title}</h3>
            <p className="mt-3 text-[17px] text-mute">{project.logline}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className={`${buttonPrimary} mt-5`}>
                <Icon name="github" className="h-[18px] w-[18px]" /> View on GitHub
              </a>
            )}
          </div>

          <div>
            <Label className="mb-3">Results</Label>
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-line p-4">
                  <dd className="font-display text-[1.7rem] font-bold leading-none tracking-[-0.02em] text-accent">{m.value}</dd>
                  <dt className="mt-2 text-[13px] leading-snug text-mute">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Label className="mb-3">What I built</Label>
            <ul className="flex flex-col gap-3 text-[15px]">
              {project.build.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label className="mb-3">Features</Label>
            <ul className="grid gap-x-6 gap-y-2 text-[15px] sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label className="mb-3">Stack</Label>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
