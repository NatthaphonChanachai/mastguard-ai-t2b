/**
 * Dashboard
 * แสดง: Section mockup ของ Real-Time Monitoring Dashboard
 *        ประกอบด้วย header bar, grid ตัวชี้วัด 8 ค่า (voltage, current, PF ฯลฯ),
 *        mini bar chart การใช้พลังงาน 12 ชั่วโมง, และรายการ Fault & Status alerts
 * Section: #dashboard — ส่วนที่ 5 ของหน้า
 * Props: ไม่มี
 *
 * หมายเหตุ: animation ของ mini bars (เคลื่อนไหวตอน scroll เข้า viewport)
 *           ถูกจัดการโดย ScrollAnimations component
 */
export default function Dashboard() {
  return (
    <section id="dashboard">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">Real-Time Dashboard</div>
          <div className="section-title">Real-Time Monitoring Dashboard</div>
          <p className="section-desc">
            ศูนย์ควบคุมอัจฉริยะ เห็นสถานะเสาไฟทุกต้นแบบเรียลไทม์ในหน้าจอเดียว
          </p>
        </div>

        <div className="dashboard-mockup fade-up" style={{ transitionDelay: '0.15s' }}>
          {/* Header */}
          <div className="dashboard-header">
            <span className="dashboard-title">
              MASTGUARD AI — CONTROL CENTER · Zone A: Expressway Sector 7
            </span>
            <div className="dashboard-status">
              <div className="status-live"></div>
              LIVE · Updated 0.8s ago
            </div>
          </div>

          {/* Metrics grid */}
          <div className="dashboard-body">
            <div className="dash-metric">
              <span className="dash-metric-val ok">48</span>
              <span className="dash-metric-unit">/ 50</span>
              <span className="dash-metric-label">Lamp Online</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val warn">2</span>
              <span className="dash-metric-unit">ALERT</span>
              <span className="dash-metric-label">Fault Active</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val">228.4</span>
              <span className="dash-metric-unit">V avg</span>
              <span className="dash-metric-label">Voltage</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val">47.2</span>
              <span className="dash-metric-unit">kWh</span>
              <span className="dash-metric-label">Energy Today</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val">4.18</span>
              <span className="dash-metric-unit">A avg</span>
              <span className="dash-metric-label">Current</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val ok">0.97</span>
              <span className="dash-metric-unit">PF</span>
              <span className="dash-metric-label">Power Factor</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val warn">51°C</span>
              <span className="dash-metric-unit">MAX</span>
              <span className="dash-metric-label">Cabinet Temp</span>
            </div>
            <div className="dash-metric">
              <span className="dash-metric-val ok">94%</span>
              <span className="dash-metric-unit">EFF</span>
              <span className="dash-metric-label">Energy Saving</span>
            </div>
          </div>

          {/* Charts */}
          <div className="dashboard-charts">
            {/* Energy bar chart */}
            <div className="dash-chart-card">
              <div className="dash-chart-title">ENERGY USAGE — LAST 12 HOURS (kWh)</div>
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '40%' }} title="18:00"></div>
                <div className="mini-bar" style={{ height: '95%' }} title="19:00"></div>
                <div className="mini-bar" style={{ height: '100%' }} title="20:00"></div>
                <div className="mini-bar" style={{ height: '90%' }} title="21:00"></div>
                <div className="mini-bar" style={{ height: '80%' }} title="22:00"></div>
                <div className="mini-bar" style={{ height: '70%' }} title="23:00"></div>
                <div className="mini-bar" style={{ height: '50%' }} title="00:00"></div>
                <div className="mini-bar" style={{ height: '35%' }} title="01:00"></div>
                <div className="mini-bar" style={{ height: '30%' }} title="02:00"></div>
                <div className="mini-bar" style={{ height: '28%' }} title="03:00"></div>
                <div className="mini-bar" style={{ height: '30%' }} title="04:00"></div>
                <div className="mini-bar" style={{ height: '55%' }} title="05:00"></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>18:00</span>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>00:00</span>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>06:00</span>
              </div>
            </div>

            {/* Fault list */}
            <div className="dash-chart-card">
              <div className="dash-chart-title">FAULT &amp; STATUS ALERTS</div>
              <div className="fault-list">
                <div className="fault-item">
                  <div className="fault-dot red"></div>
                  <div className="fault-name">Pole #12 Driver</div>
                  <div className="fault-status err">FAULT</div>
                </div>
                <div className="fault-item">
                  <div className="fault-dot orange"></div>
                  <div className="fault-name">Pole #07 Temp</div>
                  <div className="fault-status warn">HIGH</div>
                </div>
                <div className="fault-item ok">
                  <div className="fault-dot green"></div>
                  <div className="fault-name">Pole #01-06</div>
                  <div className="fault-status ok">NORMAL</div>
                </div>
                <div className="fault-item ok">
                  <div className="fault-dot green"></div>
                  <div className="fault-name">Pole #08-50</div>
                  <div className="fault-status ok">NORMAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
