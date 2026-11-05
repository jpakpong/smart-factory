import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  History, 
  Bot, 
  Cpu, 
  Flame,
  BookOpen
} from 'lucide-react';
import { SavedGameResult } from '../types/game';
import heroImage from '../assets/images/smart_factory_cartoon_1793885158650.jpg';

interface WelcomeScreenProps {
  onStartGame: (playerName: string) => void;
  latestResult: SavedGameResult | null;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame, latestResult }) => {
  const [playerName, setPlayerName] = useState('');
  const [showCategoryGuide, setShowCategoryGuide] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const trimmedName = playerName.trim();
  const isValidName = trimmedName.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidName) {
      setErrorMsg('กรุณากรอกชื่อผู้เล่นก่อนเริ่มเกม');
      return;
    }
    setErrorMsg('');
    onStartGame(trimmedName);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      {/* 5.2 Game Title & Cartoon Line-Art Smart Factory Banner */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mb-6">
        <div className="relative aspect-16/9 sm:aspect-21/9 md:aspect-24/10 w-full overflow-hidden bg-slate-900 min-h-[220px] sm:min-h-[250px]">
          <img
            src={heroImage}
            alt="Smart Factory Cartoon Line-Art Illustration"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
          />
          {/* Burgundy Gradient Scrim (subtle so cartoon factory line-art remains clearly recognizable) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A0018]/95 via-[#4A0018]/45 to-stone-900/40 flex flex-col justify-between p-3.5 sm:p-5 md:p-6 text-white">
            {/* Top Bar inside Banner: Left & Right */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs sm:text-sm font-medium text-rose-100/95 pb-2 border-b border-white/20">
              <span className="font-semibold text-white drop-shadow-md">
                ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา
              </span>
              <span className="text-amber-300 font-bold drop-shadow-md">
                หลักสูตรวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
              </span>
            </div>

            {/* Title & Subtitle inside Banner */}
            <div className="mt-3 sm:mt-auto">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
                Smart Factory Engineering Challenge
              </h1>
              <p className="text-xs sm:text-base text-rose-100 font-semibold mt-0.5 max-w-2xl drop-shadow-md">
                เกมส์ท้าทายความรู้ด้านหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: How-to-play & Player Start Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 5.3 How to Play (7 cols on desktop/iPad) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#4A0018]">
                วิธีเล่นเกม
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                เลือกการใช้งานของอุปกรณ์ด้าน Automation
              </p>
            </div>
            <button
              onClick={() => setShowCategoryGuide(!showCategoryGuide)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#800020] hover:text-[#4A0018] bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showCategoryGuide ? 'ซ่อนหมวดความรู้' : 'ดูขอบเขตเนื้อหา'}</span>
            </button>
          </div>

          {/* 4 Steps - Subtext removed as requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                1
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                กรอกชื่อผู้เล่นเพื่อเริ่มเกม
              </h4>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                2
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                เลือกคำตอบที่ตรงกับการใช้งานของอุปกรณ์
              </h4>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                3
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                คำถามแต่ละข้อมีเวลา 45 วินาที
              </h4>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
              <div className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                4
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                สะสมคะแนนจากคำถาม 15 ข้อ
              </h4>
            </div>
          </div>

          {/* Rule Summary Callout - Updated as requested */}
          <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200/70 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#800020] shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[#4A0018]">
              เกณฑ์คะแนน: ตอบถูกข้อละ 1 คะแนน ตอบผิด ได้ 0 คะแนน หากหมดเวลาจะถือว่าตอบผิด
            </p>
          </div>

          {/* Collapsible Category Guide */}
          {showCategoryGuide && (
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2.5 text-xs animate-in fade-in">
              <h4 className="font-bold text-stone-800 text-xs sm:text-sm">3 หมวดความรู้ครอบคลุม 30 รายการ:</h4>
              <div className="space-y-1.5 text-stone-600">
                <div>
                  <span className="font-semibold text-[#800020]">1. Industrial Automation:</span>
                  <span className="ml-1">
                    PLC, Microcontroller, HMI, VFD Inverter, Inductive Sensor, Photoelectric Sensor, RTD Temp Sensor, Pressure Transmitter, Servo Motor, Pneumatic Cylinder
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#800020]">2. Industrial Robotics:</span>
                  <span className="ml-1">
                    Articulated Robot, Cobot, AMR, AGV, Gripper, LiDAR, Joint Encoder, Robot Controller, 3D Vision, Wheel Drive
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-[#800020]">3. AI & Smart Factory:</span>
                  <span className="ml-1">
                    Machine Vision Camera, Edge AI Computer, GPU, Vibration Sensor, Current Sensor, RFID Reader, IIoT Gateway, Factory Data Server, 3D Scanner, AR Display
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5.4 Player Input & 5.5 Start Button (5 cols on desktop) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200">
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#4A0018]">
                เข้าสู่เกมท้าทาย
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                กรอกชื่อเพื่อเริ่มต้นเซสชันใหม่ 15 ข้อ
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="playerName" 
                  className="block text-xs font-semibold text-stone-800 mb-1"
                >
                  ชื่อผู้เล่น <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <input
                    id="playerName"
                    type="text"
                    value={playerName}
                    onChange={(e) => {
                      setPlayerName(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="กรอกชื่อของคุณ (เช่น รหัสนิสิต หรือชื่อเล่น)"
                    maxLength={50}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent text-sm bg-white placeholder-stone-400 text-stone-900 transition-shadow"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                {errorMsg && (
                  <p className="text-xs text-rose-600 mt-1 font-medium">{errorMsg}</p>
                )}
              </div>

              {/* Start Button */}
              <button
                type="submit"
                disabled={!isValidName}
                className={`w-full py-3 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 text-white shadow-md transition-all cursor-pointer ${
                  isValidName
                    ? 'bg-[#800020] hover:bg-[#4A0018] active:scale-[0.99] shadow-rose-900/20'
                    : 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>เริ่มเล่นเกม</span>
              </button>
            </form>
          </div>

          {/* Previous Result Card if exists in localStorage */}
          {latestResult && (
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-[#800020]" />
                  สถิติล่าสุดของคุณ
                </span>
                <span>{latestResult.date}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <div>
                  <div className="text-xs text-stone-600">ผู้เล่น: <span className="font-semibold text-stone-900">{latestResult.playerName}</span></div>
                  <div className="text-xs text-stone-500">เวลาที่ใช้: {latestResult.totalTimeFormatted} นาที</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-[#800020]">
                    {latestResult.score} / {latestResult.totalQuestions}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    ถูก {latestResult.correctCount} · ผิด {latestResult.incorrectCount} · หมดเวลา {latestResult.timeoutCount}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
