/**
 * Hero
 * แสดง: ส่วน Hero หลักของหน้า ความสูงเต็มจอ ประกอบด้วย:
 *        - ด้านซ้าย: badge, ชื่อผลิตภัณฑ์, คำอธิบาย, ปุ่ม CTA 2 ปุ่ม
 *        - ด้านขวา: การ์ด Live Monitoring preview พร้อม SVG animated high-mast poles,
 *                   data chips, และ status ticker
 * Section: #home — Hero section (ส่วนแรกของหน้า)
 * Props: ไม่มี
 */
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">

          {/* LEFT — text content */}
          <div className="hero-left fade-up">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              AIoT Smart Infrastructure Platform
            </div>
            <div className="hero-title">
              MAST<span>GUARD</span> AI
            </div>
            <div className="hero-subtitle">
              AIoT Smart High-Mast Lighting Management System
            </div>
            <p className="hero-desc">
              ระบบบริหารจัดการเสาไฟ High-Mast อัจฉริยะด้วย AI และ IoT<br />
              ตรวจสอบสถานะไฟ
              <strong style={{ color: 'var(--white)' }}>แบบเรียลไทม์</strong>{' '}
              วิเคราะห์ความผิดปกติ<br />
              คาดการณ์การซ่อมบำรุง และเพิ่มประสิทธิภาพการใช้พลังงาน
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <Play size={14} strokeWidth={2.5} />
                Request Demo
              </a>
              <a href="#solution" className="btn-outline">
                Explore Solution
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* RIGHT — Dashboard preview card */}
          <div className="hero-visual fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="pole-card" style={{ width: '100%', maxWidth: '420px' }}>
              <div className="pole-mini-title">LIVE MONITORING — HIGH-MAST ZONE A</div>

              <div className="pole-svg-container">
                {/* Pole 1 */}
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="0" y="180" width="200" height="20" fill="rgba(0,180,255,0.06)" rx="4" />
                  <rect x="96" y="60" width="8" height="120" fill="#1e3a6e" rx="2" />
                  <path d="M100 60 Q130 30 155 28" stroke="#2d44a0" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <rect x="148" y="20" width="22" height="12" rx="4" fill="#00b4ff" opacity="0.9" />
                  <rect x="150" y="32" width="18" height="4" rx="2" fill="rgba(0,180,255,0.4)" />
                  <ellipse cx="159" cy="44" rx="20" ry="8" fill="rgba(0,180,255,0.12)" />
                  <circle cx="100" cy="80" r="4" fill="#00b4ff" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="110" r="3" fill="#00b4ff" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <path d="M100 80 Q50 60 20 40" stroke="#00b4ff" strokeWidth="1" fill="none"
                    strokeDasharray="4 3" opacity="0.4">
                    <animate attributeName="stroke-dashoffset" values="0;-100" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M100 80 Q160 50 180 25" stroke="#00e5ff" strokeWidth="1" fill="none"
                    strokeDasharray="4 3" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" values="0;-100" dur="4s" repeatCount="indefinite" />
                  </path>
                  <text x="8" y="38" fontSize="18" opacity="0.5">☁</text>
                  <text x="106" y="83" fontSize="9" fill="#00b4ff" opacity="0.7" fontFamily="monospace">SENSOR</text>
                  <text x="106" y="113" fontSize="9" fill="#00b4ff" opacity="0.5" fontFamily="monospace">METER</text>
                </svg>

                {/* Pole 2 */}
                <svg width="180" height="200" viewBox="0 0 180 200" fill="none"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="86" y="30" width="8" height="150" fill="#1e3a6e" rx="2" />
                  <path d="M90 30 Q122 8 145 6" stroke="#2d44a0" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <rect x="138" y="-2" width="20" height="12" rx="4" fill="#00b4ff" opacity="0.85" />
                  <ellipse cx="148" cy="16" rx="18" ry="7" fill="rgba(0,180,255,0.1)" />
                  <rect x="0" y="180" width="180" height="20" fill="rgba(0,180,255,0.06)" rx="4" />
                  <circle cx="90" cy="55" r="4" fill="#00b4ff" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <path d="M90 55 Q50 40 20 20" stroke="#00b4ff" strokeWidth="1" fill="none"
                    strokeDasharray="4 3" opacity="0.35">
                    <animate attributeName="stroke-dashoffset" values="0;-100" dur="3.5s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

              <div className="data-chips">
                <div className="data-chip"><div className="chip-dot ok"></div>Voltage: 228V</div>
                <div className="data-chip"><div className="chip-dot ok"></div>Current: 4.2A</div>
                <div className="data-chip"><div className="chip-dot warn"></div>Temp: 48°C</div>
                <div className="data-chip"><div className="chip-dot ok"></div>Power: 960W</div>
                <div className="data-chip"><div className="chip-dot ok"></div>PF: 0.97</div>
              </div>

              <div className="status-ticker">
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: '#00ff88' }}>48</span>
                  <div className="ticker-label">โคมออนไลน์</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: '#ffa500' }}>2</span>
                  <div className="ticker-label">แจ้งเตือน</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val">94%</span>
                  <div className="ticker-label">ประสิทธิภาพ</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: '#00ff88' }}>LIVE</span>
                  <div className="ticker-label">Real-Time</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
