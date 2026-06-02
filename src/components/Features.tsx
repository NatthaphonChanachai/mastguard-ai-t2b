'use client';

import { ScanSearch, TrendingUp, Zap, GitFork, Leaf } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 22;
const ICONS = [ScanSearch, TrendingUp, Zap, GitFork, Leaf];

export default function Features() {
  const { lang } = useApp();
  const T = t[lang].features;

  return (
    <section id="features">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title">{T.title}</div>
          <p className="section-desc">{T.desc}</p>
        </div>

        <div className="features-grid">
          {T.cards.map((card, i) => {
            const Icon = ICONS[i];
            const isLast = i === T.cards.length - 1;
            return (
              <div
                key={i}
                className="feature-card fade-up"
                style={{
                  transitionDelay: `${i * 0.05}s`,
                  ...(isLast ? { gridColumn: '1 / -1' } : {}),
                }}
              >
                <div className="feature-number">0{i + 1}</div>
                <div className="feature-icon-box">
                  <Icon size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                </div>
                <div className="feature-en">{card.en}</div>
                <div className="feature-th">{card.th}</div>
                <div className="feature-desc" style={isLast ? { maxWidth: '780px' } : {}}>
                  {card.descPre}{' '}
                  <strong style={{ color: 'var(--white)' }}>{card.descBold}</strong>{' '}
                  {'descMid' in card && card.descMid ? (
                    <>
                      {card.descMid}{' '}
                      <strong style={{ color: 'var(--white)' }}>{card.descBold2}</strong>{' '}
                    </>
                  ) : null}
                  {card.descPost}
                </div>
                {isLast && (
                  <div className="carbon-tags">
                    <span className="carbon-tag">Actual vs Baseline kWh</span>
                    <span className="carbon-tag">tCO₂e Auto-Calculate</span>
                    <span className="carbon-tag">T-VER / TGO Report</span>
                    <span className="carbon-tag">ESG Dashboard</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
