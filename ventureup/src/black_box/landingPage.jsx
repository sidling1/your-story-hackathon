import React, { useState, useEffect } from 'react';
import './landingPage.css';

function Landing() {
  const [chatGroups, setChatGroups] = useState([]);
  const [connections, setConnections] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch chat groups, connections, articles, and events from an API or database
//     fetch('/api/chat-groups')
//       .then(res => res.json())
//       .then(data => setChatGroups(data));

//     fetch('/api/connections')
//       .then(res => res.json())
//       .then(data => setConnections(data));

//     fetch('/api/articles')
//       .then(res => res.json())
//       .then(data => setArticles(data));

//     fetch('/api/events')
//       .then(res => res.json())
//       .then(data => setEvents(data));
//   }, []);

  return (
    <div>
      <header>
        <h1>Logo Here</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
        <div className="notifications">
          <h2>Notifications</h2>
          <ul>
            <li>Post: Hey Guys</li>
            {/* Add more notifications here */}
          </ul>
        </div>
      </header>

      <main>
        <section>
          <h2>Recommended Chat Groups</h2>
          <ul>
            {chatGroups.map(group => (
              <li key={group.id}>
                <a href={group.link}>{group.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Recommended Connections</h2>
          <ul>
            {connections.map(connection => (
              <li key={connection.id}>
                <a href={connection.link}>{connection.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Recommended Articles</h2>
          <ul>
            {articles.map(article => (
              <li key={article.id}>
                <a href={article.link}>{article.title}</a>
              </li>
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
                <p>Type: {event.type}</p>
                <a href={event.link}>Discover More</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default Landing;