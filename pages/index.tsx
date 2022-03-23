import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { HiArrowRight } from 'react-icons/hi';
import { LinkButton } from '../components/Button';
const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <section className="w-full max-w-5xl px-8 mx-auto md:grid md:grid-cols-2 md:gap-1 md:items-center md:mt-28">
        <div className="relative w-full max-w-md mx-auto mt-16 h-44 md:order-2 md:w-full md:h-56">
          <Image
            src="/test.svg"
            layout="fill"
            alt="An open laptop showing a humanoid blob with paper on both hand. The background has two rectangle with question mark in center.The laptop has a postit stuck to it at them top left op the screen"
          />
        </div>
        <main className="px-8 mt-16 md:order-1 md:px-0">
          <h2 className="text-3xl font-bold text-left md:text-5xl text-secondary">
            Delightful Quizzes in the Web
          </h2>
          <p className="mt-8 text-lg md:text-2xl text-tertiary">
            Not sure what colors to use in your designs or where to use them?
            Happy Hues is a color palette inspiration site that acts as a real
            world example as to how the colors could be used in your design
            projects.
          </p>
          <div className="flex justify-center mt-8 md:justify-start ">
            <Link passHref href="/quiz">
              <LinkButton
                textNode="Get Started"
                iconNode={
                  <HiArrowRight className="w-5 h-5 ml-2 transition-all text-baseColor transform-gpu group-hover:translate-x-2 group-hover:scale-105 " />
                }
              />
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;
