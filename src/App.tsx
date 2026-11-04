/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GameScreen as GameScreenType, Question, AnswerRecord, SavedGameResult } from './types/game';
import { generateGameSession, loadLatestResult, saveLatestResult, formatTime } from './utils/gameLogic';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { GameScreen } from './components/GameScreen';
import { ResultDashboard } from './components/ResultDashboard';
import { RestartModal } from './components/RestartModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreenType>('welcome');
  const [playerName, setPlayerName] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState<number>(0);
  const [latestResult, setLatestResult] = useState<SavedGameResult | null>(null);
  const [isRestartModalOpen, setIsRestartModalOpen] = useState<boolean>(false);

  // Load latest result from localStorage on mount
  useEffect(() => {
    const saved = loadLatestResult();
    if (saved) {
      setLatestResult(saved);
    }
  }, []);

  // Handle start game
  const handleStartGame = (name: string) => {
    setPlayerName(name);
    const newQuestions = generateGameSession();
    setQuestions(newQuestions);
    setAnswerRecords([]);
    setTotalTimeSeconds(0);
    setCurrentScreen('playing');
  };

  // Handle complete game
  const handleCompleteGame = (records: AnswerRecord[], totalElapsed: number) => {
    setAnswerRecords(records);
    setTotalTimeSeconds(totalElapsed);

    const correctCount = records.filter(r => r.isCorrect).length;
    const timeoutCount = records.filter(r => r.isTimeout).length;
    const incorrectCount = records.length - correctCount - timeoutCount;

    const result: SavedGameResult = {
      playerName,
      score: correctCount,
      totalQuestions: records.length,
      correctCount,
      incorrectCount,
      timeoutCount,
      totalTimeSeconds: totalElapsed,
      totalTimeFormatted: formatTime(totalElapsed),
      date: new Date().toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      records,
    };

    saveLatestResult(result);
    setLatestResult(result);
    setCurrentScreen('result');
  };

  // Reset / Restart game
  const handleRestartGame = () => {
    setIsRestartModalOpen(false);
    setCurrentScreen('welcome');
    setQuestions([]);
    setAnswerRecords([]);
    setTotalTimeSeconds(0);
    // Reload latest from storage
    const saved = loadLatestResult();
    setLatestResult(saved);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F3F2] text-[#252525] selection:bg-[#800020] selection:text-white">
      {/* Top Header - hidden on welcome page per request */}
      {currentScreen !== 'welcome' && (
        <Header
          showRestartButton={currentScreen === 'playing'}
          onRestartClick={() => setIsRestartModalOpen(true)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStartGame={handleStartGame}
            latestResult={latestResult}
          />
        )}

        {currentScreen === 'playing' && (
          <GameScreen
            playerName={playerName}
            questions={questions}
            onCompleteGame={handleCompleteGame}
            onRequestQuit={() => setIsRestartModalOpen(true)}
          />
        )}

        {currentScreen === 'result' && (
          <ResultDashboard
            playerName={playerName}
            records={answerRecords}
            totalTimeSeconds={totalTimeSeconds}
            onRestartGame={handleRestartGame}
          />
        )}
      </main>

      {/* Restart Modal confirmation */}
      <RestartModal
        isOpen={isRestartModalOpen}
        onConfirm={handleRestartGame}
        onCancel={() => setIsRestartModalOpen(false)}
      />
    </div>
  );
}
