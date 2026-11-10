import React from 'react';

interface ApplicationVisualProps {
  code: string;
  title: string;
  className?: string;
}

export const ApplicationVisual: React.FC<ApplicationVisualProps> = ({ code, title, className = '' }) => {
  const renderGraphic = () => {
    switch (code) {
      case 'A': // ควบคุมลำดับเครื่องจักร (Sequential machine control)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Factory Conveyor Line */}
            <rect x="15" y="75" width="190" height="18" rx="3" fill="#334155" stroke="#475569" strokeWidth="1.5" />
            {[0, 1, 2, 3, 4, 5, 6].map(i => (
              <circle key={i} cx={30 + i * 26} cy={84} r="5" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            ))}
            {/* Workpieces moving in sequence */}
            <rect x="35" y="52" width="22" height="22" rx="3" fill="#64748B" stroke="#94A3B8" />
            <rect x="95" y="52" width="22" height="22" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="155" y="52" width="22" height="22" rx="3" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
            {/* Automated Process Sequence Callouts */}
            <rect x="25" y="16" width="42" height="22" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="46" y="30" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">1. ป้อนชิ้นงาน</text>
            <path d="M 46 38 L 46 50" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
            <rect x="85" y="16" width="42" height="22" rx="4" fill="#800020" stroke="#FDE047" strokeWidth="1.5" />
            <text x="106" y="30" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">2. กลึง/เจาะ</text>
            <path d="M 106 38 L 106 50" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="2 2" />
            <rect x="145" y="16" width="42" height="22" rx="4" fill="#1E293B" stroke="#22C55E" strokeWidth="1.5" />
            <text x="166" y="30" fill="#22C55E" fontSize="8" fontWeight="bold" textAnchor="middle">3. ลำเลียงออก</text>
            <path d="M 166 38 L 166 50" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );

      case 'B': // ตรวจจับโลหะ (Metal detection)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Industrial Conveyor Belt */}
            <rect x="15" y="75" width="190" height="20" rx="3" fill="#334155" stroke="#475569" strokeWidth="1.5" />
            {/* Metal Workpiece */}
            <rect x="85" y="55" width="36" height="20" rx="3" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            <text x="103" y="68" fill="#78350F" fontSize="8" fontWeight="bold" textAnchor="middle">ชิ้นงานโลหะ</text>
            {/* Proximity Sensor Head */}
            <rect x="88" y="14" width="30" height="26" rx="4" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
            <rect x="94" y="36" width="18" height="6" fill="#0284C7" />
            {/* High-frequency Electromagnetic Flux Field */}
            <path d="M 80 44 C 70 52, 70 65, 80 72" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
            <path d="M 126 44 C 136 52, 136 65, 126 72" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
            <circle cx="103" cy="46" r="6" fill="#38BDF8" className="animate-ping" opacity="0.75" />
            {/* Detection Confirmation */}
            <rect x="145" y="20" width="60" height="22" rx="4" fill="#15803D" />
            <text x="175" y="34" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ตรวจพบโลหะ ✓</text>
          </svg>
        );

      case 'C': // หน้าจอควบคุมและแสดงสถานะ (HMI operator touch screen)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Touch Panel Frame */}
            <rect x="25" y="12" width="170" height="100" rx="8" fill="#1E293B" stroke="#64748B" strokeWidth="2.5" />
            <rect x="35" y="22" width="150" height="80" rx="4" fill="#0F172A" />
            {/* Top SCADA status bar */}
            <rect x="35" y="22" width="150" height="18" fill="#800020" />
            <text x="45" y="34" fill="#FFFFFF" fontSize="8" fontWeight="bold">LINE-1: กำลังทำงาน (AUTO)</text>
            <circle cx="175" cy="31" r="3.5" fill="#22C55E" className="animate-pulse" />
            {/* Level Tank */}
            <rect x="45" y="48" width="28" height="46" rx="3" fill="#1E293B" stroke="#475569" />
            <rect x="47" y="62" width="24" height="30" rx="2" fill="#0284C7" />
            <text x="59" y="80" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">75%</text>
            {/* Speed Gauge */}
            <circle cx="105" cy="70" r="22" stroke="#334155" strokeWidth="4" />
            <circle cx="105" cy="70" r="22" stroke="#F59E0B" strokeWidth="4" strokeDasharray="90 140" strokeLinecap="round" />
            <text x="105" y="73" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">1,450</text>
            <text x="105" y="82" fill="#94A3B8" fontSize="6" textAnchor="middle">RPM</text>
            {/* Touch interactive button */}
            <rect x="140" y="55" width="38" height="28" rx="4" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
            <text x="159" y="72" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">START</text>
          </svg>
        );

      case 'D': // ปรับความเร็วมอเตอร์ (Adjust Motor Speed)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3-Phase AC Induction Motor */}
            <rect x="30" y="35" width="70" height="60" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {[0, 1, 2, 3].map(i => (
              <line key={i} x1={38 + i * 15} y1="35" x2={38 + i * 15} y2="95" stroke="#334155" strokeWidth="2" />
            ))}
            <circle cx="115" cy="65" r="16" fill="#64748B" stroke="#334155" strokeWidth="2" />
            <circle cx="115" cy="65" r="7" fill="#E2E8F0" />
            {/* Variable Frequency PWM / Sine wave */}
            <path d="M 140 40 Q 150 25 160 40 T 180 40 T 200 40" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
            <path d="M 140 70 Q 155 50 170 70 T 200 70" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
            <rect x="135" y="88" width="70" height="22" rx="4" fill="#800020" />
            <text x="170" y="102" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ปรับความเร็วรอบ (RPM)</text>
          </svg>
        );

      case 'E': // ควบคุมระบบอิเล็กทรอนิกส์ขนาดเล็ก (Small Electronic Systems)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circuit Board */}
            <rect x="25" y="20" width="170" height="85" rx="6" fill="#064E3B" stroke="#059669" strokeWidth="2" />
            {/* Embedded Microcontroller Chip */}
            <rect x="75" y="38" width="60" height="48" rx="4" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
            <text x="105" y="62" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">EMBEDDED</text>
            <text x="105" y="74" fill="#34D399" fontSize="7" textAnchor="middle" fontFamily="monospace">CONTROLLER</text>
            {/* Gold Circuit Traces */}
            <line x1="35" y1="45" x2="75" y2="45" stroke="#FBBF24" strokeWidth="2" />
            <line x1="35" y1="75" x2="75" y2="75" stroke="#FBBF24" strokeWidth="2" />
            <line x1="135" y1="50" x2="185" y2="50" stroke="#FBBF24" strokeWidth="2" />
            <line x1="135" y1="70" x2="185" y2="70" stroke="#FBBF24" strokeWidth="2" />
            <circle cx="45" cy="45" r="3" fill="#FBBF24" />
            <circle cx="175" cy="70" r="3" fill="#FBBF24" />
          </svg>
        );

      case 'F': // ตรวจจับวัตถุด้วยแสง (Optical Beam Detection)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Optical Emitter (Left) */}
            <rect x="20" y="45" width="26" height="42" rx="4" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
            <circle cx="33" cy="66" r="6" fill="#DC2626" />
            {/* Optical Receiver (Right) */}
            <rect x="175" y="45" width="26" height="42" rx="4" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
            <circle cx="188" cy="66" r="6" fill="#0284C7" />
            {/* Box moving through beam */}
            <rect x="95" y="35" width="30" height="55" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <text x="110" y="65" fill="#78350F" fontSize="8" fontWeight="bold" textAnchor="middle">กล่องพัสดุ</text>
            {/* Laser Beam passing and blocked */}
            <line x1="46" y1="66" x2="95" y2="66" stroke="#EF4444" strokeWidth="3" />
            <line x1="125" y1="66" x2="175" y2="66" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <rect x="75" y="15" width="70" height="18" rx="4" fill="#991B1B" />
            <text x="110" y="27" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ลำแสงถูกตัด (ตรวจพบ)</text>
          </svg>
        );

      case 'G': // ตรวจวัดอุณหภูมิ (Temperature Monitoring)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Industrial Thermal Chamber */}
            <rect x="25" y="20" width="105" height="85" rx="8" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
            {/* Heating Element coils & flames */}
            <path d="M 40 85 Q 55 60 45 45 Q 65 70 75 45 Q 85 70 95 45 Q 105 75 100 85 Z" fill="#EF4444" opacity="0.85" />
            {/* Temp Gauge Box */}
            <rect x="140" y="30" width="65" height="65" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <text x="172" y="55" fill="#EF4444" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">350°C</text>
            <text x="172" y="72" fill="#38BDF8" fontSize="8" textAnchor="middle">เฝ้าระวังความร้อน</text>
            <circle cx="172" cy="84" r="3" fill="#22C55E" className="animate-pulse" />
          </svg>
        );

      case 'H': // ตรวจวัดแรงดัน (Pressure Measurement)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hydraulic Pipe */}
            <rect x="15" y="70" width="190" height="38" fill="#334155" stroke="#475569" strokeWidth="2" />
            {/* Flow indicator inside pipe */}
            <path d="M 30 89 L 190 89" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 4" />
            {/* Pressure Gauge Dial */}
            <circle cx="110" cy="42" r="30" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3" />
            <path d="M 100 48 L 126 30" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
            <circle cx="110" cy="42" r="5" fill="#0F172A" />
            <text x="110" y="60" fill="#1E293B" fontSize="9" fontWeight="bold" textAnchor="middle">8.5 BAR</text>
          </svg>
        );

      case 'I': // ควบคุมตำแหน่งและความเร็ว (Position & Speed Control)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ball Screw Linear Axis */}
            <rect x="20" y="55" width="180" height="15" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            {/* Moving Slide Table */}
            <rect x="90" y="38" width="45" height="50" rx="4" fill="#800020" stroke="#E2E8F0" strokeWidth="2" />
            {/* Position Arrow */}
            <path d="M 60 50 L 80 50" stroke="#22C55E" strokeWidth="3" markerEnd="url(#arrow)" />
            <path d="M 160 50 L 140 50" stroke="#22C55E" strokeWidth="3" markerEnd="url(#arrow)" />
            <rect x="65" y="15" width="90" height="20" rx="4" fill="#1E293B" />
            <text x="110" y="28" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">ตำแหน่งแม่นยำ ±0.01 mm</text>
          </svg>
        );

      case 'J': // สร้างแรงเคลื่อนที่ด้วยลมอัด (Pneumatic Linear Actuation)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pneumatic Cylinder Body */}
            <rect x="25" y="45" width="90" height="42" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
            {/* Chrome Piston Rod Extending */}
            <rect x="115" y="56" width="70" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="188" cy="66" r="8" fill="#1E293B" stroke="#64748B" />
            {/* Clamping force arrows */}
            <path d="M 15 66 L 25 66" stroke="#0284C7" strokeWidth="3" />
            <path d="M 188 66 L 208 66" stroke="#22C55E" strokeWidth="3" />
            <text x="110" y="105" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">ดัน / ผลัก / ยึดชิ้นงานด้วยลม</text>
          </svg>
        );

      case 'K': // หยิบจับและประกอบชิ้นงาน (Pick and Place Assembly)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Industrial 6-axis Robot Arm picking up part */}
            <path d="M 35 105 L 75 45 L 145 60 L 155 92" stroke="#800020" strokeWidth="7" strokeLinecap="round" />
            <circle cx="75" cy="45" r="8" fill="#1E293B" />
            <circle cx="145" cy="60" r="8" fill="#1E293B" />
            {/* Gripper holding component */}
            <rect x="145" y="92" width="22" height="20" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <rect x="110" y="15" width="85" height="20" rx="4" fill="#1E293B" />
            <text x="152" y="28" fill="#22C55E" fontSize="8" fontWeight="bold" textAnchor="middle">หยิบจับ &amp; ประกอบแม่นยำ</text>
          </svg>
        );

      case 'L': // ทำงานร่วมกับมนุษย์ (Cobot Human Collaboration)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cobot Arm with Green Safety Ring */}
            <path d="M 40 95 L 80 50 L 120 70" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
            <circle cx="120" cy="70" r="7" fill="#1E293B" />
            {/* Human Hand / Operator silhouette */}
            <circle cx="165" cy="65" r="12" fill="#E2E8F0" />
            <rect x="160" y="78" width="28" height="40" rx="6" fill="#475569" />
            {/* Shared Safe Working Envelope */}
            <ellipse cx="140" cy="75" rx="60" ry="40" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <rect x="65" y="15" width="90" height="20" rx="4" fill="#14532D" />
            <text x="110" y="28" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ทำงานใกล้มนุษย์อย่างปลอดภัย</text>
          </svg>
        );

      case 'M': // วางแผนเส้นทางและหลบหลีก (Path Planning & Obstacle Avoidance)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Obstacle box */}
            <rect x="100" y="50" width="30" height="30" rx="4" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
            <text x="115" y="68" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">สิ่งกีดขวาง</text>
            {/* Dynamic re-routing curved path */}
            <path d="M 25 85 Q 65 85 85 35 Q 120 25 150 65 Q 170 85 200 85" stroke="#38BDF8" strokeWidth="3.5" strokeDasharray="5 4" fill="none" />
            {/* AMR Mobile robot moving */}
            <rect x="15" y="75" width="26" height="20" rx="4" fill="#800020" stroke="#E2E8F0" />
            <rect x="60" y="15" width="100" height="20" rx="4" fill="#1E293B" />
            <text x="110" y="28" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">หลบหลีกอัตโนมัติ (AMR)</text>
          </svg>
        );

      case 'N': // ขนส่งตามเส้นทางกำหนด (AGV Predefined Route)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Magnetic floor tape line */}
            <path d="M 15 95 L 95 95 L 150 45 L 205 45" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            {/* AGV vehicle on the line */}
            <rect x="70" y="80" width="35" height="24" rx="4" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="78" cy="104" r="3" fill="#000000" />
            <circle cx="97" cy="104" r="3" fill="#000000" />
            <rect x="115" y="15" width="90" height="20" rx="4" fill="#1E293B" />
            <text x="160" y="28" fill="#F59E0B" fontSize="8" fontWeight="bold" textAnchor="middle">เส้นทางแถบแม่เหล็ก (AGV)</text>
          </svg>
        );

      case 'O': // จับยึดและปล่อยชิ้นงาน (Robotic Gripping & Release)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Gripper Jaws Clamping workpiece */}
            <rect x="80" y="15" width="60" height="22" rx="4" fill="#334155" stroke="#475569" />
            <path d="M 85 37 L 85 85 L 100 85 L 100 55" fill="#64748B" stroke="#475569" strokeWidth="2" />
            <path d="M 135 37 L 135 85 L 120 85 L 120 55" fill="#64748B" stroke="#475569" strokeWidth="2" />
            {/* Clamped Part */}
            <rect x="100" y="55" width="20" height="40" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            {/* Clamping Force vectors */}
            <path d="M 72 70 L 82 70" stroke="#22C55E" strokeWidth="3" />
            <path d="M 148 70 L 138 70" stroke="#22C55E" strokeWidth="3" />
            <text x="110" y="112" fill="#22C55E" fontSize="9" fontWeight="bold" textAnchor="middle">จับยึด &amp; ปล่อยชิ้นงาน</text>
          </svg>
        );

      case 'P': // วัดระยะและสร้างแผนที่ (Distance Measurement & SLAM Mapping)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="62" r="10" fill="#38BDF8" />
            {/* SLAM 360-degree point cloud radar rings */}
            <circle cx="110" cy="62" r="32" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="110" cy="62" r="54" stroke="#38BDF8" strokeWidth="1" strokeDasharray="5 5" opacity="0.6" />
            {/* Detected walls/obstacles */}
            <circle cx="70" cy="40" r="4" fill="#EF4444" />
            <circle cx="78" cy="48" r="4" fill="#EF4444" />
            <circle cx="150" cy="80" r="4" fill="#EF4444" />
            <circle cx="158" cy="86" r="4" fill="#EF4444" />
            <rect x="65" y="102" width="90" height="18" rx="4" fill="#1E293B" />
            <text x="110" y="114" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">สร้างแผนที่ 2D/3D LiDAR</text>
          </svg>
        );

      case 'Q': // วัดตำแหน่งข้อต่อ (Joint Position Feedback)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Joint Arc with angle feedback */}
            <circle cx="95" cy="62" r="38" stroke="#334155" strokeWidth="5" />
            <path d="M 95 24 A 38 38 0 0 1 133 62" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            <circle cx="95" cy="62" r="10" fill="#800020" />
            {/* Degree display */}
            <rect x="145" y="42" width="65" height="42" rx="5" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <text x="177" y="62" fill="#F59E0B" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">θ=92.5°</text>
            <text x="177" y="76" fill="#94A3B8" fontSize="7" textAnchor="middle">FEEDBACK</text>
          </svg>
        );

      case 'R': // ควบคุมการเคลื่อนที่ของหุ่นยนต์ (Robot Motion Coordination)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3D Coordinate Plane */}
            <line x1="45" y1="95" x2="175" y2="95" stroke="#475569" strokeWidth="2" />
            <line x1="45" y1="95" x2="45" y2="25" stroke="#475569" strokeWidth="2" />
            {/* Synchronized Spline Motion Path */}
            <path d="M 45 85 Q 85 25 125 65 T 185 35" stroke="#800020" strokeWidth="4" fill="none" />
            <circle cx="125" cy="65" r="6" fill="#22C55E" />
            <rect x="110" y="15" width="90" height="20" rx="4" fill="#1E293B" />
            <text x="155" y="28" fill="#22C55E" fontSize="8" fontWeight="bold" textAnchor="middle">ควบคุมทุกแกนสัมพันธ์กัน</text>
          </svg>
        );

      case 'S': // ระบุตำแหน่งชิ้นงาน 3 มิติ (3D Object Pose Estimation)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3D Wireframe Bounding Box over part */}
            <polygon points="70,50 140,50 160,30 90,30" stroke="#38BDF8" strokeWidth="1.5" fill="#38BDF8" opacity="0.15" />
            <rect x="70" y="50" width="70" height="45" stroke="#38BDF8" strokeWidth="2" fill="#38BDF8" opacity="0.1" />
            {/* 6D Pose coordinate axis */}
            <line x1="105" y1="72" x2="140" y2="72" stroke="#EF4444" strokeWidth="3" />
            <line x1="105" y1="72" x2="105" y2="40" stroke="#22C55E" strokeWidth="3" />
            <line x1="105" y1="72" x2="85" y2="92" stroke="#0284C7" strokeWidth="3" />
            <rect x="55" y="100" width="110" height="18" rx="4" fill="#1E293B" />
            <text x="110" y="112" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">ตำแหน่ง 3 มิติ (X, Y, Z)</text>
          </svg>
        );

      case 'T': // ขับเคลื่อนล้อหุ่นยนต์ (Robot Wheel Propulsion)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Motorized Wheel with traction */}
            <circle cx="95" cy="60" r="34" fill="#1E293B" stroke="#F59E0B" strokeWidth="5" />
            <circle cx="95" cy="60" r="16" fill="#475569" />
            <line x1="20" y1="94" x2="200" y2="94" stroke="#475569" strokeWidth="3" />
            {/* Propulsion Drive vector */}
            <path d="M 95 18 Q 135 18 135 60" stroke="#22C55E" strokeWidth="3.5" markerEnd="url(#arrow)" fill="none" />
            <rect x="145" y="48" width="65" height="35" rx="5" fill="#1E293B" />
            <text x="177" y="64" fill="#22C55E" fontSize="9" fontWeight="bold" textAnchor="middle">ขับเคลื่อน</text>
            <text x="177" y="76" fill="#94A3B8" fontSize="7" textAnchor="middle">ความเร็ว &amp; ทิศทาง</text>
          </svg>
        );

      case 'U': // ตรวจสอบคุณภาพด้วยภาพ (Visual Defect Quality Inspection)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Inspected Product with defect mark */}
            <rect x="35" y="25" width="150" height="75" rx="5" fill="#334155" stroke="#64748B" strokeWidth="2" />
            {/* Surface Scratch */}
            <path d="M 85 52 Q 95 68 105 58" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="75" y="42" width="42" height="36" rx="3" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
            <rect x="70" y="85" width="52" height="18" rx="3" fill="#DC2626" />
            <text x="96" y="97" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">รอยแตก (DEFECT)</text>
            {/* Good zone */}
            <rect x="135" y="42" width="40" height="36" rx="3" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 3" fill="none" />
            <text x="155" y="64" fill="#22C55E" fontSize="9" fontWeight="bold" textAnchor="middle">PASS ✓</text>
          </svg>
        );

      case 'V': // ประมวลผล AI ใกล้เครื่องจักร (Edge AI Near-Machine Inference)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CNC Machine */}
            <rect x="25" y="40" width="55" height="55" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <text x="52" y="70" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">เครื่องจักร CNC</text>
            {/* Edge AI Industrial Box */}
            <rect x="105" y="32" width="65" height="70" rx="6" fill="#800020" stroke="#F59E0B" strokeWidth="2.5" />
            <text x="137" y="60" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">EDGE AI</text>
            <text x="137" y="73" fill="#38BDF8" fontSize="7" textAnchor="middle">วิเคราะห์ทันที</text>
            <text x="137" y="83" fill="#22C55E" fontSize="6" textAnchor="middle">ไม่ผ่าน Cloud</text>
            <line x1="80" y1="67" x2="105" y2="67" stroke="#22C55E" strokeWidth="3.5" />
          </svg>
        );

      case 'W': // เร่งการคำนวณ AI (Hardware Acceleration for Deep Learning)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neural Network Nodes */}
            <g transform="translate(35, 26)">
              {[0, 1, 2].map(r => (
                <circle key={r} cx="25" cy={r * 28 + 14} r="7" fill="#38BDF8" />
              ))}
              {[0, 1, 2, 3].map(r => (
                <circle key={r} cx="80" cy={r * 22 + 5} r="7" fill="#800020" stroke="#FDE047" strokeWidth="1.5" />
              ))}
              {[0, 1].map(r => (
                <circle key={r} cx="135" cy={r * 34 + 20} r="7" fill="#22C55E" />
              ))}
              {/* Interconnections */}
              <line x1="32" y1="14" x2="73" y2="27" stroke="#94A3B8" opacity="0.5" strokeWidth="1.5" />
              <line x1="32" y1="42" x2="73" y2="49" stroke="#94A3B8" opacity="0.5" strokeWidth="1.5" />
              <line x1="87" y1="27" x2="128" y2="20" stroke="#94A3B8" opacity="0.5" strokeWidth="1.5" />
            </g>
            <rect x="45" y="100" width="130" height="18" rx="4" fill="#1E293B" />
            <text x="110" y="112" fill="#F59E0B" fontSize="8" fontWeight="bold" textAnchor="middle">เร่งความเร็ว Deep Learning</text>
          </svg>
        );

      case 'X': // ตรวจจับการสั่นสะเทือน (Vibration Anomaly Detection)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* FFT Spectrum Waveform */}
            <line x1="25" y1="80" x2="195" y2="80" stroke="#475569" strokeWidth="2" />
            <path d="M 25 80 Q 45 60 60 80 T 95 80 Q 110 15 125 80 T 155 80 T 195 80" stroke="#EF4444" strokeWidth="3" fill="none" />
            <circle cx="110" cy="15" r="5" fill="#EF4444" className="animate-ping" />
            <rect x="75" y="15" width="70" height="20" rx="4" fill="#DC2626" />
            <text x="110" y="28" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ลูกปืนสั่นผิดปกติ !</text>
            <text x="110" y="105" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">ตรวจจับก่อนเครื่องจักรเสียหาย</text>
          </svg>
        );

      case 'Y': // วัดกระแสไฟฟ้า (Power & Current Measurement)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="22" width="150" height="80" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <text x="110" y="55" fill="#FBBF24" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">48.5 A</text>
            <text x="110" y="74" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">วัดโหลดกระแสไฟฟ้ามอเตอร์</text>
            <circle cx="55" cy="40" r="3.5" fill="#22C55E" />
            <text x="110" y="90" fill="#94A3B8" fontSize="7" textAnchor="middle">เฝ้าระวังการใช้พลังงาน</text>
          </svg>
        );

      case 'Z': // อ่านข้อมูล RFID (Asset Tracking with RFID)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Box with RFID tag */}
            <rect x="35" y="45" width="65" height="48" rx="4" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <rect x="52" y="58" width="30" height="18" rx="3" fill="#F59E0B" />
            <text x="67" y="70" fill="#78350F" fontSize="8" fontWeight="bold" textAnchor="middle">RFID TAG</text>
            {/* RFID Antenna Scanner */}
            <path d="M 115 50 C 130 60, 130 75, 115 85" stroke="#800020" strokeWidth="3.5" fill="none" />
            <path d="M 130 40 C 150 58, 150 85, 130 95" stroke="#800020" strokeWidth="3" fill="none" />
            <rect x="155" y="38" width="40" height="55" rx="4" fill="#1E293B" stroke="#800020" strokeWidth="2" />
            <text x="110" y="112" fill="#800020" fontSize="9" fontWeight="bold" textAnchor="middle">ระบุรหัส &amp; ติดตามชิ้นงาน</text>
          </svg>
        );

      case 'AA': // เชื่อมต่อเครือข่าย OT และ IT (OT/IT Bridge Gateway)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* OT Floor */}
            <rect x="15" y="35" width="55" height="55" rx="5" fill="#334155" stroke="#38BDF8" strokeWidth="2" />
            <text x="42" y="60" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">OT (โรงงาน)</text>
            <text x="42" y="72" fill="#94A3B8" fontSize="7" textAnchor="middle">PLC / Sensor</text>
            {/* IIoT Gateway */}
            <rect x="85" y="30" width="50" height="65" rx="6" fill="#800020" stroke="#F59E0B" strokeWidth="2.5" />
            <text x="110" y="60" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">IIoT</text>
            <text x="110" y="72" fill="#FDE047" fontSize="7" fontWeight="bold" textAnchor="middle">GATEWAY</text>
            {/* IT Cloud */}
            <rect x="150" y="35" width="55" height="55" rx="5" fill="#1E293B" stroke="#22C55E" strokeWidth="2" />
            <text x="177" y="60" fill="#22C55E" fontSize="8" fontWeight="bold" textAnchor="middle">IT (ระบบคลาวด์)</text>
            <text x="177" y="72" fill="#94A3B8" fontSize="7" textAnchor="middle">ERP / MES</text>
          </svg>
        );

      case 'AB': // จัดเก็บข้อมูลการผลิต (Factory Production Data Storage)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Database Stacks */}
            <ellipse cx="110" cy="35" rx="48" ry="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <rect x="62" y="35" width="96" height="22" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <ellipse cx="110" cy="57" rx="48" ry="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <rect x="62" y="57" width="96" height="22" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <ellipse cx="110" cy="79" rx="48" ry="14" fill="#800020" stroke="#E2E8F0" strokeWidth="2" />
            <text x="110" y="112" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">จัดเก็บข้อมูลการผลิตระดับโรงงาน</text>
          </svg>
        );

      case 'AC': // สแกนรูปทรงสามมิติ (3D Geometry Inspection & Point Cloud)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3D Part Wireframe */}
            <polygon points="40,85 85,45 155,45 180,85" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
            {/* 3D Laser Crosshair Beam */}
            <line x1="110" y1="20" x2="110" y2="100" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 3" />
            {/* Dense point cloud nodes */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <circle key={i} cx={55 + i * 13} cy={65 + ((i % 3) - 1) * 7} r="2.5" fill="#22C55E" />
            ))}
            <text x="110" y="114" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">สแกนกลุ่มจุดข้อมูล (Point Cloud)</text>
          </svg>
        );

      case 'AD': // แสดงข้อมูล AR (Augmented Reality Digital Overlay)
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Physical Motor */}
            <rect x="35" y="32" width="75" height="60" rx="5" fill="#334155" stroke="#475569" strokeWidth="2" />
            <circle cx="110" cy="62" r="14" fill="#64748B" />
            {/* AR Hologram Digital Callout Window */}
            <rect x="105" y="24" width="90" height="52" rx="5" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" opacity="0.95" />
            <text x="115" y="40" fill="#38BDF8" fontSize="8" fontWeight="bold">AR OVERLAY</text>
            <text x="115" y="54" fill="#22C55E" fontSize="8">สถานะลูกปืน: ปกติ</text>
            <text x="115" y="66" fill="#F59E0B" fontSize="7">อุณหภูมิ: 54°C</text>
            {/* Connecting Pointer Line */}
            <line x1="105" y1="48" x2="75" y2="58" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
            <text x="110" y="112" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle">แสดงข้อมูลดิจิทัลซ้อนทับภาพจริง</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 220 125" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="180" height="85" rx="8" fill="#1E293B" stroke="#800020" strokeWidth="2" />
            <text x="110" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">{title}</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-100 via-stone-50 to-slate-200/90 p-2.5 sm:p-3 border border-slate-200/90 shadow-2xs ${className}`}>
      {/* Studio Radial Backdrop */}
      <div className="absolute inset-0 bg-radial from-white/70 via-transparent to-slate-300/35 pointer-events-none" />
      {/* Subtle engineering coordinate grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #64748b 0.75px, transparent 0.75px)',
          backgroundSize: '14px 14px',
        }}
      />
      {renderGraphic()}
    </div>
  );
};
