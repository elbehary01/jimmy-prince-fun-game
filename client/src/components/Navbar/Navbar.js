// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
