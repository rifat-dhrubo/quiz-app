import Link from 'next/link';
import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { useGameStore } from '../../store/gameStore';
import { Question } from '../../types/questions';
import Button, { LinkButton } from '../Button';

const Result = () => {
  const getGameResult = useGameStore(
    React.useCallback((state) => state.getGameResult(), []),
  );
  const getGameScore = useGameStore(
    React.useCallback((state) => state.getGameScore(), []),
  );
  return (
    <div>
      <h2 className="px-4 text-3xl font-bold text-left text-secondary mt-4">
        You {getGameResult}
      </h2>
      <p className="px-4 text-3xl font-bold text-left text-tertiary mt-4">
        Your Score
      </p>
      <p className="px-4 text-3xl font-bold text-left text-primary mt-4">
        {getGameScore}
      </p>
      <Link href="/quiz" passHref>
        <LinkButton
          textNode="Try Again"
          className="mt-8"
          iconNode={
            <HiArrowUp className="w-5 h-5 ml-2 transition-all text-baseColor transform-gpu group-hover:-translate-y-1 group-hover:scale-105 " />
          }
        />
      </Link>
    </div>
  );
};

export default Result;
