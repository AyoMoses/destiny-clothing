import React from 'react';

export const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};
