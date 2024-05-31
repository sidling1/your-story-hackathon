import React from 'react';
import '../styles/blackboxprofile.css';

const MyPage = () => {
  return (
    <div className="container">
      <header className="navbar">
        <h2>Navbar</h2>
      </header>
      <main className="content">
        <div className="profile">
          <img src="../../public/sidj.jpg" alt="Siddhant" className="profile-picture" />
          <h2>My Name</h2>
          <p>my_email@example.com</p>
        </div>
        <div className="information">
          <h2>Information</h2>
          <ul>
            <li>
              <h3>Information 1</h3>
              <p>This is some information about something.</p>
            </li>
            <li>
              <h3>Information 2</h3>
              <p>This is some more information about something else.</p>
            </li>
            <li>
              <h3>Information 3</h3>
              <p>This is even more information about something completely different.</p>
            </li>
            {/* Add more information items as needed */}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default MyPage;