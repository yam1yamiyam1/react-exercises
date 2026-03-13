import { useState } from 'react';

const ActionLogger = () => {
  const [logs, setLogs] = useState([]);
  const handleAdd = () => {
    setLogs((prev) => [...prev, 'Item added']);
  };
  const handleRemove = () => {
    setLogs((prev) => [...prev, 'Item removed']);
  };

  const handleReset = () => {
    setLogs([]);
  };
  return (
    <div className="action-logger">
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
      <p>Actions logged: {logs.length}</p>
    </div>
  );
};

export default ActionLogger;
