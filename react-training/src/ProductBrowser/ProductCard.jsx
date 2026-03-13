const ProductCard = ({ product, onSelect }) => {
  const { name, price } = product;
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => onSelect(product)}>Select</button>
    </div>
  );
};

export default ProductCard;
