import React from 'react';
import { Skeleton } from '../components/skeleton/skeleton.component';

export const renderSkeletons = (count) => {
  return Array(count)
    .fill(0)
    .map((_, index) => <Skeleton key={index} />);
};
