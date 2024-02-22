// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className='navbar-container'>
        <Logo />
        <button className='navbar-toggle' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to='#'>Home</Link>
          </li>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Services</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
        <div className='auth-links'>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
