import ProductCard from './ProductCard.jsx';

const ProductGrid = ({ products, onSelect }) => {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ProductGrid;
