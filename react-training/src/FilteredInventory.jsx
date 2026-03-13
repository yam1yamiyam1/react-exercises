import { useState } from 'react';
const inventory = [
  { id: 1, name: 'Sword', category: 'weapon', price: 100 },
  { id: 2, name: 'Shield', category: 'armor', price: 80 },
  { id: 3, name: 'Potion', category: 'consumable', price: 20 },
  { id: 4, name: 'Armor', category: 'armor', price: 150 },
  { id: 5, name: 'Bow', category: 'weapon', price: 90 },
];
const FilteredInventory = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const filteredItems =
    filter === 'all'
      ? inventory
      : inventory.filter(({ category }) => category === filter);
  const visibleItems = [...filteredItems].sort((a, b) => {
    const isString = typeof a[sortBy] === 'string';
    if (isString) {
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      return a[sortBy] - b[sortBy];
    }
  });
  const filters = ['All', 'Weapon', 'Armor', 'Consumable'];
  return (
    <div className="filtered-inventory">
      <div>
        {filters.map((f, index) => (
          <button key={index} onClick={() => setFilter(f.toLowerCase())}>
            {f}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => setSortBy('name')}>Sort by Name</button>
        <button onClick={() => setSortBy('price')}>Sort by Price</button>
      </div>
      <ul>
        {visibleItems.map(({ id, name, price }) => (
          <li key={id}>
            {name} - ${price}
          </li>
        ))}
      </ul>
      <p>Showing {visibleItems.length} items</p>
    </div>
  );
};

export default FilteredInventory;
