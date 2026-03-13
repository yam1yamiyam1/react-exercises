import { useEffect, useState } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(id);
    }
  }, [isRunning]);
  return (
    <div className="live-clock">
      <h2>{isRunning ? time : 'Stopped'}</h2>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};

export default LiveClock;
