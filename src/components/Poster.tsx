import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'pipeline' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((i) => (
              <path
                key={i}
                d={`M290 ${64 + i * 44} l82 24 l-82 24 l-82 -24 z`}
                strokeWidth="2"
                strokeOpacity={0.4 + i * 0.25}
                fill={a}
                fillOpacity={0.06 + i * 0.1}
              />
            ))}
            <path d="M290 30 V60" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 5" />
            <circle cx="290" cy="24" r="6" fill={a} fillOpacity="0.9" stroke="none" />
          </g>
        )}
        {project.motif === 'bars' && (
          <g>
            <path d="M196 214 H378" stroke={a} strokeWidth="1.5" strokeOpacity="0.35" fill="none" />
            {[50, 80, 64, 110, 92, 140].map((h, i) => (
              <rect key={i} x={204 + i * 28} y={212 - h} width="18" height={h} rx="3" fill={a} fillOpacity={0.22 + i * 0.1} />
            ))}
            <path d="M213 152 L241 122 L269 138 L297 92 L325 110 L353 62" fill="none" stroke={a} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="353" cy="62" r="5" fill={a} />
          </g>
        )}
        {project.motif === 'magnifier' && (
          <g fill="none" stroke={a}>
            <circle cx="280" cy="112" r="56" strokeWidth="3" strokeOpacity="0.9" />
            <circle cx="280" cy="112" r="44" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M320 152 L366 198" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.8" />
            <path d="M254 128 l16 -22 l18 14 l16 -30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {[
              [254, 128],
              [270, 106],
              [288, 120],
              [304, 90],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={a} stroke="none" />
            ))}
          </g>
        )}
        {project.motif === 'modal' && (
          <g fill="none" stroke={a}>
            <rect x="196" y="56" width="86" height="120" rx="8" strokeWidth="2" strokeOpacity="0.8" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1="208" x2={i % 3 === 2 ? 252 : 268} y1={74 + i * 16} y2={74 + i * 16} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.3 + (i % 3) * 0.15} />
            ))}
            <rect x="300" y="56" width="86" height="120" rx="8" strokeWidth="2" strokeOpacity="0.8" />
            <circle cx="326" cy="92" r="9" strokeWidth="1.6" strokeOpacity="0.7" />
            <path d="M306 164 L332 122 L352 148 L366 130 L380 164" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
            <path d="M282 116 H300" strokeWidth="2" strokeDasharray="3 4" strokeOpacity="0.6" />
            <circle cx="291" cy="214" r="18" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M282 214 l7 7 l12 -14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'route' && (
          <g fill="none" stroke={a}>
            <path d="M196 120 H380 M196 170 H380 M196 220 H380 M240 60 V240 M300 60 V240 M360 60 V240" strokeWidth="1" strokeOpacity="0.14" />
            <path d="M200 210 C240 150 260 230 300 160 S350 90 380 70" strokeWidth="3" strokeOpacity="0.85" strokeLinecap="round" />
            <path d="M200 222 C240 162 260 242 300 172 S350 102 380 82" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="6 6" />
            <circle cx="200" cy="210" r="6" fill={a} stroke="none" />
            <circle cx="380" cy="70" r="11" strokeWidth="2" />
            <circle cx="380" cy="70" r="4" fill={a} stroke="none" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Typographic stand-in for the portrait: large initials with a fade, used until a photo is added. */
export function Monogram({ initials, fontSize, className = '' }: { initials: string; fontSize: string; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none flex select-none items-end justify-center ${className}`}>
      <span
        className="bg-gradient-to-b from-bone via-bone/45 to-transparent bg-clip-text font-display leading-[0.8] tracking-[0.02em] text-transparent"
        style={{ fontSize }}
      >
        {initials}
      </span>
    </div>
  );
}
