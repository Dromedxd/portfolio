import React from 'react';
import reactIcon from './images/reactIcon.JPG';

function Logo() {
  return (
    <img
      src={reactIcon}
      alt="React logo"
      style={{ width: '100px', height: 'auto' }}
    />
  );
}

export default Logo;
