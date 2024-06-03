import React, { useState } from 'react';
import './PostComponent.css';

const Post = ({ author, content }) => {
  const [likes, setLikes] = useState(0)

  const handleClick = ()=>{
    // Show the whole post and its comment section on click
    // full description, the person who has posted and all that stuff
    
  }

  return (
    <div className="post" onClick={handleClick}>
      <header className="post-header">
        <img src={require('../black_box/sidj.jpg')} alt={author.name} />
        <div className="post-author">
          <h3>{author.name}</h3>
          <p>{author.title}</p>
        </div>
      </header>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          Like <span>{likes}</span>
        </button>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
};


export default Post;