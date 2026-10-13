import type { ReactNode } from 'react';

type IconName = 'github' | 'linkedin' | 'arrow' | 'download' | 'mail' | 'sun' | 'moon' | 'close' | 'pin' | 'check';

const FILLED: Record<string, string> = {
  github:
    'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z',
};

const STROKED: Record<string, ReactNode> = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

export function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (FILLED[name]) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d={FILLED[name]} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {STROKED[name]}
    </svg>
  );
}

/** A bento tile. */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[28px] border border-line bg-card p-6 sm:p-8 ${className}`}>{children}</div>;
}

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-mute ${className}`}>{children}</p>;
}

export function Chip({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[12px] leading-5 ${
        strong ? 'bg-accent text-accent-ink' : 'bg-accent-soft text-accent'
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHead({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 sm:mb-8">
      <div>
        <Label>{kicker}</Label>
        <h2 className="mt-2 font-display text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.02] tracking-[-0.025em]">{title}</h2>
      </div>
      {children && <p className="max-w-md text-[15px] text-mute">{children}</p>}
    </div>
  );
}

export const buttonPrimary =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-[15px] font-semibold text-accent-ink transition hover:opacity-90';
export const buttonGhost =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-5 text-[15px] font-semibold text-ink transition hover:border-ink';
