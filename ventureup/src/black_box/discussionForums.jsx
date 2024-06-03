import React, { useState, useEffect } from 'react';
import './discussionForums.css';
import { useParams } from 'react-router-dom';

function DiscussionForums() {
  const [forums, setForums] = useState([{id:1,name:"Lorem"},{id:2,name:"Doler"}]);
  // const { id } = useParams();
  const [selectedForum, setSelectedForum] = useState(0);
  // if(id == null) setSelectedForum(0);
  const [comments, setComments] = useState([{id:1,text:"Hey Guys",author:"John",date:"17th April",forumid: 1},{id:1,text:"Heysss",author:"Bob",date:"17th April",forumid: 2}]);
  const [comment, setComment] = useState("")

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(comment);
    // const userId = 0;
    const text = comment;
    const author = "John";
    const date = new Date();

    setComments([...comments, {id:comments.length,text:comment, author: author, date: date.toISOString(),forumid : selectedForum}]);
    setComment("");
  }

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
          <div style={{"overflow-y":"scroll","overflow-x":"hidden"}}>
            <h2>{forums.find(forum => forum.id === selectedForum).name}</h2>
            <ul>
              {comments.map(comment => {
                if(comment.forumid != selectedForum){
                  return (null);
                }

                return(
                  <li key={comment.id}>
                    <p>{comment.text}</p>
                    <p>Posted by {comment.author} on {comment.date}</p>
                  </li>
                );
              })}
            </ul>
            <form>
              <textarea placeholder="Add a comment..." value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
              <button type="submit" onClick={handleSubmit}>Post</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscussionForums;