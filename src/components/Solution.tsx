'use client';

import { Lightbulb, Cpu, Wifi, Cloud, BrainCircuit, LayoutDashboard } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 22;

export default function Solution() {
  const { lang } = useApp();
  const T = t[lang].solution;

  return (
    <section id="solution">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title">{T.title}</div>
          <p className="section-desc">{T.desc}</p>
        </div>

        <div className="solution-flow fade-up">
          <div className="flow-step">
            <div className="flow-step-icon"><Lightbulb size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">HIGH-MAST</div>
            <div className="flow-step-sub">Lighting System</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon"><Cpu size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">IoT CONTROLLER</div>
            <div className="flow-step-sub">Sensor &amp; Power Meter</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon"><Wifi size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">NETWORK</div>
            <div className="flow-step-sub">4G / Wi-Fi / LoRa</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon"><Cloud size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">CLOUD</div>
            <div className="flow-step-sub">Platform &amp; Storage</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon"><BrainCircuit size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">AI ENGINE</div>
            <div className="flow-step-sub">Analytics &amp; ML</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon"><LayoutDashboard size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} /></div>
            <div className="flow-step-name">DASHBOARD</div>
            <div className="flow-step-sub">Alert &amp; Report</div>
          </div>
        </div>

        <div className="solution-desc-box fade-up" style={{ transitionDelay: '0.2s' }}>
          {lang === 'th' ? (
            <p>
              MastGuard AI ติดตั้ง{' '}
              <strong style={{ color: 'var(--electric)' }}>IoT Controller, Sensor และ Power Meter</strong>{' '}
              เข้ากับตู้ควบคุมหรือระบบไฟ High-Mast เพื่อเก็บข้อมูลการทำงานแบบต่อเนื่อง ได้แก่{' '}
              <strong style={{ color: 'var(--white)' }}>
                สถานะเปิด-ปิด · แรงดันไฟฟ้า · กระแสไฟฟ้า · กำลังไฟ · พลังงานสะสม ·
                อุณหภูมิตู้ควบคุม · ค่าความสว่างโดยรอบ
              </strong>{' '}
              และสถานะผิดปกติต่าง ๆ จากนั้นส่งข้อมูลทั้งหมดไปยัง{' '}
              <strong style={{ color: 'var(--electric)' }}>Cloud Platform</strong>{' '}
              เพื่อให้ AI วิเคราะห์ แจ้งเตือน และจัดทำรายงานอัตโนมัติ — ไม่ใช่แค่ระบบเปิด-ปิดไฟ
              แต่คือสมองอัจฉริยะสำหรับโครงสร้างพื้นฐานแสงสว่างของคุณ
            </p>
          ) : (
            <p>
              MastGuard AI installs{' '}
              <strong style={{ color: 'var(--electric)' }}>IoT Controllers, Sensors, and Power Meters</strong>{' '}
              into the High-Mast control panel to continuously collect operational data including{' '}
              <strong style={{ color: 'var(--white)' }}>
                on/off status · voltage · current · power · cumulative energy ·
                cabinet temperature · ambient light level
              </strong>{' '}
              and various fault states. All data is sent to the{' '}
              <strong style={{ color: 'var(--electric)' }}>Cloud Platform</strong>{' '}
              for AI analysis, alerts, and automated reporting — not just a light switch,
              but the intelligent brain for your lighting infrastructure.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
