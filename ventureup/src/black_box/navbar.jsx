import React from 'react';
import { Link } from 'react-router-dom';
import  './navbar.css';
// import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className='navbar-links'>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/discussions">Discussion Forum</Link>
        </li>
        <li>
          <Link to="/discover">Discover More</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;