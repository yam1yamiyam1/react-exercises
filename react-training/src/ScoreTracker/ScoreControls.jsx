const ScoreControls = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className="score-controls">
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ScoreControls;
