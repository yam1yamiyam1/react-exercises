import { products } from './data.js';

// Use { product } to "unpack" the data we pass in
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
  // Grab just the first product from your data.js array to test
  return (
    <div>
      <h1>React Training</h1>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default App;
