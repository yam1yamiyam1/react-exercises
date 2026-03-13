import { useState } from 'react';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
  { id: 5, name: 'Eve' },
];
const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const filteredUsers = users.filter(({ name }) =>
    name.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <p>
        Showing {filteredUsers.length} of {users.length}
      </p>
      <ul>
        {filteredUsers.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
