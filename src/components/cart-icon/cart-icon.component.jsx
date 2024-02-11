import './cart-icon.styles.scss';

// import ShoppingIcon from '../../assets/shopping-bag.svg';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
