import React from 'react';
import './ResourcesComponent.css';

const Resources = ({ resource }) => {

  const handleClick = ()=>{
    // Open the resource and more information about it
    // one can save the resource , open it in a new tab, etc
  }

  return (
    <div className="resource" onClick={handleClick}>
      <header className="resource-header">
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
      </header>
      <div className="resource-actions">
        <button className="like-button">Like</button>
        <button className="share-button">Share</button>
        <button className="comment-button">Comment</button>
      </div>
    </div>
  );
};

// const resource = {
//     title: "Startup Guide",
//     description: "Paise he paisa hoga"
// }

export default Resources;