import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavBar() {

  return (
    <div className="navbar">
        <div class="navbar-brand"><Link to="/home">Logo Here</Link></div>
        <ul class="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
    </div>
  )
}
