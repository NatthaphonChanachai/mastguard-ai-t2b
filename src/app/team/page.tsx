'use client';

import Image, { type StaticImageData } from 'next/image';
import { useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

/* eslint-disable @typescript-eslint/no-require-imports */
const img1 = require('@/png/highmash 1.png') as StaticImageData;
const img2 = require('@/png/highmash 2.png') as StaticImageData;
const img3 = require('@/png/highmash 3.png') as StaticImageData;
const img4 = require('@/png/highmash 4.png') as StaticImageData;
const img5 = require('@/png/highmash 5.png') as StaticImageData;
const img6 = require('@/png/highmash 6.png') as StaticImageData;
const img7 = require('@/png/highmash 7.png') as StaticImageData;
const img8 = require('@/png/highmash 8.png') as StaticImageData;  // technician on cherry picker
/* eslint-enable @typescript-eslint/no-require-imports */

const ALL_IMAGES: { src: StaticImageData; alt: string }[] = [
  { src: img1, alt: 'เสา High-Mast — โซน A' },
  { src: img2, alt: 'โคม LED Luminaire Crown' },
  { src: img3, alt: 'ภาพรวมโครงสร้างพื้นฐาน' },
  { src: img5, alt: 'เสา High-Mast พื้นที่อุตสาหกรรม' },
  { src: img6, alt: 'ระบบแสงสว่างท่าเรือ' },
  { src: img7, alt: 'ระบบไฟ Smart City' },
];

const TEAM_EN = [
  {
    photo: img4,
    badge: 'FIELD INSTALLATION · SAFETY CERTIFIED',
    title: 'Installation Engineering Team',
    desc: 'Our certified field engineers handle the complete installation of IoT Controllers, Sensors, and Power Meters into High-Mast control panels. They perform site surveys, cable routing, system commissioning, and final acceptance testing.',
    tags: ['Safety Certified', 'Height Work', 'IoT Hardware', 'Panel Integration', '48hr Deployment'],
  },
  {
    photo: img8,
    badge: 'AERIAL MAINTENANCE · CHERRY PICKER',
    title: 'Aerial Maintenance Specialists',
    desc: 'Equipped with aerial work platforms and cherry pickers, our maintenance crew services LED luminaire crowns, replaces drivers and sensors at height, and follows AI-generated preventive maintenance schedules from the MastGuard platform.',
    tags: ['Aerial Work Platform', 'Luminaire Service', 'Driver Replacement', 'Preventive Maintenance', 'AI-Guided'],
  },
];

const TEAM_TH = [
  {
    photo: img4,
    badge: 'ติดตั้งภาคสนาม · ผ่านการรับรอง',
    title: 'ทีมวิศวกรติดตั้ง',
    desc: 'วิศวกรภาคสนามที่ผ่านการรับรองของเราดำเนินการติดตั้ง IoT Controller, Sensor และ Power Meter เข้ากับตู้ควบคุมเสา High-Mast ที่อยู่บนที่สูงได้ครบวงจร ตั้งแต่การสำรวจหน้างาน ทดสอบระบบ และตรวจรับงาน',
    tags: ['ผ่านมาตรฐานความปลอดภัย', 'ทำงานที่สูง', 'ฮาร์ดแวร์ IoT', 'ติดตั้งตู้ควบคุม', 'Deploy ภายใน 48 ชม.'],
  },
  {
    photo: img8,
    badge: 'ซ่อมบำรุงภาคสนาม · รถกระเช้า',
    title: 'ทีมซ่อมบำรุงที่ความสูง',
    desc: 'ทีมช่างซ่อมบำรุงพร้อมรถกระเช้าและอุปกรณ์ทำงานที่สูง ให้บริการเปลี่ยน LED Luminaire, Driver และ Sensor ตามกำหนดการซ่อมเชิงรุกที่สร้างโดย AI ของแพลตฟอร์ม MastGuard',
    tags: ['รถกระเช้า', 'ซ่อม Luminaire', 'เปลี่ยน Driver', 'ซ่อมบำรุงเชิงรุก', 'ตามแผน AI'],
  },
];

export default function TeamPage() {
  const { lang } = useApp();
  const isTH = lang === 'th';
  const team = isTH ? TEAM_TH : TEAM_EN;

  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero header ── */}
        <section style={{ paddingBottom: '0' }}>
          <div className="container">
            <div className="fade-up">
              <div className="section-tag">{isTH ? 'ทีมงาน' : 'Our Team'}</div>
              <h1 className="section-title-th">
                {isTH ? 'ผู้เชี่ยวชาญภาคสนาม' : 'Field-Proven Expertise'}
              </h1>
              <p className="section-desc" style={{ maxWidth: '680px' }}>
                {isTH
                  ? 'ทีมวิศวกรและช่างผู้เชี่ยวชาญของ T2B Intertrade มีประสบการณ์กว่า 14 ปี ในการติดตั้งและซ่อมบำรุงระบบไฟ High-Mast ให้กับหน่วยงานภาครัฐและเอกชนทั่วประเทศไทยและอาเซียน'
                  : "T2B Intertrade's engineers and technicians bring 14+ years of hands-on High-Mast installation and maintenance experience serving government and private sector clients across Thailand and ASEAN."}
              </p>
            </div>
          </div>
        </section>

        {/* ── Team cards ── */}
        <section>
          <div className="container">
            <div className="team-page-grid">
              {team.map((member, i) => (
                <div key={i} className="fade-up team-page-card">
                  {/* Photo */}
                  <div style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    borderRadius: '12px 12px 0 0',
                  }}>
                    <Image
                      src={member.photo}
                      alt={member.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Badge overlay */}
                    <div style={{
                      position: 'absolute', bottom: '12px', left: '12px',
                      background: 'rgba(6,14,30,0.88)',
                      border: '1px solid var(--border-default)',
                      borderRadius: '7px',
                      padding: '5px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      letterSpacing: '0.4px',
                      backdropFilter: 'blur(8px)',
                    }}>
                      {member.badge}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '26px' }}>
                    <div style={{
                      fontFamily: 'var(--font-en)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                    }}>
                      {member.title}
                    </div>
                    <p style={{
                      fontSize: '14.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.8',
                      marginBottom: '18px',
                    }}>
                      {member.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {member.tags.map((tag, j) => (
                        <span key={j} style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--primary)',
                          background: 'var(--primary-dim)',
                          border: '1px solid var(--border-subtle)',
                          padding: '4px 12px',
                          borderRadius: '100px',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project gallery ── */}
        <section>
          <div className="container">
            <div className="fade-up" style={{ marginBottom: '40px' }}>
              <div className="section-tag">{isTH ? 'โครงการที่ดำเนินการแล้ว' : 'Completed Projects'}</div>
              <h2 className="section-title-th">
                {isTH ? 'โครงการที่ดำเนินการแล้ว' : 'Completed Projects'}
              </h2>
              <p className="section-desc">
                {isTH
                  ? 'ภาพจริงจากโครงการติดตั้ง MastGuard AI ในพื้นที่ต่าง ๆ ทั่วประเทศไทย'
                  : 'Real photographs from MastGuard AI deployment projects across Thailand and the region.'}
              </p>
            </div>

            <div className="team-gallery-grid fade-up">
              {ALL_IMAGES.map((item, i) => (
                <div key={i} className="team-gallery-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
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
        .team-page-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .team-page-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .team-page-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.28);
        }
        .team-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .team-gallery-item {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
        }
        .team-gallery-item img {
          transition: transform 0.45s ease !important;
        }
        .team-gallery-item:hover img {
          transform: scale(1.05) !important;
        }
        @media (max-width: 768px) {
          .team-page-grid { grid-template-columns: 1fr !important; }
          .team-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .team-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
