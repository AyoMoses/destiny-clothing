import { createContext, useEffect, useState } from 'react';

// create a helper function that adds an item to cart using the id of the product. If the id exists, it increments the current one. If not, it adds a new item
const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified new items/new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalCartQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // accum all the quantities and storing in the cart context
  useEffect(() => {
    const sumCartQuantity = () => {
      const total = cartItems.reduce(
        (acc, curItem) => acc + curItem.quantity,
        0
      );
      setTotalCartQuantity(total);
    };

    sumCartQuantity();
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalCartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
