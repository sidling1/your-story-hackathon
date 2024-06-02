import React from 'react';
import './ConnectionsComponent.css';

const Connections = () => {
  return (
    <div className="connection">
      <div className="profile-photo">
        <img src={require('../black_box/sidj.jpg')} alt="sid" />
      </div>
      <div className="name">
        <h2>John Doe</h2>
      </div>
      <div className="send-connection-request">
        <button>Send Connection Request</button>
      </div>
    </div>
  );
};

export default Connections;