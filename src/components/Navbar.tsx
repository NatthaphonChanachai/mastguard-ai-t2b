/**
 * Navbar
 * แสดง: แถบนำทางแบบ fixed ด้านบนสุดของหน้า ประกอบด้วยโลโก้ T2B/MastGuard AI,
 *        ลิงก์นำทางไปยัง section ต่างๆ, และปุ่ม "Request Demo"
 * Section: Navigation — fixed top (z-index 100)
 * Props: ไม่มี
 *
 * หมายเหตุ: ใช้ 'use client' เพราะต้องการ useState สำหรับ hamburger menu
 *           และ useEffect สำหรับ scroll-based active link highlighting
 */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#features', label: 'Features' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#usecases', label: 'Use Cases' },
  { href: '#about', label: 'About T2B' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={handleLinkClick}
              style={
                activeSection === item.href.slice(1)
                  ? { color: 'var(--electric)' }
                  : {}
              }
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
            Request Demo
          </a>
        </li>
      </ul>

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
    </nav>
  );
}
