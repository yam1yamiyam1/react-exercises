import { useState } from 'react';

const GuestList = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setGuests((prev) => [...prev, { id: Date.now(), name: name.trim() }]);
    setName('');
  };
  return (
    <div className="guest-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guest name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Guest</button>
      </form>
      <p>{guests.length} guests</p>
      <ul>
        {guests.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
