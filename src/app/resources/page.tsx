'use client';

import Image, { type StaticImageData } from 'next/image';
import { Download, Play, FileText, Video } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

/* eslint-disable @typescript-eslint/no-require-imports */
const img1 = require('@/png/highmash 1.png') as StaticImageData;
const img2 = require('@/png/highmash 2.png') as StaticImageData;
const img3 = require('@/png/highmash 3.png') as StaticImageData;
const img5 = require('@/png/highmash 5.png') as StaticImageData;
const img6 = require('@/png/highmash 6.png') as StaticImageData;
const img7 = require('@/png/highmash 7.png') as StaticImageData;
/* eslint-enable @typescript-eslint/no-require-imports */

const CATALOG_URL = 'https://drive.google.com/file/d/11-u6TFq0RPR7CgELXRfBD_toIpKSuJST/view?usp=sharing';
const VIDEO_URL   = 'https://drive.google.com/file/d/1XREX6975U44OgE0VX5rNZDKztD0692KX/view?usp=sharing';

const ALL_IMAGES: { src: StaticImageData; alt: string }[] = [
  { src: img1, alt: 'เสา High-Mast — โซน A' },
  { src: img2, alt: 'โคม LED Luminaire Crown' },
  { src: img3, alt: 'ภาพรวมโครงสร้างพื้นฐาน' },
  { src: img5, alt: 'เสา High-Mast พื้นที่อุตสาหกรรม' },
  { src: img6, alt: 'ระบบแสงสว่างท่าเรือ' },
  { src: img7, alt: 'ระบบไฟ Smart City' },
];

export default function ResourcesPage() {
  const { lang } = useApp();
  const isTH = lang === 'th';

  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Page header ── */}
        <section style={{ paddingBottom: '0' }}>
          <div className="container">
            <div className="fade-up">
              <div className="section-tag">{isTH ? 'เอกสารและสื่อ' : 'Resources'}</div>
              <h1 className="section-title-th">
                {isTH ? 'เรียนรู้เพิ่มเติมเกี่ยวกับ MastGuard AI' : 'Explore MastGuard AI Resources'}
              </h1>
              <p className="section-desc">
                {isTH
                  ? 'ดาวน์โหลดแคตตาล็อกผลิตภัณฑ์หรือชมวิดีโอแนะนำระบบ เพื่อทำความเข้าใจ MastGuard AI อย่างครบถ้วนก่อนตัดสินใจ'
                  : 'Download the product catalog or watch the introduction video to fully understand MastGuard AI before making your decision.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── Catalog + Video cards ── */}
        <section>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}>

              {/* Catalog card */}
              <div className="fade-up resource-card" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    background: 'var(--primary-dim)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '13px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <FileText size={22} color="var(--primary)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--primary)', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {isTH ? 'แคตตาล็อกผลิตภัณฑ์' : 'Product Catalog'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-en)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Smart Mast IoT 2025
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.8', flex: 1 }}>
                  {isTH
                    ? 'คู่มือผลิตภัณฑ์ MastGuard AI ฉบับสมบูรณ์ — ครอบคลุมสถาปัตยกรรมระบบ สเปคฮาร์ดแวร์ ตัวอย่างการติดตั้ง รายงาน ESG และแนวทางการขอคาร์บอนเครดิต'
                    : 'Complete MastGuard AI product documentation — system architecture, hardware specifications, installation case studies, ESG reports, and carbon credit certification guidelines.'}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['PDF Format', '2025 Edition', 'Full Specs'].map((tag) => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)',
                      background: 'var(--bg-hover)', border: '1px solid var(--border-subtle)',
                      padding: '4px 12px', borderRadius: '100px',
                    }}>{tag}</span>
                  ))}
                </div>

                <a href={CATALOG_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>
                  <Download size={15} strokeWidth={2} />
                  {isTH ? 'ดาวน์โหลดแคตตาล็อก' : 'Download Catalog'}
                </a>
              </div>

              {/* Video card */}
              <div className="fade-up resource-card" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, var(--accent), var(--primary))',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    background: 'rgba(6,182,212,0.10)',
                    border: '1px solid rgba(6,182,212,0.25)',
                    borderRadius: '13px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Video size={22} color="var(--accent)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {isTH ? 'วิดีโอแนะนำ' : 'Introduction Video'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-en)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Smart Mast IoT LoRa
                    </div>
                  </div>
                </div>

                {/* Video thumbnail placeholder */}
                <div style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  height: '130px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden', cursor: 'pointer',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,174,239,0.06) 0%, rgba(6,182,212,0.06) 100%)',
                  }} />
                  <div style={{
                    width: '54px', height: '54px',
                    background: 'rgba(6,182,212,0.18)',
                    border: '2px solid rgba(6,182,212,0.45)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    <Play size={22} color="var(--accent)" strokeWidth={2} fill="var(--accent)" style={{ marginLeft: '2px' }} />
                  </div>
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.8', flex: 1 }}>
                  {isTH
                    ? 'วิดีโอแนะนำระบบ MastGuard AI ที่ครอบคลุมภาพรวมสถาปัตยกรรม การสาธิตการตรวจสอบแบบเรียลไทม์ และตัวอย่างการแจ้งเตือน AI ในสภาพแวดล้อมจริง'
                    : 'System introduction covering MastGuard AI architecture, live monitoring demonstration, and real-world AI alert examples in deployed environments.'}
                </p>

                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'center' }}>
                  <Play size={15} strokeWidth={2} />
                  {isTH ? 'ชมวิดีโอแนะนำ' : 'Watch Introduction Video'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product gallery ── */}
        <section>
          <div className="container">
            <div className="fade-up" style={{ marginBottom: '40px' }}>
              <div className="section-tag">{isTH ? 'รูปสินค้าและโครงการ' : 'Product Gallery'}</div>
              <h2 className="section-title-th">
                {isTH ? 'รูปสินค้าและโครงการ' : 'Product & Project Photos'}
              </h2>
              <p className="section-desc">
                {isTH
                  ? 'ภาพจริงจากผลิตภัณฑ์และโครงการติดตั้ง MastGuard AI ในพื้นที่ต่าง ๆ'
                  : 'Real photographs of MastGuard AI products and deployment projects across various sites.'}
              </p>
            </div>

            <div className="res-gallery-grid fade-up">
              {ALL_IMAGES.map((item, i) => (
                <div key={i} className="res-gallery-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .resource-card {
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .resource-card:hover {
          border-color: var(--border-strong) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.30);
        }
        .res-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .res-gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
        }
        .res-gallery-item img {
          transition: transform 0.45s ease !important;
        }
        .res-gallery-item:hover img {
          transform: scale(1.07) !important;
        }
        @media (max-width: 1024px) {
          #resources-cards { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .res-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .res-gallery-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          main > section:nth-child(2) .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
