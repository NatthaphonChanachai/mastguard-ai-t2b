'use client';

import { Eye, Clock, MapPin, Zap, BarChart2, SearchX } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#ff5858';
const ICON_SIZE = 18;
const ICONS = [Eye, Clock, MapPin, Zap, BarChart2, SearchX];

export default function Problem() {
  const { lang } = useApp();
  const T = t[lang].problem;

  return (
    <section id="problem">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title-th">{T.title}</div>
          <p className="section-desc">{T.desc}</p>
        </div>

        <div className="problem-grid">
          {T.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="problem-card fade-up"
                style={{ transitionDelay: `${i * 0.05 + 0.05}s` }}
              >
                <div className="problem-icon">
                  <Icon size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="problem-title">{card.title}</div>
                  <div className="problem-desc">{card.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
