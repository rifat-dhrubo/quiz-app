import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
const Navbar = () => {
  return (
    <>
      <Head>
        <title>Britannica Quiz</title>
        <meta name="description" content="A delightful online quiz platform" />
      </Head>
      <nav className="flex justify-start w-full px-12 py-4 bg-baseColor">
        <Link passHref href="/">
          <a className="text-lg font-bold sm:text-xl text-secondary">
            Britannica Quiz
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
