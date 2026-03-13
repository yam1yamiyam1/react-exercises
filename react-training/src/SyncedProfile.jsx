import { useEffect, useState } from 'react';

const SyncedProfile = () => {
  const [username, setUsername] = useState('Gojo');
  const [status, setStatus] = useState('online');
  const [logCount, setLogCount] = useState(0);
  useEffect(() => {
    document.title = `${username}'s Profile`;
  }, [username]);
  useEffect(() => {
    setLogCount((count) => count + 1);
  }, [status]);
  useEffect(() => {
    console.log(`Status changed ${logCount} times`);
  }, [logCount]);
  return (
    <div className="synced-profile">
      <p>User: {username}</p>
      <p>Status: {status}</p>
      <p>Status changes: {logCount}</p>
      <button
        onClick={() => setStatus(status === 'online' ? 'offline' : 'online')}
      >
        Toggle Status
      </button>
      <button onClick={() => setUsername('Sukuna')}>Change User</button>
    </div>
  );
};

export default SyncedProfile;
