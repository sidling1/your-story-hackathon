import React, { useState, useEffect, useContext } from 'react';
import './landingPage.css';
import Connections from '../Components/ConnectionsComponent';
import Resources from '../Components/ResourcesComponent';
// import Post from '../Components/PostComponent';

const author = {
  name: 'John Doe',
  title: 'Software Engineer',
  image: 'https://example.com/author.jpg',
};

const content = 'This is an example post with some content.';


const resource = {
  title: "Startup Guide",
  description: "Paise he paisa hoga"
}

function HomePage() {
  const [chatGroups, setChatGroups] = useState([{id: 0, link: '#',name: 'lorem'},{id: 1, link: '#',name: 'delor'}]);
  const [connections, setConnections] = useState([1,2,3]);
  const [articles, setArticles] = useState([{res: resource, post: null},{res:null, post: {author: author, content: content}}]);
  const [events, setEvents] = useState([{id:0,title:'Startup Meetup',date:'20th January 2024'}]);


 
  const handleChatClick = (e)=>{

  }

  return (
    <div style={{'overflow': 'auto','max-height':'100vh'}}>
      <h1>Hey John Doe !! </h1>
      <main>
        <section>
          <h2>Recommended Chat Groups</h2>
          <ul>
            {chatGroups.map(group => (
              <li key={group.id} onClick={handleChatClick}>
                <a href={group.link}>{group.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Recommended Connections</h2>
          <ul>
            {connections.map(connection => (
              // <li key={connection.id}>
              //   <a href={connection.link}>{connection.name}</a>
              // </li>
              <Connections/>
            ))}
          </ul>
        </section>

        <section>
          <h2>Recommended Articles</h2>
          <ul>
            {articles.map(article => (
              // <li key={article.id}>
              //   <a href={article.link}>{article.title}</a>
              // </li>
              <>
              {article.res && <Resources resource={article.res}/>}
              {/* {article.post && <Post author={article.post.author} content={article.post.content}/>} */}
              </>
            ))}
          </ul>
        </section>

        <section>
          <h2>Event Calendar</h2>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HomePage;