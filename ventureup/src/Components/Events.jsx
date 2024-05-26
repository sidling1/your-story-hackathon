import React, { useState } from 'react'

const Event = ({event})=>{
  return(
    <div>
      <div>Date : {event.date}</div>
      <div>Title : {event.title} </div>
      <div>Type : {event.type}</div>
    </div>
  )
}

export default function Events() {

  const [events, setEvents] = useState([{id: 0,date: new Date().getDate(), title: "Hackit Hackathon", type: "Hackathon" },{id: 1, date: new Date().getDate(), title: "Hackit Hackathon", type: "Hackathon" }]);

  return (
    <div>
      {events.map((val,index)=>{
        return(<Event event={val} key={val.id}/>)
      })}
    </div>
  )
}
