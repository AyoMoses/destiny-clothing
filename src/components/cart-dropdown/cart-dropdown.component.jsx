import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

export const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div>
      {isCartOpen && (
        <div className="cart-dropdown-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
      )}
    </div>
  );
};
