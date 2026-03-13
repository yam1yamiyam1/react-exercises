import { useState } from 'react';

const EventInspector = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({ username: '', email: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = (e) => {
    setLogs([...logs, e.currentTarget.dataset.label]);
  };
  return (
    <div className="event-inspector">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <p>Username: {form.username}</p>
      <p>Email: {form.email}</p>
      <button data-label="primary" onClick={handleClick}>
        Primary
      </button>
      <button data-label="secondary" onClick={handleClick}>
        Secondary
      </button>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>Clicked: {log}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventInspector;
