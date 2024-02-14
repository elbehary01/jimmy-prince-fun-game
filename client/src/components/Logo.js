// src/components/Logo.js
import React from 'react';
import logo from "./logo.svg"
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
