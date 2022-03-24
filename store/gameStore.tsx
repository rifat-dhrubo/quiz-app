import produce from 'immer';
import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { Question } from '../types/questions';

export const GameScoreValue = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50,
} as const;

type GameStoreResponse = {
  [questionId: string]: {
    correct: number;
    given: number;
    score: number;
    questionId: string;
  };
};

type GameScorePayload = {
  correct: number;
  given: number;
  questionId: string;
  level: keyof typeof GameScoreValue;
};

type GameStore = {
  game: {
    response: GameStoreResponse;
    totalScore: number;
    totalPoints: number;
    result: 'Won' | 'Lost';
    winningPoints: number;
  };
  getStore: () => GameStore;
  calculateTotalPoints: (questions: Question[]) => void;
  setGameResponse: (arg: GameScorePayload) => void;
  getGameResult: () => 'Won' | 'Lost';
  getGameScore: () => number;
  resetStore: (questions: Question[]) => void;
};

const initialState = {
  response: {},
  totalPoints: 0,
  totalScore: 0,
  winningPoints: 0,
  result: 'Lost',
} as const;

const getGameScore = (level: keyof typeof GameScoreValue) => {
  return GameScoreValue[level];
};

export const useGameStore = create<GameStore>(
  devtools((set, get) => ({
    game: {
      ...initialState,
    },
    getStore: () => get(),
    calculateTotalPoints: (questions: Question[]) =>
      set(
        produce<GameStore>((draft) => {
          draft.game.totalPoints = questions.reduce((acc, question) => {
            const pointForQuestion = getGameScore(
              question.level as keyof typeof GameScoreValue,
            );
            return (acc += pointForQuestion);
          }, 0);
          draft.game.winningPoints = draft.game.totalPoints * 0.6;
        }),
        false,
        'calculateTotalPoints',
      ),
    setGameResponse: ({
      questionId,
      correct,
      given,
      level,
    }: GameScorePayload) =>
      set(
        produce<GameStore>((draft) => {
          let score = 0;
          if (correct === given) {
            score = getGameScore(level);
          }
          draft.game.response[questionId] = {
            correct,
            given,
            score,
            questionId,
          };
          const newTotalScore = draft.game.totalScore + score;
          draft.game.totalScore = newTotalScore;

          draft.game.result =
            newTotalScore >= draft.game.winningPoints ? 'Won' : 'Lost';
        }),
        false,
        'setGameResponse',
      ),
    getGameResult: () => get().game.result,
    getGameScore: () => get().game.totalScore,
    resetStore: (questions: Question[]) => {
      set(
        () => ({
          game: initialState,
        }),
        false,
        'resetStore',
      );
      set(
        (state) => state.calculateTotalPoints(questions),
        false,
        'calculateTotalPoints',
      );
    },
  })),
);
