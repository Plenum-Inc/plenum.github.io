'use client';

import { useLanguage } from './i18n/LanguageProvider';
import DemoRequest from './DemoRequest';

type Feature = { title: string[]; highlight: string; description: string };

function highlightTitle(text: string, highlight: string) {
  const start = text.indexOf(highlight);
  if (start === -1) return text;
  return <>{text.slice(0, start)}<span className="feature-highlight">{highlight}</span>{text.slice(start + highlight.length)}</>;
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="feature-card">
      <h4>{highlightTitle(feature.title[0], feature.highlight)}<br />{highlightTitle(feature.title[1], feature.highlight)}</h4>
      <p className="feature-description">{feature.description}</p>
    </article>
  );
}

export default function Product() {
  const { copy } = useLanguage();

  return (
    <section id="product" className="product-section" aria-labelledby="product-title">
      <div className="section-shell">
        <p className="section-label">{copy.sections.products}</p>
        <div className="product-heading">
          <h2 id="product-title" lang="en">Hydrangea</h2>
        </div>
        <p className="product-description">
          {copy.productDescription.intro}<br />
          {copy.productDescription.detail}
          {copy.productDescription.solution && <span className="product-solution">{copy.productDescription.solution}</span>}
        </p>
        <h3 className="features-title">{copy.featuresTitle}</h3>
        <div className="features-grid">
          {copy.features.map((feature, index) => <FeatureCard key={index} feature={feature} />)}
        </div>
        <DemoRequest />
      </div>
    </section>
  );
}
