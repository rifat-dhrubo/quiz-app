import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTransition, animated, config } from 'react-spring';
import { Quiz } from '../types/quiz';
import path from 'path';
import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';

type Props = {
  data: Quiz;
};

const Quiz = ({ data }: Props) => {
  return (
    <div className="min-h-screen bg-baseColor">
      <Navbar />
      <main className="px-1 mt-20">
        <h2 className="mb-24 text-4xl font-bold text-center md:text-5xl text-secondary">
          Take Quizzes and Earn Points
        </h2>
        <section className="container grid grid-cols-1 gap-4 pb-8 mx-auto justify-items-center md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          <QuizCard quiz={data} />
          <QuizCard quiz={data} />
          <QuizCard quiz={data} />
          <QuizCard quiz={data} />
          <QuizCard quiz={data} />
          <QuizCard quiz={data} />
        </section>
      </main>
    </div>
  );
};

export default Quiz;

export const getStaticProps: GetStaticProps = async () => {
  const dir = path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    'public/json/quiz.json',
  );

  const stringData = await fs.readFile(dir, 'utf-8');
  const data: Quiz = JSON.parse(stringData);
  return {
    props: {
      data,
    },
  };
};
