/**
 * Contact
 * แสดง: Section ติดต่อ T2B Intertrade แบ่งเป็น 2 คอลัมน์
 *        ซ้าย: ข้อความ CTA + ปุ่ม 4 ปุ่ม (Request Demo, โทร, ขอใบเสนอราคา, นัดสำรวจ)
 *        ขวา: การ์ดข้อมูลติดต่อ (โทร, email, ที่อยู่, บริษัท)
 * Section: #contact — ส่วนที่ 9 ของหน้า (พื้นหลัง indigo-deep)
 * Props: ไม่มี
 */
import { Play, Phone, Mail, FileText, Map, MapPin, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '8px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Contact Us</div>
          <div className="section-title-th">
            พร้อมยกระดับระบบ High-Mast ของคุณด้วย MastGuard AI
          </div>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            ติดต่อทีมวิศวกรของ T2B Intertrade เพื่อขอ Demo นัดสำรวจหน้างาน
            หรือปรึกษาการออกแบบระบบ AIoT
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — CTA buttons */}
          <div className="fade-up">
            <div className="contact-cta-title">เริ่มต้นได้ง่าย ๆ</div>
            <div className="contact-cta-desc">
              ทีมวิศวกรของเราพร้อมให้คำปรึกษา สำรวจหน้างานฟรี
              และจัดทำข้อเสนอที่เหมาะกับพื้นที่ของคุณโดยเฉพาะ
            </div>
            <div className="contact-buttons">
              <a
                href="mailto:engineer@t2b.co.th?subject=Request Demo - MastGuard AI"
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <Play size={15} strokeWidth={2} />
                Request Demo — ขอทดลองระบบ
              </a>
              <a
                href="tel:021528895"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <Phone size={15} strokeWidth={1.5} />
                ติดต่อทีมวิศวกร 02-152-8895
              </a>
              <a
                href="mailto:engineer@t2b.co.th?subject=Quotation - MastGuard AI"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <FileText size={15} strokeWidth={1.5} />
                ขอใบเสนอราคา (Quotation)
              </a>
              <a
                href="mailto:engineer@t2b.co.th?subject=Site Survey - MastGuard AI"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <Map size={15} strokeWidth={1.5} />
                นัดสำรวจหน้างาน (Site Survey)
              </a>
            </div>
          </div>

          {/* Right — contact info card */}
          <div className="contact-info-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="contact-info-title">CONTACT INFORMATION</div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Phone size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-val">02-152-8895</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Mail size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">engineer@t2b.co.th</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <MapPin size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Address</div>
                <div className="contact-item-val">
                  55/39 คาซ่าซิตี้ หมู่ 11 ซอย 6<br />
                  ต.บึงคำพร้อย อ.ลำลูกกา จ.ปทุมธานี 12150
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Building2 size={18} color="#00b4ff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Company</div>
                <div className="contact-item-val">
                  T2B Intertrade Co., Ltd.<br />
                  <span style={{ fontSize: '12px', color: 'var(--gray-400)' }}>
                    เลขทะเบียน 0135554004406
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
