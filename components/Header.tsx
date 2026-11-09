'use client';

import Link from 'next/link';
import { useLanguage } from './i18n/LanguageProvider';

export default function Header() {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <header className="site-header">
      <div className="section-shell header-content">
        <Link href="/#vision" className="wordmark" aria-label={copy.home}>Plenum</Link>
        <div className="language-switch" role="group" aria-label={copy.language}>
          <button type="button" lang="ja" aria-pressed={language === 'ja'} onClick={() => setLanguage('ja')}>日本語</button>
          <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
        </div>
      </div>
    </header>
  );
}
