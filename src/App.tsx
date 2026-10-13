import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Background from './components/Background';
import Contact from './components/Contact';

const STORAGE_KEY = 'portfolio-theme';

/** Follows the system theme until the visitor picks one with the toggle. */
function useTheme() {
  const system = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [choice, setChoice] = useState<'light' | 'dark' | null>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch {
      return null;
    }
  });
  const [systemDark, setSystemDark] = useState(system);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const on = () => setSystemDark(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    if (choice) document.documentElement.dataset.theme = choice;
    else delete document.documentElement.dataset.theme;
  }, [choice]);

  const dark = choice ? choice === 'dark' : systemDark;
  const toggle = useCallback(() => {
    const next = dark ? 'light' : 'dark';
    setChoice(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }, [dark]);

  return { dark, toggle };
}

export default function App() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <Header dark={dark} onToggle={toggle} />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-16 px-4 pb-6 pt-5 sm:gap-24 sm:px-6 sm:pt-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
    </>
  );
}
