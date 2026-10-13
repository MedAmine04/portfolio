import { useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon, Label } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(profile.email).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => undefined,
    );
  };

  const pill = 'inline-flex min-h-11 items-center gap-2 rounded-full border border-accent-ink/40 px-5 text-[15px] font-semibold text-accent-ink transition hover:bg-accent-ink hover:text-accent';

  return (
    <section id="contact">
      <div className="rounded-[28px] bg-accent p-7 text-accent-ink sm:p-12">
        <Label className="!text-accent-ink/70">Next step</Label>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.2rem,5.4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">Let&apos;s talk about my PFE internship.</h2>
        <p className="mt-4 max-w-[52ch] text-[17px] text-accent-ink/80">
          I am looking for a final-year internship in 2027 where I can apply data analysis, machine learning and software development in a demanding team.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent('PFE internship 2027')}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-ink px-5 text-[15px] font-semibold text-accent transition hover:opacity-90">
            <Icon name="mail" /> {profile.email}
          </a>
          <button type="button" onClick={copy} className={pill}>
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={pill}>
            <Icon name="linkedin" className="h-[18px] w-[18px]" /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className={pill}>
            <Icon name="github" className="h-[18px] w-[18px]" /> GitHub
          </a>
          {profile.resumePdf && (
            <a href={profile.resumePdf} download={profile.resumeFileName} className={pill}>
              <Icon name="download" /> CV
            </a>
          )}
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-2 px-2 py-8 font-mono text-[12px] text-mute">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
