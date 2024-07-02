import { CART_ACTION_TYPES } from './cart.types';

// what to keep track of in my state with value to return and value to update
export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  // destructure the two types from the action
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
