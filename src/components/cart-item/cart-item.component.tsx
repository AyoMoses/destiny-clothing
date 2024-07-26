import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemName,
} from './cart-item.styles';

type CartItemProps = {
  cartItem: {
    name: string;
    quantity: number;
    imageUrl: string;
    price: number;
  };
};

export const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
