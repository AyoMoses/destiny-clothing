import { createContext, useEffect, useReducer } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  // current user is an actual object
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

// we write reducer to change the state. It takes the PREVIOUS STATE and an ACTION
// Then we reduce it(read only) to one entity: the new updated instance state
const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // MAKE A COPE OF THE ENTIRE STATE SINCE STATE IS IMMMUTABLE. MAKE OUR CHAGES AND RETURN THE CURRENT USER PAYLOAD 
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// reducer initial state
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // for this provider we initiate a value and setstate function which is null by default
  // const [currentUser, setCurrentUser] = useState(null);

  // useReducer hook takes two arguments. 1. the particular reducer function. 2. The initial state
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  // the value is an object which we pass to the provider
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // once component getMouseEventOptions, check for the user state if signed in or out

    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      // if the user signs out, we want to store null. If the user signs in, we want to store the object
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
