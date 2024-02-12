import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div>
      {isCartOpen && (
        <div className="cart-dropdown-container">
          <div className="cart-items" />
          <Button buttonType="">GO TO CHECKOUT</Button>
        </div>
      )}
    </div>
  );
};
