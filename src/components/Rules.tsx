import React from "react";

const rules = [
  "Scissors cuts paper",
  "Paper covers rock",
  "Rock crushes lizard",
  "Lizard poisons Spock",
  "Spock smashes scissors",
  "Scissors decapitates lizard",
  "Lizard eats paper",
  "Paper disproves Spock",
  "Spock vaporizes rock",
  "Rock crushes scissors",
];

export const Rules: React.FC = () => {
  return (
    <div className='mt-4 p-4 max-w-md'>
      <h2 className='text-md sm:text-2xl font-semibold mb-2'>Game Rules:</h2>
      <ul className='list-disc space-y-1'>
        {rules.map((rule) => (
          <li key={rule} className='text-md'>
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};
