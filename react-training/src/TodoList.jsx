import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Write code', completed: false },
    { id: 3, text: 'Go outside', completed: false },
  ]);
  const [input, setInput] = useState('');
  const todosCount = todos.length;
  const completedCount = todos.filter(({ completed }) => completed).length;
  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput('');
  };
  const handleDelete = (targetId) => {
    setTodos((prev) => prev.filter(({ id }) => id !== targetId));
  };
  const handleToggle = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {text}
            </span>
            <button onClick={() => handleToggle(id)}>✓</button>
            <button onClick={() => handleDelete(id)}>✕</button>
          </li>
        ))}
      </ul>
      <p>
        {completedCount} / {todosCount} completed
      </p>
    </div>
  );
};

export default TodoList;
