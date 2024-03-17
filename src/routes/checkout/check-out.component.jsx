import { React, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss'

export const Checkout = () => {
  const {
    cartItems,
    totalPrice,
    incrementItemQuantity,
    decrementItemQuantity,
    removeCartItem,
  } = useContext(CartContext);

  const handleIncrement = (itemId) => {
    incrementItemQuantity(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementItemQuantity(itemId);
  };

  const handleRemoveItem = (productId) => {
    removeCartItem(productId);
  };

  return (
    <div>
      {cartItems.map((cartItem) => (
        <div>
          <img src={cartItem.imageUrl} alt={cartItem.name} />
          <p>{cartItem.name}</p>

          <div>
            <button type="button" onClick={() => handleDecrement(cartItem.id)}>
              minus
            </button>

            <p>Quantity: {cartItem.quantity}</p>

            <button type="button" onClick={() => handleIncrement(cartItem.id)}>
              plus
            </button>
          </div>

          <p>Item Price: ${cartItem.quantity * cartItem.price}</p>

          <button type="button" onClick={() => handleRemoveItem(cartItem.id)}>
            remove {`${cartItem.quantity > 1 ? 'items' : 'item'}`}
          </button>
        </div>
      ))}

      <p>Total price: ${totalPrice}</p>
    </div>
  );
};
