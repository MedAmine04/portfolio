import { certifications, experience, profile, projects } from '../data/portfolio';
import { Monogram } from './Poster';
import { buttonGhost, buttonPrimary, Card, Chip, Icon, Label } from './ui';

const STACK = ['Python', 'Java', 'SQL', 'FastAPI', 'PyTorch', 'Spark', 'Kafka', 'Airflow', 'Docker', 'RAG', 'LangGraph'];

export default function Hero() {
  return (
    <section id="top" className="grid grid-cols-12 gap-3 sm:gap-4">
      {/* introduction */}
      <Card className="col-span-12 flex flex-col justify-between gap-8 md:col-span-8 md:p-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[12px] text-mute">
            <span className="h-2 w-2 rounded-full bg-good" aria-hidden />
            Looking for a PFE internship · 2027
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6.2vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.035em]">{profile.fullName}</h1>
          <p className="mt-4 text-[clamp(1.1rem,1.8vw,1.35rem)] font-medium text-ink">Data &amp; AI engineering student at EMSI, Casablanca</p>
          <p className="mt-3 max-w-[60ch] text-[16px] text-mute">{profile.intro}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className={buttonPrimary}>
            See my projects <Icon name="arrow" />
          </a>
          {profile.resumePdf && (
            <a href={profile.resumePdf} download={profile.resumeFileName} className={buttonGhost}>
              <Icon name="download" /> Download CV
            </a>
          )}
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:border-ink">
            <Icon name="github" className="h-5 w-5" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:border-ink">
            <Icon name="linkedin" className="h-5 w-5" />
          </a>
        </div>
      </Card>

      {/* portrait */}
      <div className="relative col-span-12 min-h-[400px] overflow-hidden rounded-[28px] bg-photo sm:min-h-[460px] md:col-span-4 md:row-span-2 md:min-h-0">
        {!profile.portrait && <div aria-hidden className="dots absolute inset-0 opacity-70 [mask-image:radial-gradient(75%_65%_at_50%_40%,black,transparent)]" />}
        {profile.portrait ? (
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 768px) 92vw, 420px"
            alt={profile.portrait.alt}
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
          />
        ) : (
          <Monogram initials={profile.initials} fontSize="clamp(9rem, 28vw, 14rem)" className="absolute inset-x-0 bottom-0 h-[80%]" />
        )}
        <p className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[12px] font-medium text-[#0d1117] backdrop-blur">
          <Icon name="pin" className="h-3.5 w-3.5" /> {profile.location}
        </p>
      </div>

      {/* numbers */}
      <Card className="col-span-6 flex flex-col justify-between gap-6 p-5 sm:p-6 md:col-span-4">
        <Label>Experience</Label>
        <div>
          <p className="font-display text-[clamp(3rem,6vw,4.25rem)] font-bold leading-none tracking-[-0.03em]">{experience.length}</p>
          <p className="mt-2 text-[15px] font-medium">internships at HPS</p>
          <p className="font-mono text-[12px] text-mute">Data &amp; AI · Software dev</p>
        </div>
      </Card>
      <Card className="col-span-6 flex flex-col justify-between gap-6 p-5 sm:p-6 md:col-span-4">
        <Label>Built &amp; certified</Label>
        <div>
          <p className="font-display text-[clamp(3rem,6vw,4.25rem)] font-bold leading-none tracking-[-0.03em]">{projects.length}</p>
          <p className="mt-2 text-[15px] font-medium">projects built</p>
          <p className="font-mono text-[12px] text-mute">{certifications.length} certifications</p>
        </div>
      </Card>

      {/* stack */}
      <Card className="col-span-12 p-5 sm:p-6">
        <Label className="mb-3">Core stack</Label>
        <div className="flex flex-wrap gap-2">
          {STACK.map((s, i) => (
            <Chip key={s} strong={i === 0}>
              {s}
            </Chip>
          ))}
        </div>
      </Card>
    </section>
  );
}
