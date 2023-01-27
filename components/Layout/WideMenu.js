import Link from 'next/link';
import React from 'react';

const WideMenu = ({ links }) => {
  return (
    <nav>
      <ul className="flex items-center">
        {links.map((link, index) => (
          <li key={index} className="mx-4">
            <Link
              className="text-black text-lg font-medium hover:text-gray-500"
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WideMenu;
