'use client';

import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Benefits() {
  const { lang } = useApp();
  const T = t[lang].benefits;

  return (
    <section id="benefits">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title-th">{T.title}</div>
        </div>

        <div className="benefits-grid">
          {T.cards.map((card, i) => (
            <div
              key={i}
              className="benefit-card fade-up"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="benefit-number">{card.num}</div>
              <div className="benefit-title">{card.title}</div>
              <div className="benefit-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
