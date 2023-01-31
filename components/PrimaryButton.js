import React from 'react';

const PrimaryButton = ({ url, text, extern }) => {
  if (extern) {
    return (
      <a
        target="_blank"
        href={url}
        className="border-2 border-black p-2 transition-colors duration-300 hover:bg-black hover:text-white"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a
        href={url}
        className="border-2 border-black p-2 transition-colors duration-300 hover:bg-black hover:text-white"
      >
        {text}
      </a>
    );
  }
};

export default PrimaryButton;
