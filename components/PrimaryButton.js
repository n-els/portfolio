import React from 'react';

const PrimaryButton = ({ url, text, extern }) => {
  if (extern) {
    return (
      <a
        target="_blank"
        href={url}
        className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a
        href={url}
        className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
      >
        {text}
      </a>
    );
  }
};

export default PrimaryButton;
