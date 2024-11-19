import { Choice } from '@/types/Choice.type';
import { ChoiceEnum } from '@enums/Choice.enum';

export const options = Object.values(ChoiceEnum) as Choice[];

export const getRandomChoice = (): Choice =>
  options[Math.floor(Math.random() * options.length)];
