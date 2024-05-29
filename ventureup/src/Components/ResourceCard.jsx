import React from 'react';

// this should be clickable and then resources ka visualization
export function ResourceCard({ res }) {
  return (
    <div className='resource-card card' style={{ "border": "1px solid black", "margin": "10px" }}>
      <h1>{res.title}</h1>
      <h6>{res.topic} , {res.type}, {res.by}, {res.popularity}</h6>
    </div>
  );
}
