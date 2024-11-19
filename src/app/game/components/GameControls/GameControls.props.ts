import { Choice } from '@/types/Choice.type';

export interface GameControlsProps {
  options: Choice[];
  onUserChoice: (choice: Choice) => void;
}
