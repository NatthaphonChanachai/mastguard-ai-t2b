'use client';

import { Play, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Hero() {
  const { lang } = useApp();
  const T = t[lang].hero;

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">

          {/* ─── LEFT — Text content ─── */}
          <div className="hero-left fade-up">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              {T.badge}
            </div>

            <div className="hero-title">
              MAST<span>GUARD</span> AI
            </div>
            <div className="hero-subtitle">{T.subtitle}</div>

            {lang === 'th' ? (
              <p className="hero-desc">
                ระบบบริหารจัดการเสาไฟ High-Mast อัจฉริยะด้วย AI และ IoT<br />
                ตรวจสอบสถานะไฟ{' '}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>แบบเรียลไทม์</strong>{' '}
                วิเคราะห์ความผิดปกติ<br />
                คาดการณ์การซ่อมบำรุง และเพิ่มประสิทธิภาพการใช้พลังงาน
              </p>
            ) : (
              <p className="hero-desc">
                Intelligent AI &amp; IoT platform for High-Mast lighting infrastructure.{' '}
                Monitor status{' '}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>in real-time</strong>,
                detect anomalies, predict maintenance, and optimize energy.
              </p>
            )}

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <Play size={14} strokeWidth={2.5} />
                {T.requestDemo}
              </a>
              <a href="#solution" className="btn-outline">
                {T.exploreSolution}
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* ─── RIGHT — High-Mast Visual ─── */}
          <div className="hero-visual fade-up" style={{ transitionDelay: '0.18s' }}>
            <div className="pole-card" style={{ width: '100%', maxWidth: '460px' }}>
              <div className="pole-mini-title">{T.liveMonitoring}</div>

              {/* ── Engineering-Accurate High-Mast SVG ── */}
              <div className="pole-svg-container">
                <svg
                  width="100%"
                  viewBox="0 0 280 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="High-Mast Lighting System with AI IoT monitoring"
                  role="img"
                  style={{ maxHeight: '320px' }}
                >
                  <defs>
                    {/* Pole body gradient */}
                    <linearGradient id="poleGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%"   stopColor="#07122a" />
                      <stop offset="30%"  stopColor="#1a3880" />
                      <stop offset="55%"  stopColor="#2050a0" />
                      <stop offset="80%"  stopColor="#162e70" />
                      <stop offset="100%" stopColor="#07122a" />
                    </linearGradient>
                    {/* Base gradient */}
                    <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#0c1e45" />
                      <stop offset="100%" stopColor="#060e1e" />
                    </linearGradient>
                    {/* Crown ring gradient */}
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%"   stopColor="#00AEEF" stopOpacity="0.75" />
                      <stop offset="50%"  stopColor="#00AEEF" />
                      <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.75" />
                    </linearGradient>
                    {/* Warm light glow */}
                    <radialGradient id="warmGlow" cx="50%" cy="0%" r="100%">
                      <stop offset="0%"   stopColor="rgba(255, 245, 160, 0.28)" />
                      <stop offset="100%" stopColor="rgba(255, 245, 160, 0)" />
                    </radialGradient>
                    {/* Atmospheric halo */}
                    <radialGradient id="halo" cx="50%" cy="25%" r="65%">
                      <stop offset="0%"   stopColor="rgba(0, 174, 239, 0.14)" />
                      <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
                    </radialGradient>
                  </defs>

                  {/* ── Atmospheric glow from crown ── */}
                  <ellipse cx="140" cy="88" rx="145" ry="88" fill="url(#halo)" />

                  {/* ── Light beam spread from crown downward ── */}
                  <path d="M68 110 L212 110 L248 300 L32 300 Z"
                    fill="rgba(255,245,150,0.018)" />

                  {/* ════════════════════════════════════════
                      FOUNDATION / BASE
                  ════════════════════════════════════════ */}
                  {/* Ground shadow ellipse */}
                  <ellipse cx="140" cy="382" rx="52" ry="9"
                    fill="rgba(0,174,239,0.06)" />
                  {/* Foundation sides (trapezoid) */}
                  <path d="M100 372 L180 372 L186 384 L94 384 Z"
                    fill="url(#baseGrad)" />
                  {/* Foundation top slab */}
                  <rect x="106" y="362" width="68" height="12" rx="2"
                    fill="#0c1e45" stroke="rgba(0,174,239,0.18)" strokeWidth="0.8" />
                  {/* Cable conduit entry */}
                  <rect x="118" y="371" width="44" height="4" rx="1.5"
                    fill="rgba(0,174,239,0.18)" />
                  {/* Base bolt markers */}
                  <circle cx="112" cy="368" r="2" fill="rgba(0,174,239,0.25)" />
                  <circle cx="168" cy="368" r="2" fill="rgba(0,174,239,0.25)" />
                  <circle cx="140" cy="368" r="2" fill="rgba(0,174,239,0.25)" />

                  {/* ════════════════════════════════════════
                      MAIN MAST SHAFT (30m high-mast)
                      Scale: ~9px per metre
                  ════════════════════════════════════════ */}
                  {/* Pole body — very slight taper (wider at base) */}
                  <path d="M128 362  L152 362  L155 92  L125 92  Z"
                    fill="url(#poleGrad)" />
                  {/* Pole center highlight (reflective sheen) */}
                  <path d="M138 362 L141 92"
                    stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  {/* Pole edge lines */}
                  <path d="M128 362 L125 92"
                    stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
                  <path d="M152 362 L155 92"
                    stroke="rgba(0,0,0,0.35)" strokeWidth="1" />

                  {/* Weld/splice rings (every ~90px ≈ 10m) */}
                  <rect x="126" y="270" width="28" height="2.5" rx="1"
                    fill="rgba(0,174,239,0.18)" />
                  <rect x="126" y="180" width="27" height="2" rx="1"
                    fill="rgba(0,174,239,0.12)" />

                  {/* ════════════════════════════════════════
                      ACCESS LADDER (lower section)
                  ════════════════════════════════════════ */}
                  {/* Ladder side rails */}
                  <rect x="117" y="285" width="2" height="70" rx="1"
                    fill="rgba(26,56,138,0.65)" />
                  <rect x="161" y="285" width="2" height="70" rx="1"
                    fill="rgba(26,56,138,0.65)" />
                  {/* Rungs */}
                  {[292, 304, 316, 328, 340, 352].map((y) => (
                    <rect key={y} x="118" y={y} width="44" height="2.5" rx="1"
                      fill="rgba(26,56,138,0.80)"
                      stroke="rgba(0,174,239,0.10)" strokeWidth="0.4" />
                  ))}

                  {/* ════════════════════════════════════════
                      ACCESS DOOR PANEL (~8m = y≈290)
                  ════════════════════════════════════════ */}
                  <rect x="127" y="274" width="26" height="32" rx="2"
                    fill="#080e22" stroke="rgba(0,174,239,0.28)" strokeWidth="0.9" />
                  {/* Door panel detail */}
                  <rect x="130" y="277" width="10" height="26" rx="1"
                    fill="rgba(0,174,239,0.05)" stroke="rgba(0,174,239,0.15)" strokeWidth="0.5" />
                  <rect x="140" y="277" width="10" height="26" rx="1"
                    fill="rgba(0,174,239,0.05)" stroke="rgba(0,174,239,0.15)" strokeWidth="0.5" />
                  {/* Handle */}
                  <circle cx="139" cy="290" r="2" fill="rgba(0,174,239,0.45)" />

                  {/* ════════════════════════════════════════
                      ENERGY MONITORING MODULE (~13m = y≈240)
                  ════════════════════════════════════════ */}
                  <rect x="154" y="228" width="30" height="20" rx="3.5"
                    fill="#07101f" stroke="#00AEEF" strokeWidth="1" opacity="0.92" />
                  <text x="169" y="241"
                    textAnchor="middle" fill="#00AEEF"
                    fontSize="5.5" fontFamily="monospace" letterSpacing="0.4">
                    ENERGY
                  </text>
                  {/* Warning LED */}
                  <circle cx="179" cy="232" r="2.5" fill="#F59E0B">
                    <animate attributeName="opacity" values="1;0.35;1" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  {/* Energy bar (mini sparkline) */}
                  <rect x="157" y="244" width="4" height="2" rx="0.5" fill="rgba(0,174,239,0.5)" />
                  <rect x="162" y="242" width="4" height="4" rx="0.5" fill="rgba(0,174,239,0.6)" />
                  <rect x="167" y="240" width="4" height="6" rx="0.5" fill="rgba(0,174,239,0.8)" />
                  <rect x="172" y="243" width="4" height="3" rx="0.5" fill="rgba(0,174,239,0.55)" />

                  {/* ════════════════════════════════════════
                      AI · IoT SENSOR MODULE (~18m = y≈180)
                  ════════════════════════════════════════ */}
                  {/* Environmental sensor dome */}
                  <ellipse cx="140" cy="174" rx="9" ry="5.5"
                    fill="#060e1c" stroke="rgba(0,174,239,0.50)" strokeWidth="0.9" />
                  <ellipse cx="140" cy="174" rx="5" ry="3"
                    fill="rgba(0,174,239,0.10)" />
                  {/* Sensor housing */}
                  <rect x="124" y="178" width="32" height="22" rx="3.5"
                    fill="#07101f" stroke="#00AEEF" strokeWidth="1.2" opacity="0.96" />
                  <text x="140" y="192"
                    textAnchor="middle" fill="#00AEEF"
                    fontSize="5.5" fontFamily="monospace" letterSpacing="0.4">
                    AI·IoT
                  </text>
                  {/* Active status LED */}
                  <circle cx="151" cy="182" r="3" fill="#22C55E">
                    <animate attributeName="opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  {/* Data pulse ring */}
                  <circle cx="151" cy="182" r="5" fill="none"
                    stroke="rgba(34,197,94,0.30)" strokeWidth="0.8">
                    <animate attributeName="r" values="3;8" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0" dur="1.6s" repeatCount="indefinite" />
                  </circle>

                  {/* ════════════════════════════════════════
                      IoT COMMUNICATION ANTENNA (~26m = y≈115)
                  ════════════════════════════════════════ */}
                  {/* Antenna mast */}
                  <rect x="139.5" y="108" width="2" height="30"
                    fill="rgba(0,174,239,0.65)" />
                  {/* Antenna crossbars */}
                  <rect x="132" y="111" width="16" height="1.8" rx="0.7"
                    fill="rgba(0,174,239,0.60)" />
                  <rect x="134" y="118" width="12" height="1.5" rx="0.6"
                    fill="rgba(0,174,239,0.45)" />
                  <rect x="136" y="125" width="8"  height="1.2" rx="0.5"
                    fill="rgba(0,174,239,0.32)" />
                  {/* Signal waves (animated) */}
                  <path d="M155 113 Q167 108 172 103"
                    stroke="#00AEEF" strokeWidth="1" fill="none"
                    strokeLinecap="round" opacity="0.55">
                    <animate attributeName="opacity" values="0.55;0.10;0.55" dur="1.4s" repeatCount="indefinite" />
                  </path>
                  <path d="M155 119 Q170 113 178 106"
                    stroke="#00AEEF" strokeWidth="0.8" fill="none"
                    strokeLinecap="round" opacity="0.38">
                    <animate attributeName="opacity" values="0.38;0.06;0.38" dur="1.4s" repeatCount="indefinite" begin="0.28s" />
                  </path>
                  <path d="M155 126 Q173 118 184 109"
                    stroke="#06B6D4" strokeWidth="0.6" fill="none"
                    strokeLinecap="round" opacity="0.22">
                    <animate attributeName="opacity" values="0.22;0.04;0.22" dur="1.4s" repeatCount="indefinite" begin="0.56s" />
                  </path>

                  {/* ════════════════════════════════════════
                      CROWN STRUCTURE — The key high-mast feature
                      Crown ring: cx=140 cy=92 rx=84 ry=14
                  ════════════════════════════════════════ */}
                  {/* Main diagonal support arms pole → ring */}
                  <line x1="140" y1="92" x2="56"  y2="96"
                    stroke="#1e3a8a" strokeWidth="2.8" strokeLinecap="round" opacity="0.72" />
                  <line x1="140" y1="92" x2="224" y2="96"
                    stroke="#1e3a8a" strokeWidth="2.8" strokeLinecap="round" opacity="0.72" />
                  <line x1="140" y1="92" x2="82"  y2="87"
                    stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" opacity="0.50" />
                  <line x1="140" y1="92" x2="198" y2="87"
                    stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" opacity="0.50" />
                  {/* Vertical hanger cables */}
                  <line x1="84"  y1="88" x2="128" y2="118"
                    stroke="#162e70" strokeWidth="1" opacity="0.28" />
                  <line x1="196" y1="88" x2="152" y2="118"
                    stroke="#162e70" strokeWidth="1" opacity="0.28" />

                  {/* Back half of ring (dimmed / behind pole) */}
                  <path d="M56 92 A84 14 0 0 0 224 92"
                    stroke="#1a3070" strokeWidth="2.5" fill="none" opacity="0.38" />
                  {/* Front half of ring (bright / in front) */}
                  <path d="M56 92 A84 14 0 0 1 224 92"
                    stroke="url(#ringGrad)" strokeWidth="3.5" fill="none" opacity="0.90" />
                  {/* Inner secondary ring */}
                  <path d="M96 92 A44 8 0 0 1 184 92"
                    stroke="rgba(0,174,239,0.38)" strokeWidth="1.4" fill="none" />
                  <path d="M96 92 A44 8 0 0 0 184 92"
                    stroke="rgba(0,174,239,0.18)" strokeWidth="1" fill="none" />
                  {/* Ring area fill */}
                  <ellipse cx="140" cy="92" rx="84" ry="14"
                    fill="rgba(0,174,239,0.04)" />

                  {/* ════════════════════════════════════════
                      LUMINAIRES — 8 LED flood lights around ring
                      Positions on ellipse cx=140 cy=92 rx=84 ry=14
                      0°:(224,92) 45°:(199,102) 90°:(140,106)
                      135°:(81,102) 180°:(56,92) 225°:(81,82)
                      270°:(140,78) 315°:(199,82)
                  ════════════════════════════════════════ */}

                  {/* — FRONT VISIBLE LIGHTS — */}

                  {/* Light R: Right (0°) at (224, 92) */}
                  <rect x="219" y="88" width="18" height="10" rx="3"
                    fill="#00AEEF" opacity="0.96" />
                  <rect x="221" y="90" width="14" height="2.5" rx="1"
                    fill="rgba(255,255,255,0.32)" />
                  <rect x="221" y="94" width="14" height="2" rx="1"
                    fill="rgba(255,255,255,0.18)" />
                  <ellipse cx="228" cy="104" rx="16" ry="7"
                    fill="url(#warmGlow)" opacity="0.85" />

                  {/* Light LR: Lower-right (~45°) at (199, 102) */}
                  <rect x="193" y="98" width="16" height="9" rx="3"
                    fill="#00AEEF" opacity="0.90" />
                  <rect x="195" y="100" width="12" height="2" rx="1"
                    fill="rgba(255,255,255,0.28)" />
                  <ellipse cx="201" cy="111" rx="13" ry="5"
                    fill="url(#warmGlow)" opacity="0.75" />

                  {/* Light B: Bottom (90°) at (140, 106) */}
                  <rect x="133" y="103" width="14" height="8" rx="2.5"
                    fill="#00AEEF" opacity="0.85" />
                  <rect x="135" y="105" width="10" height="2" rx="1"
                    fill="rgba(255,255,255,0.22)" />
                  <ellipse cx="140" cy="115" rx="11" ry="4"
                    fill="url(#warmGlow)" opacity="0.65" />

                  {/* Light LL: Lower-left (~135°) at (81, 102) */}
                  <rect x="71"  y="98" width="16" height="9" rx="3"
                    fill="#00AEEF" opacity="0.90" />
                  <rect x="73"  y="100" width="12" height="2" rx="1"
                    fill="rgba(255,255,255,0.28)" />
                  <ellipse cx="79" cy="111" rx="13" ry="5"
                    fill="url(#warmGlow)" opacity="0.75" />

                  {/* Light L: Left (180°) at (56, 92) */}
                  <rect x="43"  y="88" width="18" height="10" rx="3"
                    fill="#00AEEF" opacity="0.96" />
                  <rect x="45"  y="90" width="14" height="2.5" rx="1"
                    fill="rgba(255,255,255,0.32)" />
                  <rect x="45"  y="94" width="14" height="2" rx="1"
                    fill="rgba(255,255,255,0.18)" />
                  <ellipse cx="52" cy="104" rx="16" ry="7"
                    fill="url(#warmGlow)" opacity="0.85" />

                  {/* — BACK LIGHTS (dimmed, upper arc) — */}

                  {/* Light UR: Upper-right (~315°) at (199, 82) */}
                  <rect x="194" y="77" width="14" height="8" rx="2.5"
                    fill="#1e3a8a" opacity="0.55" />

                  {/* Light T: Top (270°) at (140, 78) */}
                  <rect x="134" y="73" width="12" height="7" rx="2"
                    fill="#1e3a8a" opacity="0.40" />

                  {/* Light UL: Upper-left (~225°) at (81, 82) */}
                  <rect x="72"  y="77" width="14" height="8" rx="2.5"
                    fill="#1e3a8a" opacity="0.55" />

                  {/* ── Crown hub/center cap ── */}
                  <circle cx="140" cy="92" r="8"
                    fill="#060e1e" stroke="#00AEEF" strokeWidth="1.6" />
                  <circle cx="140" cy="92" r="3.5"
                    fill="#00AEEF" opacity="0.55" />

                  {/* ── Lightning rod / top cap ── */}
                  <rect x="139.5" y="62" width="1.5" height="30"
                    fill="#00AEEF" opacity="0.50" />
                  <circle cx="140" cy="61" r="2.8"
                    fill="#00AEEF" opacity="0.80" />
                  <circle cx="140" cy="61" r="5"
                    fill="none" stroke="rgba(0,174,239,0.25)" strokeWidth="0.8">
                    <animate attributeName="r" values="3;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* ── Crown system status LED ── */}
                  <circle cx="158" cy="88" r="3.5" fill="#22C55E">
                    <animate attributeName="opacity" values="1;0.30;1" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* ════════════════════════════════════════
                      HEIGHT SCALE MARKERS
                  ════════════════════════════════════════ */}
                  <line x1="106" y1="92"  x2="110" y2="92"
                    stroke="rgba(0,174,239,0.35)" strokeWidth="0.8" />
                  <text x="104" y="95" fontSize="5.5" fill="rgba(0,174,239,0.50)"
                    textAnchor="end" fontFamily="monospace">30M</text>

                  <line x1="106" y1="227" x2="110" y2="227"
                    stroke="rgba(0,174,239,0.22)" strokeWidth="0.8" />
                  <text x="104" y="230" fontSize="5.5" fill="rgba(0,174,239,0.35)"
                    textAnchor="end" fontFamily="monospace">15M</text>

                  <line x1="106" y1="362" x2="110" y2="362"
                    stroke="rgba(0,174,239,0.15)" strokeWidth="0.8" />
                  <text x="104" y="365" fontSize="5.5" fill="rgba(0,174,239,0.25)"
                    textAnchor="end" fontFamily="monospace">0M</text>

                  {/* ════════════════════════════════════════
                      ANNOTATION LABELS
                  ════════════════════════════════════════ */}
                  {/* Crown / luminaire ring label */}
                  <line x1="228" y1="92" x2="244" y2="80"
                    stroke="rgba(0,174,239,0.22)" strokeWidth="0.8" />
                  <text x="246" y="79" fontSize="5.5" fill="rgba(0,174,239,0.60)"
                    fontFamily="monospace">LUMINAIRE RING</text>

                  {/* AI Sensor label */}
                  <line x1="156" y1="188" x2="172" y2="188"
                    stroke="rgba(0,174,239,0.22)" strokeWidth="0.8" />
                  <text x="174" y="191" fontSize="5.5" fill="rgba(0,174,239,0.60)"
                    fontFamily="monospace">AI SENSOR</text>

                  {/* Energy module label */}
                  <line x1="184" y1="237" x2="196" y2="237"
                    stroke="rgba(0,174,239,0.18)" strokeWidth="0.7" />
                  <text x="198" y="240" fontSize="5" fill="rgba(0,174,239,0.50)"
                    fontFamily="monospace">ENERGY MON.</text>

                  {/* ════════════════════════════════════════
                      DATA STREAM — IoT communication
                  ════════════════════════════════════════ */}
                  <path d="M196 178 Q218 155 228 128"
                    stroke="#00AEEF" strokeWidth="0.9" fill="none"
                    strokeDasharray="3 3" opacity="0.32">
                    <animate attributeName="stroke-dashoffset" values="0;-36" dur="1.8s" repeatCount="indefinite" />
                  </path>
                  <path d="M199 183 Q224 160 236 132"
                    stroke="#06B6D4" strokeWidth="0.6" fill="none"
                    strokeDasharray="2 4" opacity="0.20">
                    <animate attributeName="stroke-dashoffset" values="0;-36" dur="2.4s" repeatCount="indefinite" />
                  </path>

                </svg>
              </div>

              {/* ── Real-Time Data Chips ── */}
              <div className="data-chips">
                <div className="data-chip"><div className="chip-dot ok"></div>Voltage: 228V</div>
                <div className="data-chip"><div className="chip-dot ok"></div>Current: 4.2A</div>
                <div className="data-chip"><div className="chip-dot warn"></div>Temp: 48°C</div>
                <div className="data-chip"><div className="chip-dot ok"></div>Power: 960W</div>
                <div className="data-chip"><div className="chip-dot ok"></div>PF: 0.97</div>
              </div>

              {/* ── Status Ticker ── */}
              <div className="status-ticker">
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: 'var(--success)' }}>48</span>
                  <div className="ticker-label">{T.lampsOnline}</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: 'var(--warning)' }}>2</span>
                  <div className="ticker-label">{T.alerts}</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val">94%</span>
                  <div className="ticker-label">{T.efficiency}</div>
                </div>
                <div className="ticker-item">
                  <span className="ticker-val" style={{ color: 'var(--success)', fontSize: '16px' }}>LIVE</span>
                  <div className="ticker-label">{T.realtime}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
