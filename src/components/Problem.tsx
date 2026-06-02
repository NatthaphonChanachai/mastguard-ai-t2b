/**
 * Problem
 * แสดง: Section ปัญหาของระบบ High-Mast แบบเดิม แสดงเป็น grid 6 การ์ด
 *        แต่ละการ์ดแสดง Lucide icon, หัวข้อปัญหา, และคำอธิบาย
 * Section: #problem — ส่วนที่ 2 ของหน้า
 * Props: ไม่มี
 */
import { Eye, Clock, MapPin, Zap, BarChart2, SearchX } from 'lucide-react';

const ICON_COLOR = '#ff5858';
const ICON_SIZE = 18;

export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">Problem</div>
          <div className="section-title-th">ปัญหาของระบบ High-Mast แบบเดิม</div>
          <p className="section-desc">
            ระบบไฟ High-Mast แบบดั้งเดิมยังขาดการมองเห็นแบบเรียลไทม์
            ทำให้องค์กรต้องพึ่งพาการตรวจหน้างาน หรือการร้องเรียนจากผู้ใช้งาน
            ส่งผลให้ซ่อมบำรุงล่าช้า กระทบต่อความปลอดภัย และมีต้นทุนสูง
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card fade-up">
            <div className="problem-icon">
              <Eye size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">ไม่รู้สถานะไฟแบบเรียลไทม์</div>
              <div className="problem-desc">
                ไม่ทราบว่าเสาไฟเสาใดดับ หรือทำงานผิดปกติจนกว่าจะมีคนพบเห็น
              </div>
            </div>
          </div>

          <div className="problem-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="problem-icon">
              <Clock size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">ไฟดับแล้วรู้ช้า</div>
              <div className="problem-desc">
                ระบบไม่มีการแจ้งเตือนอัตโนมัติ ความล่าช้าในการซ่อมกระทบต่อความปลอดภัย
              </div>
            </div>
          </div>

          <div className="problem-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="problem-icon">
              <MapPin size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">ตรวจสอบหน้างานบ่อย</div>
              <div className="problem-desc">
                ต้องส่งทีมออกตรวจภาคสนามสม่ำเสมอ เพิ่มค่าใช้จ่ายและเวลาโดยไม่จำเป็น
              </div>
            </div>
          </div>

          <div className="problem-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="problem-icon">
              <Zap size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">ค่าไฟสูงจากการเปิด-ปิดแบบคงที่</div>
              <div className="problem-desc">
                ไฟเปิดทุกดวงทุกช่วงเวลาโดยไม่ปรับตามบริบทการใช้งานพื้นที่จริง
              </div>
            </div>
          </div>

          <div className="problem-card fade-up" style={{ transitionDelay: '0.25s' }}>
            <div className="problem-icon">
              <BarChart2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">ขาดข้อมูลสำหรับวางแผนซ่อมบำรุง</div>
              <div className="problem-desc">
                ไม่มีข้อมูลประวัติและแนวโน้ม ทำให้วางงบประมาณและแผนซ่อมล่วงหน้าได้ยาก
              </div>
            </div>
          </div>

          <div className="problem-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="problem-icon">
              <SearchX size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
            </div>
            <div>
              <div className="problem-title">แยกสาเหตุปัญหาไม่ได้ทันที</div>
              <div className="problem-desc">
                เมื่อไฟดับ ไม่ทราบว่าเกิดจากหลอด Driver Breaker หรืออะไร
                ทำให้เตรียมอะไหล่ผิด
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
