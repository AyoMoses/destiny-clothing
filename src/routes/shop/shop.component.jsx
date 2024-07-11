import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/category.action';

export const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};
