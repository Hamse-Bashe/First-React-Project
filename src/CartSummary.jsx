import React, { useContext } from 'react';
import CartContext from './CartContext';

function CartSummary() {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default CartSummary;