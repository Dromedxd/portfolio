import React from 'react';
import reactIcon from './images/reactIcon.JPG';
import Avatar from '@mui/material/Avatar';

function Logo() {
  return (
    <Avatar
      src={reactIcon}
      alt="React logo"
      style={{ width: '100px', height: 'auto' }}
    />
  );
}

export default Logo;
