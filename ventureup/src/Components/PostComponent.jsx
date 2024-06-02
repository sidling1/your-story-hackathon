import React, { useState } from 'react';
import './PostComponent.css';

const Post = ({ author, content }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post">
      <header className="post-header">
        <img src={author.image} alt={author.name} />
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

// const author = {
//   name: 'John Doe',
//   title: 'Software Engineer',
//   image: 'https://example.com/author.jpg',
// };

// const content = 'This is an example post with some content.';

// const App = () => {
//   return <Post author={author} content={content} />;
// };

export default Post;