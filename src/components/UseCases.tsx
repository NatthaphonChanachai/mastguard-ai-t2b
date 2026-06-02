'use client';

import {
  Navigation,
  ParkingSquare,
  Factory,
  Anchor,
  Plane,
  Package,
  Trophy,
  Building2,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 28;
const ICONS = [Navigation, ParkingSquare, Factory, Anchor, Plane, Package, Trophy, Building2];

export default function UseCases() {
  const { lang } = useApp();
  const T = t[lang].usecases;

  return (
    <section id="usecases">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title-th">{T.title}</div>
          <p className="section-desc">{T.desc}</p>
        </div>

        <div className="usecases-grid">
          {T.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="usecase-card fade-up"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div className="usecase-icon">
                  <Icon size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                </div>
                <div className="usecase-name">{item.name}</div>
                <div className="usecase-en">{item.en}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
