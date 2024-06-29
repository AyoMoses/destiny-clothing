import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartContext);
  const handleDropDownToggle = () => setIsCartOpen(!isCartOpen);

  // const handleDropDownToggle = () => {
  //   setIsCartOpen((prevOpen) => !prevOpen);
  // };
  return (
    <CartIconContainer onClick={handleDropDownToggle}>
      <StyledShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
