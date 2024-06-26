import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import { Authentication } from './routes/authentication/authentication.component';
import { Shop } from './routes/shop/shop.component';
import { Checkout } from './routes/checkout/check-out.component';

import { setCurrentUser } from './store/user/user.action';

const App = () => {
  // use dispatch is a hook gotten from redux
  // the dispatch does not also change in useEffect. It stays the same but added to make lint error go away as react does not know
  const dispatch = useDispatch();

  useEffect(() => {
    // once component getMouseEventOptions, check for the user state if signed in or out

    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      // if the user signs out, we want to store null. If the user signs in, we want to store the object
      // dispatch action to root reducer ch passes the action to every reducer function
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/*when path matches this url, render this element*/}
        <Route index element={<Home />} />

        {/*wild card to mean... match shop with any link that follows */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
