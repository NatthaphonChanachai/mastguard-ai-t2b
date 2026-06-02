/**
 * Features
 * แสดง: Section "ความสามารถ AI หลัก 4 ด้าน" แสดงเป็น 2x2 grid
 *        ประกอบด้วย: Anomaly Detection, Predictive Maintenance,
 *        Energy Optimization, Fault Classification
 * Section: #features — ส่วนที่ 4 ของหน้า
 * Props: ไม่มี
 */
import { ScanSearch, TrendingUp, Zap, GitFork } from 'lucide-react';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 22;

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">AI Capabilities</div>
          <div className="section-title">ความสามารถ AI หลัก 4 ด้าน</div>
          <p className="section-desc">
            ขับเคลื่อนด้วย Machine Learning และ Data Analytics สำหรับ High-Mast Lighting
            โดยเฉพาะ
          </p>
        </div>

        <div className="features-grid">
          {/* 01 — Anomaly Detection */}
          <div className="feature-card fade-up">
            <div className="feature-number">01</div>
            <div className="feature-icon-box">
              <ScanSearch size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="feature-en">Anomaly Detection</div>
            <div className="feature-th">ตรวจจับความผิดปกติ</div>
            <div className="feature-desc">
              ตรวจจับความผิดปกติแบบเรียลไทม์ เช่น{' '}
              <strong style={{ color: 'var(--white)' }}>
                ไฟดับ โหลดหาย กระแสไฟลดผิดปกติ ไฟติดนอกเวลา
              </strong>{' '}
              หรืออุณหภูมิตู้ควบคุมสูงเกินเกณฑ์ พร้อมส่งแจ้งเตือนทันที
            </div>
          </div>

          {/* 02 — Predictive Maintenance */}
          <div className="feature-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="feature-number">02</div>
            <div className="feature-icon-box">
              <TrendingUp size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="feature-en">Predictive Maintenance</div>
            <div className="feature-th">วิเคราะห์คาดการณ์ก่อนเสีย</div>
            <div className="feature-desc">
              คาดการณ์แนวโน้มการเสียของ{' '}
              <strong style={{ color: 'var(--white)' }}>
                หลอดไฟ · Driver · Controller
              </strong>{' '}
              หรืออุปกรณ์ไฟฟ้า เพื่อวางแผนซ่อมก่อนเกิดปัญหาจริง
              ลดการหยุดชะงักของระบบ
            </div>
          </div>

          {/* 03 — Energy Optimization */}
          <div className="feature-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="feature-number">03</div>
            <div className="feature-icon-box">
              <Zap size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="feature-en">Energy Optimization</div>
            <div className="feature-th">เพิ่มประสิทธิภาพพลังงาน</div>
            <div className="feature-desc">
              วิเคราะห์รูปแบบการใช้พลังงาน และแนะนำการ{' '}
              <strong style={{ color: 'var(--white)' }}>หรี่แสง ปรับเวลาเปิด-ปิด</strong>{' '}
              ให้เหมาะสมกับช่วงเวลา สภาพแวดล้อม
              และความหนาแน่นของการใช้งานพื้นที่จริง
            </div>
          </div>

          {/* 04 — Fault Classification */}
          <div className="feature-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="feature-number">04</div>
            <div className="feature-icon-box">
              <GitFork size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="feature-en">Fault Classification</div>
            <div className="feature-th">จำแนกประเภทปัญหา</div>
            <div className="feature-desc">
              จำแนกสาเหตุปัญหาอัตโนมัติ เช่น{' '}
              <strong style={{ color: 'var(--white)' }}>
                หลอดเสีย · Driver เสีย · Breaker Trip · ไฟตก/ไฟกระชาก ·
                ตู้ควบคุมผิดปกติ
              </strong>{' '}
              เพื่อให้ทีมซ่อมเตรียมอุปกรณ์ได้ถูกต้องตั้งแต่แรก
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
