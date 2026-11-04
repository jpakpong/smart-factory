import React from 'react';

interface EquipmentVisualProps {
  id: number;
  name: string;
  className?: string;
}

export const EquipmentVisual: React.FC<EquipmentVisualProps> = ({ id, name, className = '' }) => {
  const renderGraphic = () => {
    switch (id) {
      case 1: // PLC
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="plc-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#1F2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="plc-rail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D1D5DB" />
                <stop offset="50%" stopColor="#F3F4F6" />
                <stop offset="100%" stopColor="#9CA3AF" />
              </linearGradient>
              <linearGradient id="plc-burgundy" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A52A4A" />
                <stop offset="100%" stopColor="#800020" />
              </linearGradient>
            </defs>
            {/* DIN Rail */}
            <rect x="20" y="95" width="280" height="30" rx="3" fill="url(#plc-rail)" stroke="#6B7280" strokeWidth="1.5" />
            <circle cx="35" cy="110" r="4" fill="#4B5563" />
            <circle cx="285" cy="110" r="4" fill="#4B5563" />
            {/* Rack Module Base */}
            <rect x="40" y="30" width="240" height="155" rx="6" fill="url(#plc-body)" stroke="#4B5563" strokeWidth="2" />
            {/* CPU Module Left */}
            <rect x="45" y="35" width="65" height="145" rx="4" fill="#1F2937" stroke="#374151" />
            <rect x="52" y="45" width="50" height="12" rx="2" fill="url(#plc-burgundy)" />
            <text x="77" y="54" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CPU-315</text>
            {/* LED Status Display */}
            <rect x="52" y="65" width="50" height="32" rx="3" fill="#111827" stroke="#374151" />
            <circle cx="62" cy="74" r="3" fill="#22C55E" />
            <text x="70" y="76" fill="#9CA3AF" fontSize="6">RUN</text>
            <circle cx="62" cy="84" r="3" fill="#EAB308" />
            <text x="70" y="86" fill="#9CA3AF" fontSize="6">STOP</text>
            <circle cx="88" cy="74" r="3" fill="#EF4444" />
            <text x="96" y="76" fill="#9CA3AF" fontSize="6">ERR</text>
            {/* RJ45 Ports */}
            <rect x="55" y="110" width="20" height="18" rx="2" fill="#0F172A" stroke="#475569" />
            <rect x="59" y="114" width="12" height="10" fill="#334155" />
            <rect x="80" y="110" width="20" height="18" rx="2" fill="#0F172A" stroke="#475569" />
            <rect x="84" y="114" width="12" height="10" fill="#334155" />
            {/* Terminal Blocks Bottom */}
            <rect x="52" y="142" width="50" height="30" fill="#374151" rx="2" />
            <line x1="56" y1="148" x2="98" y2="148" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="56" y1="156" x2="98" y2="156" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="56" y1="164" x2="98" y2="164" stroke="#4ADE80" strokeWidth="2" strokeDasharray="3 3" />
            {/* Digital Input Module */}
            <rect x="115" y="35" width="50" height="145" rx="4" fill="#1F2937" stroke="#374151" />
            <rect x="120" y="45" width="40" height="10" rx="2" fill="#374151" />
            <text x="140" y="53" fill="#9CA3AF" fontSize="7" fontWeight="bold" textAnchor="middle">DI 16x24V</text>
            {/* DI LEDs array */}
            <g transform="translate(122, 65)">
              {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                <circle key={i} cx={(i % 2) * 20 + 8} cy={Math.floor(i / 2) * 12 + 6} r="2.5" fill={i < 4 ? "#22C55E" : "#4B5563"} />
              ))}
            </g>
            <rect x="120" y="125" width="40" height="47" fill="#374151" rx="2" />
            {/* Digital Output Module */}
            <rect x="170" y="35" width="50" height="145" rx="4" fill="#1F2937" stroke="#374151" />
            <rect x="175" y="45" width="40" height="10" rx="2" fill="#374151" />
            <text x="195" y="53" fill="#9CA3AF" fontSize="7" fontWeight="bold" textAnchor="middle">DQ 16x24V</text>
            <g transform="translate(177, 65)">
              {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                <circle key={i} cx={(i % 2) * 20 + 8} cy={Math.floor(i / 2) * 12 + 6} r="2.5" fill={i % 2 === 0 ? "#F59E0B" : "#4B5563"} />
              ))}
            </g>
            <rect x="175" y="125" width="40" height="47" fill="#374151" rx="2" />
            {/* Analog I/O Module */}
            <rect x="225" y="35" width="50" height="145" rx="4" fill="#1F2937" stroke="#374151" />
            <rect x="230" y="45" width="40" height="10" rx="2" fill="#374151" />
            <text x="250" y="53" fill="#9CA3AF" fontSize="7" fontWeight="bold" textAnchor="middle">AI 8x12BIT</text>
            <g transform="translate(232, 65)">
              {[0, 1, 2, 3].map(i => (
                <rect key={i} x={6} y={i * 14} width="28" height="6" rx="1.5" fill="#38BDF8" opacity={0.8} />
              ))}
            </g>
            <rect x="230" y="125" width="40" height="47" fill="#374151" rx="2" />
          </svg>
        );

      case 2: // ไมโครคอนโทรลเลอร์อุตสาหกรรม
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="240" height="140" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Heatsink Aluminium Fins */}
            <rect x="60" y="55" width="70" height="110" rx="4" fill="#334155" />
            {[0, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={i} x1="68" y1={65 + i * 14} x2="122" y2={65 + i * 14} stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            ))}
            {/* Industrial Microcontroller IC */}
            <rect x="155" y="65" width="95" height="90" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Pins */}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={i} x={145} y={75 + i * 14} width="10" height="4" fill="#FBBF24" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={i} x={250} y={75 + i * 14} width="10" height="4" fill="#FBBF24" />
            ))}
            <text x="202" y="105" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ARM Cortex</text>
            <text x="202" y="120" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">Industrial MCU</text>
            <circle cx="170" cy="80" r="3" fill="#22C55E" />
            <circle cx="180" cy="80" r="3" fill="#F59E0B" />
            {/* Screw terminal blocks */}
            <rect x="40" y="165" width="240" height="15" fill="#0F172A" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <circle key={i} cx={60 + i * 28} cy={172} r="3" fill="#94A3B8" stroke="#334155" />
            ))}
          </svg>
        );

      case 3: // HMI
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bezel frame */}
            <rect x="30" y="25" width="260" height="170" rx="12" fill="#334155" stroke="#1E293B" strokeWidth="3" />
            <rect x="38" y="33" width="244" height="154" rx="8" fill="#1E293B" stroke="#475569" />
            {/* Glass screen */}
            <rect x="48" y="43" width="224" height="134" rx="4" fill="#0F172A" />
            {/* Top header on screen */}
            <rect x="48" y="43" width="224" height="24" fill="#800020" />
            <text x="60" y="59" fill="#FFFFFF" fontSize="10" fontWeight="bold">SMART HMI TOUCH PANEL</text>
            <circle cx="255" cy="55" r="4" fill="#22C55E" />
            {/* Screen Dashboard Elements */}
            {/* Tank/Level Gauge */}
            <rect x="60" y="77" width="40" height="65" rx="3" fill="#1E293B" stroke="#475569" />
            <rect x="63" y="97" width="34" height="42" rx="2" fill="#0284C7" />
            <text x="80" y="125" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">72%</text>
            <text x="80" y="152" fill="#94A3B8" fontSize="7" textAnchor="middle">LEVEL</text>
            {/* Speed Gauge Ring */}
            <circle cx="140" cy="110" r="28" stroke="#334155" strokeWidth="6" />
            <circle cx="140" cy="110" r="28" stroke="#F59E0B" strokeWidth="6" strokeDasharray="120 180" strokeLinecap="round" />
            <text x="140" y="112" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">1,450</text>
            <text x="140" y="123" fill="#94A3B8" fontSize="6" textAnchor="middle">RPM</text>
            {/* Soft Buttons */}
            <rect x="188" y="80" width="70" height="26" rx="4" fill="#15803D" stroke="#22C55E" strokeWidth="1" />
            <text x="223" y="97" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">START</text>
            <rect x="188" y="115" width="70" height="26" rx="4" fill="#991B1B" stroke="#EF4444" strokeWidth="1" />
            <text x="223" y="132" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">STOP</text>
          </svg>
        );

      case 4: // อินเวอร์เตอร์ควบคุมความถี่มอเตอร์
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* VFD Outer Case */}
            <rect x="75" y="25" width="170" height="170" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Top Brand Banner */}
            <rect x="85" y="35" width="150" height="16" rx="3" fill="#800020" />
            <text x="160" y="47" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">VFD INVERTER 5.5kW</text>
            {/* 7-Segment Display Box */}
            <rect x="100" y="60" width="120" height="38" rx="4" fill="#000000" stroke="#334155" strokeWidth="1.5" />
            <text x="150" y="86" fill="#EF4444" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="monospace">50.00</text>
            <text x="205" y="84" fill="#EF4444" fontSize="9" fontFamily="monospace">Hz</text>
            {/* Control Potentiometer Dial */}
            <circle cx="160" cy="125" r="18" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="160" cy="125" r="10" fill="#0F172A" />
            <line x1="160" y1="115" x2="160" y2="108" stroke="#38BDF8" strokeWidth="2" />
            {/* Buttons Run/Stop */}
            <circle cx="115" cy="125" r="9" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
            <text x="115" y="128" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">RUN</text>
            <circle cx="205" cy="125" r="9" fill="#DC2626" stroke="#EF4444" strokeWidth="1.5" />
            <text x="205" y="128" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">STOP</text>
            {/* Bottom Ventilation Grille */}
            <g transform="translate(95, 155)">
              {[0, 1, 2, 3].map(i => (
                <line key={i} x1="0" y1={i * 7} x2="130" y2={i * 7} stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              ))}
            </g>
          </svg>
        );

      case 5: // เซนเซอร์ตรวจจับโลหะแบบเหนี่ยวนำ (Inductive Sensor)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="brass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
            </defs>
            {/* Sensing Face (Blue tip) */}
            <path d="M 60 85 L 85 85 L 85 135 L 60 135 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            {/* Threaded Cylindrical Body (M18) */}
            <rect x="85" y="85" width="140" height="50" fill="url(#brass)" stroke="#92400E" strokeWidth="2" />
            {/* Threads */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <line key={i} x1={95 + i * 12} y1="85" x2={95 + i * 12} y2="135" stroke="#78350F" strokeWidth="2" strokeDasharray="3 3" />
            ))}
            {/* Mounting Hex Nuts */}
            <rect x="135" y="75" width="18" height="70" rx="3" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
            <rect x="180" y="75" width="18" height="70" rx="3" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
            {/* Rear Housing & LED Ring */}
            <rect x="225" y="90" width="25" height="40" rx="3" fill="#1E293B" stroke="#475569" />
            <circle cx="237" cy="110" r="5" fill="#F59E0B" className="animate-pulse" />
            {/* Cable Tail */}
            <path d="M 250 110 Q 280 110 300 135" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
            {/* Electromagnetic Flux Field Lines at Tip */}
            <path d="M 50 75 C 30 90, 30 130, 50 145" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
            <path d="M 38 65 C 10 85, 10 135, 38 155" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />
          </svg>
        );

      case 6: // เซนเซอร์ตรวจจับวัตถุด้วยแสง (Photoelectric Sensor)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sensor Body */}
            <rect x="70" y="55" width="80" height="110" rx="8" fill="#1E293B" stroke="#800020" strokeWidth="3" />
            {/* Dual Optical Lenses */}
            <circle cx="110" cy="85" r="16" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            <circle cx="110" cy="85" r="10" fill="#DC2626" opacity="0.9" />
            <circle cx="110" cy="125" r="16" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            <circle cx="110" cy="125" r="10" fill="#0284C7" opacity="0.9" />
            {/* Red Laser Emitter Beam */}
            <polygon points="120,85 280,45 280,125" fill="#EF4444" opacity="0.25" />
            <line x1="120" y1="85" x2="280" y2="85" stroke="#EF4444" strokeWidth="3" strokeDasharray="8 4" />
            {/* Reflector Target at right */}
            <rect x="270" y="60" width="20" height="60" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            {/* Status indicator on top of sensor */}
            <circle cx="90" cy="65" r="4" fill="#22C55E" />
            <circle cx="130" cy="65" r="4" fill="#F59E0B" />
          </svg>
        );

      case 7: // เซนเซอร์วัดอุณหภูมิ (RTD / Thermocouple)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ss-probe" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            {/* Cast Aluminium Connection Head */}
            <rect x="60" y="40" width="80" height="75" rx="10" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
            <rect x="70" y="48" width="60" height="20" rx="4" fill="#800020" />
            <text x="100" y="62" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">PT100 RTD</text>
            <circle cx="100" cy="90" r="12" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            <circle cx="100" cy="90" r="4" fill="#22C55E" />
            {/* Threaded Process Nipple */}
            <rect x="140" y="67" width="25" height="22" fill="#64748B" stroke="#334155" />
            {/* Stainless Steel Probe Stem */}
            <rect x="165" y="73" width="115" height="10" rx="2" fill="url(#ss-probe)" stroke="#475569" strokeWidth="1" />
            {/* Sensing Tip */}
            <path d="M 280 73 L 295 78 L 280 83 Z" fill="#CBD5E1" stroke="#475569" />
            {/* Heat Waves */}
            <path d="M 230 45 Q 240 55 230 65" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M 255 45 Q 265 55 255 65" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M 280 45 Q 290 55 280 65" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 8: // เซนเซอร์วัดความดัน (Pressure Transmitter)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* DIN Connector Block */}
            <rect x="70" y="75" width="55" height="50" rx="5" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <rect x="60" y="90" width="12" height="20" rx="2" fill="#0F172A" />
            <circle cx="97" cy="100" r="4" fill="#E2E8F0" />
            {/* Cylindrical Stainless Steel Body */}
            <rect x="125" y="80" width="105" height="40" rx="4" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <rect x="135" y="88" width="60" height="24" rx="2" fill="#1E293B" />
            <text x="165" y="103" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">0-10 BAR</text>
            <text x="165" y="112" fill="#94A3B8" fontSize="6" textAnchor="middle">4-20mA</text>
            {/* Process Connection Thread */}
            <rect x="230" y="86" width="35" height="28" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
            <line x1="240" y1="86" x2="240" y2="114" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="250" y1="86" x2="250" y2="114" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="265" y="92" width="15" height="16" fill="#CBD5E1" stroke="#475569" />
          </svg>
        );

      case 9: // เซอร์โวมอเตอร์ (Servo Motor)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Motor Square Flange */}
            <rect x="195" y="45" width="22" height="130" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="206" cy="60" r="4" fill="#0F172A" />
            <circle cx="206" cy="160" r="4" fill="#0F172A" />
            {/* Motor Body Cylinder */}
            <rect x="75" y="55" width="120" height="110" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
            {/* Heat cooling fins */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1={85 + i * 20} y1="55" x2={85 + i * 20} y2="165" stroke="#475569" strokeWidth="2" />
            ))}
            {/* Precision Output Shaft with Keyway */}
            <rect x="217" y="92" width="60" height="36" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
            <rect x="240" y="89" width="20" height="6" fill="#94A3B8" />
            {/* Military Connectors (Power & Feedback) */}
            <circle cx="105" cy="40" r="12" fill="#800020" stroke="#4A0018" strokeWidth="2" />
            <circle cx="145" cy="40" r="12" fill="#800020" stroke="#4A0018" strokeWidth="2" />
            <text x="135" y="115" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">SERVO</text>
          </svg>
        );

      case 10: // กระบอกสูบนิวแมติก (Pneumatic Cylinder)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cylinder Front/Rear End Caps */}
            <rect x="40" y="65" width="25" height="90" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="185" y="65" width="25" height="90" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            {/* Aluminium Profile Barrel */}
            <rect x="65" y="70" width="120" height="80" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <line x1="65" y1="95" x2="185" y2="95" stroke="#64748B" strokeWidth="3" />
            <line x1="65" y1="125" x2="185" y2="125" stroke="#64748B" strokeWidth="3" />
            {/* Air Ports (Push-in fittings) */}
            <rect x="45" y="45" width="14" height="20" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
            <rect x="190" y="45" width="14" height="20" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
            {/* Piston Rod (Chrome) */}
            <rect x="210" y="93" width="75" height="34" rx="2" fill="#F1F5F9" stroke="#64748B" strokeWidth="2" />
            {/* Rod Clevis / Threaded End */}
            <circle cx="288" cy="110" r="12" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="288" cy="110" r="5" fill="#F8FAFC" />
          </svg>
        );

      case 11: // หุ่นยนต์แขนกลอุตสาหกรรม (6-Axis Articulated Robot)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Robot Base */}
            <ellipse cx="90" cy="190" rx="55" ry="15" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="65" y="155" width="50" height="35" rx="5" fill="#334155" />
            {/* Shoulder Joint */}
            <circle cx="90" cy="145" r="22" fill="#800020" stroke="#4A0018" strokeWidth="3" />
            {/* Upper Arm Link */}
            <path d="M 85 140 L 150 70 L 175 85 L 105 155 Z" fill="#800020" stroke="#4A0018" strokeWidth="2" />
            {/* Elbow Joint */}
            <circle cx="165" cy="78" r="18" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
            {/* Forearm Link */}
            <path d="M 165 78 L 240 105 L 235 125 L 160 98 Z" fill="#800020" stroke="#4A0018" strokeWidth="2" />
            {/* Wrist Assembly */}
            <circle cx="238" cy="115" r="14" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            {/* Tool Flange & Gripper holding component */}
            <rect x="248" y="108" width="18" height="14" fill="#64748B" stroke="#334155" />
            <line x1="266" y1="105" x2="280" y2="105" stroke="#1E293B" strokeWidth="4" />
            <line x1="266" y1="125" x2="280" y2="125" stroke="#1E293B" strokeWidth="4" />
            <rect x="272" y="108" width="16" height="14" fill="#F59E0B" rx="2" />
          </svg>
        );

      case 12: // หุ่นยนต์ร่วมปฏิบัติงานกับมนุษย์ (Cobot)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rounded Organic Cobot Design */}
            <ellipse cx="80" cy="185" rx="45" ry="12" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="62" y="150" width="36" height="35" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Base Safety Ring Glowing Green */}
            <circle cx="80" cy="145" r="18" fill="#F8FAFC" stroke="#22C55E" strokeWidth="3" />
            <circle cx="80" cy="145" r="8" fill="#22C55E" opacity="0.8" />
            {/* Arm Link 1 */}
            <path d="M 76 135 L 135 75 L 155 85 L 88 150 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="145" cy="80" r="16" fill="#FFFFFF" stroke="#22C55E" strokeWidth="3" />
            {/* Arm Link 2 */}
            <path d="M 145 80 L 225 100 L 220 120 L 140 100 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="225" cy="110" r="14" fill="#FFFFFF" stroke="#22C55E" strokeWidth="3" />
            {/* End Effector */}
            <rect x="235" y="102" width="20" height="16" rx="4" fill="#334155" />
            {/* Human Hand gesture icon */}
            <circle cx="270" cy="110" r="14" fill="#800020" opacity="0.2" />
            <text x="270" y="114" fill="#800020" fontSize="11" fontWeight="bold" textAnchor="middle">SAFE</text>
          </svg>
        );

      case 13: // หุ่นยนต์เคลื่อนที่อัตโนมัติ (AMR)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* AMR Low Profile Body */}
            <rect x="50" y="80" width="220" height="85" rx="18" fill="#1E293B" stroke="#800020" strokeWidth="3" />
            {/* Top Deck Surface */}
            <rect x="65" y="65" width="190" height="25" rx="6" fill="#334155" stroke="#475569" strokeWidth="2" />
            {/* Safety LiDAR Scanners (Diagonals) */}
            <circle cx="70" cy="95" r="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="70" cy="95" r="4" fill="#38BDF8" />
            <circle cx="250" cy="150" r="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="250" cy="150" r="4" fill="#38BDF8" />
            {/* Side LED Light Strip (Cyan Navigation Pulse) */}
            <rect x="95" y="115" width="130" height="10" rx="5" fill="#38BDF8" className="animate-pulse" />
            {/* Drive Wheels */}
            <rect x="135" y="160" width="50" height="18" rx="5" fill="#000000" />
            {/* Navigation Cone */}
            <polygon points="70,95 20,40 20,150" fill="#38BDF8" opacity="0.15" />
          </svg>
        );

      case 14: // หุ่นยนต์นำทางอัตโนมัติ (AGV)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Magnetic floor track */}
            <line x1="20" y1="185" x2="300" y2="185" stroke="#F59E0B" strokeWidth="6" strokeDasharray="14 10" />
            {/* AGV Vehicle Body */}
            <rect x="65" y="70" width="190" height="100" rx="12" fill="#E2E8F0" stroke="#475569" strokeWidth="3" />
            {/* Safety Bumper Yellow/Black Hazard Stripes */}
            <rect x="65" y="150" width="190" height="20" fill="#FBBF24" />
            {[0, 1, 2, 3, 4, 5, 6].map(i => (
              <polygon key={i} points={`${75 + i * 26},170 ${90 + i * 26},170 ${80 + i * 26},150 ${65 + i * 26},150`} fill="#1E293B" />
            ))}
            {/* Top Warning Tower Beacon */}
            <rect x="150" y="40" width="20" height="30" rx="4" fill="#F59E0B" className="animate-pulse" />
            <circle cx="160" cy="55" r="6" fill="#EF4444" />
            {/* Wheels */}
            <circle cx="105" cy="175" r="14" fill="#1E293B" />
            <circle cx="215" cy="175" r="14" fill="#1E293B" />
          </svg>
        );

      case 15: // อุปกรณ์จับยึดชิ้นงานของหุ่นยนต์ (Gripper)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flange Mount */}
            <rect x="130" y="25" width="60" height="30" rx="4" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            {/* Gripper Actuator Body */}
            <rect x="100" y="55" width="120" height="70" rx="8" fill="#1E293B" stroke="#800020" strokeWidth="2.5" />
            <circle cx="160" cy="90" r="14" fill="#334155" stroke="#475569" />
            {/* Finger Left */}
            <path d="M 115 125 L 115 175 L 135 175 L 135 145 L 125 125 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            {/* Finger Right */}
            <path d="M 205 125 L 205 175 L 185 175 L 185 145 L 195 125 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            {/* Clamped Machined Cylindrical Component */}
            <rect x="140" y="140" width="40" height="50" rx="4" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <text x="160" y="170" fill="#78350F" fontSize="8" fontWeight="bold" textAnchor="middle">PART</text>
          </svg>
        );

      case 16: // เซนเซอร์วัดระยะด้วยเลเซอร์ (LiDAR)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base mounting */}
            <rect x="90" y="135" width="140" height="45" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Rotating Optical Turret */}
            <rect x="110" y="65" width="100" height="70" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <rect x="120" y="75" width="80" height="30" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Laser Emitter & Receiver Lens */}
            <circle cx="145" cy="90" r="8" fill="#0284C7" />
            <circle cx="175" cy="90" r="8" fill="#0284C7" />
            {/* Radial 360-degree LiDAR Scan Waves */}
            <path d="M 120 75 Q 80 40 40 50" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 4" />
            <path d="M 160 65 Q 160 20 200 15" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 4" />
            <path d="M 200 75 Q 240 40 280 50" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 4" />
            <text x="160" y="162" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">360° LASER SCANNER</text>
          </svg>
        );

      case 17: // ตัวเข้ารหัสตำแหน่งข้อต่อหุ่นยนต์ (Encoder)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circular Encoder Outer Flange */}
            <circle cx="160" cy="110" r="75" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            {/* Optical Disc Glass */}
            <circle cx="160" cy="110" r="58" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            {/* Radial optical tracks */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
              <line 
                key={deg} 
                x1={160 + Math.cos(deg * Math.PI / 180) * 35} 
                y1={110 + Math.sin(deg * Math.PI / 180) * 35} 
                x2={160 + Math.cos(deg * Math.PI / 180) * 55} 
                y2={110 + Math.sin(deg * Math.PI / 180) * 55} 
                stroke="#F59E0B" 
                strokeWidth="2.5" 
              />
            ))}
            {/* Central Hollow Shaft */}
            <circle cx="160" cy="110" r="22" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="160" cy="110" r="12" fill="#F8FAFC" />
          </svg>
        );

      case 18: // ชุดควบคุมหุ่นยนต์ (Robot Controller)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Cabinet */}
            <rect x="70" y="30" width="180" height="160" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            {/* Burgundy Header Bar */}
            <rect x="70" y="30" width="180" height="24" rx="8" fill="#800020" />
            <text x="160" y="46" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">IRC ROBOT CONTROLLER</text>
            {/* Emergency Stop Button */}
            <circle cx="100" cy="80" r="14" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            <circle cx="100" cy="80" r="9" fill="#DC2626" />
            {/* Teach Pendant Dock */}
            <rect x="135" y="65" width="95" height="110" rx="8" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
            <rect x="145" y="75" width="75" height="50" rx="4" fill="#0F172A" />
            <circle cx="182" cy="148" r="10" fill="#475569" />
            <circle cx="182" cy="148" r="4" fill="#38BDF8" />
          </svg>
        );

      case 19: // ระบบกำหนดตำแหน่งด้วยกล้องสามมิติ (3D Vision System)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stereo Camera Housing Bar */}
            <rect x="50" y="50" width="220" height="50" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Left Camera Lens */}
            <circle cx="85" cy="75" r="15" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="85" cy="75" r="8" fill="#0284C7" />
            {/* Center Structured Light Projector */}
            <rect x="140" y="62" width="40" height="26" rx="4" fill="#0F172A" stroke="#64748B" />
            <circle cx="160" cy="75" r="9" fill="#800020" />
            {/* Right Camera Lens */}
            <circle cx="235" cy="75" r="15" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="235" cy="75" r="8" fill="#0284C7" />
            {/* 3D Point Cloud Projection Grid */}
            <polygon points="85,90 40,180 280,180 235,90" fill="#38BDF8" opacity="0.1" />
            {[0, 1, 2, 3, 4, 5].map(i => (
              <line key={i} x1={70 + i * 35} y1="120" x2={50 + i * 44} y2="180" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
            ))}
          </svg>
        );

      case 20: // ระบบขับเคลื่อนล้อของหุ่นยนต์ (Robot Wheel Drive System)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Heavy-Duty AGV/AMR Wheel Drive Unit */}
            <circle cx="160" cy="115" r="65" fill="#1E293B" stroke="#334155" strokeWidth="4" />
            {/* High-traction Polyurethane Tread Ring */}
            <circle cx="160" cy="115" r="54" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
            {/* Planetary Gearbox Hub */}
            <circle cx="160" cy="115" r="32" fill="#475569" stroke="#94A3B8" strokeWidth="3" />
            {/* Suspension Arm */}
            <rect x="145" y="25" width="30" height="60" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <circle cx="160" cy="40" r="7" fill="#800020" />
            {/* Hub Bolts */}
            {[0, 60, 120, 180, 240, 300].map(deg => (
              <circle 
                key={deg} 
                cx={160 + Math.cos(deg * Math.PI / 180) * 20} 
                cy={115 + Math.sin(deg * Math.PI / 180) * 20} 
                r="3" 
                fill="#E2E8F0" 
              />
            ))}
          </svg>
        );

      case 21: // กล้องตรวจสอบภาพอุตสาหกรรม (Industrial Machine Vision Camera)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Camera Body Cube */}
            <rect x="65" y="55" width="95" height="110" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            <rect x="75" y="65" width="75" height="16" rx="2" fill="#800020" />
            <text x="112" y="77" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">VISION CAM 12MP</text>
            {/* Precision C-Mount Lens */}
            <rect x="160" y="75" width="65" height="70" rx="4" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <rect x="225" y="82" width="20" height="56" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            {/* LED Ring Illuminator around Lens */}
            <circle cx="255" cy="110" r="28" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="6 4" />
            <circle cx="255" cy="110" r="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            {/* Inspection Focus Crosshair */}
            <line x1="285" y1="110" x2="310" y2="110" stroke="#22C55E" strokeWidth="2" />
            <line x1="255" y1="140" x2="255" y2="165" stroke="#22C55E" strokeWidth="2" />
          </svg>
        );

      case 22: // คอมพิวเตอร์ประมวลผล AI แบบ Edge (Edge AI Computer)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Extruded Heatsink Aluminium Chassis */}
            <rect x="50" y="45" width="220" height="130" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            {/* Heatsink Top Fins */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
              <rect key={i} x={60 + i * 17} y={30} width="8" height="18" rx="2" fill="#475569" />
            ))}
            {/* Front Panel I/O Ports */}
            <rect x="65" y="65" width="190" height="95" rx="4" fill="#0F172A" />
            {/* Dual Gigabit PoE Ethernet */}
            <rect x="80" y="80" width="24" height="20" rx="2" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="110" y="80" width="24" height="20" rx="2" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="140" y="80" width="24" height="20" rx="2" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
            {/* USB 3.2 Ports */}
            <rect x="175" y="80" width="18" height="10" fill="#0284C7" />
            <rect x="175" y="93" width="18" height="10" fill="#0284C7" />
            {/* AI Engine Logo / Badge */}
            <rect x="80" y="120" width="115" height="26" rx="4" fill="#800020" />
            <text x="137" y="136" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">EDGE AI INFERENCE</text>
            <circle cx="225" cy="90" r="5" fill="#22C55E" className="animate-pulse" />
          </svg>
        );

      case 23: // หน่วยประมวลผลกราฟิก (GPU Accelerator)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dual Slot Card Shroud */}
            <rect x="40" y="45" width="240" height="115" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Blower Cooling Fan Left */}
            <circle cx="105" cy="102" r="38" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <circle cx="105" cy="102" r="14" fill="#38BDF8" />
            {/* Cooling Fan Right */}
            <circle cx="215" cy="102" r="38" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            <circle cx="215" cy="102" r="14" fill="#38BDF8" />
            {/* PCIe Golden Finger Edge Connector */}
            <rect x="70" y="160" width="140" height="14" fill="#0F172A" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <rect key={i} x={76 + i * 9} y={160} width="5" height="12" fill="#FBBF24" />
            ))}
            {/* Power Connector on Right */}
            <rect x="250" y="32" width="22" height="14" fill="#0F172A" stroke="#F59E0B" />
          </svg>
        );

      case 24: // เซนเซอร์ตรวจจับการสั่นสะเทือน (Vibration Sensor)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stainless Steel Hex Base */}
            <rect x="110" y="130" width="100" height="35" rx="4" fill="#64748B" stroke="#334155" strokeWidth="2" />
            <circle cx="160" cy="147" r="6" fill="#1E293B" />
            {/* Cylindrical Sensor Housing */}
            <rect x="125" y="60" width="70" height="70" rx="6" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <rect x="135" y="70" width="50" height="20" rx="2" fill="#800020" />
            <text x="160" y="83" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">ACCELEROMETER</text>
            {/* Top Connector Thread */}
            <rect x="145" y="40" width="30" height="20" rx="2" fill="#475569" />
            {/* Vibration Wave Lines */}
            <path d="M 60 145 Q 85 115 110 145" stroke="#EF4444" strokeWidth="2.5" fill="none" />
            <path d="M 210 145 Q 235 175 260 145" stroke="#EF4444" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 25: // เซนเซอร์ตรวจวัดกระแสไฟฟ้า (Current Transducer)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Split Core Current Transformer Donut */}
            <circle cx="160" cy="110" r="70" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            {/* Center Aperture Hole */}
            <circle cx="160" cy="110" r="35" fill="#F5F3F2" stroke="#64748B" strokeWidth="2" />
            {/* Heavy Copper Power Cable through Center */}
            <rect x="145" y="20" width="30" height="180" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2" opacity="0.9" />
            {/* Hinge Mechanism on side */}
            <rect x="80" y="98" width="16" height="24" rx="3" fill="#800020" />
            {/* Secondary Output Terminals */}
            <rect x="215" y="100" width="18" height="20" rx="2" fill="#334155" />
            <circle cx="224" cy="106" r="3" fill="#F59E0B" />
            <circle cx="224" cy="114" r="3" fill="#38BDF8" />
          </svg>
        );

      case 26: // เครื่องอ่าน RFID (RFID Reader)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* UHF Antenna Flat Panel */}
            <rect x="65" y="40" width="190" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            <rect x="80" y="55" width="160" height="110" rx="8" fill="#F1F5F9" stroke="#E2E8F0" />
            {/* Burgundy Central Emblem */}
            <rect x="125" y="90" width="70" height="40" rx="6" fill="#800020" />
            <text x="160" y="114" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">RFID</text>
            {/* Radiating Radio Frequency Waves */}
            <path d="M 205 95 C 220 102, 220 118, 205 125" stroke="#800020" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 215 88 C 235 98, 235 122, 215 132" stroke="#800020" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 115 95 C 100 102, 100 118, 115 125" stroke="#800020" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 27: // เกตเวย์ IIoT (IIoT Gateway)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* DIN Rail Case */}
            <rect x="75" y="50" width="170" height="135" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Dual Wireless Antennas */}
            <rect x="95" y="15" width="10" height="35" rx="3" fill="#0F172A" />
            <rect x="215" y="15" width="10" height="35" rx="3" fill="#0F172A" />
            {/* Ethernet Ports */}
            <rect x="90" y="70" width="30" height="24" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="130" y="70" width="30" height="24" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
            {/* OT to IT Cloud Indicator */}
            <rect x="90" y="115" width="140" height="36" rx="4" fill="#0F172A" stroke="#800020" strokeWidth="1.5" />
            <text x="110" y="137" fill="#38BDF8" fontSize="9" fontWeight="bold">OT</text>
            <path d="M 135 133 L 155 133" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="180" y="137" fill="#F59E0B" fontSize="9" fontWeight="bold">CLOUD</text>
          </svg>
        );

      case 28: // เซิร์ฟเวอร์ประมวลผลข้อมูลโรงงาน (Factory Data Server)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 19" Rackmount Server Enclosure */}
            <rect x="35" y="50" width="250" height="120" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            {/* Front Bezel Mounting Ears */}
            <rect x="30" y="50" width="10" height="120" rx="2" fill="#64748B" />
            <circle cx="35" cy="65" r="3" fill="#0F172A" />
            <circle cx="35" cy="155" r="3" fill="#0F172A" />
            <rect x="280" y="50" width="10" height="120" rx="2" fill="#64748B" />
            <circle cx="285" cy="65" r="3" fill="#0F172A" />
            <circle cx="285" cy="155" r="3" fill="#0F172A" />
            {/* Hot-Swap Drive Bays Array */}
            {[0, 1, 2, 3].map(i => (
              <rect key={i} x={50 + i * 40} y={65} width="34" height="90" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            ))}
            {[0, 1, 2, 3].map(i => (
              <circle key={i} cx={67 + i * 40} cy={75} r="2.5" fill="#22C55E" className="animate-pulse" />
            ))}
            {/* Server Status Display */}
            <rect x="215" y="75" width="55" height="35" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
            <text x="242" y="95" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ONLINE</text>
          </svg>
        );

      case 29: // เครื่องสแกนสามมิติ (3D Scanner)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ergonomic Scanner Handle */}
            <path d="M 85 110 L 85 180 L 115 180 L 115 125 Z" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            {/* Scanner Head Housing */}
            <rect x="80" y="50" width="90" height="75" rx="10" fill="#1E293B" stroke="#800020" strokeWidth="2.5" />
            {/* Blue Laser Projector Aperture */}
            <circle cx="125" cy="75" r="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="125" cy="75" r="6" fill="#38BDF8" />
            {/* Stereo Tracking Sensors */}
            <circle cx="98" cy="105" r="6" fill="#0284C7" />
            <circle cx="152" cy="105" r="6" fill="#0284C7" />
            {/* Blue Laser Crosshair Scanning Wave on workpiece */}
            <polygon points="125,75 220,40 280,140 220,180" fill="#38BDF8" opacity="0.2" />
            <line x1="220" y1="40" x2="280" y2="140" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="280" y1="140" x2="220" y2="180" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        );

      case 30: // อุปกรณ์แสดงผลความเป็นจริงเสริม (AR Display)
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* AR Smart Glasses / Industrial Visor */}
            <rect x="50" y="70" width="220" height="55" rx="16" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
            {/* Transparent Holographic Waveguide Lens */}
            <rect x="75" y="80" width="75" height="35" rx="6" fill="#38BDF8" opacity="0.3" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="170" y="80" width="75" height="35" rx="6" fill="#38BDF8" opacity="0.3" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Central Bridge & Tracking Camera */}
            <circle cx="160" cy="85" r="6" fill="#0F172A" stroke="#94A3B8" />
            {/* Projected Hologram UI Overlay */}
            <g transform="translate(85, 87)">
              <rect x="0" y="0" width="55" height="20" rx="2" fill="#0284C7" opacity="0.8" />
              <text x="27" y="14" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">RPM: 2,400</text>
            </g>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="240" height="160" rx="12" fill="#1E293B" stroke="#800020" strokeWidth="2" />
            <text x="160" y="115" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">{name}</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 p-3 sm:p-4 border border-slate-700/60 shadow-inner ${className}`}>
      {/* Studio Lighting Spotlight from top */}
      <div className="absolute inset-0 bg-radial from-slate-600/25 via-transparent to-transparent pointer-events-none" />
      {/* Studio Floor Pedestal Shadow */}
      <div className="absolute bottom-2 inset-x-8 h-8 bg-black/40 blur-md rounded-full pointer-events-none" />
      {/* Precision industrial dot grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px',
        }}
      />
      {renderGraphic()}
    </div>
  );
};
