import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

export const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <>
      {isCartOpen && (
        <CartDropdownContainer>
          <CartItems>
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))
            ) : (
              <EmptyMessage>Your cart is empty!</EmptyMessage>
            )}
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
