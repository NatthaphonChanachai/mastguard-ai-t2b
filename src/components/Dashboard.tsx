'use client';

import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Dashboard() {
  const { lang } = useApp();
  const T = t[lang].dashboard;

  return (
    <section id="dashboard">
      <div className="container">
        <div className="fade-up">
          <div className="section-tag">{T.tag}</div>
          <div className="section-title">{T.title}</div>
          <p className="section-desc">{T.desc}</p>
        </div>

        <div className="dashboard-mockup fade-up" style={{ transitionDelay: '0.15s' }}>
          <div className="dashboard-header">
            <span className="dashboard-title">
              MASTGUARD AI — CONTROL CENTER · Zone A: Expressway Sector 7
            </span>
            <div className="dashboard-status">
              <div className="status-live"></div>
              LIVE · Updated 0.8s ago
            </div>
          </div>

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

          <div className="dashboard-charts">
            <div className="dash-chart-card">
              <div className="dash-chart-title">ENERGY USAGE — LAST 12 HOURS (kWh)</div>
              <div className="mini-bars">
                {[40, 95, 100, 90, 80, 70, 50, 35, 30, 28, 30, 55].map((h, i) => (
                  <div key={i} className="mini-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>18:00</span>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>00:00</span>
                <span style={{ fontSize: '10px', color: 'var(--gray-600)', fontFamily: 'var(--font-mono)' }}>06:00</span>
              </div>
            </div>

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
