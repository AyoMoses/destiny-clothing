import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  // current user is an actual object
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // for this provider we initiate a value and setstate function which is null by default
  const [currentUser, setCurrentUser] = useState(null);

  // the value is an object which we pass to the provider
  const value = { currentUser, setCurrentUser };

  useEffect(() => {

    // once component getMouseEventOptions, check for the user state if signed in or out 

    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
