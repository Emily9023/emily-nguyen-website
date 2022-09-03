import React from 'react';
import './404.scss';

const Page404 = () => {
  return (
    <div className="error404-container">
      <div className="error404-sky" />
      <div style={{ margin: 'auto auto' }}>
        <h1>Error 404</h1>
        <h2>Page not found</h2>
      </div>
    </div>
  );
};

export { Page404 };
