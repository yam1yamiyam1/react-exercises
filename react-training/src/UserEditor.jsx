import { useState } from 'react';

const UserEditor = () => {
  const [user, setUser] = useState({ name: 'Alice', role: 'user', age: 25 });
  return (
    <div className="user-editor">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Age: {user.age}</p>
      <button
        disabled={user.role === 'admin'}
        onClick={() => setUser((u) => ({ ...u, role: 'admin' }))}
      >
        Promote
      </button>
      <button onClick={() => setUser((u) => ({ ...u, age: u.age + 1 }))}>
        Birthday
      </button>
    </div>
  );
};

export default UserEditor;
