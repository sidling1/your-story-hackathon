import React, { useState, useEffect } from 'react';
import './discussionForums.css';

function DiscussionForums() {
  const [forums, setForums] = useState([{id:1,name:"Sid"},{id:2,name:"Dee"}]);
  const [selectedForum, setSelectedForum] = useState(0);
  const [comments, setComments] = useState([{id:0,text:"Hey Guys",author:"Sid",date:"17th April"},{id:1,text:"Heysss",author:"Dee",date:"17th April"}]);

//   useEffect(() => {
//     // Fetch forums from API or database
//     fetch('/api/forums')
//      .then(res => res.json())
//      .then(data => setForums(data));
//   }, []);

  const handleForumSelect = (forumId) => {
    // Fetch comments for selected forum
    // fetch(`/api/forums/${forumId}/comments`)
    //  .then(res => res.json())
    //  .then(data => setComments(data));
    setSelectedForum(forumId);
  };

  return (
    <div className="discussion-forums">
      <div className="forums-list">
        <h2>Forums</h2>
        <ul>
          {forums.map(forum => (
            <li key={forum.id}>
              <a href="#" onClick={() => handleForumSelect(forum.id)}>
                {forum.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-forum">
        {selectedForum && (
          <div>
            <h2>{forums.find(forum => forum.id === selectedForum).name}</h2>
            <ul>
              {comments.map(comment => (
                <li key={comment.id}>
                  <p>{comment.text}</p>
                  <p>Posted by {comment.author} on {comment.date}</p>
                </li>
              ))}
            </ul>
            <form>
              <textarea placeholder="Add a comment..."></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscussionForums;