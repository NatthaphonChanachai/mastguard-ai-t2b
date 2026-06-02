/**
 * UseCases
 * แสดง: Section แสดงพื้นที่ที่เหมาะสมสำหรับ MastGuard AI ทั้ง 8 ประเภท
 *        เช่น ถนน/ทางหลวง, ท่าเรือ, สนามบิน, Smart City เป็นต้น
 *        แสดงในรูปแบบ 4x2 grid ของการ์ด icon + ชื่อภาษาไทย + ชื่อภาษาอังกฤษ
 * Section: #usecases — ส่วนที่ 7 ของหน้า
 * Props: ไม่มี
 */
import {
  Navigation,
  ParkingSquare,
  Factory,
  Anchor,
  Plane,
  Package,
  Trophy,
  Building2,
} from 'lucide-react';

const ICON_COLOR = '#00b4ff';
const ICON_SIZE = 28;

export default function UseCases() {
  return (
    <section id="usecases">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">Use Cases</div>
          <div className="section-title-th">เหมาะสำหรับพื้นที่ใด</div>
          <p className="section-desc">
            MastGuard AI ถูกออกแบบมาสำหรับโครงสร้างพื้นฐานขนาดใหญ่
            ที่ต้องการระบบแสงสว่างที่เชื่อถือได้และวัดผลได้
          </p>
        </div>

        <div className="usecases-grid">
          <div className="usecase-card fade-up">
            <div className="usecase-icon">
              <Navigation size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">ถนนและทางหลวง</div>
            <div className="usecase-en">Smart Road</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.07s' }}>
            <div className="usecase-icon">
              <ParkingSquare size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">ลานจอดรถขนาดใหญ่</div>
            <div className="usecase-en">Parking Area</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="usecase-icon">
              <Factory size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">โรงงานอุตสาหกรรม</div>
            <div className="usecase-en">Industrial Plant</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.13s' }}>
            <div className="usecase-icon">
              <Anchor size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">ท่าเรือ</div>
            <div className="usecase-en">Smart Port</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.16s' }}>
            <div className="usecase-icon">
              <Plane size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">สนามบิน</div>
            <div className="usecase-en">Airport</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.19s' }}>
            <div className="usecase-icon">
              <Package size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">คลังสินค้า</div>
            <div className="usecase-en">Warehouse</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.22s' }}>
            <div className="usecase-icon">
              <Trophy size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">สนามกีฬา</div>
            <div className="usecase-en">Stadium</div>
          </div>

          <div className="usecase-card fade-up" style={{ transitionDelay: '0.25s' }}>
            <div className="usecase-icon">
              <Building2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div className="usecase-name">พื้นที่ Smart City</div>
            <div className="usecase-en">Smart City</div>
          </div>
        </div>
      </div>
    </section>
  );
}
