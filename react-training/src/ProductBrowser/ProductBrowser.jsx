import { useState } from 'react';
import ProductGrid from './ProductGrid.jsx';
import products from './data.js';

const ProductBrowser = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="product-browser">
      <ProductGrid products={products} onSelect={setSelected} />
      {selected && (
        <div className="selection">
          Selected: {selected.name} — ${selected.price}
        </div>
      )}
    </div>
  );
};

export default ProductBrowser;
