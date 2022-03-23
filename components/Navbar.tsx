import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-start w-full px-12 py-4 bg-baseColor">
      <Link passHref href="/">
        <a className="text-lg font-bold sm:text-xl text-secondary">
          Britannica Quiz
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
