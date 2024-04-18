import { React, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

export const Checkout = () => {
  const { cartItems, totalPrice, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  // const handleIncrement = (itemId) => {
  //   incrementItemQuantity(itemId);
  // };

  // const handleDecrement = (itemId) => {
  //   decrementItemQuantity(itemId);
  // };

  // const handleRemoveItem = (cartItem) => {
  //   removeCartItem(productId);
  // };

  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, imageUrl, name, quantity, price } = cartItem;
          return (
            <div key={id}>
              <img src={imageUrl} alt={name} />
              <p>{name}</p>

              <div>
                <button
                  type="button"
                  onClick={() => removeItemToCart(cartItem)}
                >
                  decrement
                </button>

                <p>Quantity: {quantity}</p>

                <button type="button" onClick={() => addItemToCart(cartItem)}>
                  increment
                </button>
              </div>

              <p>Item Price: ${quantity * price}</p>

              {/* 
                <button type="button" onClick={() => handleRemoveItem(id)}>
                remove {`${quantity > 1 ? 'items' : 'item'}`}
                </button>
              */}
            </div>
          );
        })}

        <p>Total price: ${totalPrice}</p>
      </div>
    </div>
  );
};
