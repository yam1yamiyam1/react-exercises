import { useState } from 'react';

const CartSummary = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Sword', price: 100, quantity: 2 },
    { id: 2, name: 'Shield', price: 80, quantity: 1 },
    { id: 3, name: 'Potion', price: 20, quantity: 3 },
  ]);
  const itemCount = items.length;
  const isEmpty = itemCount === 0;
  const totalQty = items.reduce((total, { quantity }) => total + quantity, 0);
  const subtotal = items.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  return (
    <div className="cart-summary">
      {isEmpty ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map(({ id, name, quantity, price }) => (
              <li key={id}>
                {name} x{quantity} - ${price * quantity}
              </li>
            ))}
          </ul>
          <p>Items: {itemCount}</p>
          <p>Total Qty: {totalQty}</p>
          <p>Subtotal: ${subtotal}</p>
          <button onClick={() => setItems([])}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
