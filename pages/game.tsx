import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import getConfig from 'next/config';
import path from 'path';
import React from 'react';
import { Question } from '../types/questions';
import { Wizard } from 'react-use-wizard';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';

type Props = {
  data: Question[];
};

const game = ({ data }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-baseColor">
      <Navbar />
      <main className="flex items-center justify-center max-w-lg px-4 mx-auto -mt-12 grow">
        <Wizard>
          {data.map((datum, index) => {
            return <GameCard question={datum} />;
          })}
        </Wizard>
      </main>
    </div>
  );
};

export default game;

export const getStaticProps: GetStaticProps = async () => {
  const dir = path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    'public/json/questions.json',
  );

  const stringData = await fs.readFile(dir, 'utf-8');
  const temp: Question[] = JSON.parse(stringData);
  const data = temp.map((datum) => {
    const { question, ...rest } = datum;
    const sanitizedQuestion = question.replace(/�/g, "'");
    return {
      question: sanitizedQuestion,
      ...rest,
    };
  });
  return {
    props: {
      data,
    },
  };
};
