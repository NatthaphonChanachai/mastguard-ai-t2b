/**
 * Footer
 * แสดง: Footer ด้านล่างสุดของหน้า แบ่งเป็น 2 ส่วน
 *        บน (footer-top): โลโก้บริษัท + คำอธิบาย | Quick Links | Contact
 *        ล่าง (footer-bottom): copyright | registration info
 * Section: footer — ส่วนสุดท้ายของหน้า (ต่อจาก Contact)
 * Props: ไม่มี
 */
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const ICON_COLOR = '#8894b8';
const ICON_SIZE = 14;

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
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
            <div className="footer-brand-desc">
              ผู้นำด้านระบบไฟฟ้าส่องสว่าง LED และ Smart IoT Infrastructure
              สำหรับองค์กรและโครงสร้างพื้นฐานขนาดใหญ่
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{
              fontFamily: 'var(--font-en)',
              fontSize: '11px',
              color: 'var(--electric)',
              letterSpacing: '1px',
              marginBottom: '12px',
            }}>
              QUICK LINKS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#problem" className="footer-link">ปัญหาที่แก้ได้</a>
              <a href="#solution" className="footer-link">MastGuard AI Solution</a>
              <a href="#features" className="footer-link">AI Capabilities</a>
              <a href="#dashboard" className="footer-link">Dashboard</a>
              <a href="#contact" className="footer-link">ติดต่อเรา</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--font-en)',
              fontSize: '11px',
              color: 'var(--electric)',
              letterSpacing: '1px',
              marginBottom: '12px',
            }}>
              CONTACT
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
                ปทุมธานี 12150
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 บริษัท ทีทูบี อินเตอร์เทรด จำกัด · สงวนลิขสิทธิ์
          </div>
          <div className="footer-reg">
            Reg. 0135554004406 · Est. 21 March 2011 · Capital ฿5,000,000
          </div>
        </div>
      </div>
    </footer>
  );
}
