import Link from 'next/link';
import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { useGameStore } from '../../store/gameStore';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { LinkButton } from '../Button';

const Result = () => {
  const { width, height } = useWindowSize();
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
      {getGameResult === 'Won' ? (
        <Confetti width={width} height={height} />
      ) : null}
    </div>
  );
};

export default Result;
