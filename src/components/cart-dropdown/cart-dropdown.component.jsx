import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

export const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <>
      {isCartOpen && (
        <CartDropdownContainer>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </CartItems>
          <Button
            onClick={goToCheckoutHandler}
            buttonType={BUTTON_TYPE_CLASSES.base}
          >
            GO TO CHECKOUT
          </Button>
        </CartDropdownContainer>
      )}
    </>
  );
};
