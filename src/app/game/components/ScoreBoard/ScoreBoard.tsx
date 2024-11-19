import { FC } from "react";
import { ScoreBoardProps } from "./ScoreBoard.props";

export const ScoreBoard: FC<ScoreBoardProps> = ({ score }) => (
  <div className='flex items-center my-8'>
    <span className='mr-4'>Score</span>
    <span>You: {score.user}</span>
    <span className='mx-2'>-</span>
    <span>Computer: {score.computer}</span>
  </div>
);
