/**
 * Benefits
 * แสดง: Section ผลลัพธ์ที่องค์กรจะได้รับ แสดงเป็น 3x2 grid
 *        แต่ละการ์ดแสดงตัวเลขผลลัพธ์ (เช่น ↓80%), หัวข้อ, และคำอธิบาย
 * Section: #benefits — ส่วนที่ 6 ของหน้า
 * Props: ไม่มี
 */
export default function Benefits() {
  return (
    <section id="benefits">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">Benefits</div>
          <div className="section-title-th">ผลลัพธ์ที่องค์กรจะได้รับ</div>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card fade-up">
            <div className="benefit-number">↓80%</div>
            <div className="benefit-title">ลดปัญหาไฟดับโดยไม่รู้ตัว</div>
            <div className="benefit-desc">
              แจ้งเตือนอัตโนมัติทันทีที่ตรวจพบความผิดปกติ
            </div>
          </div>

          <div className="benefit-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="benefit-number">↓60%</div>
            <div className="benefit-title">ลดการตรวจสอบภาคสนาม</div>
            <div className="benefit-desc">
              ดูสถานะทุกเสาได้จากหน้าจอเดียว ไม่ต้องส่งทีมออกตรวจโดยไม่จำเป็น
            </div>
          </div>

          <div className="benefit-card fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="benefit-number">↓40%</div>
            <div className="benefit-title">ลดค่าใช้จ่ายซ่อมบำรุง</div>
            <div className="benefit-desc">
              ซ่อมก่อนเสียหายหนัก ลดค่าอะไหล่และเวลาหยุดชะงัก
            </div>
          </div>

          <div className="benefit-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="benefit-number">↓25%</div>
            <div className="benefit-title">ลดการใช้พลังงาน</div>
            <div className="benefit-desc">
              AI ปรับสเกดูลและความสว่างให้เหมาะสมกับบริบทจริง
            </div>
          </div>

          <div className="benefit-card fade-up" style={{ transitionDelay: '0.25s' }}>
            <div className="benefit-number">100%</div>
            <div className="benefit-title">เพิ่มความปลอดภัยพื้นที่</div>
            <div className="benefit-desc">
              ไฟพร้อมใช้งานตลอดเวลา รับมือปัญหาได้ก่อนกระทบผู้ใช้
            </div>
          </div>

          <div className="benefit-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="benefit-number">📋</div>
            <div className="benefit-title">ข้อมูลวางแผนงบประมาณ</div>
            <div className="benefit-desc">
              รายงานอัตโนมัติและประวัติข้อมูลช่วยวางแผนงบระยะยาวได้แม่นยำ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
