import React from 'react';
import { useWizard } from 'react-use-wizard';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { GameScoreValue, useGameStore } from '../../store/gameStore';
import { Question } from '../../types/questions';
import Button from '../Button';
import { spawn } from 'child_process';

type Props = {
  question: Question;
};

const GameCard = ({ question }: Props) => {
  const { nextStep } = useWizard();
  const [disableAnswer, setDisableAnswer] = React.useState(false);
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
      <div className="fixed top-12 right-8">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={['#3da9fc', '#3da9fc']}
          colorsTime={[7, 5]}
          size={100}
          onComplete={() => {
            setDisableAnswer(true);
            nextStep();
          }}
        >
          {({ remainingTime }) => (
            <span className="text-primary text-3xl">{remainingTime}</span>
          )}
        </CountdownCircleTimer>
      </div>
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
              disabled={disableAnswer}
              key={index}
              type="button"
              textNode={answer}
              className=" w-44 disabled:cursor-not-allowed"
              onClick={() => handleClick(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
