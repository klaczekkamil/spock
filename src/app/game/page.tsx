"use client";
import { FC, useState, useCallback } from "react";
import { Choice } from "@/types/Choice.type";
import { options, getRandomChoice, determineWinner } from "@helpers";
import { GameControls } from "./components/GameControls";
import { GameResult } from "./components/GameResult";
import { ScoreBoard } from "./components/ScoreBoard";
import { FinalResults } from "./components/FinalResults";

const GamePage: FC = () => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  const updateScore = useCallback((resultText: string) => {
    setScore((prevScore) => ({
      user: prevScore.user + (resultText === "You win!" ? 1 : 0),
      computer: prevScore.computer + (resultText === "Computer wins!" ? 1 : 0),
    }));
  }, []);

  const handleUserChoice = useCallback(
    (choice: Choice) => {
      const compChoice = getRandomChoice();
      setUserChoice(choice);
      setComputerChoice(compChoice);
      const resultText = determineWinner(choice, compChoice);

      setResult(resultText);
      updateScore(resultText);
      setGameEnded(true);
    },
    [updateScore]
  );

  const resetChoices = useCallback(() => {
    setUserChoice(null);
    setComputerChoice(null);
  }, []);

  const handleOnEndGame = useCallback(() => {
    resetChoices();
    setResult("");
  }, [resetChoices]);

  const handleOnResetGame = useCallback(() => {
    resetChoices();
    setScore({ user: 0, computer: 0 });
    setGameEnded(false);
  }, [resetChoices]);

  return (
    <main className='min-h-screen flex flex-col items-center mt-12'>
      <h1 className='text-xl sm:text-3xl font-bold mb-6'>Choose Your Weapon</h1>

      <GameControls options={options} onUserChoice={handleUserChoice} />

      {userChoice && computerChoice && (
        <>
          <GameResult
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={result}
            onEndGame={handleOnEndGame}
          />
          <ScoreBoard score={score} />
        </>
      )}

      {!userChoice && gameEnded && (
        <FinalResults score={score} onResetGame={handleOnResetGame} />
      )}
    </main>
  );
};

export default GamePage;
