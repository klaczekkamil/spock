import { Choice } from '@/types/Choice.type';

const wins: Record<Choice, Choice[]> = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

export const determineWinner = (userChoice: Choice, computerChoice: Choice): string => {
  if (userChoice === computerChoice) return "It's a tie!";

  return wins[userChoice].includes(computerChoice)
    ? "You win!"
    : "Computer wins!";
};
