'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const T = t[lang].nav;

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop - 100;
        if (window.scrollY >= top) current = sec.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav id="navbar">
      <a href="#" className="nav-logo" aria-label="T2B Intertrade">
        <div className="nav-logo-icon" style={{ overflow: 'hidden', padding: 0 }}>
          <Image
            src="/T2B_Logo.png"
            alt="T2B Intertrade"
            width={44}
            height={44}
            style={{ width: '44px', height: '44px', objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="nav-logo-text">
          <div className="nav-logo-t2b">T2B Intertrade</div>
          <div className="nav-logo-sub">MastGuard AI</div>
        </div>
      </a>

      <ul className={`nav-links${isOpen ? ' open' : ''}`} id="navLinks">
        {T.items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={handleLinkClick}
              style={activeSection === item.href.slice(1) ? { color: 'var(--electric)' } : {}}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/resources"
            onClick={handleLinkClick}
            style={pathname === '/resources' ? { color: 'var(--electric)' } : {}}
          >
            {lang === 'th' ? 'เอกสาร' : 'Resources'}
          </a>
        </li>
        <li>
          <a
            href="/team"
            onClick={handleLinkClick}
            style={pathname === '/team' ? { color: 'var(--electric)' } : {}}
          >
            {lang === 'th' ? 'ทีมงาน' : 'Team'}
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
            {T.requestDemo}
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <div className="nav-controls">
          <button
            className="nav-lang-btn"
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            aria-label="Toggle language"
          >
            {lang === 'th' ? 'EN' : 'ไทย'}
          </button>
          <button
            className="nav-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun size={16} strokeWidth={2} />
              : <Moon size={16} strokeWidth={2} />}
          </button>
        </div>

        <button
          className="nav-hamburger"
          id="hamburger"
          aria-label="เมนู"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
