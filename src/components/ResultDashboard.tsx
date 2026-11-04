import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  User, 
  Check,
  Volume2
} from 'lucide-react';
import { AnswerRecord } from '../types/game';
import { formatTime } from '../utils/gameLogic';
import { playSummaryFanfare } from '../utils/audio';

interface ResultDashboardProps {
  playerName: string;
  records: AnswerRecord[];
  totalTimeSeconds: number;
  onRestartGame: () => void;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = ({
  playerName,
  records,
  totalTimeSeconds,
  onRestartGame,
}) => {
  const totalQuestions = records.length;
  const correctCount = records.filter(r => r.isCorrect).length;
  const timeoutCount = records.filter(r => r.isTimeout).length;
  const incorrectCount = totalQuestions - correctCount - timeoutCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Trigger celebration audio and confetti on mount
  useEffect(() => {
    // Play celebratory summary fanfare
    playSummaryFanfare(percentage);

    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#800020', '#A52A4A', '#F59E0B', '#15803D', '#38BDF8'],
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }
  }, []);

  // Performance assessment text for 15 questions
  const getFeedbackMessage = () => {
    if (correctCount >= 13) return { title: 'ยอดเยี่ยมมาก! (Outstanding)', desc: 'คุณมีความรู้รอบด้านหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรมในระดับวิศวกรผู้เชี่ยวชาญ', color: 'text-emerald-700' };
    if (correctCount >= 10) return { title: 'ดีเยี่ยม (Proficient)', desc: 'คุณเข้าใจหลักการทำงานและการประยุกต์ใช้อุปกรณ์ในสายการผลิตอัจฉริยะได้เป็นอย่างดี', color: 'text-emerald-600' };
    if (correctCount >= 8) return { title: 'ผ่านเกณฑ์มาตรฐาน (Competent)', desc: 'คุณผ่านเกณฑ์พื้นฐาน สามารถทบทวนเพิ่มเติมในบางอุปกรณ์เพื่อความแม่นยำยิ่งขึ้น', color: 'text-amber-700' };
    return { title: 'ควรศึกษาทบทวนเพิ่มเติม (Needs Review)', desc: 'แนะนำให้ทบทวนฟังก์ชันการใช้งานของอุปกรณ์เซนเซอร์และแขนกลอุตสาหกรรมเพิ่มเติม', color: 'text-rose-700' };
  };

  const feedback = getFeedbackMessage();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* 11.1 Congratulatory Header */}
      <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 relative overflow-hidden">
        {/* Subtle decorative top bar */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#800020] via-amber-500 to-[#800020]" />
        
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#800020] flex items-center justify-center mx-auto mb-3 border border-rose-100 shadow-sm">
          <Trophy className="w-9 h-9 text-amber-500" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A0018] tracking-tight">
          ยินดีด้วย! คุณทำภารกิจสำเร็จแล้ว
        </h1>
        <p className={`text-base sm:text-lg font-bold mt-1.5 ${feedback.color}`}>
          {feedback.title}
        </p>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl mx-auto">
          {feedback.desc}
        </p>
        
        {/* Fanfare Audio Replay Button */}
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => playSummaryFanfare(percentage)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#800020] bg-rose-50 hover:bg-rose-100 border border-rose-200/80 shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="กดเพื่อฟังเสียงฉลองอีกครั้ง"
          >
            <Volume2 className="w-3.5 h-3.5 text-[#800020]" />
            <span>ฟังเสียงฉลองอีกครั้ง</span>
          </button>
        </div>
      </div>

      {/* 11.2 Player Information & 11.3 Score Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Circular Progress Ring (5 cols on md) */}
        <div className="md:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col items-center justify-center text-center">
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
            ผลคะแนนรวม (Overall Score)
          </h3>

          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* SVG Circular Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#F3F4F6"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke={percentage >= 70 ? '#15803D' : percentage >= 50 ? '#D97706' : '#800020'}
                strokeWidth="10"
                strokeDasharray={2 * Math.PI * 50}
                strokeDashoffset={2 * Math.PI * 50 * (1 - percentage / 100)}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black text-[#4A0018] tabular-nums">
                {correctCount}
                <span className="text-xl text-stone-400 font-semibold"> / {totalQuestions}</span>
              </span>
              <span className="text-xs font-semibold text-stone-500 mt-0.5">
                คิดเป็น {percentage}%
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 w-full flex items-center justify-around text-xs text-stone-600">
            <div>
              <span className="text-stone-400">เกณฑ์เต็ม:</span> <strong className="text-stone-800">{totalQuestions} คะแนน</strong>
            </div>
            <div>
              <span className="text-stone-400">สถานะ:</span>{' '}
              <strong className={correctCount >= 8 ? 'text-emerald-700' : 'text-rose-700'}>
                {correctCount >= 8 ? 'ผ่านการประเมิน' : 'ต้องปรับปรุง'}
              </strong>
            </div>
          </div>
        </div>

        {/* Detailed Stats Metrics (7 cols on md) */}
        <div className="md:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#800020]" />
                <span className="text-sm font-bold text-stone-800">
                  ผู้เล่น: <strong className="text-[#800020] text-base">{playerName}</strong>
                </span>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {totalQuestions} คำถามแบบสุ่ม
              </span>
            </div>

            {/* 4 KPI Grid Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80">
                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ตอบถูก</span>
                </div>
                <div className="text-2xl font-black text-emerald-800 tabular-nums">
                  {correctCount} <span className="text-xs font-normal text-emerald-600">ข้อ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/80">
                <div className="flex items-center gap-1.5 text-rose-800 text-xs font-semibold mb-1">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>ตอบผิด</span>
                </div>
                <div className="text-2xl font-black text-rose-800 tabular-nums">
                  {incorrectCount} <span className="text-xs font-normal text-rose-600">ข้อ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80">
                <div className="flex items-center gap-1.5 text-amber-800 text-xs font-semibold mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>หมดเวลา</span>
                </div>
                <div className="text-2xl font-black text-amber-800 tabular-nums">
                  {timeoutCount} <span className="text-xs font-normal text-amber-600">ข้อ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-1.5 text-stone-700 text-xs font-semibold mb-1">
                  <Clock className="w-4 h-4 text-[#800020]" />
                  <span>เวลาที่ใช้รวม</span>
                </div>
                <div className="text-2xl font-black text-stone-800 tabular-nums">
                  {formatTime(totalTimeSeconds)} <span className="text-xs font-normal text-stone-500">นาที</span>
                </div>
              </div>
            </div>
          </div>

          {/* 11.5 Restart Button */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-center sm:justify-end">
            <button
              onClick={onRestartGame}
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#800020] hover:bg-[#4A0018] active:scale-95 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>เริ่มเกมใหม่</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
