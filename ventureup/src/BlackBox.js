import React, { useState } from 'react';
import './index.css';

function CreateAccount() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic here
    console.log('Form submitted:', { fullName, email, password });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Create Account</h1>
      </div>
      <div className="social-buttons">
        <button className="google-button">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" />
          Sign up with Google
        </button>
        <button className="facebook-button">
          <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook logo" />
          Sign up with Facebook
        </button>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create account</button>
        </form>
        <div className="login-link">
          Already have an account? <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
