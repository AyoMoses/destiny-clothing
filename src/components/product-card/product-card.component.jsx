import { useContext, React } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';

import {
  ProductCardContainer,
  ProductCardImage,
  ProductButton,
  ProductFooter,
  ProductName,
  ProductPrice,
} from './product-card.styles.jsx';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>

      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ProductButton>
    </ProductCardContainer>
  );
};
