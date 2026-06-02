import type { Metadata } from "next";
import { Kanit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MastGuard AI — AIoT Smart High-Mast Lighting | T2B Intertrade",
  description:
    "ระบบบริหารจัดการเสาไฟ High-Mast อัจฉริยะด้วย AI และ IoT สำหรับ Smart City, โรงงาน, ท่าเรือ และโครงสร้างพื้นฐานขนาดใหญ่ โดย T2B Intertrade",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
