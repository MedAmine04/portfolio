import { profile } from '../data/portfolio';
import { Icon } from './ui';

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-[15px] font-bold tracking-tight text-accent-ink">
            {profile.initials}
          </span>
          <span className="font-display text-[17px] font-bold tracking-[-0.01em]">{profile.displayName}</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-[14px] font-medium text-mute transition hover:bg-card hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink"
          >
            <Icon name={dark ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
          </button>
          {profile.resumePdf ? (
            <a href={profile.resumePdf} download={profile.resumeFileName} className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-[14px] font-semibold text-bg transition hover:opacity-85">
              <Icon name="download" /> CV
            </a>
          ) : (
            <a href="#contact" className="inline-flex h-10 items-center rounded-full bg-ink px-4 text-[14px] font-semibold text-bg transition hover:opacity-85">
              Contact
            </a>
          )}
        </div>
      </div>

      <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-2 md:hidden">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium text-mute hover:bg-card hover:text-ink">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
