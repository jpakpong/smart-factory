import React from 'react';
import { Cpu } from 'lucide-react';

interface HeaderProps {
  onRestartClick?: () => void;
  showRestartButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onRestartClick, showRestartButton = false }) => {
  return (
    <header className="w-full bg-[#4A0018] text-white border-b border-[#800020] shadow-xs">
      {/* Clean Single-Row Brand Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#800020] border border-white/20 flex items-center justify-center text-white shadow-inner">
            <Cpu className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
              Smart Factory Engineering Challenge
            </h1>
            <p className="text-xs text-rose-200/90 font-medium">
              เกมส์ท้าทายความรู้ด้านหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
            </p>
          </div>
        </div>

        {showRestartButton && onRestartClick && (
          <button
            onClick={onRestartClick}
            type="button"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
          >
            ออกจากเกม
          </button>
        )}
      </div>
    </header>
  );
};
