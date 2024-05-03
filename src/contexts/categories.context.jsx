import { createContext, useEffect, useState } from 'react';

import { getCatgoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategorieMap] = useState({});
  // manually push data to firestore from frontend and save database
  useEffect(() => {
    // create a new async function inside our anonymous useEffect function. The proper way to use asyn in useEffect
    const getCategoriesMap = async () => {
      const categoryMap = await getCatgoriesAndDocuments();
      console.log(categoryMap);
      setCategorieMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
