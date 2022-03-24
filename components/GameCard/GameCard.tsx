import React from 'react';
import { Question } from '../../types/questions';
import Button from '../Button';

type Props = {
  question: Question;
};

const GameCard = ({ question }: Props) => {
  return (
    <div>
      <h1
        className="px-4 text-3xl font-bold text-left text-secondary"
        dangerouslySetInnerHTML={{
          __html: question.question,
        }}
      />
      <div className="flex flex-col items-center gap-4 mt-10 md:justify-center md:flex-row">
        {question.answers.map((answer) => {
          return <Button type="button" textNode={answer} className=" w-44" />;
        })}
      </div>
    </div>
  );
};

export default GameCard;
