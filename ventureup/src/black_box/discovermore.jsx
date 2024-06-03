import React, { useState, useEffect } from 'react';
import './discovermore.css';
import Post from '../Components/PostComponent';
import Resources from '../Components/ResourcesComponent';
import Connections from '../Components/ConnectionsComponent';

function DiscoverMore() {

  
  const author = {
    name: 'John Doe',
    title: 'Software Engineer',
    image: 'https://example.com/author.jpg',
  };

  const content = 'This is an example post with some content.';

  
  const resource = {
    title: "Startup Guide",
    description: "lorem ipsum delor gol"
  }

  const [posts, setPosts] = useState([{id: 0,author: author, content: content}]);
  const [resources, setResources] = useState([{id:0, resource: resource}]);
  const [connections, setConnections] = useState([{id:0,name:"bb",bio:"goddess"}]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//     fetchResources();
//     fetchConnections();
//   }, []);

  // useEffect(()=>{
  //   const temp = []
  //   for(let i=0;i<1000;i++){
  //     temp.push({id:i,title:"Startup facts",content:"blahahaha"});
  //   }
  //   setPosts(temp);
  // },[]);

  const handleScroll = () => {
    if (loading) return;
    if (hasMore) {
      setLoading(true);
      setLoading(false);
    }
  };

  return (
    <div className="discover-more">
      <h1>Discover More</h1>
      <div className="infinite-list" onScroll={handleScroll}>
        {posts.map(post => (
          <Post author={post.author} content={post.content}/>
        ))}
        {resources.map(res => (
          // <div key={resource.id} className="resource">
          //   <h2>{resource.title}</h2>
          //   <p>{resource.description}</p>
          // </div>
          <Resources resource={res.resource}/>
        ))}
        {connections.map(connection => (
          // <div key={connection.id} className="connection">
          //   <h2>{connection.name}</h2>
          //   <p>{connection.bio}</p>
          // </div>
          <Connections/>
        ))}
        {loading && <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default DiscoverMore;