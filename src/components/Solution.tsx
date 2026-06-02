/**
 * Solution
 * แสดง: Section อธิบาย MastGuard AI Solution flow แบบ step-by-step
 *        ตั้งแต่ High-Mast → IoT Controller → Network → Cloud → AI Engine → Dashboard
 *        พร้อมกล่องคำอธิบายรายละเอียดระบบด้านล่าง
 * Section: #solution — ส่วนที่ 3 ของหน้า
 * Props: ไม่มี
 */
import { Lightbulb, Cpu, Wifi, Cloud, BrainCircuit, LayoutDashboard } from 'lucide-react';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 22;

export default function Solution() {
  return (
    <section id="solution">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">Solution</div>
          <div className="section-title">MastGuard AI Solution</div>
          <p className="section-desc">
            ระบบ AIoT สำหรับ High-Mast Lighting ที่เชื่อมทุก sensor เข้าสู่ Cloud Platform
            และให้ AI วิเคราะห์ได้แบบเรียลไทม์
          </p>
        </div>

        <div className="solution-flow fade-up">
          <div className="flow-step">
            <div className="flow-step-icon">
              <Lightbulb size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">HIGH-MAST</div>
            <div className="flow-step-sub">Lighting System</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon">
              <Cpu size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">IoT CONTROLLER</div>
            <div className="flow-step-sub">Sensor &amp; Power Meter</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon">
              <Wifi size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">NETWORK</div>
            <div className="flow-step-sub">4G / Wi-Fi / LoRa</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon">
              <Cloud size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">CLOUD</div>
            <div className="flow-step-sub">Platform &amp; Storage</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon">
              <BrainCircuit size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">AI ENGINE</div>
            <div className="flow-step-sub">Analytics &amp; ML</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="flow-step-icon">
              <LayoutDashboard size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="flow-step-name">DASHBOARD</div>
            <div className="flow-step-sub">Alert &amp; Report</div>
          </div>
        </div>

        <div className="solution-desc-box fade-up" style={{ transitionDelay: '0.2s' }}>
          <p>
            MastGuard AI ติดตั้ง{' '}
            <strong style={{ color: 'var(--electric)' }}>
              IoT Controller, Sensor และ Power Meter
            </strong>{' '}
            เข้ากับตู้ควบคุมหรือระบบไฟ High-Mast เพื่อเก็บข้อมูลการทำงานแบบต่อเนื่อง
            ได้แก่{' '}
            <strong style={{ color: 'var(--white)' }}>
              สถานะเปิด-ปิด · แรงดันไฟฟ้า · กระแสไฟฟ้า · กำลังไฟ · พลังงานสะสม ·
              อุณหภูมิตู้ควบคุม · ค่าความสว่างโดยรอบ
            </strong>{' '}
            และสถานะผิดปกติต่าง ๆ จากนั้นส่งข้อมูลทั้งหมดไปยัง{' '}
            <strong style={{ color: 'var(--electric)' }}>Cloud Platform</strong>{' '}
            เพื่อให้ AI วิเคราะห์ แจ้งเตือน และจัดทำรายงานอัตโนมัติ — ไม่ใช่แค่ระบบเปิด-ปิดไฟ
            แต่คือสมองอัจฉริยะสำหรับโครงสร้างพื้นฐานแสงสว่างของคุณ
          </p>
        </div>
      </div>
    </section>
  );
}
