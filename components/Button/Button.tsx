import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  textNode?: React.ReactNode;
  iconNode?: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  textNode?: React.ReactNode;
  iconNode?: React.ReactNode;
}

const Button = ({
  className,
  type,
  textNode,
  iconNode,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} type={type} className={`btn group ${className}`}>
      {textNode}
      {iconNode}
    </button>
  );
};

export default Button;

export const LinkButton = ({
  className,
  textNode,
  iconNode,
  ...rest
}: LinkProps) => {
  return (
    <a {...rest} className={`btn group ${className}`}>
      {textNode}
      {iconNode}
    </a>
  );
};
