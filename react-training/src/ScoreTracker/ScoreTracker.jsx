import { useState } from 'react';
import ScoreControls from './ScoreControls.jsx';
import ScoreDisplay from './ScoreDisplay.jsx';

const ScoreTracker = () => {
  const [score, setScore] = useState(0);
  const handleIncrement = () => {
    setScore((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (score === 0) return;
    setScore((prev) => prev - 1);
  };
  const handleReset = () => {
    setScore(0);
  };
  return (
    <div>
      <ScoreDisplay score={score} />
      <ScoreControls
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    </div>
  );
};

export default ScoreTracker;
