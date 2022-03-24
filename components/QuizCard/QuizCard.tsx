import { DialogContent, DialogOverlay } from '@reach/dialog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowRight, HiPlay, HiX } from 'react-icons/hi';
import { useTransition, animated, config } from 'react-spring';
import { Quiz } from '../../types/quiz';
import Button, { LinkButton } from '../Button';
import Modal from '../Modal';

type Props = {
  quiz: Quiz;
};

const QuizCard = ({ quiz }: Props) => {
  const [showModal, setShowModal] = React.useState(false);

  const transitions = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="grid w-full h-full max-w-md grid-cols-4 grid-rows-1 rounded shadow-sm md:grid-rows-2 md:grid-cols-1">
        <div className="relative col-span-1">
          {/* using static image as certificate for the image host has expired and does not load the image */}
          <Image
            src="/images/quiz-base.jpg"
            alt={quiz.image.altText}
            layout="fill"
            objectFit="cover"
            className="rounded-l md:rounded"
          />
        </div>
        <div className="relative col-span-3 p-2 md:mt-4">
          <h3 className="text-lg font-bold text-secondary">{quiz.title}</h3>
          <p className="mt-2 text-base md:text-xl text-tertiary">
            {quiz.description}
          </p>
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

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex justify-end">
          <Button
            type="button"
            className="p-1 ml-auto bg-red-500 rounded-full focus:ring-red-500"
            iconNode={<HiX className="w-5 h-5 text-baseColor" />}
            onClick={() => setShowModal(false)}
          />
        </div>
        <h2
          id="dialog-title"
          className="mt-2 mb-4 text-lg font-bold md:text-xl text-secondary"
        >
          {quiz.browserTitle}
        </h2>
        <p
          className="mb-4 text-base md:text-lg text-tertiary"
          dangerouslySetInnerHTML={{
            __html: quiz.introduction,
          }}
        />
        <div>
          <p className="text-base text-tertiary">
            <span className="font-bold">Questions:</span> {quiz.numOfQuestions}
          </p>
          <p className="text-base text-tertiary">
            <span className="font-bold">Time: </span>
            {quiz.seconds}s per question
          </p>
        </div>
        <div className="flex justify-end">
          <Link href="/game" passHref>
            <LinkButton
              type="button"
              textNode={"Let's go"}
              iconNode={
                <HiArrowRight className="w-5 h-5 ml-2 transition-all text-baseColor transform-gpu group-hover:translate-x-2 group-hover:scale-105 " />
              }
            />
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default QuizCard;
