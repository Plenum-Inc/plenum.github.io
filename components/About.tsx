'use client';

import Image from 'next/image';
import { teamMembers } from './data/team';
import { useLanguage } from './i18n/LanguageProvider';

export default function About() {
  const { language, copy } = useLanguage();
  return (
    <section id="team" className="team-section" aria-labelledby="team-title">
      <div className="section-shell team-layout">
        <h2 id="team-title" className="section-label">{copy.sections.team}</h2>
        <div className="team-profiles">
          {teamMembers.map((member) => {
            const profile = language === 'ja' && member.ja ? member.ja : member;
            return (
              <article key={member.name} className="team-profile" lang={language === 'ja' && member.ja ? 'ja' : 'en'}>
                <div className="member-overview">
                  {member.image && <Image src={member.image} alt={profile.name} width={96} height={96} className="member-photo" />}
                  <div className="member-identity">
                    <h3>{profile.name}</h3>
                    <p className="member-title">{profile.title}</p>
                  </div>
                </div>
                <p className="member-description">{profile.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
