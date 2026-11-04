/**
 * Types for Smart Factory Engineering Challenge
 * Faculty of Engineering, Burapha University
 */

export type Category = 
  | 'Industrial Automation'
  | 'Industrial Robotics'
  | 'AI & Smart Factory';

export interface EquipmentItem {
  id: number;
  equipmentName: string;
  category: Category;
  correctAnswerCode: string;
  applicationTitle: string;
  applicationDescription: string;
  equipmentImage?: string;
  applicationImage?: string;
}

export interface AnswerChoice {
  code: string;
  title: string;
  description: string;
  isCorrect: boolean;
  equipmentId: number;
}

export interface Question {
  equipment: EquipmentItem;
  choices: AnswerChoice[];
}

export interface AnswerRecord {
  questionNumber: number;
  equipmentId: number;
  equipmentName: string;
  category: Category;
  selectedCode: string | null;
  selectedTitle: string | null;
  correctCode: string;
  correctTitle: string;
  isCorrect: boolean;
  isTimeout: boolean;
  timeSpentSeconds: number;
}

export type GameScreen = 
  | 'welcome'
  | 'playing'
  | 'result';

export interface SavedGameResult {
  playerName: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  timeoutCount: number;
  totalTimeSeconds: number;
  totalTimeFormatted: string;
  date: string;
  records: AnswerRecord[];
}
