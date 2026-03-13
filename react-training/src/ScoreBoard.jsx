import { useState } from 'react';

const ScoreBoard = () => {
  const [score, setScore] = useState(0);
  const isWinning = score >= 10;
  return (
    <div>
      <h2>{isWinning ? "You're Winning!" : 'Keep Going...'}</h2>
      <div className="score-board">{score}</div>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+1</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
};

export default ScoreBoard;
