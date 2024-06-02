import React from 'react';
import '../styles/blackboxprofile.css';

const MyPage = ({ user }) => {
  return (
    <div className="container">
      <main className="content">
        <div className="profile">
          <img src={require('./sidj.jpg')} alt="Siddhant" className="profile-picture" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.bio}</p>
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