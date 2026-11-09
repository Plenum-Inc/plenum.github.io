'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './i18n/LanguageProvider';

const lines = ['Making every', 'human action', 'AI-executable.'];
const vision = lines.join(' ');
const fields = [
  { label: 'work', color: '#6453df' },
  { label: 'personal life', color: '#b6297d' },
  { label: 'sciences', color: '#d84b2b' },
  { label: 'society', color: '#007e73' },
  { label: 'humanity', color: '#2a65d3' },
];

export default function Vision() {
  const { copy } = useLanguage();
  // Start empty on both server and client, avoiding a flash of the complete title.
  const [characters, setCharacters] = useState(0);
  const [fieldIndex, setFieldIndex] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let count = 0;
    let typing: ReturnType<typeof setInterval> | undefined;

    if (motion.matches) {
      setCharacters(vision.length);
    } else {
      typing = setInterval(() => {
        count += 1;
        setCharacters(count);
        if (count >= vision.length) clearInterval(typing);
      }, 65);
    }

    // Switching language does not remount or restart this one-time animation.
    const rotation = setInterval(() => {
      setFieldIndex((index) => (index + 1) % fields.length);
    }, 2000);

    function onMotionChange() {
      if (motion.matches) {
        clearInterval(typing);
        setCharacters(vision.length);
      }
    }
    motion.addEventListener('change', onMotionChange);
    return () => {
      clearInterval(typing);
      clearInterval(rotation);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  const field = fields[fieldIndex];
  let offset = 0;

  return (
    <section id="vision" className="vision-section" aria-labelledby="vision-title">
      <div className="ripple-scene" aria-hidden="true">
        <svg className="ripple-lines" viewBox="0 0 1000 1000" fill="none">
          {Array.from({ length: 13 }, (_, index) => (
            <ellipse key={index} cx="500" cy="500" rx={70 + index * 32} ry={56 + index * 29} />
          ))}
        </svg>
      </div>
      <div className="section-shell vision-content">
        <p className="section-label vision-eyebrow">{copy.sections.vision}</p>
        <h1 id="vision-title" className="vision-title" aria-label={vision} lang="en">
          {lines.map((line) => {
            const start = offset;
            offset += line.length + 1;
            const visible = line.slice(0, Math.max(0, characters - start));
            const isTyping = characters >= start && characters < start + line.length + 1 && characters < vision.length;
            return (
              <span className="vision-line" key={line} aria-hidden="true">
                <span className="vision-line-placeholder">{line}</span>
                <span className="vision-line-typed">{visible}{isTyping && <span className="typing-cursor" />}</span>
              </span>
            );
          })}
        </h1>
        <p className="vision-description" lang="en">
          <span>We help build tools for AI agents</span>{' '}
          <span className="vision-description-end">for <span className="rotating-field" style={{ color: field.color }}><span key={field.label} className="rotating-word">{field.label}.</span></span></span>
        </p>
        <noscript><p className="vision-noscript" lang="en">{vision}</p></noscript>
      </div>
    </section>
  );
}
