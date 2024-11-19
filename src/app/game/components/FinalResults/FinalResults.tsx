import { FC } from "react";
import { Button } from "@components/ui/button";
import { FinalResultsProps } from "./FinalResults.props";

export const FinalResults: FC<FinalResultsProps> = ({ score, onResetGame }) => (
  <div className='text-center'>
    <h2 className='text-xl md:text-2xl font-bold'>Final Results!!!</h2>
    <p>User: {score.user}</p>
    <p>Computer: {score.computer}</p>
    <Button className='mt-2' onClick={onResetGame} variant='destructive'>
      Reset Game
    </Button>
  </div>
);
