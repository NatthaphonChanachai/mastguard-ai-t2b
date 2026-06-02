/**
 * About
 * แสดง: Section แนะนำบริษัท T2B Intertrade Co., Ltd.
 *        ด้านซ้าย: ประวัติบริษัท + grid สถิติ 4 ตัว (14+ ปี, 17+ ลูกค้า, ASEAN, 5M บาท)
 *        ด้านขวา: รายละเอียดข้อมูลบริษัท (ชื่อ, เลขทะเบียน, ธุรกิจหลัก, ตลาด, นวัตกรรม, ความยั่งยืน)
 * Section: #about — ส่วนที่ 8 ของหน้า
 * Props: ไม่มี
 */
import { Building2, Hash, Lightbulb, Globe2, FlaskConical, Leaf } from 'lucide-react';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 18;

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">About T2B</div>
          <div className="section-title">About T2B Intertrade</div>
        </div>

        <div className="about-grid">
          {/* Left — company description + stats */}
          <div className="fade-up">
            <p style={{ fontSize: '17px', color: 'var(--gray-200)', lineHeight: 2, fontWeight: 300, marginBottom: '24px' }}>
              บริษัท ทีทูบี อินเตอร์เทรด จำกัด ก่อตั้งเมื่อวันที่{' '}
              <strong style={{ color: 'var(--white)' }}>21 มีนาคม พ.ศ. 2554</strong>{' '}
              เป็นผู้ให้บริการด้านระบบไฟฟ้าส่องสว่าง LED ครบวงจร
              ทั้งการจำหน่าย ออกแบบ ติดตั้ง สำรวจหน้างาน คำนวณค่าความสว่าง
              และบริการหลังการขาย ให้บริการทั้งในประเทศไทยและภูมิภาคอาเซียน
            </p>
            <p style={{ fontSize: '16px', color: 'var(--gray-400)', lineHeight: 1.8, marginBottom: '32px' }}>
              ปัจจุบันมุ่งพัฒนาไปสู่ยุคใหม่ของ{' '}
              <strong style={{ color: 'var(--electric)' }}>Smart IoT และ AIoT</strong>{' '}
              โดยนำเทคโนโลยีล่าสุดมาประยุกต์ใช้กับระบบแสงสว่าง
              เพื่อรองรับทั้งภาคธุรกิจและภาครัฐ และขยายไปสู่ภูมิภาคอาเซียน
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-val">14+</span>
                <span className="about-stat-label">ปีประสบการณ์</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-val">17+</span>
                <span className="about-stat-label">องค์กรลูกค้าอ้างอิง</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-val">ASEAN</span>
                <span className="about-stat-label">ตลาดเป้าหมาย</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-val">5M</span>
                <span className="about-stat-label">ทุนจดทะเบียน (บาท)</span>
              </div>
            </div>
          </div>

          {/* Right — company info items */}
          <div className="about-info fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="about-info-item">
              <div className="about-info-icon">
                <Building2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Company Name</div>
                <div className="about-info-val">
                  บริษัท ทีทูบี อินเตอร์เทรด จำกัด<br />
                  <span style={{ color: 'var(--gray-400)', fontSize: '13px' }}>
                    T2B Intertrade Co., Ltd.
                  </span>
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Hash size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Registration No.</div>
                <div className="about-info-val" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  0135554004406
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Lightbulb size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Core Business</div>
                <div className="about-info-val">
                  ตัวแทนจำหน่ายและติดตั้งระบบไฟฟ้าส่องสว่าง LED ครบวงจร
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Globe2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Market</div>
                <div className="about-info-val">ประเทศไทย และภูมิภาคอาเซียน</div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <FlaskConical size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Innovation</div>
                <div className="about-info-val">
                  AIoT Smart Lighting · Smart IoT Infrastructure
                </div>
              </div>
            </div>

            <div className="about-info-item">
              <div className="about-info-icon">
                <Leaf size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
              <div>
                <div className="about-info-key">Sustainability</div>
                <div className="about-info-val">
                  สนับสนุนพลังงานสะอาด ลดต้นทุนพลังงาน ลดผลกระทบต่อสิ่งแวดล้อม
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
