import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleDropDownToggle = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={handleDropDownToggle}>
      <StyledShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
