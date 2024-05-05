import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalCartQuantity } =
    useContext(CartContext);
  const handleDropDownToggle = () => setIsCartOpen(!isCartOpen);

  // const handleDropDownToggle = () => {
  //   setIsCartOpen((prevOpen) => !prevOpen);
  // };
  return (
    <CartIconContainer onClick={handleDropDownToggle}>
      <StyledShoppingIcon className="shopping-icon" />
      <ItemCount>{totalCartQuantity}</ItemCount>
    </CartIconContainer>
  );
};
