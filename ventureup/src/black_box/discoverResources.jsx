import React, { useState, useEffect } from 'react';
import './discovermore.css';
import Resources from '../Components/ResourcesComponent';

function DiscoverResources() {

  
//   const author = {
//     name: 'John Doe',
//     title: 'Software Engineer',
//     image: 'https://example.com/author.jpg',
//   };

//   const content = 'This is an example post with some content.';

  
  const resource = {
    title: "Startup Guide",
    description: "Paise he paisa hoga"
  }

  const [resources, setResources] = useState([{id:0, resource: resource}]);
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

  const fetchResources = () => {
    // Fetch resources from API or database
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => setResources([...resources, ...data]));
  };

  const handleScroll = () => {
    if (loading) return;
    if (hasMore) {
      setLoading(true);
      fetchResources();
      setLoading(false);
    }
  };

  return (
    <div className="discover-more">
      <h1>Discover Resources</h1>
      <div className="infinite-list" onScroll={handleScroll}>
        {resources.map(res => (
          // <div key={resource.id} className="resource">
          //   <h2>{resource.title}</h2>
          //   <p>{resource.description}</p>
          // </div>
          <Resources resource={res.resource}/>
        ))}
        {loading && <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default DiscoverResources;