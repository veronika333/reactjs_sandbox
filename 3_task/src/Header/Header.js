import React from 'react';
import './Header.css';

const Header = () => {
  const date = new Date();
  return (
    <div>
      <h1>Counter</h1>
  <h4>Today is {date.toDateString()}</h4>
    </div>
  );
};



export default Header;