export interface Question {
  type: string;
  level: number;
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
}
