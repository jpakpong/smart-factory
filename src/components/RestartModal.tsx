import React from 'react';
import { AlertCircle } from 'lucide-react';

interface RestartModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const RestartModal: React.FC<RestartModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-stone-200 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-50 text-[#800020] flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              ยืนยันการเริ่มเกมใหม่?
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              ความคืบหน้าของเซสชันปัจจุบันจะถูกยกเลิก
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          หากคุณต้องการออกจากเกม คะแนนปัจจุบันจะไม่ถูกบันทึก และระบบจะนำคุณกลับสู่หน้าแรกเพื่อเริ่มเซสชันใหม่
        </p>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-100">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors cursor-pointer"
          >
            เล่นต่อ
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-[#800020] hover:bg-[#4A0018] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            ยืนยันเริ่มใหม่
          </button>
        </div>
      </div>
    </div>
  );
};
