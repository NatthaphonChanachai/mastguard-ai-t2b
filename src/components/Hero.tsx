'use client';

import { Play, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export default function Hero() {
  const { lang, theme } = useApp();
  const T = t[lang].hero;
  const lt = theme === 'light';

  /* Light-theme palette overrides — only applied when lt === true */
  const c = {
    /* Pole gradient mid/highlight — dark theme uses near-white steel; light needs darker mid-tones */
    pMid:  lt ? '#6b7280' : '#c8d0da',
    pHigh: lt ? '#94a3b8' : '#e8edf2',
    pHl:   lt ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.35)',
    pHl2:  lt ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.12)',
    pEdge: lt ? 'rgba(15,23,42,0.80)'    : 'rgba(31,41,55,0.55)',
    /* Ring & luminaire crown */
    r0: lt ? '#0052a3' : '#7dd3fc',
    r1: lt ? '#0077cc' : '#ffffff',
    r2: lt ? '#0066bb' : '#bfefff',
    rBack: lt ? '#475569' : '#94a3b8',
    rSpec: lt ? 'rgba(0,100,200,0.45)' : 'rgba(255,255,255,0.55)',
    /* Glow gradient fills */
    wg:    lt ? 'rgba(0,70,170,0.42)'  : 'rgba(160,225,255,0.50)',
    h0:    lt ? 'rgba(0,70,170,0.18)'  : 'rgba(140,220,255,0.32)',
    lgc:   lt ? '#0052a3' : '#60efff',
    lgO0:  lt ? '0.38' : '0.55',
    lgO1:  lt ? '0.12' : '0.20',
    rfc:   lt ? '#0052a3' : '#60efff',
    /* Luminaire fixtures (front) */
    lf:    lt ? '#0055aa' : '#dff4ff',
    lh1:   lt ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.90)',
    lh2:   lt ? 'rgba(200,225,255,0.35)' : 'rgba(180,235,255,0.75)',
    lHalo: lt ? 'rgba(0,80,170,0.28)'    : 'rgba(0,200,255,0.18)',
    lb:    lt ? '#475569' : '#94a3b8',
    /* Hub */
    hubBg:  lt ? '#e8f4ff' : '#0f172a',
    hubStk: lt ? '#0052a3' : '#60efff',
    hubDot: lt ? '#0052a3' : '#60efff',
    /* Lightning rod */
    rod:    lt ? '#0055aa' : '#00AEEF',
    rodCap: lt ? '#0052a3' : '#60efff',
    rodRng: lt ? 'rgba(0,82,163,0.40)' : 'rgba(0,174,239,0.40)',
    /* Inner ring arcs & fill */
    ir0:   lt ? 'rgba(0,82,163,0.55)' : 'rgba(0,174,239,0.55)',
    ir1:   lt ? 'rgba(0,82,163,0.28)' : 'rgba(0,174,239,0.28)',
    rFill: lt ? 'rgba(0,82,163,0.08)' : 'rgba(0,174,239,0.06)',
    /* Weld rings on pole */
    weld0: lt ? 'rgba(71,85,105,0.65)' : 'rgba(107,114,128,0.55)',
    weld1: lt ? 'rgba(71,85,105,0.50)' : 'rgba(107,114,128,0.40)',
    /* Atmosphere */
    beam:  lt ? 'rgba(0,82,163,0.06)' : 'rgba(0,174,239,0.04)',
    /* Antenna / signal */
    ant:   lt ? 'rgba(0,85,170,0.75)' : 'rgba(0,174,239,0.65)',
    sig:   lt ? '#0055aa' : '#00AEEF',
    sigC:  lt ? '#0066bb' : '#06B6D4',
    /* Data streams */
    ds0:   lt ? 'rgba(0,82,163,0.50)' : 'rgba(0,174,239,0.32)',
    ds1:   lt ? 'rgba(0,82,163,0.28)' : 'rgba(0,182,212,0.20)',
    /* Annotation lines & scale markers */
    aln:   lt ? 'rgba(0,52,140,0.45)' : 'rgba(0,174,239,0.22)',
    alnSm: lt ? 'rgba(0,52,140,0.35)' : 'rgba(0,174,239,0.18)',
    lbl:   lt ? 'rgba(0,52,140,0.90)' : 'rgba(0,174,239,0.60)',
    lblSm: lt ? 'rgba(0,52,140,0.80)' : 'rgba(0,174,239,0.50)',
    sc0:   lt ? 'rgba(0,52,140,0.55)' : 'rgba(0,174,239,0.35)',
    sc1:   lt ? 'rgba(0,52,140,0.40)' : 'rgba(0,174,239,0.22)',
    sc2:   lt ? 'rgba(0,52,140,0.28)' : 'rgba(0,174,239,0.15)',
    st0:   lt ? 'rgba(0,52,140,0.75)' : 'rgba(0,174,239,0.50)',
    st1:   lt ? 'rgba(0,52,140,0.55)' : 'rgba(0,174,239,0.35)',
    st2:   lt ? 'rgba(0,52,140,0.38)' : 'rgba(0,174,239,0.25)',
    /* Support arms & cables */
    arm0:  lt ? '#475569' : '#6b7280',
    arm1:  lt ? '#64748b' : '#9ca3af',
    cable: lt ? 'rgba(71,85,105,0.45)' : 'rgba(107,114,128,0.35)',
    /* Background arch ellipse (light only) */
    bgE:   lt ? 'rgba(30,90,200,0.09)' : 'none',
  };

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
                    {/* Metallic silver/steel pole */}
                    <linearGradient id="poleGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%"   stopColor="#374151" />
                      <stop offset="18%"  stopColor="#6b7280" />
                      <stop offset="42%"  stopColor={c.pMid} />
                      <stop offset="55%"  stopColor={c.pHigh} />
                      <stop offset="75%"  stopColor="#9ca3af" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                    <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                    {/* Crown ring — white-blue LED in dark; deep blue in light */}
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%"   stopColor={c.r0} stopOpacity="0.90" />
                      <stop offset="28%"  stopColor={c.r1} />
                      <stop offset="50%"  stopColor={c.r2} />
                      <stop offset="72%"  stopColor={c.r1} />
                      <stop offset="100%" stopColor={c.r0} stopOpacity="0.90" />
                    </linearGradient>
                    {/* LED glow under fixtures */}
                    <radialGradient id="warmGlow" cx="50%" cy="0%" r="100%">
                      <stop offset="0%"   stopColor={c.wg} />
                      <stop offset="100%" stopColor="rgba(0,174,239,0)" />
                    </radialGradient>
                    {/* Atmospheric halo */}
                    <radialGradient id="halo" cx="50%" cy="25%" r="65%">
                      <stop offset="0%"   stopColor={c.h0} />
                      <stop offset="100%" stopColor="rgba(0,174,239,0)" />
                    </radialGradient>
                    {/* Crown pulse glow */}
                    <radialGradient id="luminaireGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor={c.lgc} stopOpacity={c.lgO0} />
                      <stop offset="50%"  stopColor="#00AEEF" stopOpacity={c.lgO1} />
                      <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
                    </radialGradient>
                    {/* Downward beam ray */}
                    <linearGradient id="rayFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={c.rfc} stopOpacity="0.32" />
                      <stop offset="100%" stopColor={c.rfc} stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Light theme: background ellipse for contrast behind mast */}
                  <ellipse cx="140" cy="220" rx="90" ry="170" fill={c.bgE} />

                  {/* Crown atmospheric halo */}
                  <ellipse cx="140" cy="80" rx="148" ry="85" fill="url(#halo)" />

                  {/* Crown luminaire pulse glow (animated) */}
                  <ellipse cx="140" cy="86" rx="120" ry="36" fill="url(#luminaireGlow)">
                    <animate attributeName="opacity" values="0.85;0.30;0.85" dur="2.2s" repeatCount="indefinite" />
                  </ellipse>

                  {/* Downward light beam rays from each fixture */}
                  <path d="M47 96  L2  390" stroke="url(#rayFade)" strokeWidth="26" strokeLinecap="round" opacity="0.36" />
                  <path d="M76 110 L18 390" stroke="url(#rayFade)" strokeWidth="16" strokeLinecap="round" opacity="0.22" />
                  <path d="M140 116 L140 390" stroke="url(#rayFade)" strokeWidth="30" strokeLinecap="round" opacity="0.28" />
                  <path d="M204 110 L262 390" stroke="url(#rayFade)" strokeWidth="16" strokeLinecap="round" opacity="0.22" />
                  <path d="M233 96  L278 390" stroke="url(#rayFade)" strokeWidth="26" strokeLinecap="round" opacity="0.36" />

                  {/* Broad combined beam wash */}
                  <path d="M50 102 L230 102 L272 390 L8 390 Z" fill={c.beam} />

                  {/* ════ FOUNDATION / BASE ════ */}
                  <ellipse cx="140" cy="382" rx="52" ry="9" fill="rgba(0,174,239,0.06)" />
                  <path d="M102 372 L178 372 L184 384 L96 384 Z" fill="url(#baseGrad)" />
                  <rect x="108" y="362" width="64" height="12" rx="2"
                    fill="#374151" stroke="rgba(150,160,175,0.35)" strokeWidth="0.8" />
                  <rect x="120" y="371" width="40" height="4" rx="1.5" fill="rgba(150,160,175,0.22)" />
                  <circle cx="114" cy="368" r="2" fill="rgba(156,163,175,0.50)" />
                  <circle cx="166" cy="368" r="2" fill="rgba(156,163,175,0.50)" />
                  <circle cx="140" cy="368" r="2" fill="rgba(156,163,175,0.50)" />

                  {/* ════ MAIN MAST SHAFT — slender tapered pole ════ */}
                  <path d="M131 362 L149 362 L152 100 L128 100 Z" fill="url(#poleGrad)" />
                  {/* Specular sheen */}
                  <path d="M138.5 362 L140.8 100" stroke={c.pHl}  strokeWidth="3" />
                  <path d="M136.5 362 L138.5 100" stroke={c.pHl2} strokeWidth="1.5" />
                  {/* Edge shadows */}
                  <path d="M131 362 L128 100" stroke={c.pEdge} strokeWidth="1.2" />
                  <path d="M149 362 L152 100" stroke={c.pEdge} strokeWidth="1.2" />

                  {/* Lowering-ring collar (maintenance ring track on pole) */}
                  <rect x="128" y="103" width="24" height="5" rx="2"
                    fill="#4b5563" stroke="rgba(150,160,175,0.45)" strokeWidth="0.8" />

                  {/* Weld/splice rings */}
                  <rect x="129" y="268" width="22" height="2.5" rx="1" fill={c.weld0} />
                  <rect x="129" y="182" width="22" height="2"   rx="1" fill={c.weld1} />

                  {/* ════ ACCESS LADDER (lower section) ════ */}
                  <rect x="118" y="288" width="2" height="68" rx="1" fill="rgba(75,85,99,0.72)" />
                  <rect x="160" y="288" width="2" height="68" rx="1" fill="rgba(75,85,99,0.72)" />
                  {[295, 307, 319, 331, 343, 355].map((y) => (
                    <rect key={y} x="119" y={y} width="42" height="2.5" rx="1"
                      fill="rgba(75,85,99,0.88)" stroke="rgba(150,160,175,0.18)" strokeWidth="0.4" />
                  ))}

                  {/* ════ ACCESS DOOR PANEL ════ */}
                  <rect x="130" y="276" width="20" height="28" rx="2"
                    fill="#1f2937" stroke="rgba(150,160,175,0.38)" strokeWidth="0.9" />
                  <rect x="132" y="279" width="7" height="22" rx="1"
                    fill="rgba(107,114,128,0.18)" stroke="rgba(150,160,175,0.28)" strokeWidth="0.5" />
                  <rect x="140" y="279" width="7" height="22" rx="1"
                    fill="rgba(107,114,128,0.18)" stroke="rgba(150,160,175,0.28)" strokeWidth="0.5" />
                  <circle cx="139" cy="290" r="1.8" fill="rgba(156,163,175,0.65)" />

                  {/* ════ ENERGY MONITORING MODULE ════ */}
                  <rect x="152" y="228" width="30" height="20" rx="3.5"
                    fill="#07101f" stroke="#00AEEF" strokeWidth="1" opacity="0.92" />
                  <text x="167" y="241" textAnchor="middle" fill="#00AEEF"
                    fontSize="5.5" fontFamily="monospace" letterSpacing="0.4">ENERGY</text>
                  <circle cx="177" cy="232" r="2.5" fill="#F59E0B">
                    <animate attributeName="opacity" values="1;0.35;1" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="177" cy="232" r="5" fill="none" stroke="rgba(245,158,11,0.40)" strokeWidth="0.8">
                    <animate attributeName="opacity" values="0.9;0.1;0.9" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <rect x="155" y="244" width="4" height="2" rx="0.5" fill="rgba(0,174,239,0.50)" />
                  <rect x="160" y="242" width="4" height="4" rx="0.5" fill="rgba(0,174,239,0.65)" />
                  <rect x="165" y="240" width="4" height="6" rx="0.5" fill="rgba(0,174,239,0.80)" />
                  <rect x="170" y="243" width="4" height="3" rx="0.5" fill="rgba(0,174,239,0.55)" />

                  {/* ════ AI·IoT SENSOR MODULE ════ */}
                  <ellipse cx="140" cy="175" rx="9" ry="5.5"
                    fill="#060e1c" stroke="rgba(0,174,239,0.50)" strokeWidth="0.9" />
                  <ellipse cx="140" cy="175" rx="5" ry="3" fill="rgba(0,174,239,0.10)" />
                  <rect x="124" y="179" width="32" height="22" rx="3.5"
                    fill="#07101f" stroke="#00AEEF" strokeWidth="1.2" opacity="0.96" />
                  <text x="140" y="193" textAnchor="middle" fill="#00AEEF"
                    fontSize="5.5" fontFamily="monospace" letterSpacing="0.4">AI·IoT</text>
                  <circle cx="151" cy="183" r="3.5" fill="#22C55E">
                    <animate attributeName="opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="151" cy="183" r="5.5" fill="rgba(34,197,94,0.28)">
                    <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="151" cy="183" r="5" fill="none" stroke="rgba(34,197,94,0.30)" strokeWidth="0.8">
                    <animate attributeName="r" values="3;8" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="126" cy="183" r="2.5" fill="#00AEEF">
                    <animate attributeName="opacity" values="1;0.30;1" dur="2.1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="126" cy="183" r="4.5" fill="rgba(0,174,239,0.25)">
                    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.1s" repeatCount="indefinite" />
                  </circle>

                  {/* ════ IoT ANTENNA ════ */}
                  <rect x="139.5" y="112" width="1.5" height="26" fill={c.ant} />
                  <rect x="134"   y="115" width="12" height="1.8" rx="0.7" fill={c.ant} />
                  <rect x="136"   y="122" width="8"  height="1.5" rx="0.6" fill={c.ant} />
                  <path d="M153 117 Q163 112 168 107"
                    stroke={c.sig} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55">
                    <animate attributeName="opacity" values="0.55;0.10;0.55" dur="1.4s" repeatCount="indefinite" />
                  </path>
                  <path d="M153 123 Q165 117 173 110"
                    stroke={c.sig} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.38">
                    <animate attributeName="opacity" values="0.38;0.06;0.38" dur="1.4s" repeatCount="indefinite" begin="0.28s" />
                  </path>
                  <path d="M153 130 Q167 122 177 113"
                    stroke={c.sigC} strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.22">
                    <animate attributeName="opacity" values="0.22;0.04;0.22" dur="1.4s" repeatCount="indefinite" begin="0.56s" />
                  </path>

                  {/* ════════════════════════════════════════════════
                       CROWN — 6-arm high-mast configuration
                       Hub: (140,86)  Ring ellipse: rx=85 ry=13
                       Right arm   → (218, 86)   fixture: x=216,y=80,w=34,h=14
                       FrontR arm  → (204, 103)  fixture: x=194,y=98,w=24,h=12
                       FrontL arm  → (76,  103)  fixture: x=62, y=98,w=24,h=12
                       Left arm    → (62,  86)   fixture: x=30, y=80,w=34,h=14
                       BackR arm   → (190, 74)   fixture: x=182,y=69,w=16,h=9  (dimmed)
                       BackL arm   → (90,  74)   fixture: x=82, y=69,w=16,h=9  (dimmed)
                  ════════════════════════════════════════════════ */}

                  {/* ─── BACK arms & fixtures (drawn first, behind ring) ─── */}
                  <line x1="140" y1="86" x2="90"  y2="74"
                    stroke={c.arm0} strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
                  <line x1="140" y1="86" x2="190" y2="74"
                    stroke={c.arm0} strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
                  <rect x="82"  y="69" width="16" height="9" rx="2.5" fill={c.lb} opacity="0.42" />
                  <rect x="182" y="69" width="16" height="9" rx="2.5" fill={c.lb} opacity="0.42" />

                  {/* Back half of crown ring */}
                  <path d="M55 86 A85 13 0 0 0 225 86"
                    stroke={c.rBack} strokeWidth="2.5" fill="none" opacity="0.42" />

                  {/* ─── FRONT-DIAGONAL arms & fixtures ─── */}
                  <line x1="140" y1="86" x2="76"  y2="103"
                    stroke={c.arm0} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
                  <line x1="140" y1="86" x2="204" y2="103"
                    stroke={c.arm0} strokeWidth="3" strokeLinecap="round" opacity="0.85" />

                  {/* Front-left fixture */}
                  <rect x="62"  y="98" width="24" height="12" rx="3" fill={c.lf} opacity="0.96" />
                  <rect x="64"  y="100" width="20" height="3.5" rx="1" fill={c.lh1} />
                  <rect x="64"  y="105" width="20" height="2.5" rx="1" fill={c.lh2} />
                  <ellipse cx="74" cy="115" rx="20" ry="8" fill="url(#warmGlow)" opacity="0.88" />

                  {/* Front-right fixture */}
                  <rect x="194" y="98" width="24" height="12" rx="3" fill={c.lf} opacity="0.96" />
                  <rect x="196" y="100" width="20" height="3.5" rx="1" fill={c.lh1} />
                  <rect x="196" y="105" width="20" height="2.5" rx="1" fill={c.lh2} />
                  <ellipse cx="206" cy="115" rx="20" ry="8" fill="url(#warmGlow)" opacity="0.88" />

                  {/* ─── MAIN horizontal arms ─── */}
                  <line x1="140" y1="86" x2="64"  y2="86"
                    stroke={c.arm1} strokeWidth="4" strokeLinecap="round" opacity="0.95" />
                  <line x1="140" y1="86" x2="216" y2="86"
                    stroke={c.arm1} strokeWidth="4" strokeLinecap="round" opacity="0.95" />

                  {/* Front half of crown ring — bright LED glow */}
                  <path d="M55 86 A85 13 0 0 1 225 86"
                    stroke="url(#ringGrad)" strokeWidth="5.5" fill="none" opacity="1.0" />
                  <path d="M55 86 A85 13 0 0 1 225 86"
                    stroke={c.rSpec} strokeWidth="2" fill="none" opacity="0.80" />
                  <path d="M97 86 A43 8 0 0 1 183 86" stroke={c.ir0} strokeWidth="1.2" fill="none" />
                  <path d="M97 86 A43 8 0 0 0 183 86" stroke={c.ir1} strokeWidth="0.8" fill="none" />

                  {/* LEFT main fixture — largest */}
                  <rect x="30"  y="80" width="34" height="14" rx="3.5" fill={c.lf} opacity="0.98" />
                  <rect x="32"  y="82" width="30" height="4"  rx="1.2" fill={c.lh1} />
                  <rect x="32"  y="88" width="30" height="3"  rx="1"   fill={c.lh2} />
                  {/* LED lens array */}
                  <circle cx="40" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <circle cx="47" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <circle cx="54" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <circle cx="61" cy="86" r="1.2" fill="rgba(255,255,255,0.45)" />
                  <ellipse cx="47" cy="100" rx="30" ry="13" fill="url(#warmGlow)" opacity="1.0" />
                  <ellipse cx="47" cy="86"  rx="30" ry="12" fill={c.lHalo}>
                    <animate attributeName="opacity" values="0.28;0.06;0.28" dur="2.5s" repeatCount="indefinite" />
                  </ellipse>

                  {/* RIGHT main fixture — largest */}
                  <rect x="216" y="80" width="34" height="14" rx="3.5" fill={c.lf} opacity="0.98" />
                  <rect x="218" y="82" width="30" height="4"  rx="1.2" fill={c.lh1} />
                  <rect x="218" y="88" width="30" height="3"  rx="1"   fill={c.lh2} />
                  {/* LED lens array */}
                  <circle cx="219" cy="86" r="1.2" fill="rgba(255,255,255,0.45)" />
                  <circle cx="226" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <circle cx="233" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <circle cx="240" cy="86" r="1.8" fill="rgba(255,255,255,0.65)" />
                  <ellipse cx="233" cy="100" rx="30" ry="13" fill="url(#warmGlow)" opacity="1.0" />
                  <ellipse cx="233" cy="86"  rx="30" ry="12" fill={c.lHalo}>
                    <animate attributeName="opacity" values="0.28;0.06;0.28" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
                  </ellipse>

                  {/* ─── Crown hub cap ─── */}
                  <circle cx="140" cy="86" r="10" fill={c.hubBg} stroke={c.hubStk} strokeWidth="2.5" />
                  <circle cx="140" cy="86" r="4.5" fill={c.hubDot}>
                    <animate attributeName="opacity" values="0.95;0.50;0.95" dur="2.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Crown status LED */}
                  <circle cx="157" cy="82" r="3.5" fill="#22C55E">
                    <animate attributeName="opacity" values="1;0.30;1" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="157" cy="82" r="6.5" fill="rgba(34,197,94,0.22)">
                    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* ─── Lightning rod / top cap ─── */}
                  <rect x="139.5" y="58" width="1.5" height="30" fill={c.rod} opacity="0.65" />
                  <circle cx="140" cy="57" r="2.8" fill={c.rodCap} opacity="0.92" />
                  <circle cx="140" cy="57" r="5" fill="none" stroke={c.rodRng} strokeWidth="1.0">
                    <animate attributeName="r" values="3;9" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* ════ HEIGHT SCALE MARKERS ════ */}
                  <line x1="108" y1="86"  x2="112" y2="86"  stroke={c.sc0} strokeWidth="0.8" />
                  <text x="106" y="89"  fontSize="5.5" fill={c.st0} textAnchor="end" fontFamily="monospace">30M</text>
                  <line x1="108" y1="224" x2="112" y2="224" stroke={c.sc1} strokeWidth="0.8" />
                  <text x="106" y="227" fontSize="5.5" fill={c.st1} textAnchor="end" fontFamily="monospace">15M</text>
                  <line x1="108" y1="362" x2="112" y2="362" stroke={c.sc2} strokeWidth="0.8" />
                  <text x="106" y="365" fontSize="5.5" fill={c.st2} textAnchor="end" fontFamily="monospace">0M</text>

                  {/* ════ ANNOTATION LABELS ════ */}
                  <line x1="156" y1="190" x2="172" y2="190" stroke={c.aln}   strokeWidth="0.8" />
                  <text x="174" y="193" fontSize="5.5" fill={c.lbl}   fontFamily="monospace">AI SENSOR</text>
                  <line x1="182" y1="237" x2="194" y2="237" stroke={c.alnSm} strokeWidth="0.7" />
                  <text x="196" y="240" fontSize="5"   fill={c.lblSm} fontFamily="monospace">ENERGY MON.</text>

                  {/* ════ DATA STREAM ════ */}
                  <path d="M196 179 Q218 156 228 129"
                    stroke={c.ds0} strokeWidth="0.9" fill="none" strokeDasharray="3 3">
                    <animate attributeName="stroke-dashoffset" values="0;-36" dur="1.8s" repeatCount="indefinite" />
                  </path>
                  <path d="M199 184 Q224 161 236 133"
                    stroke={c.ds1} strokeWidth="0.6" fill="none" strokeDasharray="2 4">
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
