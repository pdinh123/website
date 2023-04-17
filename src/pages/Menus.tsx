import React from 'react';

import Header from '../components/Header';
import MenuDisplay from '../components/Menu-Display';

const Menus = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
        >
          <Header />
          <MenuDisplay />
        </div>
      </div>
    </>
  );
};

export default Menus;
