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
  totalPrice: 0,
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  removeCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // accum all the quantities and storing in the cart context
  useEffect(() => {
    // get the total cart quantity
    const sumCartQuantity = () => {
      const total = cartItems.reduce(
        (acc, curItem) => acc + curItem.quantity,
        0
      );
      setTotalCartQuantity(total);
    };

    // get total cart items price
    const sumCartPrice = () => {
      const totalPrice = cartItems.reduce(
        (price, curItem) => price + curItem.quantity * curItem.price,
        0
      );
      setTotalPrice(totalPrice);
    };

    sumCartQuantity();
    sumCartPrice();
  }, [cartItems]);

  // add item to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // increment item quantity
  const incrementItemQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrement item quantity
  const decrementItemQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
    // if (itemId < 1) {
    //   setCartItems(cartItems.filter((itemId) => item.id !== itemId));
    // }
  };

  // remove cart item(s)
  const removeCartItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalCartQuantity,
    totalPrice,
    incrementItemQuantity,
    decrementItemQuantity,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
