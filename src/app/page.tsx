import { Button } from "@components/ui/button";
import { Rules } from "@components/Rules";

import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className='flex flex-col items-center mt-12  h-screen p-4'>
      <h1 className='text-xl sm:text-3xl font-bold'>
        Rock, Paper, Scissors, Lizard, Spock
      </h1>
      <Rules />
      <Link href='/game'>
        <Button>Start Game</Button>
      </Link>
    </main>
  );
};

export default Home;
