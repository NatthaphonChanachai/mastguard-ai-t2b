'use client';

import { Play, Phone, Mail, FileText, Map, MapPin, Building2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Contact() {
  const { lang } = useApp();
  const T = t[lang].contact;

  return (
    <section id="contact">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '8px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>{T.tag}</div>
          <div className="section-title-th">{T.title}</div>
          <p className="section-desc" style={{ margin: '0 auto' }}>{T.desc}</p>
        </div>

        <div className="contact-grid">
          <div className="fade-up">
            <div className="contact-cta-title">{T.ctaTitle}</div>
            <div className="contact-cta-desc">{T.ctaDesc}</div>
            <div className="contact-buttons">
              <a
                href="mailto:engineer@t2b.co.th?subject=Request Demo - MastGuard AI"
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <Play size={15} strokeWidth={2} />
                {T.btnDemo}
              </a>
              <a href="tel:021528895" className="btn-outline" style={{ justifyContent: 'center' }}>
                <Phone size={15} strokeWidth={1.5} />
                {T.btnPhone}
              </a>
              <a
                href="mailto:engineer@t2b.co.th?subject=Quotation - MastGuard AI"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <FileText size={15} strokeWidth={1.5} />
                {T.btnQuote}
              </a>
              <a
                href="mailto:engineer@t2b.co.th?subject=Site Survey - MastGuard AI"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <Map size={15} strokeWidth={1.5} />
                {T.btnSurvey}
              </a>
            </div>
          </div>

          <div className="contact-info-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="contact-info-title">{T.infoTitle}</div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Phone size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">{T.labelPhone}</div>
                <div className="contact-item-val">02-152-8895</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Mail size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">{T.labelEmail}</div>
                <div className="contact-item-val">engineer@t2b.co.th</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <MapPin size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">{T.labelAddress}</div>
                <div className="contact-item-val">
                  {T.address1}<br />{T.address2}
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Building2 size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">{T.labelCompany}</div>
                <div className="contact-item-val">
                  T2B Intertrade Co., Ltd.<br />
                  <span style={{ fontSize: '12px', color: 'var(--gray-400)' }}>{T.regLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
