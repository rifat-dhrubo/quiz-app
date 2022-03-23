import Image from 'next/image';
import React from 'react';
import { HiPlay } from 'react-icons/hi';

type Props = {
  altText: string;
  title: string;
  description: string;
  handlePlay: (quizId: number) => void;
  quizId: number;
};

const QuizCard = ({
  altText,
  title,
  description,
  handlePlay,
  quizId,
}: Props) => {
  const handleClick = () => {
    handlePlay(quizId);
  };

  return (
    <div className="grid w-full h-full max-w-md grid-cols-4 grid-rows-1 rounded shadow-sm md:grid-rows-2 md:grid-cols-1">
      <div className="relative col-span-1">
        {/* using static image as certificate for the image host has expired and does not load the image */}
        <Image
          src="/images/quiz-base.jpg"
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded-l md:rounded"
        />
      </div>
      <div className="relative col-span-3 p-2 md:mt-4">
        <h3 className="text-lg font-bold text-secondary">{title}</h3>
        <p className="mt-2 text-base md:text-xl text-tertiary">{description}</p>
        <div className="bottom-0 right-0 inline-flex justify-end w-full ">
          <button
            title="Play"
            type="button"
            className="transition-all duration-300 ease-linear rounded-full transform-gpu group bg-baseColor hover:bg-primary focus:ring focus:ring-offset-1 focus:ring-primary"
            onClick={handleClick}
          >
            <span className="sr-only">Play</span>
            <HiPlay
              aria-hidden="true"
              className="w-8 h-8 transition-all duration-300 ease-linear text-primary group-hover:text-baseColor"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
