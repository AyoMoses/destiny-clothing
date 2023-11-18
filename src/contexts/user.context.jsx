import { createContext, useState } from 'react';

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
