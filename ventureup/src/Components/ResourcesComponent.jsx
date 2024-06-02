import React from 'react';
import './ResourcesComponent.css';

const Resources = ({ resource }) => {
  return (
    <div className="resource">
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