import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';
import { CartItem } from '../cart-item/cart-item.component';

export const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  return (
    <div>
      {isCartOpen && (
        <div className="cart-dropdown-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Button buttonType="">GO TO CHECKOUT</Button>
        </div>
      )}
    </div>
  );
};
