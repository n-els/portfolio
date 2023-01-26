import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <Image src="/images/logo.png" width={80} height={50} />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
