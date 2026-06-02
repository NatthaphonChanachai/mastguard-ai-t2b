'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#8894b8';
const ICON_SIZE = 14;

export default function Footer() {
  const { lang } = useApp();
  const T = t[lang].footer;

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="nav-logo" style={{ display: 'inline-flex' }}>
              <div className="nav-logo-icon" style={{ overflow: 'hidden', padding: 0 }}>
                <Image
                  src="/T2B_Logo.png"
                  alt="T2B Intertrade"
                  width={38}
                  height={38}
                  style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                />
              </div>
              <div className="nav-logo-text">
                <div className="nav-logo-t2b">T2B Intertrade</div>
                <div className="nav-logo-sub">MastGuard AI</div>
              </div>
            </div>
            <div className="footer-brand-name">T2B Intertrade Co., Ltd.</div>
            <div className="footer-brand-product">
              MastGuard AI — AIoT Smart High-Mast Lighting Management System
            </div>
            <div className="footer-brand-desc">{T.brandDesc}</div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-en)',
              fontSize: '11px',
              color: 'var(--electric)',
              letterSpacing: '1px',
              marginBottom: '12px',
            }}>
              {T.quickLinks}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {T.links.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">{link.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-en)',
              fontSize: '11px',
              color: 'var(--electric)',
              letterSpacing: '1px',
              marginBottom: '12px',
            }}>
              {T.contact}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--gray-400)' }}>
                <Phone size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                02-152-8895
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--gray-400)' }}>
                <Mail size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                engineer@t2b.co.th
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--gray-400)' }}>
                <MapPin size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
                {lang === 'th' ? 'ปทุมธานี 12150' : 'Pathum Thani 12150'}
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{T.copy}</div>
          <div className="footer-reg">{T.reg}</div>
        </div>
      </div>
    </footer>
  );
}
