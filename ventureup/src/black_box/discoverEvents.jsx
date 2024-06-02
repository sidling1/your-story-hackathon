import React, { useState } from 'react';
import './dicoverEvents.css';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', venue: '' });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', date: '', time: '', venue: '' });
  };

  const handleShareEvent = (event) => {
    // implement sharing logic here
    console.log(`Sharing event: ${event.title}`);
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Event</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.venue}</td>
              <td>{event.title}</td>
              <td>
                <button onClick={() => handleShareEvent(event)}>Share</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>
          Title:
          <input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        </label>
        <label>
          Date:
          <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
        </label>
        <label>
          Time:
          <input type="time" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />
        </label>
        <label>
          Venue:
          <input type="text" value={newEvent.venue} onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })} />
        </label>
        <button onClick={handleAddEvent}>Add Event</button>
      </form>
    </div>
  );
};

export default EventCalendar;