import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const handleDropDownToggle = () => {
    setIsCartOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleDropDownToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
