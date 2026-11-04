import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  User, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Check, 
  Trophy,
  ArrowRight,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Question, AnswerChoice, AnswerRecord } from '../types/game';
import { formatTime } from '../utils/gameLogic';
import { 
  playCountdownTick, 
  playCorrectAnswerSound, 
  playIncorrectAnswerSound, 
  playTimeoutSound 
} from '../utils/audio';
import { EquipmentVisual } from './EquipmentVisual';
import { ApplicationVisual } from './ApplicationVisual';

interface GameScreenProps {
  playerName: string;
  questions: Question[];
  onCompleteGame: (records: AnswerRecord[], totalTimeSeconds: number) => void;
  onRequestQuit: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  playerName,
  questions,
  onCompleteGame,
  onRequestQuit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedChoiceCode, setSelectedChoiceCode] = useState<string | null>(null);
  const [pendingChoiceCode, setPendingChoiceCode] = useState<string | null>(null);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  
  // Game evaluation state
  const [stepState, setStepState] = useState<'selecting' | 'evaluated'>('selecting');
  const [evaluationResult, setEvaluationResult] = useState<{
    isCorrect: boolean;
    isTimeout: boolean;
  } | null>(null);

  const [records, setRecords] = useState<AnswerRecord[]>([]);
  const [isAdvancing, setIsAdvancing] = useState(false);

  // Time tracking & sound refs
  const gameStartTimestamp = useRef<number>(Date.now());
  const questionStartTimestamp = useRef<number>(Date.now());
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMutedRef = useRef(false);
  const stepStateRef = useRef<'selecting' | 'evaluated'>('selecting');

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    stepStateRef.current = stepState;
  }, [stepState]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Question countdown timer (45 seconds per question)
  useEffect(() => {
    // Reset timer state when question changes
    setTimeLeft(45);
    questionStartTimestamp.current = Date.now();
    setStepState('selecting');
    stepStateRef.current = 'selecting';
    setSelectedChoiceCode(null);
    setPendingChoiceCode(null);
    setIsConfirmPopupOpen(false);
    setEvaluationResult(null);
    setIsAdvancing(false);

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        const nextVal = prev - 1;
        // Play countdown tick sound when remaining time is <= 10 seconds
        if (nextVal <= 10 && nextVal > 0 && !isMutedRef.current && stepStateRef.current !== 'evaluated') {
          playCountdownTick(nextVal);
        }
        return nextVal;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Handle Timeout when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && stepState !== 'evaluated') {
      handleTimeout();
    }
  }, [timeLeft, stepState]);

  const handleTimeout = () => {
    setIsConfirmPopupOpen(false);
    if (!isMutedRef.current) {
      playTimeoutSound();
    }
    const timeSpent = 45;
    const correctChoice = currentQuestion.choices.find(c => c.isCorrect)!;

    const newRecord: AnswerRecord = {
      questionNumber: currentIndex + 1,
      equipmentId: currentQuestion.equipment.id,
      equipmentName: currentQuestion.equipment.equipmentName,
      category: currentQuestion.equipment.category,
      selectedCode: null,
      selectedTitle: null,
      correctCode: correctChoice.code,
      correctTitle: correctChoice.title,
      isCorrect: false,
      isTimeout: true,
      timeSpentSeconds: timeSpent,
    };

    setRecords((prev) => [...prev, newRecord]);
    setStepState('evaluated');
    stepStateRef.current = 'evaluated';
    setEvaluationResult({ isCorrect: false, isTimeout: true });

    // Automatically advance after brief timeout feedback (1.6 seconds)
    autoAdvanceTimerRef.current = setTimeout(() => {
      advanceToNextQuestion([...records, newRecord]);
    }, 1600);
  };

  // Card click: pick answer and open Popup dialog
  const handleSelectCard = (code: string) => {
    if (stepState === 'evaluated') return;
    setPendingChoiceCode(code);
    setIsConfirmPopupOpen(true);
  };

  // Cancel selection in popup
  const handleCancelSelection = () => {
    setIsConfirmPopupOpen(false);
    setPendingChoiceCode(null);
  };

  // Confirm selection in popup & automatically advance to next question
  const handleConfirmAnswer = () => {
    if (!pendingChoiceCode || stepState === 'evaluated') return;

    setIsConfirmPopupOpen(false);
    const chosenChoice = currentQuestion.choices.find(c => c.code === pendingChoiceCode);
    const correctChoice = currentQuestion.choices.find(c => c.isCorrect)!;
    const isCorrect = chosenChoice?.isCorrect ?? false;
    const timeSpent = Math.min(45, Math.max(1, Math.round((Date.now() - questionStartTimestamp.current) / 1000)));

    setSelectedChoiceCode(pendingChoiceCode);
    setStepState('evaluated');
    stepStateRef.current = 'evaluated';
    setEvaluationResult({ isCorrect, isTimeout: false });

    if (isCorrect) {
      setScore(prev => prev + 1);
      if (!isMutedRef.current) {
        playCorrectAnswerSound();
      }
    } else {
      if (!isMutedRef.current) {
        playIncorrectAnswerSound();
      }
    }

    const updatedRecords = [
      ...records,
      {
        questionNumber: currentIndex + 1,
        equipmentId: currentQuestion.equipment.id,
        equipmentName: currentQuestion.equipment.equipmentName,
        category: currentQuestion.equipment.category,
        selectedCode: pendingChoiceCode,
        selectedTitle: chosenChoice?.title ?? null,
        correctCode: correctChoice.code,
        correctTitle: correctChoice.title,
        isCorrect,
        isTimeout: false,
        timeSpentSeconds: timeSpent,
      },
    ];

    setRecords(updatedRecords);

    // Auto-advance to the next question automatically after a brief, clear visual feedback (1.4 seconds)
    autoAdvanceTimerRef.current = setTimeout(() => {
      advanceToNextQuestion(updatedRecords);
    }, 1400);
  };

  // Advance to next question or complete game
  const advanceToNextQuestion = (currentRecords = records) => {
    if (isAdvancing) return;
    setIsAdvancing(true);

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    if (isLastQuestion) {
      const totalElapsed = Math.round((Date.now() - gameStartTimestamp.current) / 1000);
      onCompleteGame(currentRecords, totalElapsed);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const isLowTime = timeLeft <= 10 && stepState !== 'evaluated';
  const pendingChoice = currentQuestion.choices.find(c => c.code === pendingChoiceCode);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 space-y-4">
      {/* 6.1 Top Dashboard (Compact for iPad / Mobile Landscape) */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-stone-200">
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
          {/* Player Name */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-50 text-[#800020] flex items-center justify-center border border-rose-200">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span>
              ผู้เล่น: <strong className="text-stone-900">{playerName}</strong>
            </span>
          </div>

          {/* Question Index */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#800020]" />
            <span>
              คำถาม <strong className="text-[#800020] text-sm">{currentIndex + 1}</strong> / {questions.length}
            </span>
          </div>

          {/* Current Score */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            <Trophy className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              คะแนน: <strong className="text-emerald-700 text-sm">{score}</strong> / {questions.length}
            </span>
          </div>

          {/* Countdown Timer with Sound Indicator */}
          <div className="flex items-center gap-1.5">
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border font-bold transition-all ${
                isLowTime
                  ? 'bg-red-50 text-red-600 border-red-300 animate-pulse-ring'
                  : 'bg-stone-50 text-stone-800 border-stone-200'
              }`}
              title="เวลาที่เหลือสำหรับข้อนี้ (สูงสุด 45 วินาที)"
            >
              <Clock className={`w-3.5 h-3.5 ${isLowTime ? 'text-red-600 animate-spin' : 'text-[#800020]'}`} />
              <span className="font-mono text-xs sm:text-sm tabular-nums">
                {formatTime(timeLeft)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                isMuted 
                  ? 'bg-stone-100 text-stone-400 border-stone-200 hover:text-stone-600' 
                  : 'bg-rose-50 text-[#800020] border-rose-200 hover:bg-rose-100'
              }`}
              title={isMuted ? 'เปิดเสียงนับถอยหลัง' : 'ปิดเสียงนับถอยหลัง'}
              aria-label={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="w-full bg-stone-100 rounded-full h-1.5 sm:h-2 mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#800020] to-[#A52A4A] h-1.5 sm:h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 6.2 Main Game Area: Responsive Two-Column Layout for Desktop / iPad / Landscape */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Left Column (5 cols): Equipment Question Card */}
        <div className="md:col-span-5 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200 flex flex-col justify-between h-full space-y-3">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2.5 shrink-0">
            <div className="text-xs font-semibold text-[#800020] uppercase tracking-wider">
              อุปกรณ์อุตสาหกรรม #{currentQuestion.equipment.id}
            </div>
            <span className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium truncate max-w-[150px]">
              {currentQuestion.equipment.category}
            </span>
          </div>

          {/* Realistic 3D Visual Render */}
          <div className="flex-1 min-h-[190px] sm:min-h-[220px] flex items-center justify-center">
            <EquipmentVisual 
              id={currentQuestion.equipment.id} 
              name={currentQuestion.equipment.equipmentName} 
              className="w-full h-full min-h-[190px] sm:min-h-[220px]"
            />
          </div>

          {/* Equipment Label */}
          <div className="pt-1 shrink-0">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug">
              {currentQuestion.equipment.equipmentName}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              หมวด: <span className="font-semibold text-stone-700">{currentQuestion.equipment.category}</span>
            </p>
          </div>

          {/* Requirement 5: ตัดคำว่า โปรดพิจารณา ให้เขียนว่า เลือก .... */}
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed shrink-0">
            <span className="font-semibold text-stone-800">คำถาม:</span> เลือกการประยุกต์ใช้งาน (Industrial Application) ที่สอดคล้องกับอุปกรณ์ชิ้นนี้อย่างถูกต้องที่สุด
          </div>
        </div>

        {/* Right Column (7 cols): Four Answer Cards (2x2 Grid) matching height */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-3">
          {/* 4 Application Cards in 2x2 Grid - equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2.5 sm:gap-3 flex-1 h-full">
            {currentQuestion.choices.map((choice) => {
              const isEvaluated = stepState === 'evaluated';
              const isThisCorrect = choice.isCorrect;
              const isUserChoice = selectedChoiceCode === choice.code;

              let cardStyle = 'border-stone-200 hover:border-[#800020] hover:shadow-md bg-white cursor-pointer';

              if (isEvaluated) {
                if (isThisCorrect) {
                  cardStyle = 'border-2 border-[#15803D] bg-emerald-50/90 ring-2 ring-emerald-400 shadow-md';
                } else if (isUserChoice && !isThisCorrect) {
                  cardStyle = 'border-2 border-[#DC2626] bg-red-50/90 ring-2 ring-red-400 shadow-md';
                } else {
                  cardStyle = 'border-stone-200 opacity-50 bg-stone-50 cursor-not-allowed';
                }
              }

              return (
                <div
                  key={choice.code}
                  onClick={() => {
                    if (!isEvaluated) {
                      handleSelectCard(choice.code);
                    }
                  }}
                  className={`relative p-3 sm:p-3.5 rounded-xl border transition-all flex flex-col justify-between h-full select-none ${cardStyle}`}
                >
                  {/* Top: Short Title ONLY (No A,B... badge) */}
                  <div className="shrink-0 mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">
                      {choice.title}
                    </h3>
                  </div>

                  {/* Visual Application Diagram */}
                  <div className="flex-1 min-h-[60px] sm:min-h-[75px] my-1 flex items-center justify-center">
                    <ApplicationVisual code={choice.code} title={choice.title} className="w-full h-full max-h-[115px]" />
                  </div>

                  {/* Thai Application Description */}
                  <div className="shrink-0 mt-1 text-xs text-stone-600 leading-relaxed min-h-[2.75rem] line-clamp-2 sm:line-clamp-3">
                    {choice.description}
                  </div>

                  {/* Status Indicator during brief auto-advance feedback */}
                  {isEvaluated && isThisCorrect && (
                    <div className="mt-1.5 pt-1 border-t border-emerald-200 flex items-center gap-1.5 text-xs font-bold text-[#15803D] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>คำตอบที่ถูกต้อง</span>
                    </div>
                  )}
                  {isEvaluated && isUserChoice && !isThisCorrect && (
                    <div className="mt-1.5 pt-1 border-t border-red-200 flex items-center gap-1.5 text-xs font-bold text-[#DC2626] shrink-0">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>คำตอบที่คุณเลือก</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Auto-Advance Status Banner during Evaluation */}
          {stepState === 'evaluated' && evaluationResult && (
            <div className={`p-3 rounded-xl border shadow-sm flex items-center justify-between gap-3 shrink-0 animate-in fade-in ${
              evaluationResult.isCorrect 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                : evaluationResult.isTimeout
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-red-50 border-red-300 text-red-900'
            }`}>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                {evaluationResult.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>ถูกต้อง! (+1 คะแนน)</span>
                  </>
                ) : evaluationResult.isTimeout ? (
                  <>
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>หมดเวลา! (0 คะแนน)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0" />
                    <span>ยังไม่ถูกต้อง (0 คะแนน)</span>
                  </>
                )}
              </div>
              <div className="text-xs font-medium text-stone-500 animate-pulse">
                กำลังไปยังข้อถัดไป...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Requirement 6: Dedicated POPUP Modal for Confirm / Change Answer */}
      {isConfirmPopupOpen && pendingChoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-bold text-[#4A0018]">
                คุณต้องการเลือกคำตอบนี้ใช่หรือไม่?
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                กดยืนยันคำตอบเพื่อส่งและไปยังข้อถัดไปอัตโนมัติ
              </p>
            </div>

            {/* Selected Answer Summary Card */}
            <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-left space-y-2">
              <div className="text-sm font-bold text-stone-900">
                {pendingChoice.title}
              </div>
              <div className="h-28 w-full rounded-lg overflow-hidden border border-slate-700/60">
                <ApplicationVisual code={pendingChoice.code} title={pendingChoice.title} className="h-full" />
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {pendingChoice.description}
              </p>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCancelSelection}
                className="flex-1 py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                เปลี่ยนคำตอบ
              </button>
              <button
                type="button"
                onClick={handleConfirmAnswer}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#800020] hover:bg-[#4A0018] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>ยืนยันคำตอบ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
