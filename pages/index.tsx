import { useState } from 'react';

export default function Home() {
  // State to hold the random number
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  // Function to generate a random number
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
    setRandomNumber(number);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <button onClick={generateRandomNumber}>New Card!</button>
      {randomNumber !== null && (
        <div className="flex items-center justify-center text-6xl">
          {randomNumber}
        </div>
      )}
    </main>
  );
}
