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
  const baseClasses =
    'inline-flex justify-center items-center px-12 cursor-pointer py-3 text-lg bg-primary text-baseColor rounded font-bold group focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary';

  return (
    <button {...rest} type={type} className={`${baseClasses} ${className}`}>
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
  const baseClasses =
    'inline-flex justify-center items-center px-12 cursor-pointer py-3 text-lg bg-primary text-baseColor rounded font-bold group focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary';

  return (
    <a {...rest} className={`${baseClasses} ${className}`}>
      {textNode}
      {iconNode}
    </a>
  );
};
