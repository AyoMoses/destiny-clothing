import React from 'react';
import './skeleton.styles.scss';

export const Skeleton = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-img skeleton"></div>
          <div className="card-body">
            <h2 className="card-title skeleton"></h2>
            <p className="card-intro skeleton"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
