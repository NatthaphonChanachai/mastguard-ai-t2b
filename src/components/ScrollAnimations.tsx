/**
 * ScrollAnimations
 * แสดง: ไม่ render UI — เป็น client component ที่รัน JavaScript animations
 *        สำหรับทั้งหน้า ได้แก่:
 *        1. fade-up: IntersectionObserver เพิ่ม class "visible" เมื่อ element เข้า viewport
 *        2. mini bars: animate bar chart ใน Dashboard เมื่อ scroll มาถึง
 * Section: ใช้งานใน page.tsx (ไม่ใช่ section เฉพาะ)
 * Props: ไม่มี
 */
'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.mini-bar').forEach((bar, i) => {
              const el = bar as HTMLElement;
              const h = el.style.height;
              el.style.height = '0';
              setTimeout(() => { el.style.height = h; }, i * 60);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    const dashMockup = document.querySelector('.dashboard-mockup');
    if (dashMockup) barObserver.observe(dashMockup);

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return null;
}
