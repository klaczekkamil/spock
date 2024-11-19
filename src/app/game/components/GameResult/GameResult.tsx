import { FC } from "react";
import { Button } from "@components/ui/button";
import { GameResultProps } from "./GameResult.props";

export const GameResult: FC<GameResultProps> = ({
  userChoice,
  computerChoice,
  result,
  onEndGame,
}) => (
  <div className='text-center'>
    <p>
      Your choice: <strong>{userChoice}</strong>
    </p>
    <p>
      Computer&apos;s choice: <strong>{computerChoice}</strong>
    </p>
    <p className='font-semibold mt-2'>{result}</p>
    <Button className='mt-2' onClick={onEndGame} variant='destructive'>
      End Game
    </Button>
  </div>
);
