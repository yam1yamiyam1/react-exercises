const products = [
  { id: 1, name: 'Sword', price: 100, category: 'weapon', inStock: true },
  { id: 2, name: 'Shield', price: 80, category: 'armor', inStock: true },
  { id: 3, name: 'Potion', price: 20, category: 'consumable', inStock: false },
  { id: 4, name: 'Armor', price: 150, category: 'armor', inStock: true },
  { id: 5, name: 'Bow', price: 90, category: 'weapon', inStock: false },
];

const ProductList = () => {
  return (
    <ul>
      {products
        .filter(({ inStock }) => inStock)
        .map((p) => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <p>{p.category}</p>
            {p.price > 85 && <span>Premium</span>}
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
