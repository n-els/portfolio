import React from 'react';
import MobileMenu from './MobileMenu';
import WideMenu from './WideMenu';

const links = [
  {
    text: 'Start',
    href: '/',
  },
  {
    text: 'Projekte',
    href: '/',
  },
  {
    text: 'Fotos',
    href: '/',
  },
  {
    text: 'Kontakt',
    href: '/',
  },
];

const Navigation = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:block">
        <WideMenu links={links} />
      </div>
    </>
  );
};

export default Navigation;
