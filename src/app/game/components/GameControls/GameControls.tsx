import { FC } from "react";
import { Button } from "@components/ui/button";
import { GameControlsProps } from "./GameControls.props";

export const GameControls: FC<GameControlsProps> = ({
  options,
  onUserChoice,
}) => (
  <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mb-8'>
    {options.map((option) => (
      <Button key={option} onClick={() => onUserChoice(option)}>
        {option}
      </Button>
    ))}
  </div>
);

export default GameControls;
