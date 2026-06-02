# MastGuard AI — T2B Intertrade

Landing page สำหรับผลิตภัณฑ์ **MastGuard AI** ระบบบริหารจัดการเสาไฟ High-Mast อัจฉริยะด้วย AI และ IoT โดยบริษัท T2B Intertrade Co., Ltd.

Built with **Next.js 16** · **React 19** · **TypeScript** · **TailwindCSS v4**

---

## Getting Started

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

---

## โครงสร้างโปรเจค

```
src/
├── app/
│   ├── globals.css       # CSS variables (:root) และ styles ทั้งหมด
│   ├── layout.tsx        # Root layout — โหลด Google Fonts (Sarabun, Space Grotesk, JetBrains Mono)
│   └── page.tsx          # หน้าหลัก — import และเรียง components ทั้งหมด
└── components/
    ├── Navbar.tsx         # แถบนำทาง fixed top
    ├── Hero.tsx           # Section Hero เต็มจอ
    ├── Problem.tsx        # Section ปัญหา
    ├── Solution.tsx       # Section Solution flow
    ├── Features.tsx       # Section AI Capabilities 4 ด้าน
    ├── Dashboard.tsx      # Section Dashboard mockup
    ├── Benefits.tsx       # Section ผลลัพธ์
    ├── UseCases.tsx       # Section Use Cases
    ├── About.tsx          # Section เกี่ยวกับ T2B Intertrade
    ├── Contact.tsx        # Section ติดต่อ
    ├── Footer.tsx         # Footer
    └── ScrollAnimations.tsx  # Client component จัดการ JS animations
```

---

## หน้าที่ของแต่ละ Component

| Component | Section | หน้าที่ |
|---|---|---|
| `Navbar` | fixed top | แถบนำทาง — hamburger menu (mobile), scroll-based active link highlight. **Client Component** |
| `Hero` | #home | Hero section เต็มจอ — badge, ชื่อผลิตภัณฑ์, คำอธิบาย, ปุ่ม CTA, การ์ด Live Monitoring preview พร้อม SVG animated poles |
| `Problem` | #problem | Grid 6 การ์ดปัญหาของระบบ High-Mast แบบเดิม |
| `Solution` | #solution | Flow diagram แสดง pipeline ของระบบ (High-Mast → IoT → Network → Cloud → AI → Dashboard) + คำอธิบายละเอียด |
| `Features` | #features | Grid 2×2 แสดง 4 AI capabilities หลัก (Anomaly Detection, Predictive Maintenance, Energy Optimization, Fault Classification) |
| `Dashboard` | #dashboard | Mockup Real-Time Monitoring Dashboard — metrics grid, energy bar chart, fault list |
| `Benefits` | #benefits | Grid 3×2 แสดงผลลัพธ์เชิงตัวเลขที่องค์กรได้รับ |
| `UseCases` | #usecases | Grid 4×2 แสดงประเภทพื้นที่ที่เหมาะกับ MastGuard AI |
| `About` | #about | ประวัติและข้อมูลบริษัท T2B Intertrade — สถิติ 4 ตัว + รายละเอียดบริษัท |
| `Contact` | #contact | ปุ่ม CTA 4 ปุ่ม + การ์ดข้อมูลติดต่อ (โทร, email, ที่อยู่) |
| `Footer` | footer | โลโก้ + Quick Links + ข้อมูลติดต่อย่อ + copyright |
| `ScrollAnimations` | (global) | **Client Component** — IntersectionObserver สำหรับ fade-up animation และ bar chart animation ใน Dashboard |

---

## Fonts (Google Fonts via next/font)

| CSS Variable | Font | ใช้สำหรับ |
|---|---|---|
| `--font-th` | Sarabun | ข้อความภาษาไทยทั่วไป |
| `--font-en` | Space Grotesk | หัวข้อ, ชื่อผลิตภัณฑ์, ตัวเลข |
| `--font-mono` | JetBrains Mono | ข้อมูล telemetry, code, labels |

---

## Deploy

```bash
npm run build
```

หรือ deploy ผ่าน [Vercel](https://vercel.com)
