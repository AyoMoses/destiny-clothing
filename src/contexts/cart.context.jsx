import { createContext, useState } from 'react';

// create a helper function that adds an item to cart using the id of the product. If the id exists, it increments the current one. If not, it adds a new item

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains product to add
  // if found, increment quantity
  // return new array with modified new items/new cart items
  if (cartItems === productToAdd) {
    cartItems = cartItems + 1;
    cartItems+=1;
  } else {

  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
