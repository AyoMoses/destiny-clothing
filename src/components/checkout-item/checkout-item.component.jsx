import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  CheckoutName,
  CheckoutQuantity,
  CheckoutPrice,
  RemoveButton,
  CheckoutArrow,
  CheckoutValue,
} from './checkout-item.styles.jsx';

export const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const removeItemtHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutArrow onClick={removeItemtHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={addItemHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice>${price * quantity}</CheckoutPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
