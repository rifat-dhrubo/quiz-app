import React from 'react';
import { GameScoreValue, useGameStore } from '../../store/gameStore';
import { Question } from '../../types/questions';
import Button from '../Button';
import { useWizard } from 'react-use-wizard';

type Props = {
  question: Question;
};

const GameCard = ({ question }: Props) => {
  const { nextStep } = useWizard();
  const setGameResponse = useGameStore(
    React.useCallback((state) => state.setGameResponse, []),
  );
  const handleClick = (index: number) => {
    setGameResponse({
      questionId: question.question,
      correct: question.correct,
      given: index,
      level: question.level as keyof typeof GameScoreValue,
    });
    nextStep();
  };
  return (
    <div>
      <h2
        className="px-4 text-3xl font-bold text-left text-secondary"
        dangerouslySetInnerHTML={{
          __html: question.question,
        }}
      />
      <div className="flex flex-col items-center gap-4 mt-10 md:justify-center md:flex-row">
        {question.answers.map((answer, index) => {
          return (
            <Button
              key={index}
              type="button"
              textNode={answer}
              className=" w-44"
              onClick={() => handleClick(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
