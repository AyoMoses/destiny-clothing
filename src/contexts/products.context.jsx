import { createContext, useEffect, useState } from 'react';

import { getCatgoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // manually push data to firestore from frontend and save database
  // useEffect(() => {
  //   AddCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  useEffect(() => {
    // create a new async function inside our anonymous useEffect function. The proper way to use asyn in useEffect
    const getCategoriesMap = async () => {
      const categoryMap = await getCatgoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
