import { Category, EquipmentItem, Question, AnswerChoice, SavedGameResult } from '../types/game';
import { EQUIPMENT_DATASET } from '../data/equipmentData';

/**
 * Fisher-Yates array shuffle
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates a balanced set of 15 questions covering all 3 categories (5 items each, summing to 15).
 * Each question has 1 correct answer + 3 distinct incorrect answers from other equipment items.
 */
export function generateGameSession(): Question[] {
  const automationItems = EQUIPMENT_DATASET.filter(item => item.category === 'Industrial Automation');
  const roboticsItems = EQUIPMENT_DATASET.filter(item => item.category === 'Industrial Robotics');
  const aiItems = EQUIPMENT_DATASET.filter(item => item.category === 'AI & Smart Factory');

  // Balanced selection: 5 questions from each category (5 x 3 = 15 questions)
  const selectedAutomation = shuffleArray(automationItems).slice(0, 5);
  const selectedRobotics = shuffleArray(roboticsItems).slice(0, 5);
  const selectedAI = shuffleArray(aiItems).slice(0, 5);

  const selected15Equipment = shuffleArray([
    ...selectedAutomation,
    ...selectedRobotics,
    ...selectedAI,
  ]);

  const questions: Question[] = selected15Equipment.map((equipment) => {
    // Correct choice
    const correctChoice: AnswerChoice = {
      code: equipment.correctAnswerCode,
      title: equipment.applicationTitle,
      description: equipment.applicationDescription,
      isCorrect: true,
      equipmentId: equipment.id,
    };

    // Other items from entire 30-item dataset to pick 3 incorrect choices
    const otherItems = EQUIPMENT_DATASET.filter(item => item.id !== equipment.id);
    const shuffledOthers = shuffleArray(otherItems);

    const incorrectChoices: AnswerChoice[] = shuffledOthers.slice(0, 3).map(other => ({
      code: other.correctAnswerCode,
      title: other.applicationTitle,
      description: other.applicationDescription,
      isCorrect: false,
      equipmentId: other.id,
    }));

    // Combine and shuffle the 4 choices
    const choices = shuffleArray([correctChoice, ...incorrectChoices]);

    return {
      equipment,
      choices,
    };
  });

  return questions;
}

/**
 * Format seconds to MM:SS
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const LOCAL_STORAGE_KEY = 'smart_factory_challenge_latest_result';

export function saveLatestResult(result: SavedGameResult): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(result));
  } catch (err) {
    console.error('Error saving result to localStorage', err);
  }
}

export function loadLatestResult(): SavedGameResult | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedGameResult;
  } catch (err) {
    console.error('Error loading result from localStorage', err);
    return null;
  }
}
