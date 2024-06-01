import React, { useState, useEffect } from 'react';
import './discovermore.css';

function DiscoverMore() {
  const [posts, setPosts] = useState([{id:0,title:"Startup facts",content:"blahahaha"}]);
  const [resources, setResources] = useState([{id:0,title:"Startup facts",description:"blahahaha"}]);
  const [connections, setConnections] = useState([{id:0,name:"bb",bio:"goddess"}]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//     fetchResources();
//     fetchConnections();
//   }, []);

  const fetchPosts = () => {
    // Fetch posts from API or database
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts([...posts, ...data]));
  };

  const fetchResources = () => {
    // Fetch resources from API or database
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => setResources([...resources, ...data]));
  };

  const fetchConnections = () => {
    // Fetch connections from API or database
    fetch('/api/connections')
      .then(res => res.json())
      .then(data => setConnections([...connections, ...data]));
  };

  const handleScroll = () => {
    if (loading) return;
    if (hasMore) {
      setLoading(true);
      fetchPosts();
      fetchResources();
      fetchConnections();
      setLoading(false);
    }
  };

  return (
    <div className="discover-more">
      <h1>Discover More</h1>
      <div className="infinite-list" onScroll={handleScroll}>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
        {resources.map(resource => (
          <div key={resource.id} className="resource">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
          </div>
        ))}
        {connections.map(connection => (
          <div key={connection.id} className="connection">
            <h2>{connection.name}</h2>
            <p>{connection.bio}</p>
          </div>
        ))}
        {loading && <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default DiscoverMore;