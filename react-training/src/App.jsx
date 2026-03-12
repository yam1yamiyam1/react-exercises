import { useState } from 'react';
import { products } from './data.js';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: '0.5px solid black',
        padding: '10px',
      }}
    >
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>Category: {product.category}</div>
      <div>Quantity: {product.quantity}</div>
      <div style={{ color: !product.inStock ? 'red' : 'green' }}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </div>
    </div>
  );
};

function App() {
  const [allProducts] = useState(products);
  const [isHidden, setIsHidden] = useState(false);
  const displayedProducts = isHidden
    ? allProducts.filter((p) => p.inStock)
    : allProducts;
  return (
    <div>
      <h1>React Training</h1>
      <input
        onChange={() => {
          setIsHidden(!isHidden);
        }}
        checked={isHidden}
        type="checkbox"
      />
      <label>Hide Out of Stock</label>
      {displayedProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default App;
