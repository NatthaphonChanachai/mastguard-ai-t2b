'use client';

import { Building2, Hash, Lightbulb, Globe2, FlaskConical, Leaf } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 18;

export default function About() {
  const { lang } = useApp();
  const T = t[lang].about;

  return (
    <section id="about">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title">{T.title}</div>
        </div>

        <div className="about-grid">
          <div className="fade-up">
            <p style={{ fontSize: '17px', color: 'var(--gray-200)', lineHeight: 2, fontWeight: 300, marginBottom: '24px' }}>
              {T.desc1Pre}{' '}
              <strong style={{ color: 'var(--white)' }}>{T.desc1Bold}</strong>{' '}
              {T.desc1Post}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--gray-400)', lineHeight: 1.8, marginBottom: '32px' }}>
              {T.desc2Pre}{' '}
              <strong style={{ color: 'var(--electric)' }}>{T.desc2Bold}</strong>{' '}
              {T.desc2Post}
            </p>
            <div className="about-stats">
              {T.stats.map((s, i) => (
                <div key={i} className="about-stat">
                  <span className="about-stat-val">{s.val}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-info fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="about-info-item">
              <div className="about-info-icon">
                <Building2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Company Name</div>
                <div className="about-info-val">
                  บริษัท ทีทูบี อินเตอร์เทรด จำกัด<br />
                  <span style={{ color: 'var(--gray-400)', fontSize: '13px' }}>T2B Intertrade Co., Ltd.</span>
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Hash size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Registration No.</div>
                <div className="about-info-val" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  0135554004406
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Lightbulb size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Core Business</div>
                <div className="about-info-val">{T.infoVals.coreBusiness}</div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Globe2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Market</div>
                <div className="about-info-val">{T.infoVals.market}</div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <FlaskConical size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Innovation</div>
                <div className="about-info-val">AIoT Smart Lighting · Smart IoT Infrastructure</div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Leaf size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Sustainability</div>
                <div className="about-info-val">{T.infoVals.sustainability}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
