import { DialogOverlay, DialogContent } from '@reach/dialog';
import React, { FC } from 'react';
import { animated, config, useTransition } from 'react-spring';
import Button from '../Button';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<Props> = ({ showModal, children }) => {
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);
  const transitions = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });
  return transitions((styles, item) =>
    item ? (
      <AnimatedDialogOverlay
        className="fixed top-0 w-full h-full bg-black/30 backdrop-opacity-10 "
        style={{ ...styles }}
      >
        <AnimatedDialogContent
          aria-labelledby="dialog-title"
          className="fixed w-full max-w-xl p-4 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md bg-baseColor top-1/2 left-1/2"
          style={{ ...styles }}
        >
          {children}
        </AnimatedDialogContent>
      </AnimatedDialogOverlay>
    ) : null,
  );
};

export default Modal;
