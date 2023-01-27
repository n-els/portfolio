import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-4">
      <div>
        <Image src="/images/logo.png" width={80} height={50} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
