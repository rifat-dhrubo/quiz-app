import { DialogContent, DialogOverlay } from '@reach/dialog';
import Image from 'next/image';
import React from 'react';
import { HiPlay } from 'react-icons/hi';
import { useTransition, animated, config } from 'react-spring';
import { Quiz } from '../../types/quiz';
import Button from '../Button';

type Props = {
  quiz: Quiz;
};

const QuizCard = ({ quiz }: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

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

      {transitions((styles, item) =>
        item ? (
          <AnimatedDialogOverlay
            className="absolute top-0 w-full h-full "
            style={{ opacity: styles.opacity }}
          >
            <AnimatedDialogContent
              aria-labelledby="dialog-title"
              className="absolute w-full max-w-xl transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-baseColor top-1/2 left-1/2"
              style={{
                opacity: styles.opacity,
              }}
            >
              <button onClick={() => setShowModal(false)}>Close Dialog</button>
              <h2 id="dialog-title">{quiz.browserTitle}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: quiz.introduction,
                }}
              />
              <Button type="button" textNode={"Let's go"} />
            </AnimatedDialogContent>
          </AnimatedDialogOverlay>
        ) : null,
      )}
    </>
  );
};

export default QuizCard;
