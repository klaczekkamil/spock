import { Choice } from '@/types/Choice.type';

export interface GameResultProps {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
  onEndGame: () => void;
}
